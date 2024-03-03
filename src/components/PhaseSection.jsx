import React from 'react'

const PhaseSection = () => {
  return (
    <div className='flex flex-col justify-center items-center h-full w-full font-dmSansVariable'>
      <div className='flex gap-2'>
        <h1 className='text-[9px] font-bold'>State of MATTER </h1>
        <p className='text-[9px] italic text-gray-500'>(color of the text)</p>
      </div>
      <div className="flex justify-evenly items-center w-[100px] text-[10px] italic font-bold">
        <h6 className='text-red-700'>SOLID</h6>
        <h6 className='text-blue-700'>LIQUID</h6>
        <h6 className='text-black'>GAS</h6>
      </div>
    </div>
  )
}

export default PhaseSection