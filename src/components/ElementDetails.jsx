import React from 'react'
import anotherElement from 'element-histories'

const ElementDetails = ({ element }) => {
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
  const imgUrl = anotherElement.image(element.name)

  return (
    <div className='h-full w-full font-dmSansVariable pb-10 flex justify-center'>
      <div className='h-full w-[1000px] bg-gradient-to-r from-[#d7e9db] via-[#e2c6ee] to-[#ced9ed] rounded-lg p-3'>
        <div className='h-full w-full grid grid-cols-2 grid-rows-1 rounded-md gap-[8px]'>
          <div className='h-full w-full relative rounded-md overflow-hidden'>
            <img className="h-full w-full" src={imgUrl} alt={element.name} />
            <div className='h-full w-[485px] absolute top-0 bg-black bg-opacity-25 z-10'></div>
            {/* mini element card  */}
            <div className={`${bgColorCard} bg-opacity-50 absolute bottom-2 left-2 h-[90px] w-[80px] font-dmSansVariable rounded-lg cursor-pointer transition-all duration-500 z-20`}>
              <div className='flex flex-col justify-center items-center '>
                {/* Number  */}
                <p className='text-[10px] font-bold'>{element.number}</p>
                {/* Symbol  */}
                <h1 className='text-[35px] font-courgette font-bold mt-[-9px] mb-[-10px]'>{element.symbol}</h1>
                <div className='flex flex-col justify-center items-center leading-3'>
                  {/* Name  */}
                  <h3 className={`text-[12px] font-bold ${txtColorCard}`}>{element.name}</h3>
                  {/* Atomic Weight  */}
                  <h3 className='text-[10px] font-bold'>{element.atomic_mass.toFixed(3)}</h3>
                  {/* Electrons  */}
                  <h4 className='text-[8px]'>{element.shells.length > 1 ? element.shells.join("-") : element.shells}</h4>
                </div>
              </div>
            </div>
          </div>
          <div className='h-full w-full flex flex-col px-3'>
            <div className='my-auto text-center'>
              <h1 className='text-[60px] font-courgette font-bold'>{element.name}</h1>
              <p className='text-[10px] mb-2 italic'>discoverd by: <strong>{element.discovered_by}</strong></p>
              <p className='text-[10px]'>{element.summary}</p>
            </div>
            <div className='my-auto w-full rounded-md p-2'>
              <ul className='grid grid-rows-4 grid-flow-row gap-2'>
                <li className='bg-black bg-opacity-15 ps-2 py-1 rounded-md'>
                  <p className='text-[8px] italic'>Element Symbol:</p>
                  {element.symbol}
                </li>
                <li className='bg-black bg-opacity-15 ps-2 py-1 rounded-md'>
                  <p className='text-[8px] italic'>Element Number:</p>
                  {element.number}
                </li>
                <li className='bg-black bg-opacity-15 ps-2 py-1 rounded-md'>
                  <p className='text-[8px] italic'>Atomic Mass:</p>
                  {element.atomic_mass}
                </li>
                <li className='bg-black bg-opacity-15 ps-2 py-1 rounded-md capitalize'>
                  <p className='text-[8px] italic'>Element Category:</p>
                  {element.category}
                </li>
                <li className='bg-black bg-opacity-15 ps-2 py-1 rounded-md'>
                  <p className='text-[8px] italic'>Matter:</p>
                  {element.phase}
                </li>
                <li className='bg-black bg-opacity-15 ps-2 py-1 rounded-md'>
                  <p className='text-[8px] italic'>Melting Point:</p>
                  {(element.melt - 273.15).toFixed(0)}
                </li>
                <li className='bg-black bg-opacity-15 ps-2 py-1 rounded-md'>
                  <p className='text-[8px] italic'>Density:</p>
                  {element.density}
                </li>
                <li className='bg-black bg-opacity-15 ps-2 py-1 rounded-md'>
                  <p className='text-[8px] italic'>Boiling Point:</p>
                  {(element.boil - 273.15).toFixed(0)} 
                </li>
                <li className='col-span-2 bg-black bg-opacity-15 ps-2 py-1 rounded-md'>
                  <p className='text-[8px] italic'>Electron Configuration:</p>
                  {element.electron_configuration}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ElementDetails