import { Link } from 'react-router-dom';
import '../ClientView/styling/homeview.css';

export default function AdminHomeview() {
    return (
        <div className="homeviewBody">
            <div className="homeviewContentContainer">
                <Link to="/meeting" className="redirectBox meetingRedirect">
                    <h1>Meeting</h1>
                    <p>Schedule and join meetings.</p>
                </Link>
                <Link to="/webinar" className="redirectBox webinarRedirect">
                    <h1>Webinar</h1>
                    <p>Attend our informative webinars.</p>
                </Link>
                <Link to="/admin-homeview/admin-panel" className="redirectBox manageUsersRedirect">
                    <h1>Manage users</h1>
                    <p>Manage the roles of users.</p>
                </Link>
            </div>
        </div>
    );
}