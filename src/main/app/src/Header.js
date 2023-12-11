import React from 'react';
import { HiUser } from 'react-icons/hi';
import './header.css';
import { useUserContext } from './components/auth/userContext'; // Import the context hook


export default function Header() {
    const { user } = useUserContext();
    const isAdmin = user.role === 'Admin';
    const isClient = user.role === 'Client';
    const isContentCreator = user.role === 'Content Creator';

    return (
        <div className="navbar">
            <div className="container">
                <a href="/" className="brand">
                </a>
                <button className="navbar-toggle">
                    <span className="toggle-icon"></span>
                </button>
                <div className="navbar-links" id="basic-navbar-nav">
                    {isAdmin && (
                        <>
                            <a href="/meeting">Meeting</a>
                            <a href="/webinar">Webinar</a>
                            <a href="/admin-panel">Manage roles</a>
                        </>
                    )}
                    {isContentCreator && (
                        <>
                            <a href="/ccoverview">Handbook</a>
                            <a href="/webinar">Webinar</a>
                        </>
                    )}
                    {isClient && (
                        <>
                            <a href="/overview">Handbook</a>
                            <a href="/webinar">Webinar</a>
                            <a href="/meeting">Meeting</a>
                        </>
                    )}
                    <a href="/">Home</a>
                    {user.name ? (
                        <>
                            <div className="dropdown">
                                <button className="dropbtn">
                                    <p>{user.name} <HiUser /></p>
                                </button>
                                <div className="dropdown-content">
                                    <a href="/userprofile">User</a>
                                    <div className="divider"></div>
                                    <a href="/logout">Log ud</a>
                                </div>
                            </div>
                        </>
                    ) : (
                        <a href="http://localhost:3000/login">Sign in</a>
                    )}
                </div>
            </div>
        </div>
    );
}