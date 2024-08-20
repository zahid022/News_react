import { createSlice } from "@reduxjs/toolkit";

export const editNewsSlice = createSlice({
    name : "edit",
    initialState : {
        id : ''
    },
    reducers : {
        changeId : (state, action) => {
            state.id = action.payload
        }
    }
})

export const {changeId} = editNewsSlice.actions
export default editNewsSlice.reducer