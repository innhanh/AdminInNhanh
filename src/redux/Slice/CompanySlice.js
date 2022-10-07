import { createSlice } from "@reduxjs/toolkit";

const CompanySlice = createSlice({
    name: "companys",
    initialState: {
        Company: []
    },
    reducers: {
        CompanySuccess: (state, actions) => {
            state.Company = actions.payload
        }
    }
});
export const {
    CompanySuccess
} = CompanySlice.actions;

export default CompanySlice;