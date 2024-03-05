import React from 'react'

const Circles = ({ isLoading }) => {

  return (
    <div>
      {/* upper part  */}
      <div className={`${isLoading ? `bg-[#ced9ed]`: `bg-[#ced9ed42]`} blur-[85px] h-[600px] w-[600px] rounded-full absolute top-0 left-[50px] -z-10`} />
      <div className={`${isLoading ? `bg-[#cfc7fa]`: `bg-[#cfc7fa42]`} blur-[85px] h-[300px] w-[300px] rounded-full absolute top-[70px] left-[600px] -z-20`} />
      <div className={`${isLoading ? `bg-[#e2c6ee] `: `bg-[#e2c6ee42]`} blur-[85px] h-[400px] w-[400px] rounded-full absolute top-[250px] left-[550px] -z-10`} />
      <div className={`${isLoading ? `bg-[#efc8dd]`: `bg-[#efc8dd42]`} blur-[85px] h-[350px] w-[350px] rounded-full absolute top-[140px] right-[100px] -z-10`} />
      {/* lower part  */}
      <div className={`${isLoading ? `bg-[#d7e9db]`: `bg-[#d7e9db42]`} blur-[85px] h-[750px] w-[750px] rounded-full absolute bottom-0 right-[50px] -z-10`} />
      <div className={`${isLoading ? `bg-[#e2c6ee]`: `bg-[#e2c6ee42]`} blur-[85px] h-[450px] w-[450px] rounded-full absolute bottom-[30px] left-[200px] -z-10`} />
      <div className={`${isLoading ? `bg-[#efc8dd] `: `bg-[#efc8dd42]`} blur-[85px] h-[300px] w-[300px] rounded-full absolute bottom-[350px] left-[150px] -z-10`} />
    </div>
  )
}

export default Circles