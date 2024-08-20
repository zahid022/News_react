import React from 'react'
import { useAddNewsMutation, useGetAllCategoryQuery } from '../store/api'
import { nanoid } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import { setCategory_id, setDescription, setImg, setTitle } from '../store/newsAddSlice'
import toast from 'react-hot-toast'
import Toast from '../components/Toast'

function AdminAddNews() {
    const {data : arr} = useGetAllCategoryQuery()
    const [addNews] = useAddNewsMutation() 

    const { img, title, description, category_id } = useSelector(state => state.newsAdd)

    const dispatch = useDispatch()

    function handleSubmit(e){
        e.preventDefault()
        addNews({img, title, description, category_id})
        toast.success('Form başarıyla gönderildi!');
        dispatch(setCategory_id(''))
        dispatch(setDescription(''))
        dispatch(setImg(''))
        dispatch(setTitle(''))
    }
    
    return (
        <div className='h-[90vh] flex items-center justify-center'>
            <Toast />
            <div>
                <form onSubmit={handleSubmit} className='w-[400px] rounded-md border border-black py-4 px-5'>
                    <h2 className='font-bold text-[32px] text-center mb-4'>Add News</h2>
                    <div className='mb-2'>
                        <label className='block mb-1' htmlFor="newsName">News Img</label>
                        <input value={img} onChange={(e) => dispatch(setImg(e.target.value))} type="text" className='border block w-full px-4 py-2 rounded-md outline-none border-black' id='newsImg' placeholder='Link daxil edin...' />
                    </div>
                    <div className='mb-2'>
                        <label className='block mb-1' htmlFor="newsName">News name</label>
                        <input value={title} onChange={(e) => dispatch(setTitle(e.target.value))} type="text" className='border block w-full px-4 py-2 rounded-md outline-none border-black' id='newsName' placeholder='News adı daxil edin...' />
                    </div>
                    <div className='mb-2'>
                        <label className='block mb-1' htmlFor="newsDes">News Description</label>
                        <textarea value={description} onChange={(e) => dispatch(setDescription(e.target.value))} className='border block w-full px-4 py-2 rounded-md outline-none border-black' placeholder='News adı daxil edin...' id="newsDes"></textarea>
                    </div>
                    <div className='mb-2'>
                        <label className='block mb-1' htmlFor="newsCat">News Description</label>
                        <select value={category_id} onChange={(e) => dispatch(setCategory_id(e.target.value))} className="w-full border border-black px-5 py-2 rounded-md" id="newsCat">
                            <option value="">Kategoriya seçin</option>
                            {arr?.map(item => {
                                return <option className="p-2" key={nanoid()} value={item._id}>{item.name}</option>
                            })}
                        </select>
                    </div>
                    <div className='flex justify-center'>
                        <button type='submit' className='px-5 py-2 rounded-md bg-[#191919] text-white'>Add</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AdminAddNews