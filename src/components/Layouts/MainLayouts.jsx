import { Outlet } from "react-router-dom";
import BottomNavigation from "../ui/BottomNavigation";
import { useEffect } from "react";
import { useCreateAccountMutation } from "../../rtk/api/Endpoint";
import { useDispatch } from "react-redux";
import { setUser } from "../../rtk/slice/UserInfoSlice";
import WebApp from "@twa-dev/sdk";

const MainLayouts = () => {
    const [triggerAccount] = useCreateAccountMutation();
    const dispatch = useDispatch();
    const User = WebApp.initDataUnsafe.user;
    const referredBy = WebApp.initDataUnsafe.start_param;

    useEffect(() => {
        const DataObj = {
            userId: User.id,
            username: User?.username,
            fullName: User?.first_name + User?.last_name,
            profilePicture: User?.photo_url,
            referredBy: referredBy,
        }
        dispatch(setUser({ userId: User?.id, userName: User?.username }));
        triggerAccount(DataObj);
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