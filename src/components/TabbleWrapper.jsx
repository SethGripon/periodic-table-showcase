import React from 'react'
import ElementCards from './ElementCards'

const TabbleWrapper = () => {
  return (
    <>
      <div className='flex items-center justify-center'>
        {/* first section  */}
        <div>
          <div>
            <ElementCards/>
            {/* first section of elements  */}
          </div>
          <div>
            {/* main section of elements  */}
          </div>
          <div>
            {/* last section of elements  */}
          </div>
        </div>
      </div>
      <div>
        {/* center section  */}
      </div>
      <div>
        {/* last section  */}
      </div>
    </>
  )
}

export default TabbleWrapper