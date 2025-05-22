 import { createSlice } from "@reduxjs/toolkit";
 import { Books } from "./mockData";

 const bookSlice = createSlice({
    name : 'books',
    initialState: [...Books],
    reducers: {
        addBook: (state, action) => {
            state.push(action.payload);
        },
    },
 });

 export const { addBook } = bookSlice.actions;
 export default bookSlice.reducer;