import './header.css'
import {Link} from "react-router-dom";
import Logo from './assets/homepage/logo2.png'
import { HiUser } from "react-icons/hi";

export default function Header() {
    return (
        <div className="navbar">
            <div className="container">
                <a href="#home" className="brand"></a>
                <button className="navbar-toggle">
                    <span className="toggle-icon"></span>
                </button>
                <div className="navbar-links" id="basic-navbar-nav">
                    <a href="#home">Home</a>
                    <a href="http://localhost:3000/signup">Sign up</a>
                    <div className="dropdown">
                        <button className="dropbtn">User.name</button>
                        <div className="dropdown-content">
                            <a href="#action/3.1">Settings</a>
                            <a href="#action/3.2">User</a>
                            <a href="#action/3.3">Something</a>
                            <div className="divider"></div>
                            <a href="#action/3.4">Log ud</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}