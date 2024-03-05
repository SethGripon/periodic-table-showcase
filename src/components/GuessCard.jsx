import React from 'react'
import { useRef } from 'react'

const GuessCard = ({ element, checkAnswer}) => {
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

  const bgColorCard = cateColorCard(element.category)

  const inputElement = useRef(null)

  const getAnswer = (e) => {
    e.preventDefault()
    checkAnswer(inputElement.current.value)
  }

  return (
    <div className='h-full w-full font-dmSansVariable flex flex-col justify-start items-center pb-10'>
      <div className='text-center py-2'>
        Identify what symbol is being presented
      </div>
      <div className='h-[350px] w-[250px] bg-gradient-to-r from-[#d7e9db] via-[#e2c6ee] to-[#ced9ed] rounded-lg p-2 my-auto'>
        <div className={`${bgColorCard} h-full w-full font-dmSansVariable rounded-lg cursor-pointer flex justify-center items-center`}>
          {/* Symbol  */}
          <h1 className='text-[120px] font-courgette font-bold'>{element.symbol}</h1>
        </div>
      </div>
      <div className='bg-gradient-to-r from-[#d7e9db] via-[#e2c6ee] to-[#ced9ed] bg-opacity-10 p-1 rounded-md my-5'>
        <input ref={inputElement} type="text" className='outline-none border-gray-500 border-b-2 bg-transparent text-center' />
      </div>
      <div className='bg-gradient-to-r from-[#d7e9db] via-[#e2c6ee] to-[#ced9ed] h-[45px] w-[150px] rounded-md p-1'>
        <button className='hover:bg-black hover:bg-opacity-25 hover:text-white h-full w-full rounded-md font-bold italic duration-200 transition-all' onClick={getAnswer}>ANSWER</button>
      </div>
    </div>
  )
}

export default GuessCard