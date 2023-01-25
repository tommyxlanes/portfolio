import React from 'react'
import ProjectList from '../../../components/ProjectList'
import { client } from '../../../utils/sanity.client'

const page = async (props) => {
    const projects = await client.fetch(`
        *[_type == 'project']
    `)

  return (
    <div>
        <ProjectList projects={projects}/>
    </div>
  )
}

export default page