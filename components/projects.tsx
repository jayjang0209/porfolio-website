"use client";

import React, { useState, useRef } from "react";
import { projectsData } from "@/lib/data";
import Project from "./project";
import SectionHeading from "@/components/section-heading";
import { useSectionInView } from "@/lib/hooks";
import { MdExpandMore, MdExpandLess } from "react-icons/md";
import { motion } from "framer-motion";

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
      <SectionHeading>Projects</SectionHeading>
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

      <motion.div
        className="text-center mt-4"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        {!showAll ? (
          <button
            ref={moreButtonRef}
            className="group btn_primary"
            onClick={toggleShowAll}
          >
            More{` (${projectsData.length - projectNumberToShow})`}
            <MdExpandMore className="text-2xl group-hover:translate-y-1 transition" />
          </button>
        ) : (
          <button
            className="group btn_primary"
            onClick={toggleShowAll}
          >
            Less{" "}
            <MdExpandLess className="inline-block text-2xl group-hover:-translate-y-1 transition" />
          </button>
        )}
      </motion.div>
    </section>
  );
}
