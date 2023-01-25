'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import urlFor from '../utils/urlFor'

import { motion } from 'framer-motion'
import Modal from './Modal'

const Project = ({ project, direction }) => {
  const [modal, setmodal] = useState(false);

  const handleModal = () => {
    setmodal(v => !v)
  }

  return (
    <>
        {modal && <Modal handleClose={handleModal} project={project} />}
        <motion.div 
            onClick={handleModal}
            initial={{
                x: direction ? -200 : 200,
                opacity: 0
            }}
            transition={{
                duration: .4
            }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            key={project._id} 
            className='relative w-full h-56 rounded-full object-cover 
            cursor-pointer transition duration-200'>
                <Image 
                    className='object-cover md:object-left lg:object-center hover:opacity-50
                    transition duration-200' 
                    src={urlFor(project.image.asset._ref).url()}
                    alt={project.title}
                    fill={true}
                />
        </motion.div>
    </>
  )
}

export default Project