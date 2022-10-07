import { createSlice } from "@reduxjs/toolkit";

const AdminSlice = createSlice({
    name: "admin",
    initialState: {
        Admin: []
    },
    reducers: {
        loginAdminSuccess: (state, actions) => {
            state.Admin = actions.payload;
        },
        logoutSuccess: (state) => {
            state.LoginAdmin = [];
            state.ImageCarousel = [];
        },
    }
});
export const {
    loginAdminSuccess,
    logoutSuccess,
    imageCarouselSuccess
} = AdminSlice.actions;

export default AdminSlice;