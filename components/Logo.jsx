import Image from 'next/image'
import React from 'react'

const Logo = (props) => {
    const { renderDefault, title} = props

  return (
    <div className='flex items-center space-x-2'>
        <Image
            className='rounded-full object-cover'
            height={50}
            width={50}
            src='/logo.png'
            alt='tommy vong'
        />
        {<>{renderDefault(props)}</>}
    </div>
  )
}

export default Logo