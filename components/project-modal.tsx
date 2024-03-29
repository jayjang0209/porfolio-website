import React from "react";
import type { ProjectModalProps } from "@/types/components/ProjectModalPropsType";

export default function ProjectModal({
  title,
  description,
  tags,
  tasks,
  onClose,
}: ProjectModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-30 flex justify-center items-center dark:bg-opacity-100">
      <div className="bg-white max-w-[90%] p-2 rounded-lg shadow-lg sm:w-[35rem] md:w-[45rem] dark:bg-white/15">
        <div className="flex flex-col sm:flex-row">
          <div className="flex flex-col justify-center px-5 sm:px-10 py-5 sm:py-10">
            <h3 className="flex text-2xl font-semibold text-zinc-800 dark:text-white">
              {title}
            </h3>

            {/* Skill Tags */}
            <div className="flex flex-wrap gap-2 mt-1 mb-1">
              {tags.map((tag) => (
                <span key={tag} className="mt-3 tag_secondary">
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-s mt-1 mb-3 leading-relaxed text-zinc-500 dark:text-slate-300">
              {description}
            </p>

            {/* Tasks */}
            <ul className="mt-4 sm:mt-auto list-none pl-0">
              {tasks.map((task, index) => (
                <li key={index} className="task_primary">
                  • {task}
                </li>
              ))}
            </ul>

            {/* Close Button */}
            <button onClick={onClose} className="mt-3 w-16 btn_primary">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
