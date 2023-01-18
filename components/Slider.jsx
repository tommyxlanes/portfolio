'use client'

import Image from 'next/image'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';

import { motion } from 'framer-motion'

import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'
import { staggerContainer, textVariant, slideIn } from '../utils/motion';

const Slider = ({ slides }) => {
    const [index, setIndex] = useState(0);
    const [divWidth, setdivWidth] = useState(0);
    const length = slides.length

    const divRef = useRef()

    useEffect(() => {
        setdivWidth(divWidth)
        console.log(divWidth);
    }, [divWidth]);

    // const nextSlide = () => {
    //     setcurrent(index === length - 1 ? 0 : current + 1)
    // }

    // const prevSlide = () => {
    //     setcurrent(index === 0 ? length - 1 : current - 1)
    // }

    // if(!Array.isArray(slides) || slides.length <= 0) {
    //     return null
    // }

    const handleArrow = (direction) =>{
        if(direction==="l"){
            setIndex(index !== 0 ? index-1 : length-1)
            setdivWidth(divRef.current.clientWidth)
        }
        if(direction==="r"){
            setIndex(index !== length-1 ? index+1 : 0)
            setdivWidth(divRef.current.clientWidth)
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
                    ref={divRef}
                    className='overflow-x-hidden flex relative mx-auto w-full lg:max-w-[1000px] 
                    h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] xxl:h-[700px] lg:rounded-md'>
                    <FaArrowCircleLeft 
                                    onClick={()=>handleArrow("l")}
                                    className='absolute top-[50%] left-[30px] opacity-50
                                    cursor-pointer select-none z-10 text-white shadow-md rounded-full' size={50}/>
                                
                    <FaArrowCircleRight 
                                onClick={()=>handleArrow("r")}
                                className='absolute top-[50%] right-[30px] opacity-50
                                cursor-pointer select-none z-10 text-white shadow-md rounded-full' size={50}/>
                    {slides.map((slide, i) => (
                        <div    
                        style={{transform:`translateX(${-divWidth*index}px)`}} 
                            className='shrink-0 w-full h-full transition duration-300' key={i}>
                            <Image 
                                src={slide.image} 
                                alt={slide.image} 
                                fill={true}
                                className={`w-[${divWidth}px] h-full object-cover`}/>

                        </div>
                    ))}
                </motion.div>
        </motion.div>
    </div>
  )
}

export default Slider

