import { createSlice } from "@reduxjs/toolkit";

const UserInfoSlice = createSlice({
    name: "UserInfo",
    initialState: {
        userId: "",
        _id: "",
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
        },
        setMongooseId(state, action){
            if (action?.payload?._id) {
                state._id = action?.payload?._id;
            }
        }
    }
});

export const { setUser, setMongooseId } = UserInfoSlice.actions;
export default UserInfoSlice;