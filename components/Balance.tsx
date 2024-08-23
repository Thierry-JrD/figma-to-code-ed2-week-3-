import React from 'react'

const Balance = () => {
  return (
    <div className='p-3 space-y-2 flex flex-col justify-between ring-1 ring-tlightgray rounded-[10px]'>
        <div>
            <h2 className='text-tdark text-lg font-semibold'>Balance</h2>
            <div className='flex justify-between'>
                <span className='text-lg font-bold'>$63,755,200</span>
                <div className='w-[135px] flex items-center justify-between'>
                    <span className='p-1 text-xs text-tgreen font-semibold ring-none bg-tgreen bg-opacity-[15%] rounded-full'>+2.3%</span>
                    <span className='font-medium text-xs text-tdarkgray'>vs last month</span>
                </div>
            </div>
      </div>
      <div className='flex space-x-2'>
        <button className='flex items-center justify-center bg-tblue bg-opacity-[6%] rounded-[10px] text-sm font-medium text-tblue py-2 w-full'>Deposit</button>
        <button className='flex items-center justify-center bg-tblue bg-opacity-[6%] rounded-[10px] text-sm font-medium text-tblue py-2 w-full'>Withdraw</button>
      </div>
    </div>
  )
}

export default Balance
