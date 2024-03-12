'use client'

import React, { useRef, useState } from 'react'

import { MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from 'react-hook-form';

import { animate, motion } from 'framer-motion'

import Alert from './Alert';

import emailjs from '@emailjs/browser'

const ContactMe = () => {
  const { register, handleSubmit, reset } = useForm();
  const [alert, setalert] = useState(false);
  const [message, setmessage] = useState('');
  const [type, settype] = useState('');
  const form = useRef()

  const nameRef = useRef(null)

  const onSubmit = formData => {
      const {name, email, message, subject} = formData 

      emailjs.sendForm(process.env.EMAILJS_SERVICE_ID, process.env.EMAILJS_TEMPLATE_ID, 
        formData, process.env.EMAILJS_PUBLIC_KEY)
      .then((result) => {
            setmessage('Thanks for the message. Will be in touch shortly!')
            settype('success')
            setalert(true)
            reset()
      }, (error) => {
            setmessage('Hey! Something went wrong please try again.')
            settype('error')
            setalert(true)
            reset()
      });

  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, 
        form.current, process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)
      .then((result) => {
          setmessage('Thanks for the message. Will be in touch shortly!')
            settype('success')
            setalert(true)
            reset()
      }, (error) => {
            setmessage('Hey! Something went wrong please try again.')
            settype('error')
            setalert(true)
            reset()
      });

    reset()
  } 

  const handleAlert = () => {
    setalert(v => !v)
  }

  return (
    <>
        {alert && <Alert message={message} type={type} handleClose={handleAlert}/>}
        <div className='h-screen w-full flex flex-col text-center justify-center items-center
         bg-[#1e1e1e] text-white'>
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
                className='flex flex-col space-y-10 px-4 items-center w-full max-w-[960px]'>
                <h4 className='text-2xl font-thin uppercase text-[limegreen] md:text-4xl text-center'>
                    Let's get in touch
                </h4>

                <div>
                    <div className='flex items-center space-x-2 justify-center'>
                        <EnvelopeIcon className='text-[limegreen] h-7 w-7'/>
                        <p>Tom-is-me@yahoo.com</p>
                    </div>

                    <div className='flex items-center space-x-2 justify-center'>
                        <MapPinIcon className='text-[limegreen] h-7 w-7'/>
                        <p>Greater Los Angeles</p>
                    </div>
                </div>

                    <form action="" className='flex flex-col gap-2 w-full max-w-[564px]'>
                        
                            <div className='flex flex-col gap-2 md:flex-row'>
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

                            <div className='flex flex-col gap-2'>
                                <input 
                                    {...register('subject')}
                                    placeholder='Subject'
                                    className='contactInput' 
                                    type="text" 
                                    required
                                />

                                <textarea 
                                    {...register('message')}
                                    placeholder='Message'
                                    className='contactInput' 
                                    required
                                />
                            </div>

                            <button 
                                type='submit'
                                className='bg-[limegreen]/40 py-5 rounded-md text-black font-bold
                                    w-full text-lg hover:bg-[limegreen] transition-all duration-200'>
                                Submit
                            </button>
                    </form>
            </motion.div>
        </div>
    </>
  )
}

export default ContactMe

{/* <form 
                    ref={form}
                    // onSubmit={handleSubmit(onSubmit)}
                    onSubmit={sendEmail}
                    className='flex flex-col space-y-2 w-full'>
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
                        className='bg-[#F7AB0A]/40 py-5 rounded-md text-black font-bold
                    text-lg hover:bg-[#F7AB0A] transition-all duration-200'>Submit</button>
                </form> */}