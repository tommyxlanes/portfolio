'use client'

import Image from 'next/image'
import React from 'react'

import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircle'
import Pulse from './Pulse'

const Hero = ({heading, message}) => {
  const [text] = useTypewriter({
        words: ["Hi, I'm Tommy", 'Web Developer', 'Graphic Designer', 'Creator'],
        loop: true,
        delaySpeed: 2000,
    })

  return (
    <div className='h-screen flex flex-col items-center justify-center
    text-center relative bg-[#1c1c1c] bg-gradient-to-tr from-[#1c1c1c] to-gray-700'>
        {/* <BackgroundCircles /> */}
        <div className='relative rounded-full mx-auto w-32 h-32 md:w-56 md:h-56 z-10 mb-4'>
            <Image 
                className='rounded-full'
                src='/profile.png'
                fill 
                alt='' />
        </div>
        <div className='z-10'>
            <h2 className='text-sm uppercase text-gray-300 pb-2 tracking-[15px]'>Tommy Vong</h2>
            <h1 className='text-4xl lg:text-6xl font-semibold px-10'>
                <span className='mr-3 text-white'>{text}</span>
                <Cursor cursorColor='limegreen'/>
            </h1>
        </div>

    </div>
  )
}

export default Hero