"use client";

import React from "react";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import SectionHeading from "@/components/section-heading";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      className="mb-28 max-w-[50rem] scroll-mt-28 text-center sm:mb-40"
      id="skills"
      ref={ref}
    >
      <SectionHeading>Skills</SectionHeading>
      <ul className="flex flex-wrap items-center justify-center gap-5">
        {skillsData.map((skill, index) => (
          <motion.li
            key={index}
            className="bg-slate-400 text-white borderBlack tracking-wider rounded-xl px-5 py-1 sm:py-2"
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            <p className="text-md font-semibold uppercase">{skill}</p>
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
