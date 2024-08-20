import React from 'react'
import { useGetPagNewsQuery } from '../store/api'
import { nanoid } from '@reduxjs/toolkit'
import { Link } from 'react-router-dom'
import TimeDisplay from './Timedisplay'

function Hotnow({pg}) {
    
    const { data } = useGetPagNewsQuery(pg)
    
    return (
        <ul>
            {data?.map(item => {
                return <li key={nanoid()} className='py-2 border-b border-[#EBEBEB] flex items-center gap-3'>
                    <span>
                        <TimeDisplay isoString={item.createdAt} />
                    </span>
                    <p className='hover:text-[#FFA914] duration-300'>
                        <Link to={`/detail/${item._id}`}>
                            {item.title}
                        </Link>
                    </p>
                </li>
            })}
        </ul>
    )
}

export default Hotnow