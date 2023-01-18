'use client'

import Image from 'next/image'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';

import { motion } from 'framer-motion'

import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'
import { staggerContainer, textVariant, slideIn } from '../utils/motion';

const Gallery = ({ slides }) => {
    const [index, setIndex] = useState(0);
    const images = [
    {title: 'one'},
    {title: 'two'},
    {title: 'three'}
  ];

    const handleArrow = (direction) =>{
        if(direction==="l"){
            setIndex(index !== 0 ? index-1 : 2)
        }
        if(direction==="r"){
            setIndex(index !== 2 ? index+1 : 0)
        }
    }

  return (
    <div className='mb-32'>
        <motion.div 
            variants={staggerContainer}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.25 }}
            >
                <motion.div 
                    variants={textVariant(0)}
                    >
                    <h3 className='py-16 text-center uppercase tracking-[20px] text-gray-500 text-2xl'>
                        WORKS
                    </h3>
                </motion.div>

                {/* <h1 className='text-center text-gray-500 font-extralight 4xl lg:text-5xl p-12'>Gallery</h1> */}
                <motion.div
                    variants={textVariant(.4)}
                    className='overflow-x-hidden flex relative mx-auto w-full lg:max-w-[1000px] 
                    h-[300px] sm:h-[400px] lg:h-[600px] xl:h-[700px] xxl:h-[900px] lg:rounded-md'>
                    <FaArrowCircleLeft 
                                    onClick={()=>handleArrow("l")}
                                    className='absolute top-[50%] left-[30px] opacity-50
                                    cursor-pointer select-none z-10 text-white shadow-md rounded-full' size={50}/>
                                
                    <FaArrowCircleRight 
                                onClick={()=>handleArrow("r")}
                                className='absolute top-[50%] right-[30px] opacity-50
                                cursor-pointer select-none z-10 text-white shadow-md rounded-full' size={50}/>
 
                        <div className='w-full' style={{transform:`translateX(${-100*index}vw)`}}>
                            {images.map((image, i) => (
                                <div   
                                    className='shrink-0 w-full h-full bg-[#222] transition duration-300' key={i}>
                                    
                                    <p className='text-white'>{image.title}</p>
                                </div>
                            ))}
                        </div>
                        
                </motion.div>
        </motion.div>
    </div>
  )
}

export default Gallery

