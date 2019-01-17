import React, { Component } from "react";
import SignIn from "./SignIn";
import { Link } from 'react-router-dom';

const styes = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  button: { width: "200px", height: "60px", backgroundColor: "red" }
};
class Home extends Component {
  render() {
    return (
      <div style={styes.container}>
        <h1> hello world </h1>
        <Link to="/signin">
            <button>
                <span>Login</span>
            </button>
        </Link>
      </div>
    );
  }
}

export default Home;
