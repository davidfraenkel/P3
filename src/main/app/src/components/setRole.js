import { useState } from 'react';
export default function useRole() {
    const getRole = () => {
        const tokenString = sessionStorage.getItem('role');
        return JSON.parse(tokenString);
    };

    const [role, setRole] = useState(getRole());

    const saveRole = userRole => {
        sessionStorage.setItem('role', JSON.stringify(userRole));
        setRole(userRole.role);
    };

    return {
        setRole: saveRole,
        role
    }
}