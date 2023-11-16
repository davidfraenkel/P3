import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./components/home"
import Signup from "./components/signup"
import Overview from "./components/ClientView/overview"
import SubOverview from "./components/ClientView/subOverview"
import Subtopic from "./components/ClientView/subtopic"

import CcOverview from "./components/CCView/ccoverview"
import CreateUpdateTopic from "./components/CCView/createUpdateTopic"
import CreateUpdateSubtopic from "./components/CCView/ccCreateUpdateSubtopic";
import Header from "./Header";
import React from "react";
import useRole from "./components/setRole"
import ProtectedRouteClient from "./components/protectedRouteClient";

function Router() {
    const { role, setRole } = useRole();

        return (
            <div>
                <Header role={role}/>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Home />}>
                        </Route>
                        <Route path="/signup" element={<Signup setRole={setRole}/>}>
                        </Route>
                        <Route element={<ProtectedRouteClient role={role}/>}>
                            <Route path="/overview" element={<Overview />}>
                            </Route>
                        </Route>
                        <Route path="/overview/sub-overview/subtopic" element={<Subtopic />}>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </div>
        )
}
export default Router