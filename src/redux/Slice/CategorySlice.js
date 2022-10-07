import { createSlice } from "@reduxjs/toolkit";

const CatrgorySlice = createSlice({
    name: "categorys",
    initialState: {
        Categorys: []
    },
    reducers: {
        ListCateSuccess: (state, actions) => {
            state.Categorys = actions.payload
        }
    }
});
export const {
    ListCateSuccess
} = CatrgorySlice.actions;

export default CatrgorySlice;