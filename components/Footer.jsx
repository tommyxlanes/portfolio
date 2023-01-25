'use client'

import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <motion.div
        initial={{
            opacity: 0,
        }}
        whileInView={{
            opacity: 1,
        }}
        transition={{ duration: .4, delay: .4, ease: 'easeIn'}}
        viewport={{ once: false }}
        className='text-center pb-4 text-gray-400'
    >
        &copy;2023 Tommy Vong
    </motion.div>
    // <footer className='text-center pb-4'>
    //     <p className='text-gray-400'>&copy;2023 Tommy Vong</p>
    // </footer>
  )
}

export default Footer