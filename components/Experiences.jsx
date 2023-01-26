'use client'

import Image from 'next/image'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';

import { motion } from 'framer-motion'

import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'
import { staggerContainer, textVariant, slideIn } from '../utils/motion';

const Experiences = ({ experiences }) => {
    const [index, setIndex] = useState(0);
    const [divWidth, setdivWidth] = useState(0);
    const length = experiences.length

    const divRef = useRef()

    useEffect(() => {
        setdivWidth(divWidth)
        console.log(divWidth);
    }, [divWidth]);

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
    <div className='h-screen'>
        <motion.div >
                <h3 className='py-16 text-center uppercase tracking-[20px] text-gray-500 text-2xl'>
                    Experience
                </h3>

                {/* <h1 className='text-center text-gray-500 font-extralight 4xl lg:text-5xl p-12'>Gallery</h1> */}
                <motion.div
                    initial={{
                    opacity: 0,
                    y: 50
            }}
            whileInView={{
                opacity: 1,
                y: 0
            }}
            transition={{ duration: .4, delay: .2, ease: 'easeIn'}}
            viewport={{ once: false }}
                    ref={divRef}
                    className='overflow-x-hidden flex relative mx-auto w-full lg:max-w-[1000px] 
                    max-h-content lg:rounded-md'>
                    <FaArrowCircleLeft 
                                    onClick={()=>handleArrow("l")}
                                    className='absolute top-[50%] left-[30px] opacity-50
                                    cursor-pointer select-none z-10 text-white shadow-md rounded-full' size={50}/>
                                
                    <FaArrowCircleRight 
                                onClick={()=>handleArrow("r")}
                                className='absolute top-[50%] right-[30px] opacity-50
                                cursor-pointer select-none z-10 text-white shadow-md rounded-full' size={50}/>
                    {experiences.map((experience, i) => (
                        <div  
                        key={experience.title}  
                        style={{transform:`translateX(${-divWidth*index}px)`}} 
                            className='flex items-center justify-center bg-[#1a1a1a] 
                            shrink-0 w-full h-full transition duration-300'>
                            <div className='text-gray-100 py-8 px-4'>
                                {/* <Image className='mx-auto' src='/alien-head.png' height={200} width={200} alt='alien' /> */}
                                <motion.div
                                initial={{ opacity: 0, y: -100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: .6, ease: 'easeIn'}}
                                src='/alien-head.png'
                                className='mb-8 h-28 w-28 mx-auto rounded-full bg-slate-700 flex items-center justify-center'>
                                    <p className='text-white font-bold text-5xl'>{experience.company.slice(0, 1)}</p>
                                </motion.div>
                                <p className='text-2xl'>{experience.title}</p>
                                <p className='text-md font-bold'>{experience.company} - {experience.location}</p>
                                <p className='text-md text-gray-400'>{experience.years}</p>
                                {/* <div className='my-4 w-full h-[1px] bg-gray-700'></div> */}
                                <div className='flex items-center space-x-4 my-4'>
                                    <div className='w-full  h-[1px] bg-gray-700' />
                                    <div className='text-gray-400 text-sm shrink-0'>Technologies</div>
                                    <div className='w-full h-[1px] bg-gray-700' />
                                </div>
                                <div className='font-light grid grid-cols-4 gap-2'>
                                    {experience.skills.map((ex, i) => (
                                        // <div key={i}>{ex}</div>
                                        <motion.div
                                            initial={{ opacity: 0, x: 50 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            transition={{ duration: .2, delay: i * .20, ease: 'easeIn'}}
                                            key={i}
                                        >
                                            <div className='flex text-sm text-gray-300 flex-col items-center'>
                                                <Image 
                                                    src={`/${ex}.png`}
                                                    height={60}
                                                    width={60}
                                                    alt={ex.title}
                                                />
                                                {ex}
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
        </motion.div>
    </div>
  )
}

export default Experiences

