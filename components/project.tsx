import React from 'react'
import { projectsData } from '@/lib/data'

type ProjectProps = (typeof projectsData)[number];

export default function Project
({ title, description, tags,imageUrl, github, demo, video }: ProjectProps) {
  return (
    <div className='mb-3 sm:mb-8 last:mb-0'>
      <section className='bg-gray-100 max-w-[50rem] border border-black/5 overflow-hidden'>
        <div className='flex flex-col h-full pt-4 pb-7 px-5'>
          <h3 className='text-2xl font-semibold text-zinc-800'>
            {title}
          </h3>
          <p className='mt-2 leading-relaxed text-zinc-600'>
            {description}
          </p>

          <ul className='flex flex-row flex-wrap gap-2 mt-4 sm:mt-auto'>
            {tags.map((tag, index) => (
              <li
                className='px-2 py-1 text-[0.7rem] tracking-wider font-semibold text-white bg-indigo-500 rounded-md'
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
              
        </div>
      </section>
    </div>
  )
}
