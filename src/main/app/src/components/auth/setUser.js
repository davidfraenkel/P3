import { useState } from 'react';
export default function useUser() {
    const getRole = () => {
        const tokenString = sessionStorage.getItem('role');
        return JSON.parse(tokenString);
    };

    const getUserName = () => {
        const tokenString = sessionStorage.getItem('name');
        return JSON.parse(tokenString);
    };

    const getUserId = () => {
        const tokenString = sessionStorage.getItem('userId');
        return JSON.parse(tokenString);
    }

    const [role, setRole] = useState(getRole());
    const [name, setName] = useState(getUserName());
    const [userId, setUserId] = useState(getUserId());

    const saveRole = (userRole) => {
        sessionStorage.setItem('role', JSON.stringify(userRole));
        setRole(userRole.role);
    };

    const saveName = (userName) => {
        sessionStorage.setItem('name', JSON.stringify(userName));
        setName(userName.name);
    };

    const saveUserId = (userId) => {
        sessionStorage.setItem('userId', JSON.stringify(userId));
        setUserId(userId.userId);
    }

    return {
        setRole: saveRole,
        role,
        setName: saveName,
        name,
        setUserId: saveUserId,
        userId,
    };
}