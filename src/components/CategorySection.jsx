import React from 'react'
import { RiCheckboxBlankFill } from "react-icons/ri";

const CategorySection = () => {
  return (
    <div className='font-dmSansVariabl h-full w-full'>
      <div className='flex flex-col items-center mt-3'>
        <h1 className='text-[9px] font-bold'>Subcategory METALS, NONMETALS, METALLOIDS</h1>
        <p className='text-[9px] italic text-gray-500 mb-1'>(color of the background)</p>
        <div className='italic'>
          <div className="flex items-center">
            <div className='text-red-600 text-[13px]'>
              <RiCheckboxBlankFill />
            </div>
            <h6 className="text-[8px] ps-1">Alkali Metals</h6>
          </div>
          <div className="flex items-center">
            <div className='text-amber-500 text-[13px]'>
              <RiCheckboxBlankFill />
            </div>
            <h6 className="text-[8px] ps-1">Akaline Earth Metals</h6>
          </div>
          <div className="flex items-center">
            <div className='text-blue-300 text-[13px]'>
              <RiCheckboxBlankFill />
            </div>
            <h6 className="text-[8px] ps-1">Transition Metals</h6>
          </div>
          <div className="flex items-center">
            <div className='text-blue-600 text-[13px]'>
              <RiCheckboxBlankFill />
            </div>
            <h6 className="text-[8px] ps-1">Lanthanides</h6>
          </div>
          <div className="flex items-center">
            <div className='text-emerald-300 text-[13px]'>
              <RiCheckboxBlankFill />
            </div>
            <h6 className="text-[8px] ps-1">Actinides</h6>
          </div>
          <div className="flex items-center">
            <div className='text-[#B895C5] text-[13px]'>
              <RiCheckboxBlankFill />
            </div>
            <h6 className="text-[8px] ps-1">Post-Transition Metals</h6>
          </div>
          <div className="flex items-center">
            <div className='text-yellow-400 text-[13px]'>
              <RiCheckboxBlankFill />
            </div>
            <h6 className="text-[8px] ps-1">Metalloids</h6>
          </div>
          <div className="flex items-center">
            <div className='text-[#9EC87C] text-[13px]'>
              <RiCheckboxBlankFill />
            </div>
            <h6 className="text-[8px] ps-1">Diatomic and Polyatomic Nonmetals</h6>
          </div>
          <div className="flex items-center">
            <div className='text-pink-300 text-[13px]'>
              <RiCheckboxBlankFill />
            </div>
            <h6 className="text-[8px] ps-1">Noble Gas</h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategorySection