import React, { Component } from "react";
import socialMediaAuth from "../../auth/auth";
import { googleProvider, githubProvider } from "../../config/authMethods";

// CSS Style
import "../styles/Login.css";

class Login extends Component {
// Form fields data state
state = {
    fields: {},
    errors: {},
    errorsImg: "",
    buttonTxt: "Log In",
  };

  // Handle validation function binding form fields state
  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let errorsImg = {};
    let formIsValid = true;

    // username validation
    if (!fields["username"]){
        formIsValid = false;
        errorsImg["username"] = "errors";
        errors["username"] = "username cannot be empty"
    };

    // password validation
    if (!fields["password"]){
        formIsValid = false;
        errorsImg["password"] = "errors";
        errors["password"] = "Password cannot be empty"
    };


    this.setState({ errors: errors, formIsValid: formIsValid, errorsImg: errorsImg});

    formIsValid && this.setState({ errorsImg: {}});
    return formIsValid;
  }

  handleChange(field, e) {
    let fields = this.state.fields;
    fields[field] = e.target.value;
    this.setState({ fields });
  }


  // Handle form submit
  contactSubmit(e) {
    e.preventDefault();
   
    if (this.handleValidation()) {
      this.setState({ buttonTxt: "Click to Begin", hasError: false});
    } else {
      this.setState({ buttonTxt: "Register", hasError: true });
    }
  }

  handleAuthentication(){
    let fields = this.state.fields;
    let formIsValid = true;

    return formIsValid;
  }

  
  render() {
    const mediaAuth = async (provider) => {
        const res = await socialMediaAuth(provider);
        console.log(res);
    };
   
    const Label = ({name = '', placeholder = ''}) => {
      return <label htmlFor={name}>
        <input
          type="text"
          name={name}
          placeholder={placeholder}
          className={this.state.errorsImg[name]}
          value={this.state.fields[name]}
          onChange={this.handleChange.bind(this, name)}
        />
        <p className="errors-txt">
          {this.state.errors[name]}
        </p>
    </label>
    }

    return (
      <div className="Login">
        <div className="container">
          <div className="login-txt">
            <h1>Share Your Work <br /> in numbers</h1>
            <p>Get your working graph reminders for coding contests.</p>
            <p>Share your work among your peers.</p>
          </div>
          <div>
            <div className="form-header">
              <p>Try it today <span>admire it later</span></p>
            </div>
            <div class="signup">
            <p>If you are not registered, <span id="signup"><a href="/signup">Sign Up here.</a></span></p>
            
            </div>
            <div className="form-wrapper">
              <form className="form-group" onSubmit={this.contactSubmit.bind(this)}>
                {Label({name:"username", placeholder:"Username"})}
                {Label({name:"password", placeholder:"Password"})}

                <button type="submit" name="submit" className={this.state.hasError ? "errors-btn" : ""} >
                  {this.state.buttonTxt}
                </button>
              </form>  
              
                <div class="other-signIn-options-text">
                    <p>-Or Sign In With-</p>
                </div>

                <div class="auth-btn">
                    <button onClick = {() => mediaAuth(googleProvider)}><img src="/google_logo.png"></img> Google</button>
                    
                    <button onClick = {() => mediaAuth(githubProvider)}><img src="/github_logo.png"></img> <span>Github</span></button>
                </div>

             
              <p className="terms-txt">
                By clicking the button, you are agreeing to our <span>Terms and Services</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Login;