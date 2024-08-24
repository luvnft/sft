import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "./components/Layouts/MainLayouts";
import ErrorElement from "./components/ui/ErrorElement";
import Home from "./pages/Home";
import Task from "./pages/Task";
import Withdraw from "./pages/Withdraw";

const MainRoutes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayouts/>,
        errorElement: <ErrorElement/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: 'task',
                element: <Task/>
            },
            {
                path: 'withdraw',
                element: <Withdraw/>
            }
        ]

    }
]);

export default MainRoutes;