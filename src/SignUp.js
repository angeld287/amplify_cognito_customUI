import React, { Component } from "react";

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { Auth } from "aws-amplify";
const styles = {
  continer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    width: "100%",
    padding: "12px 20px",
    margin: "8px 0",
    display: "inline-block",
    border: "1px solid #ccc",
    borderRadius: "4px",
    boxSizing: "border-box"
  },
  submit: {
    width: "100%",
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "14px 20px",
    margin: "8px 0",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer"
  }
};

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value
});

const INITIAL_STATE = {
  email: "",
  password: "",
  username: "",
  phone_number: "",
  open: false,
  error: null
};

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleConfirmCode = () => {
    const { username, code } = this.state;

    Auth.confirmSignUp(username, code, {
        // Optional. Force user confirmation irrespective of existing alias. By default set to True.
        forceAliasCreation: true    
    }).then(data => {
      console.log(data)
      this.setState({ open: false })
      this.changeState("signIn")
    })
    .catch(err => console.log(err));
  };

  changeState(type, event) {
    const { changeAuthState } = this.props;
    changeAuthState(type, event);
  }

  handleResendCode = () => {
    const { username } = this.state;

    Auth.resendSignUp(username).then(() => {
        console.log('code resent successfully');
    }).catch(e => {
        console.log(e);
    });
  };

  onSubmit = event => {
    const { username, email, password, phone_number } = this.state;

    Auth.signUp({
        username,
        password,
        attributes: {
            email,          // optional
            phone_number,   // optional - E.164 number convention daniel_1234@hotmail.es   +18292130970
            // other custom attributes 
        },
        //validationData: []  //optional
        })
        .then(data => {
          console.log(data)
          this.handleClickOpen()
        })
        .catch(err => console.log(err));
    
    // After retrieveing the confirmation code from the user
   /*  Auth.confirmSignUp(username, code, {
        // Optional. Force user confirmation irrespective of existing alias. By default set to True.
        forceAliasCreation: true    
    }).then(data => console.log(data))
      .catch(err => console.log(err));
    
    Auth.resendSignUp(username).then(() => {
        console.log('code resent successfully');
    }).catch(e => {
        console.log(e);
    }); */

    event.preventDefault();
  };

  render() {
    const { email, password, phone_number, username, code, error } = this.state;

    const isInvalid = password === "" || email === "";

    return (
      <div>
        <div style={styles.continer}>
          <h1>SignIn</h1>
          <form onSubmit={this.onSubmit}>
            <input
              style={styles.input}
              value={email}
              onChange={event =>
                this.setState(updateByPropertyName("email", event.target.value))
              }
              type="text"
              placeholder="Email Address"
            />
            <input
              style={styles.input}
              value={password}
              onChange={event =>
                this.setState(
                  updateByPropertyName("password", event.target.value)
                )
              }
              type="password"
              placeholder="Password"
            />
            <input
              style={styles.input}
              value={username}
              onChange={event =>
                this.setState(updateByPropertyName("username", event.target.value))
              }
              type="text"
              placeholder="User Name"
            />
            <input
              style={styles.input}
              value={phone_number}
              onChange={event =>
                this.setState(updateByPropertyName("phone_number", event.target.value))
              }
              type="text"
              placeholder="Phone Number"
            />
            <button style={styles.submit} disabled={isInvalid} type="submit">
              Create Account
            </button>

            {error && <p>{error.message}</p>}
          </form>
          <div>
            <p> Have account? </p>
            <button
              style={styles.submit}
              onClick={() => this.changeState("signIn")}
            >
              signIn
            </button>
          </div>
        </div>


        <div>
          {/* <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
            Open form dialog
          </Button> */}
          <Dialog
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Email Confirmation</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Type the code received in your email.
              </DialogContentText>
              <TextField
                /* style={styles.input} */
                value={code}
                onChange={event =>
                  this.setState(updateByPropertyName("code", event.target.value))
                }
                type="text"
                placeholder="Confirmation Code"
                autoFocus
                margin="dense"
                id="name"
                /* label="Email Address"
                type="email" */
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleConfirmCode} color="primary">
                Comfirm
              </Button>
              <Button onClick={this.handleResendCode} color="primary">
                Resend code
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </div>
    );
  }
}

export default SignIn;
