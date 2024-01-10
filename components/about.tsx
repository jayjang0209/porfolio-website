"use client";

import React from "react";
import SectionHeading from "@/components/section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mt-24 mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      id="about"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        Greetings! I'm <span className="highlight">Jay</span>, a fresh-faced
        tech graduate from the
        <span className="highlight">
          {" "}
          British Columbia Institute of Technology
        </span>{" "}
        with a passion for software innovation and cloud computing.
        <br />
        At <span className="highlight">SAP</span>, as an
        <span className="emphasis">Agile Developer Intern</span> in the platform
        infrastructure team, I engaged in developing microservices running on
        diverse cloud platforms and honed my skills in DevOps through updates
        and troubleshooting of virtual Linux machines.
        <br />
        During my tenure at
        <span className="highlight"> IOTO</span>, I embraced the{" "}
        <span className="emphasis">full-stack developer</span>
        role, where I crafted sophisticated web scrapers, APIs, and user
        interfaces from the ground up.
        <br />
        I'm now seeking a <span className="emphasis">
          full-time position
        </span>{" "}
        where I can apply my diverse skill set in a dynamic and innovative
        environment.
      </p>
    </motion.section>
  );
}
