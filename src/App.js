import React, { Component } from "react";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import amplifyCustomUi from "aws-amplify-react-custom-ui";
import SecureApp from "./SecureApp";

class App extends Component {
  componentWillMount() {
    amplifyCustomUi.setSignIn(SignIn);
    amplifyCustomUi.setSignUp(SignUp);
  }

  render() {
    return <SecureApp />;
  }
}

export default App;
