import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./components/home"
import Signup from "./components/signup"

import Overview from "./components/ClientView/overview"
import SubOverview from "./components/ClientView/subOverview"
import Subtopic from "./components/ClientView/subtopic"

import CcOverview from "./components/CCView/ccoverview"
import CreateUpdateTopic from "./components/CCView/createUpdateTopic"
import CreateUpdateSubtopic from "./components/CCView/ccCreateUpdateSubtopic";
import AdminUserPanel from "./components/AdminView/adminUserPanel";
import UserProfilePanel from "./components/UserProfile/userProfilePanel";


function Router() {
    return (
        <BrowserRouter>
            <Routes>
                {/*CLIENT*/}
                <Route path="/" element={<Home />}>
                </Route>
                <Route path="/signup" element={<Signup />}>
                </Route>
                <Route path="/overview" element={<Overview />}>
                </Route>
                <Route path="/overview/sub-overview/subtopic" element={<Subtopic />}>
                </Route>
                <Route path={"/userprofile"} element={<UserProfilePanel />}>
                </Route>

                {/*CONTENT CREATOR*/}
                <Route path="/ccoverview" element={<CcOverview />}>
                </Route>
                <Route path="/ccoverview/create-update-topic" element={<CreateUpdateTopic />}>
                </Route>
                <Route path="/overview/sub-overview" element={<SubOverview />}>
                </Route>
                <Route path="/ccoverview/create-update-subtopic" element={<CreateUpdateSubtopic />}>
                </Route>

                {/*Admin*/}
                <Route path="/admin-panel" element={<AdminUserPanel />}>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default Router