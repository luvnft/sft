import { configureStore } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import BaseQuery from "./rtk/api/BaseQuery";
import UserInfoSlice from "./rtk/slice/UserInfoSlice";


const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}

const UserInfoReducer = persistReducer(persistConfig, UserInfoSlice.reducer);

const ReduxStore = configureStore({
    reducer: {
        'API': BaseQuery.reducer,
        'UserInfo': UserInfoReducer
    },
    middleware: (getdefaultMiddlewars) => getdefaultMiddlewars({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }).concat(BaseQuery.middleware)
});

export const persistor = persistStore(ReduxStore);

export default ReduxStore;