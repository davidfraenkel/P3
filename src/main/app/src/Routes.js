import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./components/home"
import Signup from "./components/signup"

import Overview from "./components/ClientView/overview"
import SubOverview from "./components/ClientView/subOverview"
import Subtopic from "./components/ClientView/subtopic"

import CcOverview from "./components/CCView/ccoverview"
import CcSubOverview from "./components/CCView/ccsuboverview"
import CreateUpdateTopic from "./components/CCView/createUpdateTopic"
import CreateUpdateSubtopic from "./components/CCView/createUpdateSubtopic";


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
            </Routes>
        </BrowserRouter>
    )
}
export default Router