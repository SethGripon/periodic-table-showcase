import React from 'react'

const Circles = ({ isLoading }) => {

  return (
    <div>
      <div className={`${isLoading ? `bg-[#cdfadb]`: `bg-[#CDFADB42]`} h-[600px] w-[600px] blur-[40px] rounded-full absolute top-0 left-[50px] z-20`} />
      <div className={`${isLoading ? `bg-[#F6FDC3]`: `bg-[#F6FDC342]`} h-[300px] w-[300px] blur-[40px] rounded-full absolute top-[70px] left-[600px] z-30`} />
      <div className={`${isLoading ? `bg-[#FFCF96] `: `bg-[#FFCF9642] `} h-[500px] w-[750px] blur-[40px] rounded-full absolute bottom-0 right-[50px] z-10`} />
      <div className={`${isLoading ? `bg-[#FF8080]`: `bg-[#FF808042]`}  h-[250px] w-[450px] blur-[40px] rounded-full absolute bottom-[30px] left-[200px] z-30`} />
    </div>
  )
}

export default Circles