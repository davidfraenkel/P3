import './styling/userProfilePanel.css'


export default function UserProfilePanel() {

    return (
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
                    <input className="inputField" type="text" placeholder="username" />
                </div>
                <div className="LastName">
                    <dt>
                        <h4>Last Name</h4>
                    </dt>
                    <input className="inputField" type="text" placeholder="lastName"  />
                </div>
                <div className="Email">
                    <dt>
                        <h4>Email</h4>
                    </dt>
                    <input className="inputField" type="email" placeholder="email" />
                </div>
                <div className="Password">
                    <dt>
                        <h4>Password</h4>
                    </dt>
                    <input className="inputField" type="password" placeholder="password" />
                </div>
                <div className="PasswordConfirm">
                    <dt>
                        <h4>Password Confirm</h4>
                    </dt>
                    <input className="inputField" type="password" placeholder="password confirm" />
                </div>
                <div className="PhoneNumber">
                    <dt>
                        <h4>Phone number</h4>
                    </dt>
                    <input className="inputField" type="tel" placeholder="phoneNumber" />
                </div>
                <div className="Role">
                    <dt>
                        <h4>Role</h4>
                    </dt>
                    <input className="inputField" type="text" value="Client" disabled />
                </div>
                <div className="SubmitEdit">
                    <input className="submit" type="submit" value="Save Edit" />
                </div>
            </div>
        </div>
    </div>
)
}