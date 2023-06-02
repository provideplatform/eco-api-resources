import { Ident } from "provide-js";
import { Vault } from "provide-js";
import { Axiom } from "provide-js";
import { readFile } from "fs/promises";
import { Axios } from "axios";

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

const ECO_CARBONRETIRE_API_PROXY = new Axios({
    baseURL: 'https://api.providepayments.com',
    timeout: 2000,
});

const RETIREMENT_REQUEST = await ECO_CARBONRETIRE_API_PROXY.post('/api/v1/eco/retire_carbon_requests',RETIREMENT_REQUEST_PARAMS, {'Authorization': bearertoken, 'Content-type': 'application/json'});

//const RETIREMENT_REQUEST = await axios.post('https://api.providepayments.com/api/v1/eco/retire_carbon_request', RETIREMENT_REQUEST_PARAMS,  {'Authorization': bearertoken, 'Content-type': 'application/json'});
console.log(RETIREMENT_REQUEST);

const HASHED_MESSAGE = RETIREMENT_REQUEST.hashed_data;

// sign the transaction
const SIGNED_TXN = await VAULT_PROXY.signMessage(ECO_VAULT_ID, ECO_KEY_ID, HASHED_MESSAGE);

// broadcast the transaction

var RETIREMENT_BROADCAST = {};
RETIREMENT_BROADCAST.data = RETIREMENT_REQUEST.data;
RETIREMENT_BROADCAST.request_id = RETIREMENT_REQUEST.retirementreqid;
RETIREMENT_BROADCAST.signature = SIGNED_TXN.signature;
RETIREMENT_BROADCAST.signer = ECO_WALLET_ADDRESS;

var retirement_req_url = '/api/v1/eco/retire_carbon_requests/' + RETIREMENT_REQUEST.retirementreqid + '/retire';

const COMPLETED_RETIREMENT = await ECO_CARBONRETIRE_API_PROXY.post(retirement_req_url, RETIREMENT_BROADCAST);

console.log(COMPLETED_RETIREMENT);



//*******************// 
// ZK PROOF          //
//*******************//
//var AXIOM_WORKGROUP = "";
//var AXIOM_SUBJECTACCT = "";
//var AXIOM_PROXY = new Axiom(ACCESS_TOKEN.accessToken);

//var EMISSIONS_DATA;
//EMISSIONS_DATA.emission_id = "";
//EMISSIONS_DATA.co2_amount = 0.1234;
//EMISSIONS_DATA.co2_uom = "MT";

//var AXIOM_PROTOCOL_MSG;
//AXIOM_PROTOCOL_MSG.id = "";
//AXIOM_PROTOCOL_MSG.AtomicOffset = "";
//AXIOM_PROTOCOL_MSG.subject_account_id = "";
//AXIOM_PROTOCOL_MSG.workgroup_id = "";
//AXIOM_PROTOCOL_MSG.payload = EMISSIONS_DATA;

//const EMISSIONS_OFFSET_PROOF = AXIOM_PROXY.sendProtocolMessage(AXIOM_PROTOCOL_MSG);

//console.log("end carbon offset");