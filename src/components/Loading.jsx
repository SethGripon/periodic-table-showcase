import React from 'react'

const Loading = () => {
  return (
    <div className='flex flex-col items-center gap-2 text-white font-dmSansVariable'>
      <div className='flex gap-2'>
        <div className='h-[15px] w-[15px] rounded-full bg-[#FF8080] animate-[bounce_1s_infinite_100ms]' />
        <div className='h-[15px] w-[15px] rounded-full bg-[#FFCF96] animate-[bounce_1s_infinite_250ms]' />
        <div className='h-[15px] w-[15px] rounded-full bg-[#F6FDC3] animate-[bounce_1s_infinite_350ms]' />
      </div>
      <h1 className='text-[50px] animate-pulse'>Loading</h1>
    </div>
  )
}

export default Loading