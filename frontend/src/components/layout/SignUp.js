import React, { useState } from 'react';
import {toast} from 'react-toastify';
import '../styles/SignUp.css';
import * as validator from '../helpers/validators';

const toastConfig = {
    //To Modify toast-reactify configurations
    position: toast.POSITION.TOP_CENTER,
    hideProgressBar: true,
    autoClose: 1500,
};

const SignUp = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");

    function submitHandle() {
        
        if(validator.empty(name)) {
            return toast.error("Name Field is Empty!", toastConfig);
        }
        if(validator.empty(email)) {
            return toast.error("Email Field is Empty!", toastConfig);
        }
        if(validator.empty(mobile)) {
            return toast.error("Mobile Field is Empty!", toastConfig);
        }
        if(validator.empty(password)) {
            return toast.error("Password Field is Empty!", toastConfig);
        }
        if(validator.empty(password2)) {
            return toast.error("Confirm Password Field is Empty!", toastConfig);
        }
        if(!validator.email(email)) {
            return toast.error("Invalid Email!", toastConfig);
        }
        if(!validator.mobile(mobile)) {
            return toast.error("Invalid Mobile!", toastConfig);
        }
        if(!validator.password(password)) {
            return toast.error("Password length must be more than 6.", toastConfig)
        }
        if(!validator.match(password, password2)) {
            return toast.error("Password and Confirm Password are not matching!", toastConfig)
        }

        toast.success("Validation Pass!", toastConfig);
    }

    return (
        <section className="SignUp">
            <div className="container">
            <div className="title">Sign Up</div>
            <div className="body">
                <input type="text" name="name" placeholder="Name"
                    value={name} onChange={(e) => setName(e.target.value)}
                />
                <input type="text" name="email" placeholder="Email Address"
                    value={email} onChange={(e) => setEmail(e.target.value)}
                />
                <input type="number" name="mobile" placeholder="Mobile Number"
                    value={mobile} onChange={(e) => setMobile(e.target.value)}
                />
                <input type="password" name="password" placeholder="Password"
                    value={password} onChange={(e) => setPassword(e.target.value)}
                />
                <input type="password" name="password2" placeholder="Confirm Password"
                    value={password2} onChange={(e) => setPassword2(e.target.value)}
                />
                <button className="button" onClick={submitHandle}>Let's Begin</button>
            </div>
            </div>
        </section>
    )
}

export default SignUp;