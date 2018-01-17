# puppeteer-okta
Example of sign in Okta with Google Authenticator by using puppeteer. Useful for automated tests.

> Want to try selenium?
Check out another repository: https://github.com/zhangyuan/selenium-okta

## Prerequisites

Google Authenticated must be enabled and the shared secret key would be used to generate the multi factor authentication code.

## How to run

### Setup the environment

```
npm install
```

### Set environment variables

```
export OKTA_URL=YOUR_OKTA_LOGIN_PAGE_URL 
export SHARED_SECRET_KEY=SHARED_SECRET_KEY 
export OKTA_USERNAME=YOUR_USERNAME 
export OKTA_PASSWORD=YOUR_PASSWORD
```

### Run the script

```
npm run main
```
