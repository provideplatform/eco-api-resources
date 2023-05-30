# Why DIDs?

The DID-based approach enhances security as well as long-term portability of the API and underlying data between enterprise and decentralized applications.

Normally API keys are standalone key pairs. No additional authorization/authentication is required and the API keys are specific to the API at hand. DIDs assert that the API call is completed by a specific user having additional credentials to their identity than just the API keys. This improves traceability, while also maintaining pseudoanonymity as and where needed.

In API integrations with DIDs, such as with ECO - the DID is used to generate long-dated refresh tokens and temporary access tokens as signed JWTs. Microservices like Provide Vault, Nchain, and Axiom leverage this authentication scheme to pair authentication of enterprise systems to digital wallets and other advanced cryptography tools. Use of the refresh and access tokens within applications can be enforced by that application's local security policies (ex: PFCG role assignment in SAP).

As the DID is used across more applications - greater composability between services are achieved and fragmentation of integration is mitigated. Integrations with the DID remain secure to the user - who can revoke refresh and access tokens where needed at anytime.

You can read more about DIDs here: https://www.w3.org/TR/did-core/
And for more details on use of the DIDs in enterprise blockchain applications, check out the [Provide Technologies US Patent](https://patents.google.com/patent/US20220141019A1/en)