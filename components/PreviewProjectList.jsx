'use client'

import { usePreview } from '../utils/sanity.preview'
import ProjectList from './ProjectList'

const PreviewProjectList = ({ query }) => {
    const projects = usePreview(null, query)

  return (
    <ProjectList projects={projects} />
  )
}

export default PreviewProjectList