import {useEffect} from "react";
import { Route, redirect ,Navigate, Outlet, useNavigate, useLocation} from "react-router-dom";

const ProtectedRouteClient = ({role}) => {
    const navigate = useNavigate();
    function presentPage() {
        console.log("test2");
        navigate("/"); // navigate(-1) is equivalent to hitting the back button
    }

    useEffect(()=>{
        if(role && role !== "client"){
            presentPage()
        }
    },[role && role!== "client"])

    if(role === 'client') {
        console.log("test");
        return <Outlet />
    }
    else {
        presentPage();
    }
}

export default ProtectedRouteClient;