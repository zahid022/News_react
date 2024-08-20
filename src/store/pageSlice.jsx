import { createSlice } from "@reduxjs/toolkit";

export const pageSlice = createSlice({
    name : "page",
    initialState : {
        value : 1,
        arr : []
    },
    reducers : {
        deyis : (state) => {
            state.value += 1
        },
        elave : (state, action) => {
            state.arr.push(...action.payload)
        }
    }
})

export const {deyis, elave} = pageSlice.actions
export default pageSlice.reducer