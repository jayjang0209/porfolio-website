import React from "react";
import type { ExperienceModalPropsType } from "@/types/components/ExperienceModalPropsType";

export default function ExperienceModal({
  experience,
  onClose,
}: ExperienceModalPropsType): JSX.Element | null {
  if (!experience) return null;

  const { title, place, description, details, date } = experience;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-30 flex justify-center items-center p-4 dark:bg-opacity-100">
      <div className="bg-white rounded-lg shadow-lg overflow-y-auto max-h-[85vh] w-full sm:max-w-[35rem] md:max-w-[45rem] dark:bg-white/15">
        <div className="px-5 py-5 sm:px-10 sm:py-10">
          <h3 className="text-2xl font-semibold text-zinc-800 dark:text-white">{title}</h3>
          <h4 className="text-xl font-semibold text-zinc-800 mt-2 dark:text-slate-300">{place}</h4>
          <h4 className="text-xl font-semibold text-zinc-800 mt-2 dark:text-slate-300">{date}</h4>

          {/* Skills */}
          <div className="flex flex-wrap gap-2 mt-3 uppercase tracking-wider">
            {details?.skills?.map((skill, index) => (
              <span
                key={index}
                className="text-xs text-gray-700 bg-gray-100 px-2 py-1 rounded-md"
              >
                {skill}
              </span>
            ))}
          </div>

          {/* Description */}
          <p className="text-sm mt-3 leading-relaxed text-zinc-500 dark:text-slate-300">
            {description}
          </p>

          {/* Tasks */}
          <ul className="list-none pl-0 mt-4">
            {details?.tasks?.map((task, index) => (
              <li
                key={index}
                className="mb-2 text-sm font-medium text-gray-700 bg-gray-100 px-3 py-2 rounded-md"
              >
                • {task}
              </li>
            ))}
          </ul>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="btn_primary mt-3"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
