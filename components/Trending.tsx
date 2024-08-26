import React from 'react'

const Trending = () => {
  return (
    <div className='w-full flex flex-col'> {/* Container */}

      <div className='flex items-center justify-between'>
            <h2 className='w-full text-tdark text-lg font-semibold'>Trending</h2>
            <a href="#" className='font-medium text-xs text-tdarkgray'>
                View more {'>'}
            </a>
      </div>

      <div className='grid grid-cols-2 gap-3 lg:flex lg:items-center lg:justify-between lg:flex-nowrap'> {/* Coins container */}

        {/* Coin Info */}
        <div className='w-full p-3 ring-1 ring-tlightgray rounded-[10px] space-y-3'>

            <div className='flex justify-between text-tdarkgray'>
                <div className='flex items-center gap-2'>
                    <div className='w-[32px] h-[32px] rounded-full ring-1 bg-tblue bg-opacity-[20%]'></div>
                    <div className='flex flex-col text-xs font-bold'>
                        <span>Sui</span>
                        <span className='opacity-[60%] text-xss'>SUI</span>
                    </div>
                </div>
                <span className='p-1 flex items-center justify-between text-xs text-tred font-semibold ring-none bg-tred bg-opacity-[15%] rounded-full'>-10.5%</span>
            </div>
            
            <div className='flex flex-col text-tdarkgray text-xs'>
                <span className='font-bold'>1.56 SUI</span>
                <span className='font-medium'>$2,455,806,673</span>
            </div>
        </div>

        {/* Coin Info */}
        <div className='w-full p-3 ring-1 ring-tlightgray rounded-[10px] space-y-3'>

            <div className='flex justify-between text-tdarkgray'>
                <div className='flex items-center gap-2'>
                    <div className='w-[32px] h-[32px] rounded-full ring-1 bg-tblue bg-opacity-[20%]'></div>
                    <div className='flex flex-col text-xs font-bold'>
                        <span>Sui</span>
                        <span className='opacity-[60%] text-xss'>SUI</span>
                    </div>
                </div>
                <span className='p-1 flex items-center justify-between text-xs text-tred font-semibold ring-none bg-tred bg-opacity-[15%] rounded-full'>-10.5%</span>
            </div>
            
            <div className='flex flex-col text-tdarkgray text-xs'>
                <span className='font-bold'>1.56 SUI</span>
                <span className='font-medium'>$2,455,806,673</span>
            </div>
        </div>

        {/* Coin Info */}
        <div className='w-full p-3 ring-1 ring-tlightgray rounded-[10px] space-y-3'>

            <div className='flex justify-between text-tdarkgray'>
                <div className='flex items-center gap-2'>
                    <div className='w-[32px] h-[32px] rounded-full ring-1 bg-tblue bg-opacity-[20%]'></div>
                    <div className='flex flex-col text-xs font-bold'>
                        <span>Sui</span>
                        <span className='opacity-[60%] text-xss'>SUI</span>
                    </div>
                </div>
                <span className='p-1 flex items-center justify-between text-xs text-tred font-semibold ring-none bg-tred bg-opacity-[15%] rounded-full'>-10.5%</span>
            </div>
            
            <div className='flex flex-col text-tdarkgray text-xs'>
                <span className='font-bold'>1.56 SUI</span>
                <span className='font-medium'>$2,455,806,673</span>
            </div>
        </div>

        {/* Coin Info */}
        <div className='w-full p-3 ring-1 ring-tlightgray rounded-[10px] space-y-3'>

            <div className='flex justify-between text-tdarkgray'>
                <div className='flex items-center gap-2'>
                    <div className='w-[32px] h-[32px] rounded-full ring-1 bg-tblue bg-opacity-[20%]'></div>
                    <div className='flex flex-col text-xs font-bold'>
                        <span>Sui</span>
                        <span className='opacity-[60%] text-xss'>SUI</span>
                    </div>
                </div>
                <span className='p-1 flex items-center justify-between text-xs text-tred font-semibold ring-none bg-tred bg-opacity-[15%] rounded-full'>-10.5%</span>
            </div>
            
            <div className='flex flex-col text-tdarkgray text-xs'>
                <span className='font-bold'>1.56 SUI</span>
                <span className='font-medium'>$2,455,806,673</span>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Trending
