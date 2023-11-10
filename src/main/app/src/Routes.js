import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./components/home"
import Signup from "./components/signup"

import Overview from "./components/ClientView/overview"
import SubOverview from "./components/ClientView/subOverview"

import CcOverview from "./components/CCView/ccoverview"
import CreateUpdateTopic from "./components/CCView/createUpdateTopic"
import DeleteTopic from "./components/CCView/deleteTopic"


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
                <Route path="/ccoverview" element={<CcOverview />}>
                </Route>
                <Route path="/ccoverview/createupdatetopic" element={<CreateUpdateTopic />}>
                </Route>
                <Route path="/ccoverview/deletetopic" element={<DeleteTopic />}>
                </Route>
                <Route path="/ccoverview/create-update-topic/:topicName" element={<CreateUpdateTopic />}>
                </Route>
                <Route path="/overview/sub-overview" element={<SubOverview />}>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
export default Router