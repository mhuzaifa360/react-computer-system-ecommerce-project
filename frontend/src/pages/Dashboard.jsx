import React from 'react'
import Sidebar from '../components/Dashboard/Sidebar'
import Users from '../components/Dashboard/Users'
import Categories from '../components/Dashboard/Categories'

function Dashboard() {
  return (
    <div className='flex p-3'>
        {/* SIDEBAR */}
      <div className='w-[25%] bg-slate-200 rounded-md'>
        <Sidebar />
      </div>
      {/* CONTENT */}
      <div className='w-[75%] bg-blue-300'>
        <Users />
        <Categories />
        
      </div>
    </div>
  )
}

export default Dashboard
