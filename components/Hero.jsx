'use client'

import Image from 'next/image'
import React from 'react'

import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircle'
import Pulse from './Pulse'

const Hero = ({heading, message}) => {
  const [text] = useTypewriter({
        words: ["Hi, I'm Tommy", 'Web Developer', 'Designer', 'Creator'],
        loop: true,
        delaySpeed: 2000,
    })

  return (
    <div className='h-screen flex flex-col items-center justify-center
    text-center relative'>
        {/* <BackgroundCircles /> */}
        <div className='relative rounded-full mx-auto w-32 h-32 md:w-56 md:h-56 z-10 mb-4'>
            <Image 
                className='rounded-full'
                src='https://cdn.sanity.io/images/ykycr6aq/production/a2b9d1227d963efd24483fe4db9da7ea116a9f57-500x472.png' 
                layout='fill' 
                objectFit='cover' 
                alt='' />
        </div>
        <div className='z-10'>
            <h2 className='text-sm uppercase text-gray-300 pb-2 tracking-[15px]'>Tommy Vong</h2>
            <h1 className='text-4xl lg:text-6xl font-semibold px-10'>
                <span className='mr-3 text-white'>{text}</span>
                <Cursor cursorColor='#fc4006'/>
            </h1>
        </div>
        <Image 
          className='object-cover brightness-50'
          src='https://images.unsplash.com/photo-1672872476232-da16b45c9001?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
          fill={true}
          alt=''/>
    </div>
  )
}

export default Hero