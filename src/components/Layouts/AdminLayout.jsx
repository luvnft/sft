import { Outlet } from "react-router-dom";
import SideBar from "../template/Admin/Layout/SideBar";

const AdminLayout = () => {
    return (
        <div className="grid grid-cols-5 gap-5 bg-black">
            <div className="col-span-1">
                <SideBar />
            </div>
            <div className="col-span-4 ">
                <Outlet />
            </div>
        </div>
    );
};

export default AdminLayout;