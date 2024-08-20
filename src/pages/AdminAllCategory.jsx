import React from 'react'
import { useDeleteCategoryMutation, useGetAllCategoryQuery } from '../store/api'
import Loading from '../components/Loading'
import { nanoid } from '@reduxjs/toolkit'
import { FaRegTrashAlt } from 'react-icons/fa'
import Toast from '../components/Toast'
import toast from 'react-hot-toast'

function AdminAllCategory() {
    const { data, isLoading } = useGetAllCategoryQuery()

    const [deleteCategory] = useDeleteCategoryMutation()

    return (
        <>
            {isLoading ? (
                <div className="flex h-[90vh] w-full justify-center items-center">
                    <Loading />
                </div>
            ) : (
                <div>
                    <Toast />
                    <div className="flex gap-5 flex-wrap">
                        {data?.map(item => {
                            return <div className='bg-[#f1f1f1] flex justify-between items-center min-w-[300px] rounded-md px-5 py-2' key={nanoid()}>
                                <p>{item.name}</p>
                                <button
                                onClick={() => {
                                    deleteCategory(item._id)
                                    toast.success("Category deleted")   
                                }} 
                                className="px-5 py-2 bg-red-400 text-white rounded-md">
                                    <FaRegTrashAlt />
                                </button>
                            </div>
                        })}
                    </div>
                </div>
            )}

        </>
    )
}

export default AdminAllCategory