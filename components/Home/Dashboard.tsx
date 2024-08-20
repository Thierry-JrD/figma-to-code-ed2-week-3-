import React from 'react'
import Nav from './Navbar/Nav'
import SideNav from './Navbar/SideNav'

const Dashboard = () => {
  return (
    <div className='w-[1440px] flex ring-1 ring-red-500'>
      <SideNav />
      <div className='w-full'>
        <Nav />
        <div className='flex flex-col h-[960px] ring-1 ring-green-500'>
          
        </div>
      </div>
    </div>
  )
}

export default Dashboard