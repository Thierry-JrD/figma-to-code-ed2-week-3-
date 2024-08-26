import React from 'react'

type Props = {text:string};

const SideBarOption: React.FC<Props> = ({ text }) => {
  return (
    <div className='w-full p-3 hover:bg-tblue flex gap-3 cursor-pointer items-center'>
      <div className='w-[100px] h-[100px] ring-1 ring-tdark'></div>
      <a className='text-tdark text-xs font-semibold'>{text}</a>
    </div>
  )
}

export default SideBarOption
