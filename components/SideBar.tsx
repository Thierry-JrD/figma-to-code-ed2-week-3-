import SideBarOption from '@/modules/SideBarOption'
import React from 'react'
import { anchors } from '@/Data/SideBarData'
 
const SideBar: React.FC = () => {
  return (
    <div className='w-[240px] h-full p-5 ring-1 ring-tgray flex flex-col justify-between'>

        <div className='flex flex-col gap-20 ring-1'>
            <div className='text-tblue flex gap-3'>
                <div className='w-[36px] h-[36px] ring-1 ring-tblue rounded-[10px] bg-tblue bg-opacity-[20%]'></div>

                <div className='flex flex-col'>
                    <span className='font-bold text-xs text-tdark2'>Tokena</span>
                    <span className='font-medium text-[70%]'>Finance app</span>
                </div>
            </div>

            <div className='flex flex-col gap-5'>
                <h2 className='text-sm text-tdarkgray font-medium'>Menu</h2>
                <div>
                    {anchors.map((text, id) => <SideBarOption key={id} text={text}/>)}
                </div>
            </div>
        </div>

        <div className='ring-1'>
            <div className='flex justify-between items-center'>
                <div className='w-[40px] h-[40px] rounded-full ring-1 ring-tdark'></div>
                <div className='flex flex-col'>
                    <span className='text-tdark text-xs font-medium'>John Doe</span>
                    <span className='text-tdarkgray text-xs'>johndoe8@gmail.com</span>
                </div>
            </div>
            <span></span>
        </div>

    </div>
  )
}

export default SideBar
