import React, { useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { useSearchNewsQuery } from '../store/api'
import { nanoid } from '@reduxjs/toolkit'
import { Link } from 'react-router-dom'

function SearchInputGroup({ flag, setFlag }) {
    const [value, setValue] = useState('')
    const { data } = useSearchNewsQuery(value, { skip: !value })

    const active = 'opacity-1 h-[30vh] translate-y-[0]'
    const deactive = 'opacity-0 h-0 translate-y-[-300%]'
    const cl = 'duration-300 shadow-md shadow-gray-500 fixed top-0 right-0 flex justify-center pt-10 left-0 bg-white z-[999]'
    return (
        <div className={flag ? cl + ' ' + active : cl + ' ' + deactive}>
            <button onClick={() => setFlag(!flag)} className='px-5 py-2 bg-[#191919] text-white rounded-md text-lg absolute top-5 right-5'>
                <IoMdClose />
            </button>
            <div className='flex w-[80%] pb-3 mx-auto relative'>
                <div className='w-4/12 pr-3'>
                    <input onChange={(e) => setValue(e.target.value)} type="text" placeholder='News name...' className='block px-5 h-10 w-full rounded-md outline-none border border-black' />
                </div>
                <div className='w-8/12 pl-3'>
                    <ul className=' px-4 pt-1 h-32 overflow-y-auto'>
                        {data?.length > 0 ? data.map(item => {
                            return <li className='mb-2 items-center flex gap-3 overflow-hidden duration-300 hover:text-[#FFA914] px-1' key={nanoid()}>
                                <div className='w-10 h-10 overflow-hidden'>
                                    <img className='w-full h-full object-cover' src={item.img} alt="Image" />
                                </div>
                                <Link onClick={() => setFlag(!flag)} to={`/detail/${item._id}`}>{item.title}</Link>
                            </li>
                        }) : (<li>Axtardığınız xəbər yoxdur.</li>)}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SearchInputGroup