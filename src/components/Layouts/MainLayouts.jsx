import { Outlet } from "react-router-dom";
import BottomNavigation from "../ui/BottomNavigation";

const MainLayouts = () => {
    return (
        <div data-theme="black">
            <Outlet />
            <BottomNavigation />
        </div>
    );
};

export default MainLayouts;