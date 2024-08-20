import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { FaEye } from "react-icons/fa";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { CiBookmarkPlus } from "react-icons/ci";
import { useDisLikeNewsMutation, useLikeNewsMutation, useViewNewsMutation } from '../store/api';

function Card({ item, txt }) {

  const date = new Date(item.updatedAt);
  const formattedDateTime = date.toLocaleString();
  const { _id } = item
  const [itemLike, setItemLike] = useState(item.like)
  const [itemDisLike, setItemDisLike] = useState(item.dislike)

  const [likeNews] = useLikeNewsMutation()
  const [disLikeNews] = useDisLikeNewsMutation()
  const [viewNews] = useViewNewsMutation()

  async function handleLike() {
    await likeNews(_id)
    setItemLike(itemLike + 1)
  }

  async function handleDislike() {
    await disLikeNews(_id)
    setItemDisLike(itemDisLike + 1)
  }

  async function handleView() {
    await viewNews(_id)
  }

  return (
    <div className='w-full md:w-6/12 mb-4 lg:w-4/12 xl:w-3/12 px-3'>
      <div className='rounded-md pb-1 border border-[#232323] overflow-hidden'>
        <div className='h-60 overflow-hidden'>
          <img src={item.img} alt="image" className='w-full h-full object-cover' />
        </div>
        <div className='py-2 px-2'>
          <div className='mb-2 flex justify-between items-center'>
            <p className='text-[12px]'>{formattedDateTime}</p>
            <button className='flex items-center gap-1 text-[12px]'>
              <FaEye />
              {item.view}
            </button>
          </div>
          <p className='font-semibold h-12 overflow-hidden block'>{item.title}</p>
          <p className='my-2 h-24 text-[#686666] overflow-hidden'>{item.description}</p>
          <div className='flex items-center justify-between gap-3 mb-2'>
            <div className='flex items-center gap-3'>
              <button onClick={handleLike} className=' flex items-center gap-1'>
                <AiOutlineLike />
                {itemLike}
              </button>
              <button onClick={handleDislike} className='flex items-center gap-1'>
                <AiOutlineDislike />
                {itemDisLike}
              </button>
            </div>
            <div>
              <button>
                <CiBookmarkPlus className='text-[18px]' />
              </button>
            </div>
          </div>
          <div className='flex justify-center'>
            <Link onClick={handleView} to={`/detail/${item._id}`} className='bg-[#191919] duration-300 hover:text-white hover:bg-[#191919b4] text-[14px] text-white font-medium px-6 py-2 rounded-md'>{txt}</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card