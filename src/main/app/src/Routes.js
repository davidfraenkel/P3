import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./components/home"
import Signup from "./components/signup"
import Overview from "./components/overview"
import Ccoverview from "./components/ccoverview"

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
                <Route path="/ccoverview" element={<Ccoverview />}>
                </Route>

            </Routes>
        </BrowserRouter>
    )
}
export default Router