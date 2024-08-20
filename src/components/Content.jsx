import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useGetPagNewsQuery } from '../store/api'
import { deyis, elave } from '../store/pageSlice'
import { nanoid } from '@reduxjs/toolkit'
import Card from './Card'

function Content() {
    const dispatch = useDispatch()
    const { value, arr } = useSelector((state) => state.page)
    const { data } = useGetPagNewsQuery(value)

    function ok() {
        dispatch(deyis())
        dispatch(elave(data))
    }

    useEffect(() => {
        ok()
    }, [])

    return (
        <div>
            <div className='flex flex-wrap'>
                {arr.map((item) => {
                    return <Card key={nanoid()} item={item} txt={"Read More"} />
                })}
            </div>
            <div className='flex justify-center'>
                <button className='bg-[#191919] text-white px-8 py-3 rounded-md hover:text-white hover:bg-[#191919b4] font-medium text-[16px] duration-300' onClick={ok}>Daha çox...</button>
            </div>
        </div>
    )
}

export default Content