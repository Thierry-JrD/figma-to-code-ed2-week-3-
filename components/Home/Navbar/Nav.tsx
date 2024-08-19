import Image from 'next/image'
import React from 'react'

const Nav = () => {
  return (
    <div className='w-[240px] h-[100vh] bg-gray-200 flex flex-col items-center justify-between py-4'>
        <div className='w-[212px] h-[574px] flex flex-col justify-between ring-2 ring-black'>
            <div className='w-full h-[60px] bg-sky-100 rounded-2xl flex p-2 items-center justify-between'>
                <Image className='w-[36px] h-[36px] bg-sky-300 rounded-sm' />
                <div className='w-[132px] h-[28px] flex flex-col text-blue-500'>
                    <span className='text-lg font-semibold'>Tokena</span>
                    <span className='text-sm'>Finance app</span>
                </div>
            </div>

            <div className='w-full h-[478px] flex flex-col justify-between'>
                <p className='text-sm text-gray-500'>Menu</p>
            </div>
        </div>

        <div className='w-[212px] bg-green-500'>John Doe</div>
    </div>
  )
}

export default Nav
