import React from 'react'
import { HiArrowLongLeft, HiArrowLongRight } from "react-icons/hi2";

const MainCard = ({ element }) => {
  const cateColorCard = (category) => {
    switch (category) {
      case "alkali metal": return 'bg-red-600 text-white'
      case "alkaline earth metal": return 'bg-amber-500 text-white'
      case "transition metal": return 'bg-blue-300'
      case "lanthanide": return 'bg-blue-600 text-white'
      case "actinide": return 'bg-emerald-300'
      case "post-transition metal": return 'bg-[#B895C5]'
      case "metalloid": return 'bg-yellow-400'
      case "diatomic nonmetal": return 'bg-[#9EC87C]'
      case "polyatomic nonmetal": return 'bg-[#9EC87C]'
      case "noble gas": return 'bg-pink-300'
      default: return 'bg-white'
    }
  }

  const phaseColor = (phase) => {
    switch (phase) {
      case "Gas": return 'text-red-700'
      case "Liquid": return 'text-blue-700'
      default: return 'text-black'
    }
  }

  const bgColorCard = cateColorCard(element.category)
  const txtColorCard = phaseColor(element.phase)

  return (
    <div className={`${bgColorCard} relative h-full w-full font-dmSansVariable rounded-lg cursor-pointer transition-all duration-500`}>
      <div className='flex flex-col justify-center items-center '>
        {/* Number  */}
        <p className='text-[20px] font-bold'>{element.number}</p>
        {/* Symbol  */}
        <h1 className='text-[60px] font-courgette font-bold mt-[-9px] mb-[-10px]'>{element.symbol}</h1>
        <div className='flex flex-col justify-center items-center leading-4'>
          {/* Name  */}
          <h3 className={`text-[16px] font-bold ${txtColorCard}`}>{element.name}</h3>
          {/* Atomic Weight  */}
          <h3 className='text-[14px] font-bold'>{element.atomic_mass.toFixed(3)}</h3>
          {/* Electrons  */}
          <h4 className='text-[10px]'>{element.shells.length > 1 ? element.shells.join("-") : element.shells}</h4>
        </div>
      </div>
      <div className='text-black'>
        <div className='absolute top-2 -right-[85px]'>
          <div className='flex justify-center items-center'>
            <HiArrowLongRight />
            <p className='ps-1 text-[8px] font-bold'>Atomic Number</p>
          </div>
        </div>
        <div className='absolute top-[60px] -left-[50px]'>
          <div className='flex justify-center items-center'>
            <p className='pe-1 text-[8px] font-bold'>Symbol</p>
            <HiArrowLongLeft />
          </div>
        </div>
        <div className='absolute bottom-[36px] -left-[45px]'>
          <div className='flex justify-center items-center'>
            <p className='pe-1 text-[8px] font-bold'>Name</p>
            <HiArrowLongLeft />
          </div>
        </div>
        <div className='absolute bottom-[20px] -right-[80px]'>
          <div className='flex justify-center items-center'>
            <HiArrowLongRight />
            <p className='ps-1 text-[8px] font-bold'>Atomic Weight</p>
          </div>
        </div>
        <div className='absolute bottom-[2px] -right-[95px]'>
          <div className='flex justify-center items-center'>
            <HiArrowLongRight />
            <p className='ps-1 text-[8px] font-bold'>Electrons per Shell</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainCard