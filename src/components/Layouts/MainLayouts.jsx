import { Outlet } from "react-router-dom";
import BottomNavigation from "../ui/BottomNavigation";

const MainLayouts = () => {
    return (
        <div data-theme="synthwave">
            <Outlet />
            <BottomNavigation />
        </div>
    );
};

export default MainLayouts;