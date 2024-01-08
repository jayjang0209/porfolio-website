"use client";

import React from "react";
import { projectsData } from "@/lib/data";
import Project from "./project";


export default function Projects() {

  return (
    <section id="projects" className="scroll-mt-28 mb-28">
      <h1 className="text-4xl font-bold mb-5 text-center">My Projects</h1>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}