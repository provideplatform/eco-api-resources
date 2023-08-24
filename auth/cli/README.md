# Create Provide ECO credentials via Provide CLI

## Pre-requisites
Install the [PRVD CLI](https://github.com/provideplatform/provide-cli) and Golang.

## Credentials creation

1. Create the user

```prvd users init```

Enter user first name, last name, email, password as prompted

2. Login as the created user

```prvd authenticate```

Enter the email/password from step 1

3. Create the organization

```prvd organizations init``

Enter a name for the organization. Note the organization id given.

4. Create organization vault

```prvd vaults init```

5. Create the vault keys

Create the key for the Polygon Matic wallet address to be used for carbon retirements
```prvd vaults keys init --organization <<your organization id here>> --name my polygon wallet --spec secp256k1 --description my polygon wallet --usage sign/verify --type asymmetric --application ```

Create the remaining keys needed for Provide customer operations support

6. Generate the refresh token

7. Do a retirement via Curl