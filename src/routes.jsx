import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "./components/Layouts/MainLayouts";
import ErrorElement from "./components/ui/ErrorElement";
import Home from "./pages/Home";
import Task from "./pages/Task";
import Withdraw from "./pages/Withdraw";
import AdminLayout from "./components/Layouts/AdminLayout";
import Login from "./pages/Admin/Login";
import AdminProtector from "./utils/AdminProtector";
import UserManagement from "./pages/Admin/UserManagement";
import TaskManagement from "./pages/Admin/TaskManagement";

const MainRoutes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayouts />,
        errorElement: <ErrorElement />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'task',
                element: <Task />
            },
            {
                path: 'withdraw',
                element: <Withdraw />
            }
        ]
    },
    {
        path: '/admin/login',
        element: <Login />,
        errorElement: <ErrorElement />,
    },
    {
        path: '/admin',
        element: <AdminProtector><AdminLayout /></AdminProtector>,
        errorElement: <ErrorElement />,
        children: [
            {
                index: true,
                element: <UserManagement />
            },
            {
                path: 'task',
                element: <TaskManagement/>
            }
        ]
    }
]);

export default MainRoutes;