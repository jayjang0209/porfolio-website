import React from 'react'
import { projectsData } from '@/lib/data'
import Image from 'next/image';

type ProjectProps = (typeof projectsData)[number];


export default function Project
({ title, description, tags,imageUrl, github, demo, video }: ProjectProps) {
  return (
    <div className='mb-3 sm:mb-8 last:mb-0'>
      <section className='relative bg-gray-50 max-w-[40rem] border border-black/5 overflow-hidden sm:h-[21rem] hover:bg-gray-200 transition sm:group-even:pl-8 cursor-pointer'>
        <div className='flex flex-col h-full pt-3 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[60%]'>
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
          
          {/* {github && (
            <a
              className='inline-flex items-center gap-1 mt-4 text-sm font-medium text-zinc-500 hover:text-zinc-600'
              href={github}
              target='_blank'
            >
              <FaGithub />
              <span>View Code</span>
            </a>
          )}
          {demo && (
            <a
              className='inline-flex items-center gap-1 mt-4 text-sm font-medium text-zinc-500 hover:text-zinc-600'
              href={demo}
              target='_blank'
            >
              <FaExternalLinkAlt />
              <span>View Demo</span>
            </a>
          )}
          {video && (
            <a
              className='inline-flex items-center gap-1 mt-4 text-sm font-medium text-zinc-500 hover:text-zinc-600'
              href={video}
              target='_blank'
            >
              <FaYoutube />
              <span>View Video</span>
            </a>
          )}           */}
        </div>

        <Image
          alt={title}
          quality={95}
          src={imageUrl}
          className='absolute hidden sm:block top-8 -right-5 w-[15rem] rounded-t-lg shadow-2xl'
         /> 
      </section>
    </div>
  )
}
