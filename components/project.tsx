import React from 'react'
import { projectsData } from '@/lib/data'

type ProjectProps = (typeof projectsData)[number];

export default function Project
({ title, description, imageUrl, github, demo, video }: ProjectProps) {
  return (
    <div >
      Project
    </div>
  )
}
