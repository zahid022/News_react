import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const token = localStorage.getItem("token")

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "https://oxuazbackend.vercel.app/" }),
    endpoints: (builder) => ({
        getAllCategory: builder.query({
            query: () => `/categories`
        }),
        getAllNews: builder.query({
            query: () => `/news`
        }),
        getPagNews: builder.query({
            query: (page) => `/news_page/${page}`
        }),
        getCatNews: builder.query({
            query: (id) => `/news_by_categ/${id}`
        }),
        getDetailNews: builder.query({
            query: (id) => `/news/${id}`
        }),
        likeNews: builder.mutation({
            query: (id) => ({
                url: `news_like/${id}`,
                method: 'PATCH'
            })
        }),
        disLikeNews: builder.mutation({
            query: (id) => ({
                url: `news_dislike/${id}`,
                method: 'PATCH'
            })
        }),
        loginPost: builder.mutation({
            query: ({login, password}) => ({
                url: `/login`,
                method: 'POST',
                body : {login, password}
            })
        }),
        addNews : builder.mutation({
            query : ({img, title, description, category_id}) => ({
                url : `/news`,
                method : "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body : JSON.stringify({img, title, description, category_id})
            })
        }),
        addCat : builder.mutation({
            query : ({name}) => ({
                url : `/categories`,
                method : "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body : JSON.stringify({name})
            })
        }),
        deleteNews : builder.mutation({
            query : (id) => ({
                url : `/news/${id}`,
                method : "DELETE",
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
        }),
        viewNews : builder.mutation({
            query : (id) => ({
                url : `/news_view/${id}`,
                method : "PATCH",
            })
        }),
        deleteCategory : builder.mutation({
            query : (id) => ({
                url : `/categories/${id}`,
                method : "DELETE",
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            })
        }),
        editNews : builder.mutation({
            query : ({id, obj}) => ({
                url : `news/${id}`,
                method : 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body : JSON.stringify(obj)
            })
        }),
        searchNews : builder.query({
            query : (value) => ({
                url : `/news/search?title=${value}`
            })
        })
    })
})

export const { 
    useGetAllCategoryQuery, 
    useGetPagNewsQuery,
    useGetCatNewsQuery,
    useGetDetailNewsQuery,
    useLikeNewsMutation,
    useDisLikeNewsMutation,
    useLoginPostMutation,
    useAddNewsMutation,
    useDeleteNewsMutation,
    useGetAllNewsQuery,
    useDeleteCategoryMutation,
    useAddCatMutation,
    useEditNewsMutation,
    useSearchNewsQuery,
    useViewNewsMutation
} = api