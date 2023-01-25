import React from 'react'
import Image from 'next/image'

import { motion } from 'framer-motion'

const Project = ({ directionLeft }) => {
  return (
    <div className='group relative flex cursor-pointer'>
        <motion.div 
            initial={{
                x: directionLeft ? -200 : 200,
                opacity: 0
            }}
            transition={{
                duration: 1
            }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='relative border rounded-full w-16 h-16 md:w-28 md:h-28 xl:w-32 xl:h-32  
            group-hover:grayscale transition duration-300 ease-in-out'
        >
            <Image 
                src='https://res.cloudinary.com/dehmmknu8/image/upload/v1666741363/my-uploads/sanity-logo_heekzy.png' 
                layout='fill' 
                objectFit='cover' 
                alt=''/>
            <div className='absolute opacity-0 group-hover:opacity-80 tranition duration-300 ease-in-out
                group-hover:bg-white w-full h-full rounded-full z-0'>
                <div className='flex items-center justify-center h-full'>
                    <p className='text-xl md:text-3xl font-bold text-black opacity-100'>100%</p>
                </div>
            </div>
        </motion.div>
    </div>
  )
}

export default Project