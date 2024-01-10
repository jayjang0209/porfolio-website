"use client";

import React, { useState, useRef } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { FaGithub, FaYoutube } from "react-icons/fa";
import { RiPagesLine } from "react-icons/ri";
import { motion, useScroll, useTransform } from "framer-motion";
import YoutubeModal from "@/components/youtube-modal";
import ProjectModal from "@/components/project-modal";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  tasks,
  imageUrl,
  github,
  demo,
  video,
}: ProjectProps) {
  const [showVideo, setShowVideo] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const toggleShowVideo = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowVideo(!showVideo);
  };
  const toggleShowDetails = () => setShowDetails(!showDetails);

  {
    /* scroll animation*/
  }
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.3 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgess, opacity: opacityProgess }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section
        onClick={toggleShowDetails}
        className="relative rounded-xl bg-gray-50 max-w-[42rem] border border-black/5 overflow-hidden sm:h-[21rem] hover:bg-gray-200 transition cursor-pointer dark:text-white dark:bg-white/10 dark:hover:bg-white/20"
      >
        <div className="flex flex-col h-full pt-3 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[60%]">
          <h3 className="flex text-2xl font-semibold text-zinc-800 dark:text-slate-100">
            {title}
          </h3>
          <div className="flex items-center justify-start gap-2 mt-1 mb-1">
            {github && (
              <a
                className="text-gray-500 inlin items-center text-[1.2rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-indigo-950 active:scale-110 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-slate-100"
                href={github}
                target="_blank"
              >
                <FaGithub />
              </a>
            )}
            {demo && (
              <a
                className="text-gray-500 flex items-center text-[1.2rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-110 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-slate-100"
                href={demo}
                target="_blank"
              >
                <RiPagesLine />
              </a>
            )}
            {video && (
              <a
                onClick={toggleShowVideo}
                className="text-gray-500 flex items-center text-[1.2rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-110 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-slate-100"
              >
                <FaYoutube />
              </a>
            )}
          </div>

          <p className="mt-2 leading-relaxed text-zinc-500 dark:text-white/70">
            {description}
          </p>

          {/* tags */}
          <ul className="flex flex-row flex-wrap gap-2 mt-4 sm:mt-auto">
            {tags.map((tag, index) => (
              <li className="tag_secondary" key={index}>
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          alt={title}
          width={400}
          height={400}
          quality={95}
          src={imageUrl}
          className="absolute hidden sm:block top-8 -right-5 w-[15rem] rounded-xl shadow-2xl
          transition group-hover:scale-[1.03] group-hover:-translate-x-3 group-hover:-translate-y-3 group-hover:-rotate-2"
        />

        {/* Project details modal */}
        {showDetails && (
          <ProjectModal
            title={title}
            description={description}
            tags={tags}
            tasks={tasks}
            onClose={toggleShowDetails}
          />
        )}
      </section>

      {/* video modal */}
      {showVideo && (
        <YoutubeModal videoUrl={video} onClose={() => setShowVideo(false)} />
      )}
    </motion.div>
  );
}
