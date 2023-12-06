import React from 'react';
import { HiUser } from 'react-icons/hi';
import Logo from './assets/homepage/logo2.png';
import './header.css';

export default function Header({ name, role }) {
    const isAdmin = role === 'Admin';
    const isClient = role === 'Client';
    const isContentCreator = role === 'Content Creator';

    return (
        <div className="navbar">
            <div className="container">
                <a href="/" className="brand">
                    <img src={Logo} alt="Logo" />
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
                    <div className="dropdown">
                        <button className="dropbtn">
                            {name} <HiUser />
                        </button>
                        <div className="dropdown-content">
                            <a href="/settings">Settings</a>
                            <a href="/user">User</a>
                            <a href="/something">Something</a>
                            <div className="divider"></div>
                            <a href="/logout">Log ud</a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
