import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/home";
import Signup from "./components/signup";
import Homeview from "./components/ClientView/homeview";
import Overview from "./components/ClientView/overview";
import CcSubOverview from "./components/CCView/ccsuboverview"
import SubOverview from "./components/ClientView/subOverview";
import Subtopic from "./components/ClientView/subtopic";
import CcOverview from "./components/CCView/ccoverview";
import CreateUpdateTopic from "./components/CCView/createUpdateTopic";
import CreateUpdateSubtopic from "./components/CCView/createUpdateSubtopic";
import AdminUserPanel from "./components/AdminView/adminUserPanel";
import UserProfilePanel from "./components/UserProfile/userProfilePanel";
import BookMeeting from "./components/ClientView/bookMeeting";
import Meeting from "./components/ClientView/meeting";
import useUser from "./components/auth/setUser";
import Login from "./components/login";
import Header from "./Header"; // Import the Meeting component

function Router() {
    const {role, setRole} = useUser();
    const {name, setName} = useUser();
/*    let payload = {
        meetingNumber: 84084099070,
        role: 0,
        sdkKey: 'wD1nCdGxR6eV7qOFMxD5Ag',
        sdkSecret: 'oVqL5KNytCv6HmHavD0zB4112f7dqHc7',
        passWord: 'vQXUR4',
        userName: 'Testing',
        userEmail: '',
        leaveUrl: 'https://localhost:3000',
    };*/

    return (
        <div>
        <Header name={name} role={role}/>
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />

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
                <Route path="/overview/book-meeting" element={<BookMeeting />} />

                {/*CONTENT CREATOR*/}
                <Route path="/ccoverview" element={<CcOverview />}>
                </Route>
                <Route path="/ccoverview/create-update-topic" element={<CreateUpdateTopic />}>
                </Route>
                <Route path="/overview/sub-overview" element={<SubOverview />}>
                </Route>
                <Route path="/ccoverview/ccsub-overview/create-update-subtopic" element={<CreateUpdateSubtopic />}>
                </Route>
                <Route path="/ccoverview/ccsub-overview" element={<CcSubOverview />}>
                </Route>
                <Route path="/homeview" element={<Homeview />}>
                </Route>


                {/* Admin */}
                <Route path="/admin-panel" element={<AdminUserPanel />} />

                {/* Meeting route */}

                {/*<Route path="/meeting" element={<Meeting payload={payload} />} />*/}
            </Routes>
        </BrowserRouter>
        </div>
    );
}

export default Router;
