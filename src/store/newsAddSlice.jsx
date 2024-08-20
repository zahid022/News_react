import { createSlice } from "@reduxjs/toolkit";

export const newsAddSlice = createSlice({
    name: "newsAdd",
    initialState: {
        img: '',
        title: '',
        description: '',
        category_id: ''
    },
    reducers: {
        setImg: (state, action) => { state.img = action.payload },
        setTitle: (state, action) => { state.title = action.payload },
        setDescription: (state, action) => { state.description = action.payload },
        setCategory_id: (state, action) => { state.category_id = action.payload }
    }
})

export const { setImg, setTitle, setDescription, setCategory_id } = newsAddSlice.actions
export default newsAddSlice.reducer