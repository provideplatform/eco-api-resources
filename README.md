# Provide ECO API Resource Hub

## About

The Provide ECO API simplifies and accelerates the way in which companies integrate sustainability into their applications and core business processes. This repo outlines resources to assist in your use of the ECO API for acquiring/retiring carbon offsets and verifying scope 3 carbon emissions data through digital proofs

## Getting Started

### Set up your API credentials (Pre req)

Use Provide Ident decentralized id and Provide Vault wallet-as-a-service to create a simple to use API credentials for your ECO API integrations

Several methods to set your credentials are avaiable

| Sign up method | Link |
| -------------- | ---- |
| Carbonmark     | Coming soon |
| Postman | [Click Here](./postman/README.md) |
| Shuttle | [Click Here](./auth/eco-api-shuttle-onboarding.md) |
| PRVD CLI | Coming soon |


### Execute an on-demand carbon retirement on Carbonmark, Polygon Network via Postman

Ready to start retiring carbon on-demand? After creating your API credentials - you can complete your first carbon retirement through the ECO API Postman starter kit. 

Download and try the Provide ECO API Postman Starter Kit - Carbon Retirement with Carbonmark [here](./postman/Carbonmark%20API%20-%20Carbon%20Retirement%20with%20Carbonmark%20and%20Provide%20Payments.postman_collection.json)

### Execute an on-demand carbon retirement on Carbonmark, Polygon Network via Node.js

Looking for a code sample to bootstrap your integration? Check out the [Node.js sample script](./sample_apps/node-js-sample-script/offsetcarbon.js)

### Verify carbon emissions with digital proofs

Explore how Provide Shuttle can help you create powerfully precise and privacy preserving carbon emissions through the power of zero-knowledge cryptography. Learn more about how this technique can help verify scope 3 emissions anywhere while protecting business data. More details soon!

### Other
- SAP Demo apps are documented [here](./sample_apps/sap/sapreadme.md)
- Integration to the Celo blockchain is currently in preview. Check out the [Postman collection](./postman/celo/ECO%20API%20Collection%20-%20Celo.postman_collection.json) and [sample Node.js script](./sample_apps/node-js-sample-script/offsetcarbon_celo.js)

## Repo structure

This repo contains several directories for your support
- auth : Explains the ECO API authentication including usage of access tokens, api keys, digital wallets, and decentralized identity (DIDs)
- postman : Provides an easy to use Postman collection to introduce the ECO API
- api_spec : OpenAPI / Swagger docs for the ECO API for kickstarting your integration
- sample_apps : Gallery of open source applications that use the ECO API
- billing_setup : Documents some high-level details on how / where billing occurs for the Provide ECO API

## API availability, commercial support

The ECO API is presently in the works to be listed with several leading API/integration providers and other leading sustainability technology platforms. Stay tuned for more details!

We welcome 3rd parties to both host and integrate the ECO API! To learn more about the opportunity or inquire on other matters of commercial support or partnership, send an email to hello@provide.services with the subject line "ECO API Integration"