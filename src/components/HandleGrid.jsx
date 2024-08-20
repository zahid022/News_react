import React from 'react'
import { useGetPagNewsQuery } from '../store/api'
import { nanoid } from '@reduxjs/toolkit'
import { Link } from 'react-router-dom'
import { CiBookmarkPlus } from "react-icons/ci";

function HandleGrid() {
    let { data } = useGetPagNewsQuery(3)

    if (data) {
        data = data.slice(0, 5)
    }

    return (
        <div className='grid grid-cols-2 grid-rows-3 md:grid-cols-4 md:grid-rows-2 gap-4'>
            {data?.map((item, i) => {

                return <div key={nanoid()} className={i === 0 ? 'col-span-2 md:row-span-2' : ''}>
                    <div className='relative h-48 md:h-full overflow-hidden'>
                        <img src={item.img} className='w-full h-full object-cover' alt="image" />
                        <div className='absolute p-3 inset-0 bg-[#0000004d] z-[300] flex flex-col justify-end '>
                            <Link to={`/detail/${item._id}`} className='text-white h-12 overflow-hidden font-bold text-[18px] duration-300 hover:text-[#FFA914] text-center'>{item.title}</Link>
                            <div className='md:mt-2 hidden md:flex md:justify-between md:items-center'>
                                <p className='text-white text-sm font-medium'>{item.category_id.name}</p>
                                <button className='text-white text-2xl'>
                                    <CiBookmarkPlus />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            })}
        </div>
    )
}

export default HandleGrid