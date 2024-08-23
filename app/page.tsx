'use client'

import Nav from '../components/Nav'
import React from 'react'
import { ThemeProvider } from '../modules/LightOrDarkMode'
import Balance from '@/components/Balance'
import Trending from '@/components/Trending'

const HomePage = () => {
  return (
    <ThemeProvider>
      <div>
        {/* NavBar */}
        <Nav />

        <div className='px-5 pt-5 flex flex-col'>

          <div className='flex flex-col lg:flex-row space-y-5 gap-x-6'>
            {/* Balance */}
            <Balance />
            {/* Trending */}
            <Trending />
          </div>

        </div>
      </div>
    </ThemeProvider>
  )
}

export default HomePage
