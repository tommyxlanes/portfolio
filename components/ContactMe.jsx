'use client'

import React, { useRef } from 'react'

import { MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from 'react-hook-form';

import { animate, motion } from 'framer-motion'

const ContactMe = () => {
  const { register, handleSubmit, reset } = useForm();

  const nameRef = useRef(null)

  const onSubmit = formData => {
      console.log(formData)
      reset()
  };

  return (
    <div className='h-screen relative flex flex-col text-center
    max-w-7xl px-10 justify-center mx-auto items-center bg-[#1e1e1e] text-white'>
        <h3 className='absolute top-12 uppercase tracking-[20px] text-gray-500 text-2xl'>
            Contact
        </h3>
       
        <motion.div 
            initial={{
                opacity: 0,
                y: 50
            }}
            whileInView={{
                opacity: 1,
                y: 0
            }}
            transition={{ duration: .4, delay: .4, ease: 'easeIn'}}
            viewport={{ once: false }}
            className='flex flex-col space-y-10 mt-16 items-center'>
            <h4 className='text-2xl md:text-4xl font-semibold text-center'>
                Drop a line!{' '}
                <span className='underline decoration-[#F7AB0A]/50'>I'm all ears.</span>
            </h4>

            <div className='space-y-10'>
                <div className='flex items-center space-x-5 justify-center'>
                    <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7'/>
                    <p>Tom-is-me@yahoo.com</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                    <MapPinIcon className='text-[#F7AB0A] h-7 w-7'/>
                    <p>Greater Los Angeles</p>
                </div>
            </div>

            <form 
                onSubmit={handleSubmit(onSubmit)}
                className='flex flex-col space-y-2 w-fit max-auto'>
                <div className='flex flex-col space-y-2 md:space-y-0 md:flex-row md:space-x-2'>
                    <input 
                        ref={nameRef}
                        {...register('name')}
                        placeholder='Name'
                        className='contactInput' type="text" required />

                    <input 
                        {...register('email')}
                        placeholder='Email'
                        className='contactInput' type="email" required />
                </div>

                <input 
                    {...register('subject')}
                    placeholder='Subject'
                    className='contactInput' type="text" required />

                <textarea 
                    {...register('message')}
                    placeholder='Message'
                    className='contactInput' required />

                <button 
                    type='submit'
                    className='bg-[#F7AB0A]/40 py-5 px-10 rounded-md text-black font-bold
                text-lg hover:bg-[#F7AB0A] transition-all duration-200'>Submit</button>
            </form>
        </motion.div>
    </div>
  )
}

export default ContactMe