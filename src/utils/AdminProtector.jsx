import { useSelector } from "react-redux";
import { useLoginAdminMutation } from "../rtk/api/AdminEndpoint";
import { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";

const AdminProtector = ({ children }) => {
    const secret = useSelector((state) => state?.AdminInfo?.secret);
    const [triggerLogin, { data, isSuccess, isError, isLoading }] = useLoginAdminMutation();
    const link = useLocation()?.pathname;
    useEffect(() => {
        if (secret) {
            triggerLogin({ secret: secret })
        }
    }, [])

    if (isSuccess) {
        if (link === '/admin/login') {
            return (
                <div className="">
                    <Navigate to={'/admin'} />
                </div>
            )
        } else {
            return (
                <div>
                    {children}
                </div>
            );
        }
    }
    if (isError === true) {
        return (
            <div className="">
                <Navigate to={'/admin/login'} />
            </div>
        )
    }
    if (isLoading === true) {
        return (
            <div className="flex justify-center items-center min-h-screen bg-[#041218]">
                <span className="loading loading-dots loading-lg"></span>
            </div>
        )
    }
};

export default AdminProtector;