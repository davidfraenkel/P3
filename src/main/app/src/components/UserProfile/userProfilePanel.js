import './styling/userProfilePanel.css'
import React, { useState, useEffect } from 'react';

// Assuming user object has an 'id' field
const userId = '655dec265f108b74df740d42';
export default function UserProfilePanel() {
    const [user, setUser] = useState({});

    useEffect(() => {
        // Fetch user data when the component is mounted
        const fetchUserData = async () => {
            const response = await fetch(`http://localhost:3002/api/getUser?id=${userId}`);
            const data = await response.json();

            setUser(data);
        };

        fetchUserData();
    }, []);

    const handleSaveEdit = async (event) => {
        event.preventDefault();



        const response = await fetch(`http://localhost:3002/api/editUser?id=${userId}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: user.username,
                lastname: user.lastname,
                email: user.email,
                phonenumber: user.phonenumber,
                password: user.password
                // Add other user fields as needed
            })
        });

        const data = await response.json();
        console.log('Success:', data);
    };


    // Rest of the component
    return (
        <form onSubmit={handleSaveEdit}>
            <div className="UserProfilePanelBox">
                <div className="UserProfilePanelContainer">
                    <div className="UserProfilePanelHeader">
                        <h3>Personal Information</h3>
                        <p>Here you can see and edit your personal information.</p>
                    </div>
                    <div className="UserProfilePanelContent">
                        <div className="FirstName">
                            <dt>
                                <h4>First Name</h4>
                            </dt>
                            <input className="inputField" type="text" value={user.username} onChange={e => setUser({...user, username: e.target.value})} />
                        </div>
                        <div className="LastName">
                            <dt>
                                <h4>Last Name</h4>
                            </dt>
                            <input className="inputField" type="text" value={user.lastname} onChange={e => setUser({...user, lastname: e.target.value})} />
                        </div>
                        <div className="Email">
                            <dt>
                                <h4>Email</h4>
                            </dt>
                            <input className="inputField" type="email" value={user.email} onChange={e => setUser({...user, email: e.target.value})} />
                        </div>
                        <div className="PhoneNumber">
                            <dt>
                                <h4>Phone number</h4>
                            </dt>
                            <input className="inputField" type="tel" value={user.phonenumber} onChange={e => setUser({...user, phonenumber: e.target.value})} />
                        </div>
                        <div className="Password">
                            <dt>
                                <h4>Password</h4>
                            </dt>
                            <input className="inputField" type="text" value={user.password} onChange={e => setUser({...user, password: e.target.value})} />
                        </div>
                        <div className="Role">
                            <dt>
                                <h4>Role</h4>
                            </dt>
                            <input className="inputField" type="text" value={user.role} disabled />
                        </div>
                        <div className="SubmitEdit">
                            <input className="submit" type="submit" value="Save Edit" />
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}