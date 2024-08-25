import { Outlet } from "react-router-dom";
import BottomNavigation from "../ui/BottomNavigation";

const MainLayouts = () => {
    return (
        <div data-theme="black">
            <div className="mb-20">
                <Outlet />
            </div>
            <BottomNavigation />
        </div>
    );
};

export default MainLayouts;