import { configureStore } from "@reduxjs/toolkit";
import BaseQuery from "./rtk/api/BaseQuery";

const ReduxStore = configureStore({
    reducer: {
        'API': BaseQuery.reducer
    },
    middleware: (getdefaultMiddlewars)=> getdefaultMiddlewars().concat(BaseQuery.middleware)
});

export default ReduxStore;