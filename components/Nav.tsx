'use client'

import React from 'react'
/*import { useTheme } from '../modules/LightOrDarkMode'*/

const Nav = () => {

    /*const { theme, toggleTheme } = useTheme();*/

    return (
        <div className='w-full h-[62px]  ring-1 ring-tgray flex items-center justify-between px-5 py-3 sm:px-10 lg:px-5 transform duration-500'>
          {/* normal sm: lg: xl: 2xl: */}
          
          <div className=' w-[192px] sm:w-[413px] flex justify-between transform duration-500'>
            <button className='lg:hidden w-[36px] h-[36px] ring-1 ring-tdarkgray rounded-[10px] flex items-center justify-center'>
            </button>
            <div className='sm:w-[355px] flex justify-between transform duration-500'>
                <div className='text-sm'>
                    <p className='font-bold text-tdark'>Dashboard</p>
                    <p className='text-tdarkgray leading-5 text-[12px]'>Welcome back, <span>John Doe</span> !</p>
                </div>
                <button className='hidden sm:block bg-tblue rounded-[10px] sm:hover:opacity-[0.8] transform duration-500'>
                    {/*<img src="" alt="" width={18} height={18} />*/}
                    <span className='h-[20px] px-5 text-sm text-twhite'>Connect wallet</span>
                    
                </button>
            </div>
          </div>
    
          <div className='w-[137px] flex justify-between text-tdarkgray'>
            <select className='ring-1 ring-tgray text-[12px] px-5 h-[36px] rounded-[10px]'>
                <option value="">USD</option>
                <option value="">EUR</option>
                <option value="">XOF</option>
            </select>
            <button className='w-[36px] h-[36px] ring-1 ring-tgray rounded-[10px]'>
                {/*theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'*/}
            </button>
          </div>
    
        </div>
    )
}

export default Nav
