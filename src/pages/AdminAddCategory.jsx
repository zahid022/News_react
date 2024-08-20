import React, { useState } from 'react'
import { useAddCatMutation } from '../store/api'
import Toast from '../components/Toast'
import toast from 'react-hot-toast'

function AdminAddCategory() {
    const [name, setName] = useState()
    const [addCat ] = useAddCatMutation()

    function handleSubmit(e) {
        e.preventDefault()
        addCat({name})
        toast.success("Category created")
        setName('')
    }

    return (
        <div className='h-[90vh] flex items-center justify-center'>
            <Toast />
            <form onSubmit={handleSubmit} className='w-[400px] border border-black rounded-md px-4 py-6'>
                <h2 className='text-center mb-4 font-bold text-[32px]'>Add Category</h2>
                <div className='mb-4'>
                    <label className='mb-2 font-medium text-[18px] block' htmlFor="catName">Category Name</label>
                    <input value={name} onInput={(e) => setName(e.target.value)} type="text" id='catName' className='block px-4 py-2 border border-black outline-none rounded-md w-full' placeholder='Category name...' />
                </div>
                <div className='flex justify-center '>
                    <button type='submit' className='bg-[#191919] text-white px-5 py-2 rounded-md'>
                        Add
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AdminAddCategory