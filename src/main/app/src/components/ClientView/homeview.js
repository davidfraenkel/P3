import { Link } from 'react-router-dom';
import './styling/homeview.css';

export default function Homeview() {
    return (
        <div className="homeviewBody">
            <div className="homeviewContentContainer">
                <Link to="/overview" className="redirectBox handbookRedirect">
                    <h1>Handbook</h1>
                    <p>Explore our handbook.</p>
                </Link>
                <Link to="/meeting" className="redirectBox meetingRedirect">
                    <h1>Meeting</h1>
                    <p>Schedule and join meetings.</p>
                </Link>
                <Link to="/webinar" className="redirectBox webinarRedirect">
                    <h1>Webinar</h1>
                    <p>Attend our informative webinars.</p>
                </Link>
            </div>
        </div>
    );
}
