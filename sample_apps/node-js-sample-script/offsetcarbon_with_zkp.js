import { Ident } from "provide-js";
import { Vault } from "provide-js";
import { Axiom } from "provide-js";
import { readFile } from "fs/promises";


console.log("begin carbon offset");

//*******************// 
// PRVD CONNECTIVITY //
//*******************//

//load the refresh token from app
let user_params = JSON.parse(await readFile("./env/prvduser.json", "utf8"));
var REFRESH_TOKEN = user_params.refresh_token;
var ORG_ID = user_params.organization_id;
var USER_ID = user_params.user_id;

var access_token_request = {};
access_token_request.organization_id = ORG_ID;
access_token_request.user_id = USER_ID;

//get the access token
const IDENT_PROXY = new Ident(REFRESH_TOKEN);
const ACCESS_TOKEN = await IDENT_PROXY.createToken(access_token_request);
//console.log('access token generated:' + ACCESS_TOKEN.accessToken)

//get the vault
const VAULT_PROXY = new Vault(ACCESS_TOKEN.accessToken);

const ECO_VAULTS = await VAULT_PROXY.fetchVaults();

var ECO_VAULT_ID = ECO_VAULTS.results[0].id;

//get the key ids ~ no private keys exposed!!
const ECO_VAULT_KEY_IDS = await VAULT_PROXY.fetchVaultKeys(ECO_VAULT_ID);

var ECO_WALLET = ECO_VAULT_KEY_IDS.results.filter(vaultkeys => vaultkeys.spec === "secp256k1");
const ECO_KEY_ID = ECO_WALLET[0].id;
const ECO_WALLET_ADDRESS = ECO_WALLET[0].address;

//*******************// 
// RETIRE CARBON     //
//*******************//

var SOURCE_TOKEN = "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"; //Polygon USDC
var POOL_TOKEN = "0x2f800db0fdb5223b3c3f354886d907a671414a7f"; //Toucan Protocol BCT - Polygon

// specific retirements
//var PROJECT_TOKEN = "0x04943c19896c776c78770429ec02c5384ee78292";

// setup the retirement request

var RETIREMENT_REQUEST_PARAMS = {};
RETIREMENT_REQUEST_PARAMS.network_id = "2fd61fde-5031-41f1-86b8-8a72e2945ead"; //PRVD stack chain id for Polygon
RETIREMENT_REQUEST_PARAMS.description = "Provide ECO - retirement via NodeJs script";                
RETIREMENT_REQUEST_PARAMS.value = 0.1234; //Amount of carbon you wish to retire
RETIREMENT_REQUEST_PARAMS.source_token_contract_address  = SOURCE_TOKEN;
RETIREMENT_REQUEST_PARAMS.pool_token_contract_address  = POOL_TOKEN;
RETIREMENT_REQUEST_PARAMS.beneficiary_address  = ECO_WALLET_ADDRESS;
RETIREMENT_REQUEST_PARAMS.beneficiary_name  = "Provide ECO Test User";
RETIREMENT_REQUEST_PARAMS.retirement_message  = "Provide ECO API - Node.js batch script example";

var bearertoken = 'Bearer '+ACCESS_TOKEN.accessToken;
const RETIREMENT_REQUEST = await fetch("https://api.providepayments.com/api/v1/eco/retire_carbon_requests", {
        method: "POST",
        headers: {'Authorization': bearertoken, 'Content-type': 'application/json'},
        body: JSON.stringify(RETIREMENT_REQUEST_PARAMS),
}); 

const RETIREMENT_REQ_DATA_RESP = await RETIREMENT_REQUEST.json();

const HASHED_MESSAGE = RETIREMENT_REQ_DATA_RESP.hashed_data;

// sign the transaction
const SIGNED_TXN = await VAULT_PROXY.signMessage(ECO_VAULT_ID, ECO_KEY_ID, HASHED_MESSAGE);

