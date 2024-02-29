import React from 'react'

const ElementCards = ({ element, handleHover }) => {
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
    <div onMouseOver={() => handleHover(element)} className={`${bgColorCard} h-full w-full font-dmSansVariable rounded-lg cursor-pointer hover:ring-white hover:ring-2 hover:drop-shadow-[5px_7px_50px_rgba(255,255,255,0.5)] duration-250`}>
      <div className='flex flex-col justify-center items-center'>
        {/* Number  */}
        <p className='text-[8px] font-bold'>{element.number}</p>
        {/* Symbol  */}
        <h1 className='text-[20px] font-courgette font-bold mt-[-5px] mb-[-5px]'>{element.symbol}</h1>
        <div className='flex flex-col justify-center items-center leading-[6.5px]'>
          {/* Name  */}
          <h3 className={`text-[6px] font-bold ${txtColorCard}`}>{element.name}</h3>
          {/* Atomic Weight  */}
          <h3 className='text-[6px]'>{!Number.isInteger(element.atomic_mass) ? element.atomic_mass.toFixed(3) : element.atomic_mass}</h3>
          {/* Electrons  */}
          <h4 className='text-[5px]'>{element.shells.length > 1 ? element.shells.join("-") : element.shells}</h4>
        </div>
      </div>
    </div>
  )
}

export default ElementCards