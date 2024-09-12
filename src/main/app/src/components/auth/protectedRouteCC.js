import {useEffect} from "react";
import { Route,Redirect, Navigate, Outlet, useNavigate, useLocation} from "react-router-dom";

const ProtectedRouteCC = ({role}) => {
    const navigate = useNavigate();
    function presentPage() {
        navigate("/"); // navigate(-1) is equivalent to hitting the back button
    }

    useEffect(()=>{
        if(role && role !== "creator"){
            presentPage()
        }
    },[role && role!== "creator"])

    if(role === 'creator') {
        return <Outlet />
    }
    else {
        presentPage();
    }
}

export default ProtectedRouteCC;