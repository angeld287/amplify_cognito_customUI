// eslint-disable-next-line
import React from 'react';
import { Switch, Route } from 'react-router-dom';
/* import App from '../App'; */

import SignUp from './SignUp';
import SignIn from './SignIn';
import Home from './home';
import SecureApp from './SecureApp';

const Main = () => (
  <Switch>
    <Route exact path="/signupempresa" component={SignUp} />
    <Route exact path="/signin" component={SignIn} />
    <Route exact path="/home" component={Home} />
    <Route exact path="/secureapp" component={SecureApp} />
  </Switch>
)

export default Main;