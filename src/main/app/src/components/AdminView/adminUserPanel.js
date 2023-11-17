import React, { useState, useEffect } from 'react';
import './styling/adminUserPanel.css';

export default function AdminUserPanel() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Fetch data from the backend when the component mounts
        fetch('/getAllUsers')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Error fetching data:', error));
    }, []); // Empty dependency array ensures that the effect runs only once, similar to componentDidMount
    console.log(users);
    return (
        <div className="adminUserPanel">
            <div className="adminHeader">
                <h1>Users</h1>
                <p>A list of all the users in your account including their name, title, email, and role.</p>
            </div>
            <div className="adminTableDiv">
                <table className="adminTable">
                    <thead className="adminTableHeader">
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>
                            <span></span>
                        </th>
                    </tr>
                    </thead>
                    <tbody className="adminTableBody">
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td className="tableUserName">{user.username}</td>
                            <td className="tableUserEmail">{user.email}</td>
                            <td className="tableUserRole">{user.role}</td>
                            <td className="tableUserEdit">Edit</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
