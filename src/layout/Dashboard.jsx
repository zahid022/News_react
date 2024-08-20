import React from 'react'
import Sidebar from '../components/Sidebar'
import { Outlet } from 'react-router-dom'

function Dashboard() {
  return (
    <div className='flex'>
        <Sidebar />
        <div className='absolute py-10 px-8 top-0 right-0 bottom-0 left-[350px]'>
            <Outlet />
        </div>
    </div>
  )
}

export default Dashboard