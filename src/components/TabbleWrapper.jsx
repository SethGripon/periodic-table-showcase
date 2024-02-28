import React from 'react'
import { useState, useEffect } from 'react'
import ElementCards from './ElementCards'

const TabbleWrapper = () => {
  const [allElements, setAllElements] = useState([])

  useEffect(() => {
    fetch("https://kineticzephyr.onrender.com/periodictable")
      .then(response => response.json())
      .then(data => setAllElements(data.data))
  }, [])

  return (
    <>
      <div className='flex justify-center pb-5'>
        <div className='custom-grid gap-1'>
          {/* first section of elements */}
          {allElements.slice(0,2).map((element) => element.number == 1 ? <div style={{gridArea: '1/1'}}> <ElementCards element={element} /> </div> : <div style={{gridArea: '1/18'}}> <ElementCards element={element} /> </div>)}
          {/* left side  */}
          {allElements.slice(2,4).map((element, index) => <div style={{gridArea: `2/${index + 1}`}}> <ElementCards element={element} /> </div>)}
          {allElements.slice(10,12).map((element, index) => <div style={{gridArea: `3/${index + 1}`}}> <ElementCards element={element} /> </div>)}
          {/* right side */}
          {allElements.slice(4,10).map((element, index) => <div style={{gridArea: `2/${index + 13}`}}> <ElementCards element={element} /> </div>)}
          {allElements.slice(12,18).map((element, index) => <div style={{gridArea: `3/${index + 13}`}}> <ElementCards element={element} /> </div>)}

          {/* center section  */}
          {allElements.slice(18,36).map((element, index) => <div style={{gridArea: `4/${index + 1}`}}> <ElementCards element={element} /> </div>)}
          {allElements.slice(36,54).map((element, index) => <div style={{gridArea: `5/${index + 1}`}}> <ElementCards element={element} /> </div>)}
           {/* with skip lanthanides  */}
          {allElements.slice(54,56).map((element, index) => <div style={{gridArea: `6/${index + 1}`}}> <ElementCards element={element} /> </div>)}
          {allElements.slice(71,86).map((element, index) => <div style={{gridArea: `6/${index + 4}`}}> <ElementCards element={element} /> </div>)}
           {/* with skip actinides  */}
          {allElements.slice(86,88).map((element, index) => <div style={{gridArea: `7/${index + 1}`}}> <ElementCards element={element} /> </div>)}
          {allElements.slice(103,118).map((element, index) => <div style={{gridArea: `7/${index + 4}`}}> <ElementCards element={element} /> </div>)}
          
          <div className="bg-blue-600 text-white flex text-center items-center font-dmSansVariable rounded-lg h-full w-full text-[8px] font-bold" style={{gridArea: `6/3`}}> <p>57-71 Lanthanides</p> </div>
          <div className="bg-emerald-300 flex text-center items-center font-dmSansVariable rounded-lg h-full w-full text-[8px] font-bold" style={{gridArea: `7/3`}}> 89-103 Acticides</div>

          {/* last section  */}
          {allElements.slice(56,71).map((element, index) => <div style={{gridArea: `9/${index + 3}`}}> <ElementCards element={element} /> </div>)}
          {allElements.slice(88,103).map((element, index) => <div style={{gridArea: `10/${index + 3}`}}> <ElementCards element={element} /> </div>)}

        </div>
      </div>
    </>
  )
}

export default TabbleWrapper