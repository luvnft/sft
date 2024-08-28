import { createSlice } from "@reduxjs/toolkit";

const UserInfoSlice = createSlice({
    name: "UserInfo",
    initialState: {
        userId: "",
        userName: ""
    },
    reducers: {
        setUser(state, action) {
            if (action?.payload?.userId) {
                state.userId = action?.payload?.userId;
            }
            if (action?.payload?.userName) {
                state.userName = action?.payload?.userName;
            }
        }
    }
});

export const { setUser } = UserInfoSlice.actions;
export default UserInfoSlice;