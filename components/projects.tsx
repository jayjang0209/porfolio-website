"use client";

import React, { useState } from "react";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { MdExpandMore, MdExpandLess } from "react-icons/md";

const projectNumberToShow = 3;

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.15);
  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => setShowAll(!showAll);

  const displayedProjects = showAll
    ? projectsData
    : projectsData.slice(0, projectNumberToShow);
  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <h1 className="text-4xl font-bold mb-5 text-center">My Projects</h1>
      <div>
        {displayedProjects.map((project, index) => (
          <Project key={index} {...project} />
        ))}
      </div>
      <div className="text-center mt-4">
        {!showAll ? (
          <button
            className="mt-2 text-md bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 transition"
            onClick={toggleShowAll}
          >
            More <MdExpandMore className="inline-block text-2xl" />
          </button>
        ) : (
          <button
            className="text-md bg-indigo-500 text-white py-2 px-4 rounded hover:bg-indigo-600 transition"
            onClick={toggleShowAll}
          >
            Less <MdExpandLess className="inline-block text-2xl" />
          </button>
        )}
      </div>
    </section>
  );
}
