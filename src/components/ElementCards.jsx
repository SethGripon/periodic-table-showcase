import React from 'react'

const ElementCards = () => {
  return (
    <div className='bg-purple-300 h-full w-100 font-dmSansVariable rounded-lg'>
      <div className='flex flex-col justify-center items-center py-2 px-5'>
        {/* Number  */}
        <p className='font-bold'>13</p>
        {/* Symbol  */}
        <h1 className='text-[50px] font-bold italic mt-[-15px] mb-[-10px]'>Al</h1>
        <div className='flex flex-col justify-center items-center leading-4'>
          {/* Name  */}
          <h3 className='font-bold'>Aluminum</h3>
          {/* Atomic Weight  */}
          <h3 className='font-bold'>26.982</h3>
          {/* Electrons  */}
          <h4 className='text-[12px]'>2-8-3</h4>
        </div>
      </div>
    </div>
  )
}

export default ElementCards