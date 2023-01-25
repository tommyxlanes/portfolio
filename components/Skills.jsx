'use client'

import React from 'react'

import Progress from '../components/Progress'

const Skills = ({ skills }) => {
  return (
    <div className='mx-auto py-16 max-w-[1000px]'>
        <h3 className='text-center uppercase tracking-[20px] text-gray-500 text-2xl mb-12'>
            Skills
        </h3>

        <div className='grid grid-cols-2 md:grid-cols-4 gap-2 py-10 justify-center'>
            {skills.sort((a, b) => b.percent - a.percent).map((skill, i) => (
                <Progress 
                    key={skill.name}
                    percent={skill.percent} 
                    skill={skill.name} 
                    index={i} />
            ))}
        </div>
    </div>
  )
}

export default Skills