// broadcast the transaction
var RETIREMENT_BROADCAST_PARAMS = {};
RETIREMENT_BROADCAST_PARAMS.data = RETIREMENT_REQ_DATA_RESP.data;
RETIREMENT_BROADCAST_PARAMS.request_id = RETIREMENT_REQ_DATA_RESP.id;
RETIREMENT_BROADCAST_PARAMS.signature = SIGNED_TXN.signature;
RETIREMENT_BROADCAST_PARAMS.signer = ECO_WALLET_ADDRESS;
console.log(JSON.stringify(RETIREMENT_REQUEST_PARAMS));

var retirement_req_url = 'https://api.providepayments.com/api/v1/eco/retire_carbon_requests/' + RETIREMENT_REQ_DATA_RESP.id + '/retire';
console.log(retirement_req_url);
const RETIREMENT_BROADCAST = await fetch(retirement_req_url, {
        method: "POST",
        headers: {'Authorization': bearertoken, 'Content-type': 'application/json'},
        body: JSON.stringify(RETIREMENT_BROADCAST_PARAMS),
}); 

const RETIREMENT_BROADCAST_RESP = await RETIREMENT_BROADCAST.json();
console.log(RETIREMENT_BROADCAST_RESP);

console.log("end carbon offset");

//*******************// 
// ZK PROOF          //
//*******************//

var AXIOM_WORKGROUP = user_params.workgroup_id;
var AXIOM_SUBJECTACCT = user_params.subject_account_id;

// do the proof of emissions offset - if specified
if(AXIOM_WORKGROUP === "" && AXIOM_SUBJECTACCT === "") {
        console.log("Optional: add workgroup_id and subject account id for emissions data proof");
} else {
        console.log("begin proof of atomic emissions offset");
        var AXIOM_PROXY = new Axiom(ACCESS_TOKEN.accessToken);

        var ATOMIC_OFFSET_DATA= {};
        ATOMIC_OFFSET_DATA.offset_co2_amount = 0.1234;
        ATOMIC_OFFSET_DATA.offset_co2_uom = "MT";
        ATOMIC_OFFSET_DATA.offset_co2_txnhash = RETIREMENT_BROADCAST_RESP.certificate_href;
        ATOMIC_OFFSET_DATA.offset_co2_networkid = RETIREMENT_BROADCAST_RESP.network_id;
        ATOMIC_OFFSET_DATA.emissions_co2_amount = 0.1234;
        ATOMIC_OFFSET_DATA.emissions_co2_uom = "MT";
        ATOMIC_OFFSET_DATA.emissions_co2_id = "450000000010";
        ATOMIC_OFFSET_DATA.emissions_co2_objtyp = "DummyPurchaseOrder";
        ATOMIC_OFFSET_DATA.emissions_co2_objsrc = "DummyERP";
        ATOMIC_OFFSET_DATA.offset_co2_id = RETIREMENT_BROADCAST_RESP.id;
        ATOMIC_OFFSET_DATA.aeo_id = RETIREMENT_BROADCAST_RESP.id + "|" + ATOMIC_OFFSET_DATA.emissions_co2_id + "|" + ATOMIC_OFFSET_DATA.emissions_co2_objtyp + "|" + ATOMIC_OFFSET_DATA.emissions_co2_objsrc;
        
        console.log("Carbon emissions and offset to be used:");
        console.log(ATOMIC_OFFSET_DATA);

        var AXIOM_PROTOCOL_MSG = {};
        AXIOM_PROTOCOL_MSG.id = ATOMIC_OFFSET_DATA.aeo_id;
        AXIOM_PROTOCOL_MSG.type = "AtomicEmissionsOffset"; //use the name of the domain model of the Shuttle workflow
        AXIOM_PROTOCOL_MSG.subject_account_id = AXIOM_SUBJECTACCT;
        AXIOM_PROTOCOL_MSG.workgroup_id = AXIOM_WORKGROUP;
        AXIOM_PROTOCOL_MSG.payload = ATOMIC_OFFSET_DATA;
        
        const ATOMIC_OFFSET_PROOF = await AXIOM_PROXY.sendProtocolMessage(AXIOM_PROTOCOL_MSG);
        console.log("Atomic Offset ZK proof: " );
        console.log(ATOMIC_OFFSET_PROOF);
        console.log("end proof of atomic emissions offset");
}



