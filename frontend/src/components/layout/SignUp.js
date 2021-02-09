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
  

    this.setState({ errors: errors });
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
      this.setState({ buttonTxt: "Click to Begin" });
    } else {
      this.setState({ buttonTxt: "Form has errors" });
    }
  }

 
  render() {
    return (
      <div className="Signup">
        <div className="container">
          <div className="signup-wrapper">
            <div className="signup-txt">
            <h1>
                Share Your Work <br /> in numbers
              </h1>
              <p>Get your working graph reminders for coding contests.</p>
              <p>Share your work among your peers.</p>
            </div>
            <div className="signup-form">
              <div className="form-header">
                <p className="header-txt">
                Try it today <span>admire it later</span>{" "}
                </p>
              </div>
              <div className="form-wrapper">
                <form
                  className="form-group"
                  onSubmit={this.contactSubmit.bind(this)}
                >

                  <label htmlFor="firstname">
                    <input
                      type="text"
                      name="firstname"
                      placeholder="First Name"
                      className={this.state.errorsImg}
                      value={this.state.fields["firstname"]}
                      onChange={this.handleChange.bind(this, "firstname")}
                    />
                    <p className="errors-txt">
                      {this.state.errors["firstname"]}
                    </p>
                  </label>

                  <label htmlFor="lastname">
                    <input
                      type="text"
                      name="lastname"
                      placeholder="Last Name"
                      className={this.state.errorsImg}
                      value={this.state.fields["lastname"]}
                      onChange={this.handleChange.bind(this, "lastname")}
                    />
                    <p className="errors-txt">
                        {this.state.errors["lastname"]}
                    </p>
                  </label>

                  <label htmlFor="email">
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      className={this.state.errorsImg}
                      value={this.state.fields["email"]}
                      onChange={this.handleChange.bind(this, "email")}
                    />
                    <p className="errors-txt">
                        {this.state.errors["email"]}
                    </p>
                  </label>
                  <label htmlFor="password">
                    <input
                      type="password"
                      name="password"
                      placeholder="Password"
                      className={this.state.errorsImg}
                      value={this.state.fields["password"]}
                      onChange={this.handleChange.bind(this, "password")}
                    />
                    <p className="errors-txt">
                        {this.state.errors["password"]}
                    </p>
                  </label>
                  <button type="submit" name="submit" onClick={()=> (this.state.buttonTxt === "Click to Begin") && this.props.onClose()}>
                    {this.state.buttonTxt}
                  </button>
                </form>
                <p className="terms-txt">
                  By clicking the button, you are agreeing to our{" "}
                  <span>Terms and Services</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <footer>
  </footer>
      </div>
    );
  }
}

export default Signup;