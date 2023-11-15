import './styling/adminUserPanel.css';

export default function AdminUserPanel() {
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
                        <tr>
                            <td className="tableUserName">User.name</td>
                            <td className="tableUserTitle">User.title</td>
                            <td className="tableUserEmail">User.email</td>
                            <td className="tableUserRole">User.role</td>
                            <td className="tableUserEdit"> <a>Edit</a></td>
                        </tr>
                        <tr>
                            <td className="tableUserName">User.name</td>
                            <td className="tableUserTitle">User.title</td>
                            <td className="tableUserEmail">User.email</td>
                            <td className="tableUserRole">User.role</td>
                            <td className="tableUserEdit"> <a>Edit</a></td>
                        </tr>
                        <tr>
                            <td className="tableUserName">User.name</td>
                            <td className="tableUserTitle">User.title</td>
                            <td className="tableUserEmail">User.email</td>
                            <td className="tableUserRole">User.role</td>
                            <td className="tableUserEdit"> <a>Edit</a></td>
                        </tr>
                        <tr>
                            <td className="tableUserName">User.name</td>
                            <td className="tableUserTitle">User.title</td>
                            <td className="tableUserEmail">User.email</td>
                            <td className="tableUserRole">User.role</td>
                            <td className="tableUserEdit"> <a>Edit</a></td>
                        </tr>
                        <tr>
                            <td className="tableUserName">User.name</td>
                            <td className="tableUserTitle">User.title</td>
                            <td className="tableUserEmail">User.email</td>
                            <td className="tableUserRole">User.role</td>
                            <td className="tableUserEdit"> <a>Edit</a></td>
                        </tr>
                        <tr>
                            <td className="tableUserName">User.name</td>
                            <td className="tableUserTitle">User.title</td>
                            <td className="tableUserEmail">User.email</td>
                            <td className="tableUserRole">User.role</td>
                            <td className="tableUserEdit"> <a>Edit</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}