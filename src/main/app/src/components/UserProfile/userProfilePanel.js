import './styling/userProfilePanel.css'
import React, { useState, useEffect } from 'react';
import { useUserContext } from '../auth/userContext'; // Import the context hook

export default function UserProfilePanel() {
    const { user } = useUserContext();
    const { setUserInfo } = useUserContext();
    const [currentUser, setUser] = useState({
        username: '',
        lastname: '',
        email: '',
        phonenumber: '',
    });
    const userId = user.userId;

    useEffect(() => {
        // Fetch user data when the component is mounted
        const fetchUserData = async () => {
            const response = await fetch(`http://localhost:3002/api/getUser?id=${userId}`);
            const data = await response.json();
            console.log(data);
            setUser({
                username: data.username || '',
                lastname: data.lastname || '',
                email: data.email || '',
                phonenumber: data.phonenumber || '',
            });
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
                username: currentUser.username,
                lastname: currentUser.lastname,
                email: currentUser.email,
                phonenumber: currentUser.phonenumber,
            })
        });

        const data = await response.json();
        console.log('Success:', data);
        setUserInfo({
            role: data.role,
            name: data.username,
            userId: data._id,
        });

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
                            <input className="inputField" type="text" value={currentUser.username} onChange={e => setUser({...currentUser, username: e.target.value})} />
                        </div>
                        <div className="LastName">
                            <dt>
                                <h4>Last Name</h4>
                            </dt>
                            <input className="inputField" type="text" value={currentUser.lastname} onChange={e => setUser({...currentUser, lastname: e.target.value})} />
                        </div>
                        <div className="Email">
                            <dt>
                                <h4>Email</h4>
                            </dt>
                            <input className="inputField" type="email" value={currentUser.email} onChange={e => setUser({...currentUser, email: e.target.value})} />
                        </div>
                        <div className="PhoneNumber">
                            <dt>
                                <h4>Phone number</h4>
                            </dt>
                            <input className="inputField" type="tel" value={currentUser.phonenumber} onChange={e => setUser({...currentUser, phonenumber: e.target.value})} />
                        </div>
                        <div className="Role">
                            <dt>
                                <h4>Role</h4>
                            </dt>
                            <input className="inputField" type="text" value={currentUser.role} disabled />
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