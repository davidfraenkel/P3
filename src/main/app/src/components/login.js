import './styling/signup.css';
import { useState } from 'react';
import InputField from './smartComponents/inputField';

export default function Login() {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs((values) => ({ ...values, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch('http://localhost:3002/api/login', {
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
                                type={"password"}
                                name={"password"}
                                placeholder={"Password"}
                                value={inputs.password}
                                func={handleChange}
                            />
                        </div>
                        <div className="SignupInput SignupSubmit">
                            <input type="submit" value="log in" />
                        </div>
                    </form>
                </div>
                <div className="SignupBackground"></div>
            </div>
        </div>
    );
}
