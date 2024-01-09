"use client";

import React, { useState, useRef } from "react";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { MdExpandMore, MdExpandLess } from "react-icons/md";
import { AnimatePresence, m, motion } from "framer-motion";

const projectNumberToShow = 4;

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.15);
  const [showAll, setShowAll] = useState(false);
  const moreButtonRef = useRef<HTMLButtonElement>(null);

  const projectVariants = {
    hidden: { opacity: 0, height: 0 },
    visible: { opacity: 1, height: "auto", transition: { duration: 0.5 } },
    exit: { opacity: 0, height: 0, transition: { duration: 0.5 } },
  };

  const toggleShowAll = () => {
    if (showAll) {
      setTimeout(() => {
        moreButtonRef.current?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
    setShowAll(!showAll);
  };

  const displayedProjects = showAll
    ? projectsData
    : projectsData.slice(0, projectNumberToShow);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <h1 className="text-4xl font-bold mb-5 text-center">My Projects</h1>
      {displayedProjects.map((project, index) => (
        <motion.div
          key={index}
          variants={projectVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          style={{ marginBottom: "1.8rem" }}
        >
          <Project key={index} {...project} />
        </motion.div>
      ))}

      <div className="text-center mt-4">
        {!showAll ? (
          <button
            ref={moreButtonRef}
            className="group inline-flex h-10 items-center justify-center gap-2 rounded-md bg-indigo-600 px-5 text-sm font-medium text-zinc-50 shadow transition-colors hover:bg-indigo-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950
            scroll-mt-80"
            onClick={toggleShowAll}
          >
            More{" "}
            <MdExpandMore className="text-2xl group-hover:translate-y-1 transition" />
          </button>
        ) : (
          <button
            className="group inline-flex h-10 items-center justify-center gap-2 rounded-md bg-indigo-600 px-5 text-sm font-medium text-zinc-50 shadow transition-colors hover:bg-indigo-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950"
            onClick={toggleShowAll}
          >
            Less{" "}
            <MdExpandLess className="inline-block text-2xl group-hover:-translate-y-1 transition" />
          </button>
        )}
      </div>
    </section>
  );
}
