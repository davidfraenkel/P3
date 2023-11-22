import React, { useState, useEffect } from 'react';
import './styling/adminUserPanel.css';

export default function AdminUserPanel() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3002/api/getAllUsers')
            .then(response => response.json())
            .then(data => {
                const parsedData = data.map(user => JSON.parse(user));
                setUsers(parsedData);
                console.log(parsedData);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    const handleRoleChange = (event, index) => {
        const newUsers = [...users];
        newUsers[index].role = event.target.value;
        setUsers(newUsers);

        fetch('http://localhost:3002/api/editUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: users[index]._id, // The user's ID
                role: event.target.value, // The new role
            }),
        })
            .then(response => response.json())
            .then(data => console.log('Success:', data))
            .catch((error) => console.error('Error:', error));

    };

    return (
        <div className="adminUserPanel">
            <div className="adminHeader">
                <h1>Users</h1>
                <p>A list of all the users in your account including their name, email, and role.</p>
            </div>
            <div className="adminTableDiv">
                <table className="adminTable">
                    <thead className="adminTableHeader">
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                    </thead>
                    <tbody className="adminTableBody">
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td className="tableUserName">{user.username} {user.lastname || " "}</td>
                            <td className="tableUserEmail">{user.email}</td>
                            <td className="tableUserRole">{user.role}
                                <select className="tableDropdown" value={user.role} onChange={(event) => handleRoleChange(event, index)}>
                                    <option value="Default">Default</option>
                                    <option value="Client">Client</option>
                                    <option value="Content Creator">Content Creator</option>
                                    <option value="Admin">Admin</option>
                                </select>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
