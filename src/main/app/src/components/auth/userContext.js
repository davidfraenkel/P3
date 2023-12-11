// UserContext.js
import React, {createContext, useCallback, useContext, useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const navigate = useNavigate();
    const storedUser = JSON.parse(sessionStorage.getItem('user')) || {
        role: null,
        name: null,
        userId: null,
    };
    const [user, setUser] = useState(storedUser);

    useEffect(() => {
        // Update sessionStorage whenever user changes
        sessionStorage.setItem('user', JSON.stringify(user));
    }, [user]);

    const setUserInfo = (userInfo) => {
        setUser(userInfo);
    };

    const logout = useCallback(() => {
        // Clear user data
        setUser({ role: null, name: null, userId: null });
        sessionStorage.removeItem('user');

        // Redirect to the home page
        navigate('/');
    }, [navigate]);

    return (
        <UserContext.Provider value={{ user, setUserInfo,logout }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = () => {
    return useContext(UserContext);
};
