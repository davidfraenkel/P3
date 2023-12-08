// UserContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
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

    return (
        <UserContext.Provider value={{ user, setUserInfo }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = () => {
    return useContext(UserContext);
};
