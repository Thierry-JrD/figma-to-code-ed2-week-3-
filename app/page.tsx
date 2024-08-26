'use client'

import Nav from '../components/Nav'
import React from 'react'
import { ThemeProvider } from '../modules/LightOrDarkMode'
import Balance from '@/components/Balance'
import Trending from '@/components/Trending'
import SideBar from '@/components/SideBar'

const HomePage = () => {
  return (
    <div className='h-full'>
      <ThemeProvider>
        <div className='h-full flex'>
          <SideBar />

          <div className='w-full'>
            {/* NavBar */}
            <Nav />

            <div className='px-5 pt-5 flex flex-col'>

              <div className='flex flex-col justify-between lg:flex-row space-y-5 gap-x-6'>

                {/* Balance */}
                <Balance />
                {/* Trending */}
                <Trending />

              </div>

            </div>

          </div>  

        </div>
      </ThemeProvider>
    </div>
  )
}

export default HomePage
