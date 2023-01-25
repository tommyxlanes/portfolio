import Image from 'next/image'
import { client } from '../../../../utils/sanity.client'
import urlFor from '../../../../utils/urlFor'

import { motion } from 'framer-motion'
import Project from '../../../../components/Project'
import randomDirection from '../../../../utils/randomDirection'

const page = async ({ params }) => {
    const projects = await client.fetch(`
        *[type == '${params.projectType}']
    `)

  return (
    <div className='grid grid-cols md:grid-cols-4 gap-4 mb-16'>
        {projects.map((project, i) => (
            <Project key={project._id} project={project} direction={randomDirection(i)} />
            // <div key={project._id} className='relative w-full h-36 md:h-56 rounded-full object-cover 
            // cursor-pointer hover:opacity-50 transition duration-200'>
            //     <Image 
            //         className='object-cover md:object-left lg:object-center' 
            //         src={urlFor(project.image.asset._ref).url()}
            //         alt={project.title}
            //         fill={true}
            //     />
            // </div>
        ))}
    </div>
  )
}

export default page