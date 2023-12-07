import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/home";
import Signup from "./components/signup";
import Overview from "./components/ClientView/overview";
import SubOverview from "./components/ClientView/subOverview";
import Subtopic from "./components/ClientView/subtopic";
import CcOverview from "./components/CCView/ccoverview";
import CreateUpdateTopic from "./components/CCView/createUpdateTopic";
import CreateUpdateSubtopic from "./components/CCView/createUpdateSubtopic";
import CreateSubTopicContent from "./components/CCView/createSubTopicContent"

import AdminUserPanel from "./components/AdminView/adminUserPanel";
import BookMeeting from "./components/ClientView/bookMeeting";
import YouTubeApp from "./components/ClientView/YouTubeApp";
import useUser from "./components/auth/setUser";
import UserProfilePanel from "./components/UserProfile/userProfilePanel";
import CcSubOverview from "./components/CCView/ccsuboverview";
import Homeview from "./components/ClientView/homeview";
import Login from "./components/login";

function Router() {
    const {role, setRole} = useUser();
    const {name, setName} = useUser();
    const {userId, setUserId} = useUser();

    return (
        <BrowserRouter>
            <Routes>

                <Route path="/login" element={<Login setRole={setRole} setName={setName} setUserId={setUserId}/>}/>

                {/*CLIENT*/}
                <Route path="/" element={<Home />}>
                </Route>
                <Route path="/signup" element={<Signup setRole={setRole} setName={setName} setUserId={setUserId}/>}>
                </Route>
                <Route path="/overview" element={<Overview />}>
                </Route>
                <Route path="/overview/sub-overview/subtopic" element={<Subtopic />}>
                </Route>
                <Route path={"/userprofile"} element={<UserProfilePanel userId={userId}/>}>
                </Route>

                <Route path="/overview/book-meeting" element={<BookMeeting />} />
                <Route path="/webinar" element={<YouTubeApp />} />

                {/*CONTENT CREATOR*/}
                <Route path="/ccoverview" element={<CcOverview />}>
                </Route>
                <Route path="/ccoverview/create-update-topic" element={<CreateUpdateTopic />}>
                </Route>
                <Route path="/overview/sub-overview" element={<SubOverview />}>
                </Route>
                <Route path="/ccoverview/ccsub-overview/create-update-subtopic" element={<CreateUpdateSubtopic />}>
                </Route>
                <Route path="/ccoverview/ccsub-overview/ccsubtopic" element={<CreateSubTopicContent />}></Route>
                <Route path="/ccoverview/ccsub-overview" element={<CcSubOverview />}>
                </Route>
                <Route path="/homeview" element={<Homeview />}>
                </Route>

                {/* Admin */}
                <Route path="/admin-panel" element={<AdminUserPanel />} />

            </Routes>
        </BrowserRouter>
    );
}

export default Router;
