import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import TableWrapper from "./components/TabbleWrapper"
import Circles from "./Circles"
import Loading from './components/Loading'
import QuizWrapper from './components/QuizWrapper'

function App() {
  const [isLoading, setIsLoading] = useState(null);

  const [displayElement, setDisplayElement] = useState({
    name: "Aluminum",
    number: 13,
    symbol: "Al",
    atomic_mass: 26.982,
    shells: [2, 8, 3],
    category: "post-transition metal",
    phase: "solid"
  })

  const [allElements, setAllElements] = useState([])

  useEffect(() => {
    axios.get('https://kineticzephyr.onrender.com/periodictable').then(response => {
      setAllElements(response.data.data)
      setIsLoading(true)
    })
  }, [])

  const handleHoverCard = (data) => {
    setDisplayElement({
      name: data.name,
      number: data.number,
      symbol: data.symbol,
      atomic_mass: data.atomic_mass,
      shells: data.shells,
      category: data.category,
      phase: data.phase
    })
  }

  return (
    <>
      {isLoading ?
        <div className="bg-[#fff7f1] z-10 relative">
          <div className="h-full w-full z-50">
            <h1 className="text-3xl font-bold text-center font-dmSansVariable p-5 z-20">
              Periodic Table of the Elements!
            </h1>
            <TableWrapper
              allElements={allElements}
              displayElement={displayElement}
              handleHoverCard={handleHoverCard}
            />
          </div>
          <div className='h-full w-full z-50'>
            <h1 className="text-3xl font-bold text-center font-dmSansVariable p-5 z-50">
              Let's try your luck on Elements
            </h1>
            <QuizWrapper element={allElements[76]}/>
          </div>
          <Circles isLoading={isLoading} />
        </div> :
        <div className='h-[100vh] bg-neutral-400 backdrop-opacity-10 flex justify-center items-center z-50'>
          <Loading />
          <Circles isLoading={isLoading} />
        </div>
      }
    </>
  )
}

export default App
