import React from 'react'
import { skillsData } from '@/lib/data'

export default function Skills() {
  return (
    <section className='mb-28 max-w-[50rem] scroll-mt-28 text-center sm:mb-40'
      id='skills'
    >
      <h1 className="text-4xl font-bold mb-5 text-center">Skills</h1>
      <div className='flex flex-wrap items-center justify-center gap-5'>
        {skillsData.map((skill, index) => (
          <div key={index} className='bg-violet-400 text-white borderBlack rounded-full px-5 py-3'>
            <p className='text-md font-semibold uppercase'>{skill}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
