"use client";

import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";

export default function Experience() {

  return (
    <section id="experience" className="scroll-mt-28 mb-28 sm:mb-40">
      <h1 className="text-4xl font-bold mb-5 text-center">Experiences</h1>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              visible={true}
              contentStyle={{
                background: "#fff",
                border: "1px solid rgba(0, 0, 0, 0.05)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight: "0.4rem solid #9ca3af",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: "#e5e7eb",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-semibold capitalize">{item.title}</h3>
              <p className="font-normal !mt-0">{item.place}</p>
              <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75 pb-4">
                {item.description}
              </p>

              {item.details?.skills && (
                <ul className="flex flex-row flex-wrap gap-2 mt-6 sm:mt-auto">
                  {item.details.skills.map((skill, index) => (
                    <li
                      className="px-2 py-1 text-[0.7rem] tracking-wider uppercase font-semibold text-zinc-800 bg-indigo-300 rounded-full"
                      key={index}
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              )} 

            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}