import React from "react"
import TableWrapper from "./components/TabbleWrapper"
import Circles from "./Circles"

function App() {
  return (
    <>
      <div className="bg-[#FFF7F1]">
        <div className="h-full w-full z-50 relative">
          <h1 className="text-3xl font-bold text-center font-dmSansVariable p-5 z-20">
            Periodic Table of the Elements!
          </h1>
          <TableWrapper />
        </div>
        <Circles />
      </div>
    </>
  )
}

export default App
