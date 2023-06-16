# ECO API Starter - Carbon Retirement with KlimaDAO

### Pre-requisites

Create an account on [https://shuttle.provide.services.](https://shuttle.provide.services.)

Check out a video on how to do this here. Review step by step instructions here.

Maintain the shuttle_email and shuttle_password collection variables for the account you set up in Shuttle accordingly

Maintain the PRVD user id (eco_user_id) and PRVD organization variables (eco_organizationid). You can discover these while selecting your organization in Shuttle with the developer tools open.

<img src="https://content.pstmn.io/faf265e8-c9e9-43ef-9542-6abc0c500eb5/aW1hZ2UucG5n" width="1920" height="510">

You can also get the organization id from the list organizations endpoint

### API Flow

Execute each API request in the following order

1. Get DID from Basic Auth
2. List organizations
3. Generate long-dated token
4. Get Access token
5. List Vaults
6. Get Vault wallet details
7. Generate Retirement Transaction Parameters
8. Sign transaction with Vault
9. Broadcast retirement transactions
    

The additional collection variables needed will be populated as you successfully complete each HTTP request

Upon completion of the final request - go to the link specified in the eco_cert_href collection variable.

It should be a link like this:

[https://klimadao.finance/en/retirements/0x9ba09b7F79ccE9D45026DD02851dFaC948515b07/2](https://klimadao.finance/en/retirements/0x9ba09b7F79ccE9D45026DD02851dFaC948515b07/2)


### Variable Customization

This scenario defaults to using USDC to retire Toucan BCT on KlimaDAO/Polygon

You can try retiring from other carbon pools by changing the eco_pool_token variable to one of the following carbon offset tokens on Polygon

| **Token** | **Address** |
| --- | --- |
| Toucan BCT (Base Carbon Tonne) | 0x2f800db0fdb5223b3c3f354886d907a671414a7f |
| Toucan NCT (Nature-based Carbon Tonne) | 0xD838290e877E0188a4A44700463419ED96c16107 |
| Moss MCO2 | 0x3aF556B48469D2398AB7BE1563a0cfd80ea4aC84 |
| C3 UBO (Universal Base Offset) | See addresses listed [https://carbon.klimadao.finance/](https://carbon.klimadao.finance/nbo)ubo |
| C3 NBO (Nature Base Offset) | See addresses listed [https://carbon.klimadao.finance/nbo](https://carbon.klimadao.finance/nboTroubleshooting) |

### Troubleshooting tips

- Use jwt.io to inspect refresh and access tokens (e.g. variables begin like ey1930...) for any authorization / authentication errors
- Make sure the permissions attribute is set to 510 when generating the refresh token. If 0 or something else, double check the organization id and user id combination
- For any authorization errors, check the access token in the authorization tab
- Postman can goof up environment / collection variables. Make sure correct values are populated
- Unable to sign the transaction? Your user may be missing the secp256k1 key. Try creating a new Shuttle user (especially if your shuttle account is old!)