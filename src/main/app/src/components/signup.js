import './signup.css'
import { useState } from 'react';

export default function Signup() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs);
    }
    return (
        <div className='HomeScreenBackgroundOverlay'>
            <div className='HomeScreenBackground'>

            </div>
        <div className='SignupContainer'>
            <h1 className="Title">Welcome to Gastromé</h1>
            <form onSubmit={handleSubmit}>
                <div className="SignupWrapNameLast">
                <div className="SignupInput">
                    <input
                        type="text"
                        name="username"
                        placeholder="    Name"
                        value={inputs.username || ""}
                        onChange={handleChange}

                    />
                </div>
                <div className="SignupInput">
                    <input
                        type="text"
                        name="lastname"
                        placeholder="    Lastname"
                        value={inputs.lastname || ""}
                        onChange={handleChange}

                    />
                </div>
                </div>
                <div className="SignupInput">
                    <input
                        type="email"
                        name="email"
                        placeholder="   Email"
                        value={inputs.email || ""}
                        onChange={handleChange}
                    />
                </div>
                <div className="SignupInput">
                    <input
                        type="tel"
                        name="phonenumber"
                        placeholder="    Phone number"
                        value={inputs.phonenumber || ""}
                        onChange={handleChange}
                    />
                </div>
                <div className="SignupInput">
                    <input
                        type="password"
                        name="password"
                        placeholder="    Password"
                        value={inputs.password || ""}
                        onChange={handleChange}
                    />
                </div>
                <div className="SignupInput">
                    <input
                        type="password"
                        name="confirmpassword"
                        placeholder="    Confirm password"
                        value={inputs.confirmpassword || ""}
                        onChange={handleChange}
                    />
                </div>
                <div className="TermsCheckbox">
                    <input
                        type="checkbox"
                        name="terms"
                    />
                    <p>
                        Accept Terms and Conditions
                    </p>
                </div>
                <div className="SignupInput SignupSubmit">
                    <input type="submit" value="Sign up"/>
                </div>
            </form>
        </div>

        </div>
    )
}