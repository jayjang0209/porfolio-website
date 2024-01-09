import React from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt, FaYoutube } from "react-icons/fa";
import { RiPagesLine } from "react-icons/ri";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  github,
  demo,
  video,
}: ProjectProps) {
  return (
    <div className="group mb-3 sm:mb-8 last:mb-0">
      <section className="relative bg-gray-50 max-w-[42rem] border border-black/5 overflow-hidden sm:h-[21rem] hover:bg-gray-200 transition cursor-pointer">
        <div className="flex flex-col h-full pt-3 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[60%]">
          <h3 className="flex text-2xl font-semibold text-zinc-800">{title}</h3>
          <div className="flex items-center justify-start gap-2 mt-1 mb-1">
            {github && (
              <a
                className="text-gray-300 inlin items-center text-[1.2rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-indigo-950 active:scale-110 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                href={github}
                target="_blank"
              >
                <FaGithub />
              </a>
            )}
            {demo && (
              <a
                className="text-gray-400 flex items-center text-[1.2rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-110 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                href={demo}
                target="_blank"
              >
                <RiPagesLine />
              </a>
            )}
            {video && (
              <a
                className="text-gray-400 flex items-center text-[1.2rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-110 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                href={video}
                target="_blank"
              >
                <FaYoutube />
              </a>
            )}
          </div>

          <p className="mt-2 leading-relaxed text-zinc-500">{description}</p>

          <ul className="flex flex-row flex-wrap gap-2 mt-4 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="px-2 py-1 text-[0.6rem] tracking-widest uppercase font-semibold text-white bg-zinc-500 rounded-md"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          alt={title}
          quality={95}
          src={imageUrl}
          className="absolute hidden sm:block top-8 -right-5 w-[15rem] rounded-xl shadow-2xl
          transition group-hover:scale-[1.03] group-hover:-translate-x-3 group-hover:-translate-y-3 group-hover:-rotate-2"
        />
      </section>
    </div>
  );
}
