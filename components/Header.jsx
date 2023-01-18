'use client'

import Link from 'next/link'
import React from 'react'
import { useState, useEffect } from 'react'

import { usePathname } from 'next/navigation'

import { motion } from 'framer-motion'

import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'

const NavBar = () => {
    const [open, setopen] = useState(false);
    const [color, setcolor] = useState('transparent');
    const [textcolor, settextcolor] = useState('white');
    const [scrollY, setscrollY] = useState(0);

    const path = usePathname()

    console.log(path)

    const handleNav = () => {
        setopen(v => !v)
    }

    useEffect(() => {
        const changeColor = () => {
            if(window.scrollY >= 90) {
                setcolor('white')
                settextcolor('black')
            } else {
                setcolor('transparent')
                settextcolor('white')
            }
        }

        window.addEventListener('scroll', changeColor)
    }, []);

  return (
    // ${color === 'transparent' ? '' : 'border-b-2 border-[gold]'}`
    <>
        {path.includes('/studio') ? <div /> : 
            <header style={{ backgroundColor: `${color}`}} className='fixed left-0 top-0 z-20 w-full duration-300'>
        <div className={`max-w-[1240px] p-4 m-auto flex justify-between items-center
        text-white`}>
            <motion.div
                    initial={{
                        x: -500,
                        opacity: 0,
                        scale: 0.5
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                        scale: 1
                    }}
                    transition={{
                        duration: 1.5
                    }}
                >
                <Link href='/'>
                    {color === 'white' ? 
                        <div className='w-16 h-16 rounded-full bg-black flex items-center justify-center'>
                            <h1 className='text-white text-2xl font-mono'>TV</h1>
                        </div>
                    : 
                        <img 
                            className='w-16 h-16 lg:w-20 lg:h-20'
                            src="/logo.png" 
                            alt="tommy vong" />
                    }
                </Link>
            </motion.div>

            <motion.div
                    initial={{
                        x: 500,
                        opacity: 0,
                        scale: 0.5
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                        scale: 1
                    }}
                    transition={{
                        duration: 1.5
                    }}
                >
                {/* <ul 
                    style={{ color: `${textcolor}`}}
                    className='hidden sm:flex justify-end'>
                    <li className='p-4 hover:text-gray-300 transition duration-300'>
                        <Link href='/'>Home</Link>
                    </li>
                    <li className='p-4 hover:text-gray-300 transition duration-300'>
                        <Link href='#gallery'>Gallery</Link>
                    </li>
                    <li className='p-4 hover:text-gray-300 transition duration-300'>
                        <Link href='#skills'>Skills</Link>
                    </li>
                    <li className='p-4 hover:text-gray-300 transition duration-300'>
                        <Link href='#contact-me'>Contact</Link>
                    </li>
                </ul> */}
                <div style={{ color: `${textcolor}`}} 
                    className='sticky z-20 top-0 pt-5 w-full hidden sm:flex justify-end'>
                    <a href='#hero'>
                        <button className='font-extralight p-6 hover:text-gray-300 
                        transition duration-300'>HOME</button>
                    </a>
                    <a href='#gallery'>
                        <button className='font-extralight p-6 hover:text-gray-300 
                        transition duration-300'>GALLERY</button>
                    </a>
                    <a href='#skills'>
                        <button className='font-extralight p-6 hover:text-gray-300 
                        transition duration-300'>SKILLS</button>
                    </a>
                    <a href='#contact-me'>
                        <button className='font-extralight p-6 hover:text-gray-300 
                        transition duration-300'>CONTACT</button>
                    </a>
                </div>
            </motion.div>

            {/*Mobile Menu Button*/}
            <motion.div
                    initial={{
                        x: 500,
                        opacity: 0,
                        scale: 0.5
                    }}
                    animate={{
                        x: 0,
                        opacity: 1,
                        scale: 1
                    }}
                    transition={{
                        duration: 1.5
                    }}
                    className='block sm:hidden z-10'
                >
                <div 
                    onClick={handleNav}>
                    {open 
                        ? <AiOutlineClose style={{ color: `${textcolor}`}} className='text-3xl' /> 
                        : <AiOutlineMenu style={{ color: `${textcolor}`}} className='text-3xl' />}
                </div>
            </motion.div>
            {/*Mobile Menu*/}
            <div className={`${open ? 'translate-x-0' : '-translate-x-full'} 
                w-2/3 h-screen bg-black sm:hidden absolute top-0 left-0 
                bottom-0 flex justify-center items-center text-center transition
                duration-300 ease-out`}>
                <ul>
                    <li className='p-4 text-4xl hover:text-gray-500 transition duration-300'>
                        <Link href='/'>Home</Link>
                    </li>
                    <li className='p-4 text-4xl hover:text-gray-500 transition duration-300'>
                        <Link href='/gallery'>Gallery</Link>
                    </li>
                    <li className='p-4 text-4xl hover:text-gray-500 transition duration-300'>
                        <Link href='/work'>Work</Link>
                    </li>
                    <li className='p-4 text-4xl hover:text-gray-500 transition duration-300'>
                        <Link href='/contact'>Contact</Link>
                    </li>
                </ul>
            </div>
        </div>
    </header>
        }
    </>
  )
}

export default NavBar