import React from 'react'

const layout = ({children}) => {
  return (
    <div className='mt-32 p-4 max-w-[1240px] mx-auto'>
        {children}
    </div>
  )
}

export default layout