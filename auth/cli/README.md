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

RSA
```prvd vaults keys init --organization <<your organization id here>> --name my rsa key --spec secp256k1 --description my rsa key --usage sign/verify --type asymmetric --application ```

AES
```prvd vaults keys init --organization <<your organization id here>> --name my aes encryption key --spec secp256k1 --description my aes encryption key --usage sign/verify --type asymmetric --application ```

BabyJubJub
```prvd vaults keys init --organization <<your organization id here>> --name my bjj zk key --spec secp256k1 --description my bjj zk key --usage sign/verify --type asymmetric --application ``

6. Generate the refresh token and save it to a text file locally

```prvd api_tokens init --organization <<your organization id here>> --offline-access > myrefreshtoken.txt```

7. Do a carbon retirement from the staging pool via Curl

todo