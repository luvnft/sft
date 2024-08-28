import { configureStore } from "@reduxjs/toolkit";
import BaseQuery from "./rtk/api/BaseQuery";
import UserInfoSlice from "./rtk/slice/UserInfoSlice";

const ReduxStore = configureStore({
    reducer: {
        'API': BaseQuery.reducer,
        'UserInfo': UserInfoSlice.reducer
    },
    middleware: (getdefaultMiddlewars)=> getdefaultMiddlewars().concat(BaseQuery.middleware)
});

export default ReduxStore;