import {useEffect} from "react";
import { Route, redirect ,Navigate, Outlet, useNavigate, useLocation} from "react-router-dom";

const ProtectedRouteClient = ({role}) => {
    const navigate = useNavigate();
    function presentPage() {
        navigate("/"); // navigate(-1) is equivalent to hitting the back button
    }

    useEffect(()=>{
        if(role && role !== "baseRole"){
            presentPage()
        }
    },[role && role!== "baseRole"])

    if(role === 'baseRole') {
        return <Outlet />
    }
    else {
        presentPage();
    }
}

export default ProtectedRouteClient;