import { createSlice } from "@reduxjs/toolkit";

const UserInfoSlice = createSlice({
    name: "UserInfo",
    initialState: {
        userId: "",
        userName: ""
    },
    reducers: {
        setUser(state, action) {
            state.userId = action.payload.userId;
            state.userName = action.payload.userName;
        }
    }
});

export const {setUser} = UserInfoSlice.actions;
export default UserInfoSlice;