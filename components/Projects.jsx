'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const Projects = () => {
    const projects = [
        { image: '/brochures-thumb.png', 
          title: 'Brochure Design',
          type: 'brochure',
          desc: 'Following modern designs and trends to show case any product and or company.'
        },
        { image: '/menu-thumb.png', 
          title: 'Menu Design',
          type: 'menu',
          desc: 'Following modern designs and trends to show case any product and or company.'
        },
        { image: '/logo-thumb.png', 
          title: 'Logo Design',
          type: 'logo',
          desc: 'Following modern designs and trends to show case any product and or company.'
        },
        { image: '/graphic-thumb.png', 
          title: 'Graphic Application',
          type: 'other',
          desc: 'Following modern designs and trends to show case any product and or company.'
        },
        { image: '/ad-thumb.png', 
          title: 'Advertisements',
          type: 'ad',
          desc: 'Following modern designs and trends to show case any product and or company.'
        }
    ]

  return (
    <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className='h-screen relative flex overflow-hidden flex-col text-left
        max-w-full justify-evenly mx-auto items-center z-0'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>
                Projects
            </h3>

            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x mt-16
            snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
                {projects.map((proj, i) => (
                <div 
                    className='w-screen flex-shrink-0 snap-center flex flex-col
                    space-y-5 items-center justify-center p-20 md:p-44 h-screen'
                    key={i}>
                    <motion.img 
                        initial={{
                            y: -300,
                            opacity: 0
                        }}
                        transition={{ duration: 1 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className='md:w-[450px]'
                        src={proj.image} alt="" />
                
                    <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                        <h4 className='text-2xl md:text-4xl font-semibold text-center'>
                            <span className='text-white underline underline-offset-8 decoration-[#F7AB0A]'>
                                {proj.title}
                            </span> 
                        </h4>

                        <p className='text-gray-300 text-md md:text-lg text-center md:text-left'>
                            {proj.desc}
                        </p>

                        <div className=''>
                            <Link href={`/projects/${proj.type}`}>
                                <button className='text-gray-300 border-[1px] px-8 py-2 
                                rounded-md hover:bg-gray-300 transition duration-150 hover:text-gray-700'>
                                    See More
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>))}
            </div>

            <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px]
            -skew-y-12' />
    </motion.div>
  )
}

export default Projects