import React, { Component } from "react";

// CSS Style
import "../styles/SignUp.css";

class Signup extends Component {
  // Form fields data state
  state = {
    fields: {},
    errors: {},
    errorsImg: "",
    buttonTxt: "Register",
  };

  // Handle validation function binding form fields state
  handleValidation() {
    let fields = this.state.fields;
    let errors = {};
    let errorsImg = {};
    let formIsValid = true;

    // firstname validation
    if (!fields["firstname"]) {
      formIsValid = false;
      this.setState({ errorsImg: "errors"});
      errors["firstname"] = "Firstname cannot be empty";
    }
    if (typeof fields["firstname"] !== "undefined") {
      if (!fields["firstname"].match(/^[a-zA-Z]+$/)) {
        formIsValid = false;
        errors["firstname"] = "only letters";
      }
    }

    // lastname validation
    if (!fields["lastname"]){
        formIsValid = false;
        errors["lastname"] = "Lastname cannot be empty"
    };

    // password validation
    if (!fields["password"]){
        formIsValid = false;
        errors["password"] = "Password cannot be empty"
    };

    // Email validation
    if (!fields["email"]) {
      formIsValid = false;
      errors["email"] = "Looks like this not an email";
    }
  

    this.setState({ errors: errors, formIsValid: formIsValid});

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
      this.setState({ buttonTxt: "Form has errors", hasError: true });
    }
  }
 
  render() {
    const Label = ({name = '', placeholder = ''}) => {
      return <label htmlFor={name}>
        <input
          type="text"
          name={name}
          placeholder={placeholder}
          className={this.state.errorsImg}
          value={this.state.fields[name]}
          onChange={this.handleChange.bind(this, name)}
        />
        <p className="errors-txt">
          {this.state.errors[name]}
        </p>
    </label>
    }

    return (
      <div className="Signup">
        <div className="container">
          <div className="signup-txt">
            <h1>Share Your Work <br /> in numbers</h1>
            <p>Get your working graph reminders for coding contests.</p>
            <p>Share your work among your peers.</p>
          </div>
          <div>
            <div className="form-header">
              <p>Try it today <span>admire it later</span></p>
            </div>
            <div className="form-wrapper">
              <form className="form-group" onSubmit={this.contactSubmit.bind(this)}>
                {Label({name:"firstname", placeholder:"First Name"})}
                {Label({name:"lastname", placeholder:"Last Name"})}
                {Label({name:"email", placeholder:"Email Address"})}
                {Label({name:"password", placeholder:"Password"})}

                <button type="submit" name="submit" className={this.state.hasError ? "errors-btn" : ""} onClick={()=> (this.state.buttonTxt === "Click to Begin") && this.props.onClose()}>
                  {this.state.buttonTxt}
                </button>
              </form>
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

export default Signup;