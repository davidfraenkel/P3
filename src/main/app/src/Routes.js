import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/home";
import Signup from "./components/signup";
import Overview from "./components/ClientView/overview";
import CcSubOverview from "./components/CCView/ccsuboverview"
import SubOverview from "./components/ClientView/subOverview";
import Subtopic from "./components/ClientView/subtopic";
import CcOverview from "./components/CCView/ccoverview";
import CreateUpdateTopic from "./components/CCView/createUpdateTopic";
import CreateUpdateSubtopic from "./components/CCView/ccCreateUpdateSubtopic";
import AdminUserPanel from "./components/AdminView/adminUserPanel";
import BookMeeting from "./components/ClientView/bookMeeting";
import Meeting from "./components/ClientView/meeting"; // Import the Meeting component

function Router() {
    let payload = {
        meetingNumber: 84084099070,
        role: 0,
        sdkKey: 'wD1nCdGxR6eV7qOFMxD5Ag',
        sdkSecret: 'oVqL5KNytCv6HmHavD0zB4112f7dqHc7',
        passWord: 'vQXUR4',
        userName: 'Testing',
        userEmail: '',
        leaveUrl: 'https://localhost:3000',
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/overview" element={<Overview />} />
                <Route path="/overview/sub-overview" element={<SubOverview />} />
                <Route path="/overview/sub-overview/subtopic" element={<Subtopic />} />
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

                {/* CONTENT CREATOR */}
                <Route path="/ccoverview" element={<CcOverview />} />
                <Route path="/ccoverview/create-update-topic" element={<CreateUpdateTopic />} />
                <Route path="/ccoverview/create-update-subtopic" element={<CreateUpdateSubtopic />} />

                {/* Admin */}
                <Route path="/admin-panel" element={<AdminUserPanel />} />

                {/* Meeting route */}
                <Route path="/meeting" element={<Meeting payload={payload} />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
