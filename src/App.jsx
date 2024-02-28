import React from "react"
import TableWrapper from "./components/TabbleWrapper"

function App() {
  return (
    <>
      <div className="bg-black h-full w-full">
        <h1 className="text-3xl text-white text-center font-dmSansVariable p-5">
          Periodic Table of the Elements!
        </h1>
        <TableWrapper/>
      </div>
    </>
  )
}

export default App
