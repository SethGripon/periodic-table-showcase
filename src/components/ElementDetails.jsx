import React from 'react'
import anotherElement from 'element-histories'

const ElementDetails = ({ element }) => {
  const imgUrl = anotherElement.image(element.name)

  return (
    <div className='h-full w-full font-dmSansVariable pb-10 flex justify-center'>
      <div className='h-full w-[1000px] bg-gradient-to-r from-[#d7e9db] via-[#e2c6ee] to-[#ced9ed] rounded-lg p-3'>
        <div className='bg-black bg-opacity-25 h-full w-full grid grid-cols-2 grid-rows-1 rounded-md gap-[8px] p-[8px]'>
          <img className="h-full w-full rounded-md" src={imgUrl} alt="" />
          <div className='h-full w-full flex flex-col items-center'>
            <div>
              Hello World!
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ElementDetails