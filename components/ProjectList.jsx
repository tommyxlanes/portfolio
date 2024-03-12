import Image from 'next/image'
import React from 'react'
import randomDirection from '../utils/randomDirection'
import urlFor from '../utils/urlFor'
import Project from './Project'

const ProjectList = ({ projects }) => {
  return (
    <div className='grid grid-cols md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16'>
        {projects.map((project, i) => (
            <Project project={project}/>
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

export default ProjectList