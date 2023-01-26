'use client'

import Hero from '../../components/Hero'
import Skills from '../../components/Skills'
import ContactMe from '../../components/ContactMe'
import Projects from '../../components/Projects'

import { skills } from '../../data'
import { client } from '../../utils/sanity.client'

import ProjectList from '../../components/ProjectList'
import Backdrop from '../../components/Backdrop'
import Modal from '../../components/Modal'
import { useState } from 'react'
import Footer from '../../components/Footer'

import Experiences from '../../components/Experiences'

import { experiences } from '../../experiences'

const Home = () => {
  // const [modal, setmodal] = useState(false);

  // const handleModal = () => {
  //   setmodal(v => !v)
  // }

  return (
    <div className='h-screen'>
      {/* <button 
      onClick={handleModal}
      className='rounded-sm py-2 px-6 text-white bg-yellow-500 mt-36 mx-auto block'>Modal</button>
      {modal && <Modal handleClose={handleModal} text='I want you!' />} */}
        <section id='hero' className='snap-center'>
          <Hero />
        </section>

        <section id='experience'>
          <Experiences experiences={experiences}/>
        </section>

        {/* <section id='works' className='snap-start'>
          <Projects />
        </section> */}
        
        <section id='skills' className='snap-start'>
          <Skills skills={skills}/>
        </section>

        <section id='contact-me' className='snap-start'>
          <ContactMe />
        </section>

        <section>
          <Footer />
        </section>
    </div>
  )
}

export default Home