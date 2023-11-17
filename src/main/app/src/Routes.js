import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./components/home"
import Signup from "./components/signup"

import Overview from "./components/ClientView/overview"
import SubOverview from "./components/ClientView/subOverview"
import Subtopic from "./components/ClientView/subtopic"

import CcOverview from "./components/CCView/ccoverview"
import CreateUpdateTopic from "./components/CCView/createUpdateTopic"
import CreateUpdateSubtopic from "./components/CCView/ccCreateUpdateSubtopic";
import BookMeeting from "./components/ClientView/bookMeeting";
import ContactForm from "./components/ClientView/bookMeeting";


function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}>
                </Route>
                <Route path="/signup" element={<Signup />}>
                </Route>
                <Route path="/overview" element={<Overview />}>
                </Route>
                <Route path="/overview/sub-overview/subtopic" element={<Subtopic />}>
                </Route>
                <Route path="/overview/book-meeting" element={<ContactForm />}>
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
            </Routes>
        </BrowserRouter>
    )
}
export default Router