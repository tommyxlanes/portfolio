'use client'

import { motion } from "framer-motion";
import { useEffect, useState, useMemo } from "react";
import { draw, textVariant } from '../utils/motion'

const Progress = ({ percent, skill, index }) => {
    const [clientWidth, setclientWidth] = useState('90');
    // const [x, setx] = useState(0);
    // const [y, sety] = useState(0);
    // const [z, setz] = useState(0);

    // const colorGenerator = () => {
    //     const x = Math.floor(Math.random() * 256);
    //     const y = Math.floor(Math.random() * 50);
    //     const z = Math.floor(Math.random() * 256);
    //     setx(x)
    //     sety(y)
    //     setz(z)
    //     const RGBColor = `rgb(${x}, ${y}, ${z})`
    //     return RGBColor
    // }

    // const memoizedColor = useMemo(() => {
    //     const x = Math.floor(Math.random() * 256);
    //     const y = Math.floor(Math.random() * 50);
    //     const z = Math.floor(Math.random() * 256);
    //     setx(x)
    //     sety(y)
    //     setz(z)
    //     const RGBColor = `rgb(${x}, ${y}, ${z})`
    //     return RGBColor
    // },
    // [x, y, z])

   useEffect(() => {
    const resize = () => {
        if(window.visualViewport.width <= 600) {
            setclientWidth('70')
        } else {
            setclientWidth('90') 
        }
    }
    
    window.addEventListener('resize', resize)
   }, [clientWidth]);

  return (
        <div 
        className="relative w-full flex flex-col items-center">
            
            <div>
                <motion.svg
                height={200}
                width={200}
                viewBox='0 0 200 200'
                fill='transparent'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}>
                    <motion.circle
                        cx="100"
                        cy="100"
                        r={`${clientWidth}`}
                        stroke='tomato'
                        strokeLinecap='round'
                        strokeWidth={8}
                        variants={draw(percent, index)}
                    />
                    
                </motion.svg>
            </div>

            <motion.div 
                initial={{
                    opacity: 0,
                    y: 50
                }}
                whileInView={{
                    y: 0,
                    opacity: 1,
                    transition: {
                        type: 'spring',
                        stiffness: 120,
                        duration: .1,
                        delay: index * .3
                    }
                }}
                viewport={{ once: false }}
                className="text-white font-bold 
                    absolute top-1/2 left-1/2">
                    <div className="-translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                        <span className="text-sm md:text-xl font-extralight text-gray-400">{skill}</span>
                        <span className="font-bold text-3xl md:text-5xl">{percent * 100}%</span>
                    </div>
            </motion.div>
        </div>
  )
}

export default Progress