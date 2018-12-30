# amplify_cognito_customUI

## Install

```bash
git clone https://github.com/angeld287/amplify_cognito_customUI
cd amplify_cognito_customUI
yarn
yarn start
```

in the file src/index.js you need configure your cognito user pool

```jsx
/* Amplify.configure({
    Auth: {

        // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
        //identityPoolId: 'XX-XXXX-X:XXXXXXXX-XXXX-1234-abcd-1234567890ab',
        
        // REQUIRED - Amazon Cognito Region
        region: 'us-east-2',

        // OPTIONAL - Amazon Cognito Federated Identity Pool Region 
        // Required only if it's different from Amazon Cognito Region
        identityPoolRegion: 'us-east-2',

        // OPTIONAL - Amazon Cognito User Pool ID
        userPoolId: 'us-east-1_TjXHaPuwU',

        // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
        userPoolWebClientId: 'pv7lcbb0sv0s5fcjiwhrahef1',

        // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
        mandatorySignIn: false,

        /* // OPTIONAL - Configuration for cookie storage
        cookieStorage: {
        // REQUIRED - Cookie domain (only required if cookieStorage is provided)
            domain: '.yourdomain.com',
        // OPTIONAL - Cookie path
            path: '/',
        // OPTIONAL - Cookie expiration in days
            expires: 365,
        // OPTIONAL - Cookie secure flag
            secure: true
        },

        // OPTIONAL - customized storage object
        storage: new MyStorage(),
        
        // OPTIONAL - Manually set the authentication flow type. Default is 'USER_SRP_AUTH'
        authenticationFlowType: 'USER_PASSWORD_AUTH' 
    }
}); */
```

## Usage

Code Example for usign aws-amplify-react-custom-ui lib with custom login signUp and confirm code. This example was developed from the code of ysfmag.

## Online

https://stackblitz.com/github/ysfmag/aws-amplify-react-custom-ui-example
