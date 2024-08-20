import { configureStore } from "@reduxjs/toolkit";
import { api } from "./api";
import pageSlice from "./pageSlice";
import newsAddSlice from "./newsAddSlice";
import editNewsSlice from "./editNewsSlice";

export const store = configureStore({
    reducer : {
        [api.reducerPath] : api.reducer,
        page : pageSlice,
        newsAdd : newsAddSlice,
        edit : editNewsSlice
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
})