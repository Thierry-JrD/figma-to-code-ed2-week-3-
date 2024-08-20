import React from 'react'
import Nav from './Navbar/Nav'
import SideNav from './Navbar/SideNav'

const Dashboard = () => {
  return (
    <div className='w-[1440px] flex ring-1 ring-red-500'>
      {/* SideNav */}
      <SideNav />

      {/* Nav and Content */}
      <div className='w-full '>

        {/* Nav */}
        <Nav />

        {/* Content */}
        <div className='pt-6 px-6 flex flex-col space-y-[38px] ring-1 ring-green-500'>

          {/* Balance and Trending */}
          <div className='w-full h-[125px] flex ring-1 ring-purple-500'>
          </div>

          {/* Crypto Recap Array */}
          <div className='h-[816px] flex flex-col ring-1 space-y-[32px] ring-purple-500'>
            {/* Btns section */}
            <div className='w-full h-[48px] flex justify-between ring-1 ring-sky-500'>
              <div className='w-[100px] h-full ring-1 ring-green-500'></div>
              <div className='w-[100px] h-full ring-1 ring-green-500'></div>
            </div>
            {/* Crypto Array */}
            <div className='w-full h-[744px] flex flex-col ring-1 ring-green-500 space-y-0 rounded-lg'>

              <div className='w-full h-[68px] flex justify-between ring-1 ring-black'></div>

              <div className='w-full ring-1 ring-black'></div>

              <div className='w-full ring-1 ring-black'></div>
              
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Dashboard