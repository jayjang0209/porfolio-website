import React from 'react'
import type { ExperienceModalPropsType } from '@/types/components/ExperienceModalPropsType'


export default function ExperienceModal({ experience, onClose }: ExperienceModalPropsType): JSX.Element | null {
  if (!experience) return null

  const { title, place, description, details, date } = experience

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-30 flex justify-center items-center ">
      <div className="bg-white max-w-[90%] p-2 rounded-lg shadow-lg  sm:w-[35rem] md:w-[45rem]">
        <div className="flex flex-col sm:flex-row">
          <div className="flex flex-col items-center justify-center"></div>
          <div className="flex flex-col justify-center px-5 sm:px-10 py-5 sm:py-10">
            <h3 className="flex text-2xl font-semibold text-zinc-800">
              {title}
            </h3>
            <h4 className="flex text-xl font-semibold text-zinc-800">
              {place}
            </h4>
            <h4 className="flex text-xl font-semibold text-zinc-800">
              {date}
            </h4>
            <div className="flex flex-wrap gap-2 mt-1 mb-1">
              {details && details.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs text-gray-700 bg-gray-100 px-2 py-1 rounded-md"
                >
                  {skill}
                </span>
              ))}
            </div>
            <p className="text-s mt-2 mb-3 leading-relaxed text-zinc-500 ">
              {description}
            </p>
            <ul className="mt-4 sm:mt-auto list-none pl-0">
              {details && details.tasks.map((task, index) => (
                <li
                  key={index}
                  className="mb-2 flex items-start text-sm font-medium text-gray-700 bg-gray-100 px-3 py-2 rounded-md relative"
                >
                  • {task}
                </li>
              ))}
            </ul>
            <button
              onClick={onClose}
              className="mt-3 w-16 inline-flex h-10 items-center justify-center gap-2 rounded-md bg-indigo-600 px-6 text-sm font-medium text-zinc-50 shadow transition-colors hover:bg-indigo-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 dark:focus-visible:ring-zinc-300"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
