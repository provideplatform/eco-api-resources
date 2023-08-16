# Carbon Retirement with Carbonmark - Postman walkthrough

### Pre-requisites

Create an account on [https://shuttle.provide.services.](https://shuttle.provide.services.)

Check out a video on how to do this here. Review step by step instructions [here](../auth/eco-api-shuttle-onboarding.md).

Maintain the ```shuttle_email``` and ```shuttle_password``` collection variables for the account you set up in Shuttle accordingly in Postman.

### API Flow

For first time setup - Execute each API request in the following order

1. **Setup**
    1. Authorize Access Token via Basic Auth
    2. List organizations
    3. Generate long-dated token
    4. Get access token from refresh token
    5. List Vaults
    6. Get Vault wallet details
2. **Generate Retirement Transaction Parameters. Choose a request type that best fits your requirement**
    1. Retire By Specific Carbon Project
    2. Retire By Given Dollar Amount
    3. General Retirement
3. **Sign transaction with Vault**
4. **Broadcast retirement transaction**

The additional collection variables needed for subsequenct calls will be populated as you successfully complete each HTTP request.

Once the "setup" requests are completed once - you can simply execute you "get access token from refresh token" then reiterate steps 2-4. Note the usage of the long-dated refresh token to generate access tokens as a API authentication technique.

Upon completion of the final request - go to the link specified in the eco_cert_href collection variable.

It should be a link like this:

[https://www.carbonmark.com/en/retirements/0x1480320Db0aa1Bbef15f847981E28776E7D2c442/33](https://www.carbonmark.com/en/retirements/0x1480320Db0aa1Bbef15f847981E28776E7D2c442/33)


### Variable Customization

This scenario defaults to using USDC to retire Toucan BCT on KlimaDAO/Polygon

You can try retiring from other carbon pools by changing the eco_pool_token variable to one of the following carbon offset tokens on Polygon

| **Token** | **Address** | **Project Token** |
| --- | --- | --- |
| Toucan BCT (Base Carbon Tonne) | 0x2f800db0fdb5223b3c3f354886d907a671414a7f | | See addresses listed [https://carbon.klimadao.finance/bct](https://carbon.klimadao.finance/bct) |
| Toucan NCT (Nature-based Carbon Tonne) | 0xD838290e877E0188a4A44700463419ED96c16107 | See addresses listed [https://carbon.klimadao.finance/nct](https://carbon.klimadao.finance/nct) |
| Moss MCO2 | 0x3aF556B48469D2398AB7BE1563a0cfd80ea4aC84 |  See addresses listed [https://carbon.klimadao.finance/nbo](https://carbon.klimadao.finance/nbo) |
| C3 UBO (Universal Base Offset) | 0x2b3ecb0991af0498ece9135bcd04013d7993110c | See addresses listed [https://carbon.klimadao.finance/](https://carbon.klimadao.finance/ubo) |
| C3 NBO (Nature Base Offset) | 0x6bca3b77c1909ce1a4ba1a20d1103bde8d222e48 | See addresses listed [https://carbon.klimadao.finance/nbo](https://carbon.klimadao.finance/nbo) |

### Additional capabilities

#### Carbonmark marketplace search

#### Retirement message encryption, RSA verification, zero knowledge proofs

Important consideration : the retirement message you include is visible to everyone and is also <i>immutable</i> meaning it can't be deleted or modified later. But can also still be very useful for integrating your public carbon accounting and scope 3 emissions verifications when used correctly.

Thankfully - the Provide platform includes additional details for protecting the privacy of your data. You can easily try encrypting your retirement message or use RSA digital signatures to prove/verify the data in the retirement message (or anything else too!).

As

### Troubleshooting tips

- By default - the refresh token has an expiration every 30 days. Plan to rotate API keys accordingly!
- Use jwt.io to inspect refresh and access tokens (e.g. variables begin like ey1930...) for any authorization / authentication errors
- Make sure the permissions attribute is set to 510 when generating the refresh token. If 0 or something else, double check the organization id and user id combination
- For any authorization errors, check the access token in the authorization tab
- Postman can goof up environment / collection variables. Make sure correct values are populated
- Unable to sign the transaction? Your user may be missing the secp256k1 key. Try creating a new Shuttle user (especially if your shuttle account is old!)