import './styling/userProfilePanel.css'
import React, { useState, useEffect } from 'react';

export default function UserProfilePanel() {
    const [user, setUser] = useState({});

    useEffect(() => {
        // Fetch user data when the component is mounted
        const fetchUserData = async () => {
            const response = await fetch('http://localhost:3002/api/getUser?id=655dec225f108b74df740d40');
            const data = await response.json();

            setUser(data);
        };

        fetchUserData();
    }, []);

    const handleSaveEdit = async (event) => {
        event.preventDefault();

        const response = await fetch(`http://localhost:3002/api/editUser?id=${user}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
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