import {useLocation, useNavigate} from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import "../../App.css";
const PreviousPage = () => {
    let navigate = useNavigate();
    return (
        <div className="GoBackArrow">
            <span onClick={() => navigate(-1)}><FaArrowLeftLong className="GoBackArrowIcon"/>Go back</span>
        </div>
    );
};

export const PreviousPageWrapper = () => {
    const location = useLocation();

    // Don't render PreviousPage if the current route is the home page
    if (location.pathname === '/' || location.pathname === '/login' || location.pathname === '/signup') {
        return null;
    }

    return <PreviousPage />;
};