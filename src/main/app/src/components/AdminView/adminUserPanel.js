import './styling/adminUserPanel.css';

export default function AdminUserPanel() {
    const users = [
        { name: 'User1', title: 'Title1', email: 'user1@example.com', role: 'Role1' },
        { name: 'User2', title: 'Title2', email: 'user2@example.com', role: 'Role2' },
    ];

    return (
        <div className="adminUserPanel">
            <div className="adminHeader">
                <h1>Users</h1>
                <p>A list of all the users in your account including their name, title, email and role.</p>
            </div>
            <div className="adminTableDiv">
                <table className="adminTable">
                    <thead className="adminTableHeader">
                        <tr>
                            <th>Name</th>
                            <th>Title</th>
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
                                <td className="tableUserName">{user.name}</td>
                                <td className="tableUserTitle">{user.title}</td>
                                <td className="tableUserEmail">{user.email}</td>
                                <td className="tableUserRole">{user.role}</td>
                                <td className="tableUserEdit"><a>Edit</a></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}