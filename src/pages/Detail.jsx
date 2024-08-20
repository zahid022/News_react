import React from 'react'
import { useParams } from 'react-router-dom'
import { useGetDetailNewsQuery } from '../store/api'
import Loading from '../components/Loading'
import { FaEye } from "react-icons/fa";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { CiBookmarkPlus } from "react-icons/ci";

function Detail() {

    const { id } = useParams()
    const { data, isLoading } = useGetDetailNewsQuery(id)
    let formattedDateTime = null

    if (data) {
        const date = new Date(data.updatedAt);
        formattedDateTime = date.toLocaleString();
    }
    return (
        <main>
            <div className="container mx-auto px-4 2xl:w-[1300px]">
                {isLoading ? (
                    <div className="flex h-[80vh] w-full justify-center items-center">
                        <Loading />
                    </div>
                ) : (
                    <div className="flex flex-wrap justify-center py-10">
                        {data && (
                            <div className='w-full'>
                                <div>
                                    <div className='h-96 w-[55%] mx-auto mb-2 overflow-hidden rounded-md'>
                                        <img src={data.img} alt="image" className='w-full h-full object-cover' />
                                    </div>
                                    <div className='px-3 py-4'>
                                        <div className='mb-2 flex justify-between items-center'>
                                            <p className='text-[12px]'>{formattedDateTime}</p>
                                            <button className='flex items-center gap-1 text-[12px]'>
                                                <FaEye />
                                                {data.view}
                                            </button>
                                        </div>
                                        <p className='font-semibold block'>{data.title}</p>
                                        <p className='my-2 text-[#686666] pb-4 border-b border-[#666666]'>{data.description}</p>
                                        <div className='flex items-center pt-4 justify-between gap-3 mb-2'>
                                            <div className='flex items-center gap-3'>
                                                <button className=' flex items-center gap-1'>
                                                    <AiOutlineLike />
                                                    {data.like}
                                                </button>
                                                <button className=' flex items-center gap-1'>
                                                    <AiOutlineDislike />
                                                    {data.dislike}
                                                </button>
                                            </div>
                                            <div>
                                                <button>
                                                    <CiBookmarkPlus className='text-[18px]' />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>)}
            </div>
        </main>
    )
}

export default Detail