import { createSlice } from "@reduxjs/toolkit";

const AdminInfoSlice = createSlice({
    name: 'AdminInfo',
    initialState: {
        secret: 0,
    },
    reducers: {
        setSecret(state, action) {
            state.secret = action.payload.secret;
        }
    }
});

export default AdminInfoSlice;
export const { setSecret } = AdminInfoSlice.actions;