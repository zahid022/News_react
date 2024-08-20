import React, { useEffect, useState } from 'react'
import { useEditNewsMutation, useGetAllCategoryQuery, useGetDetailNewsQuery } from '../store/api';
import { nanoid } from '@reduxjs/toolkit';
import Toast from './Toast';
import toast from 'react-hot-toast';

function EditModal({ id, setFlag }) {
    const { data: arr = {}, isLoading } = useGetDetailNewsQuery(id)
    const { data: category } = useGetAllCategoryQuery()
    const [editNews] = useEditNewsMutation()
    const [img, setImg] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [category_id, setCategory_id] = useState('')

    useEffect(() => {
        if (arr) {
            setImg(arr.img || '')
            setTitle(arr.title || '')
            setDescription(arr.description || '')
            setCategory_id(arr.category_id?._id || '')
        }
    }, [arr])

    function handleSubmit(e) {  
        e.preventDefault()
        const obj = {
            img : img,
            title : title,
            description : description,
            category_id : category_id
        }
        editNews({id, obj})
        toast.success("News edited")
    }

    if (isLoading) {
        return <div>loading...</div>
    }

    return (
        <div className='flex justify-center items-center fixed inset-0 z-[900] bg-[#00000080]'>
            <Toast />
            <form onSubmit={handleSubmit} className='bg-white rounded-md p-3 min-w-[500px]'>
                <h2 className='flex pb-2 border-b border-gray-800 justify-between items-center'>
                    <span className='font-bold text-[24px]'>Edit News</span>
                    <button onClick={() => setFlag(false)} className='p-2 text-[18px]'>X</button>
                </h2>
                <div className='py-3'>
                    <div>
                        <label htmlFor="newsImg" className='block mb-2 font-medium text-[18px]'>Image</label>
                        <input value={img} onChange={(e) => setImg(e.target.value)} type="text" id='newsImg' placeholder='Link daxil edin...' className='block w-full outline-none px-5 py-2 rounded-md border border-black' />
                    </div>
                </div>
                <div className='py-3'>
                    <div>
                        <label htmlFor="newsTitle" className='block mb-2 font-medium text-[18px]'>Title</label>
                        <input value={title} onChange={(e) => setTitle(e.target.value)} type="text" id='newsTitle' placeholder='Title daxil edin...' className='block w-full outline-none px-5 py-2 rounded-md border border-black' />
                    </div>
                </div>
                <div className='py-3'>
                    <div>
                        <label htmlFor="newsDes" className='block mb-2 font-medium text-[18px]'>Description</label>
                        <textarea id="newsDes" onChange={(e) => setDescription(e.target.value)} value={description} className='block w-full outline-none px-5 py-2 rounded-md border border-black' placeholder='Desc daxil edin...'></textarea>
                    </div>
                </div>
                <div className='py-3'>
                    <div>
                        <label htmlFor="newsCat" className='block mb-2 font-medium text-[18px]'>Category</label>
                        <select id="newsCat" value={category_id} onChange={(e) => setCategory_id(e.target.value)} className='block w-full outline-none px-5 py-2 rounded-md border border-black'>
                            <option value="">Kateqoriya seçin</option>
                            {category?.map(item => {
                                return <option value={item._id} key={nanoid()}>{item.name}</option>
                            })}
                        </select>
                    </div>
                </div>
                <div>
                    <div className='flex justify-center'>
                        <button type='submit' className='bg-[#191919] px-5 py-2 rounded-md text-white'>Edit</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default EditModal
