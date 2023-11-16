import {useEffect} from "react";
import { Route,Redirect, Navigate, Outlet, useNavigate, useLocation} from "react-router-dom";

const ProtectedRouteClient = ({role}) => {
    const navigate = useNavigate();
    function presentPage() {
        navigate('/');
    }

    if(role === 'baseRole') {
        return <Outlet role={role}/>
    }
    else {
        presentPage();
    }
}

export default ProtectedRouteClient;