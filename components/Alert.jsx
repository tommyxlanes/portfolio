'use client'

import { motion } from 'framer-motion'
import { dropIn } from '../utils/motion'
import Backdrop from './Backdrop'

import { XCircleIcon } from '@heroicons/react/24/outline'
import urlFor from '../utils/urlFor'
import Image from 'next/image'

const Alert = ({ handleClose, type, message }) => {
    const bg = type === 'error' ? 'bg-red-300 border-b-red-400' : 'bg-green-300 border-b-green-400'
  
    const textColor = type === 'error' ? 'text-red-700' : 'text-green-700'

    return (
    <Backdrop onClick={handleClose}>
        <motion.div
            onClick={(e) => e.stopPropagation()}
            // className='md:max-w-[800px] h-full md:h-2/3 bg-white z-50 mx-auto rounded-md'
            className={`${bg} w-[90%] rounded-md p-2 relative border-b-8`}
            variants={dropIn}
            initial='hidden'
            animate='visible'
            exit='exit'
        >
            <XCircleIcon 
                onClick={handleClose}
                height={40} 
                className={`${textColor} absolute hover:text-gray-400 right-2 hover:scale-105 cursor-pointer
                transition duration-200`}
            />
            <div className={`flex flex-col items-center justify-center mt-4 ${textColor}`}>
                <p className='mb-4 text-center text-2xl font-bold'>{type}</p>
                <div className='w-[90%] 
                relative object-contain text-center text-2xl'>
                    <p>{message}</p>
                </div>
            </div>

        </motion.div>
    </Backdrop>
  )
}

export default Alert