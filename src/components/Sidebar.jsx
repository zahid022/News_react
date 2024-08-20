import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className='fixed top-0 bottom-0 left-0 w-[350px] bg-slate-800'>
      <div className='p-3'>
        <div className='mb-4'>
          <h2 className='text-white pb-2 border-b border-gray-500 font-medium text-[24px]'>News</h2>
        </div>
        <div className='pt-6'>
          <ul className='text-white font-medium text-[18px]'>
            <li>News
              <ul className='p-2'>
                <li className='font-normal mb-2 text-[16px]'>
                  <Link to={'add'}>Add News</Link>
                </li>
                <li className='font-normal mb-2 text-[16px]'>
                  <Link to={'/admin'}>Show News</Link>
                </li>
              </ul>
            </li>
            <li>Category
              <ul className='p-2'>
                <li className='font-normal mb-2 text-[16px]'>
                  <Link to={'addcat'}>Add Category</Link>
                </li>
                <li className='font-normal mb-2 text-[16px]'>
                  <Link to={'category'}>Show Category</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Sidebar