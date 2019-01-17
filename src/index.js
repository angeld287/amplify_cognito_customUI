import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// amplify config
import Amplify from "aws-amplify";
import * as aws_amplify_react from "aws-amplify-react";
import amplifyCustomUi from "aws-amplify-react-custom-ui";
import { BrowserRouter } from 'react-router-dom';
//TODO : PLEASE PROVIDE THE aws-exports file :)
//import awsconfig from "./aws-exports";
Amplify.configure({
    Auth: {
        region: 'us-east-1',
        identityPoolRegion: 'us-east-1',
        userPoolId: 'us-east-1_TjXHaPuvU',
        userPoolWebClientId: 'pv7lcbb0sv0s5fcjiahrahef1',
        mandatorySignIn: false,
    }
  });

amplifyCustomUi.configure(aws_amplify_react);

ReactDOM.render(
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    , document.getElementById("root"));
