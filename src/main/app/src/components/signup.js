import './styling/signup.css';
import { useState } from 'react';
import InputField from './smartComponents/inputField';

export default function Signup() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({ ...values, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch('http://localhost:3002/api/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(inputs),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };


    return (
        <div className="SignupBackgroundImg">
            <div className="SignupBackgroundOverlay">
                <div className="SignupContainer">
                    <h1 className="Title">Welcome to Gastromé</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="SignupWrapNameLast">
                            <div className="SignupInput">
                                <InputField
                                    type={"text"}
                                    name={"username"}
                                    placeholder={"Name"}
                                    value={inputs.username}
                                    func={handleChange}
                                />
                            </div>
                            <div className="SignupInput">
                                <InputField
                                    type={"text"}
                                    name={"lastname"}
                                    placeholder={"Lastname"}
                                    value={inputs.lastname}
                                    func={handleChange}
                                />
                            </div>
                        </div>
                        <div className="SignupInput">
                            <InputField
                                type={"email"}
                                name={"email"}
                                placeholder={"Email"}
                                value={inputs.email}
                                func={handleChange}
                            />
                        </div>
                        <div className="SignupInput">
                            <InputField
                                type={"tel"}
                                name={"phonenumber"}
                                placeholder={"Phone number"}
                                value={inputs.phonenumber}
                                func={handleChange}
                            />
                        </div>
                        <div className="SignupInput">
                            <InputField
                                type={"password"}
                                name={"password"}
                                placeholder={"Password"}
                                value={inputs.password}
                                func={handleChange}
                            />
                        </div>
                        <div className="SignupInput">
                            <InputField
                                type={"password"}
                                name={"confirmpassword"}
                                placeholder={"Confirm Password"}
                                value={inputs.confirmpassword}
                                func={handleChange}
                            />
                        </div>
                        <div className="TermsCheckbox">
                            <input type="checkbox" name="terms" />
                            <p>Accept Terms and Conditions</p>
                        </div>
                        <div className="SignupInput SignupSubmit">
                            <input type="submit" value="Sign up" />
                        </div>
                    </form>
                </div>
                <div className="SignupBackground"></div>
            </div>
        </div>
    );
}
