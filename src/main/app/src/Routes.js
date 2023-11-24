import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./components/home"
import Signup from "./components/signup"

import Login from "./components/login"
import Overview from "./components/ClientView/overview"
import SubOverview from "./components/ClientView/subOverview"
import Subtopic from "./components/ClientView/subtopic"

import CcOverview from "./components/CCView/ccoverview"
import CreateUpdateTopic from "./components/CCView/createUpdateTopic"
import CreateUpdateSubtopic from "./components/CCView/ccCreateUpdateSubtopic";

import Header from "./Header";
import React from "react";
import useUser from "./components/auth/setUser"
import ProtectedRouteClient from "./components/auth/protectedRouteClient";
import ProtectedRouteCC from "./components/auth/protectedRouteCC";

export default function Router() {
    const {role, setRole} = useUser();
    const {name, setName} = useUser();

    return (
        <div>
            <Header name={name} role={role}/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}>
                    </Route>
                    <Route path="/signup" element={<Signup setRole={setRole} setName={setName}/>}>
                    </Route>
                    <Route path="/login" element={<Login setRole={setRole} setName={setName}/>}>
                    </Route>
                    <Route element={<ProtectedRouteClient role={role}/>}>
                        <Route path="/overview" element={<Overview/>}>
                        </Route>
                        <Route path="/overview/sub-overview" element={<SubOverview/>}>
                        </Route>
                        <Route path="/overview/sub-overview/subtopic" element={<Subtopic/>}>
                        </Route>
                    </Route>
                    <Route element={<ProtectedRouteCC role={role}/>}>
                        <Route path="/overview/sub-overview" element={<SubOverview/>}>
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}