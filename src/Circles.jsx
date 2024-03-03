import React from 'react'

const Circles = () => {
  return (
    <div>
      <div className='bg-[#CDFADB] h-[600px] w-[600px] blur-[40px] rounded-full absolute top-0 left-[50px] z-20' />
      <div className='bg-[#F6FDC3] h-[300px] w-[300px] blur-[40px] rounded-full absolute top-[70px] left-[600px] z-30' />
      <div className='bg-[#FFCF96] h-[500px] w-[750px] blur-[40px] rounded-full absolute bottom-0 right-[50px] z-10' />
      <div className='bg-[#FF8080] h-[250px] w-[450px] blur-[40px] rounded-full absolute bottom-[30px] left-[200px] z-30' />
    </div>
  )
}

export default Circles