import './styling/signup.css';
// Login.js
import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from './auth/userContext';
import InputField from './smartComponents/inputField';

export default function Login() {
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({});
    const { setUserInfo } = useUserContext();

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
            .then((response) => response.json())
            .then((data) => {
                // Update user information using the context
                setUserInfo({
                    role: data.role,
                    name: data.username,
                    userId: data._id,
                });

                // Navigate based on the user's role
                switch (data.role) {
                    case 'NormalUser':
                    case 'Client':
                        navigate('/overview');
                        break;
                    case 'Content Creator':
                        navigate('/ccoverview');
                        break;
                    case 'Admin':
                        navigate('/admin-panel');
                        break;
                    default:
                        // Handle other roles or cases if needed
                        break;
                }

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
                    Don't have an account? <a href="/signup">Sign up</a>
                </div>
                <div className="SignupBackground"></div>
            </div>
        </div>
    );
}
