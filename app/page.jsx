'use client'

import React from 'react'
import Link from 'next/link'
import Hero from '../components/Hero'
import Slider from '../components/Slider'

import { motion } from 'framer-motion'

import { slides } from '../data'

import Skills from '../components/Skills'
import ContactMe from '../components/ContactMe'
import Projects from '../components/Projects'
import Gallery from '../components/Gallery'

import Header from '../components/Header'

const skills = [
  {
    percent: .90, name: 'JavaScript'
  },
  {
    percent: .90, name: 'HTML'
  },
  {
    percent: .90, name: 'CSS'
  },
  {
    percent: .75, name: 'Node Js'
  },
  {
    percent: .85, name: 'React Js'
  },
  {
    percent: .95, name: 'PhotoShop'
  },
  {
    percent: .95, name: 'Illustrator'
  }
]

const Home = () => {
  return (
    <div className='h-screen'>
        {/* <Hero /> */}
        {/* <header className='sticky z-20 top-0 pt-5 w-full'>
            <a href='#one'>
                <button className='heroButton'>ONE</button>
            </a>
            <a href='#two'>
                <button className='heroButton'>TWO</button>
            </a>
            <a href='#three'>
                <button className='heroButton'>THREE</button>
            </a>
            <a href='#contact-me'>
                <button className='heroButton'>Contact</button>
            </a>
        </header> */}

        {/* <section id='one'  className='snap-start'>
          <div className='bg-red-400 flex flex-col relative h-screen text-center md:text-left
        md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='text-center text-white'>ONE</h3>
          </div>
        </section>
        <section id='two'  className='snap-center'>
          <div className='bg-blue-400 flex flex-col relative h-screen text-center md:text-left
        md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='text-center text-white'>TWO</h3>
          </div>
        </section>
        <section id='three'  className='snap-center'>
          <div className='bg-yellow-400 flex flex-col relative h-screen text-center md:text-left
        md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
            <h3 className='text-center text-white'>THREE</h3>
          </div>
        </section> */}

        <section id='hero' className='snap-center'>
          <Hero />
        </section>

        <section id='gallery' className='snap-start'>
          {/* <Slider slides={slides} /> */}
          <Projects />
        </section>
        
        <section id='skills' className='snap-start'>
          <Skills skills={skills}/>
        </section>

        <section id='contact-me' className='snap-start'>
          <ContactMe />
        </section>
    </div>
  )
}

export default Home