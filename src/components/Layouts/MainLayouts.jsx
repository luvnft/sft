import { Outlet } from "react-router-dom";
import BottomNavigation from "../ui/BottomNavigation";
import { useEffect } from "react";
import TelegramWebAppData from "../../utils/TelegramWebAppData";
import { useCreateAccountMutation } from "../../rtk/api/Endpoint";
const MainLayouts = () => {
    const [triggerAccount] = useCreateAccountMutation();
    useEffect(() => {
        const TelegramWebApp = TelegramWebAppData();
        const DataObj = {
            userId: TelegramWebApp?.id,
            username: TelegramWebApp?.username,
            fullName: TelegramWebApp?.first_name + TelegramWebApp?.last_name,
        }
        triggerAccount(DataObj)
    }, []);

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