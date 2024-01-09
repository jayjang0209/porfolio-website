"use client";

import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { IoOpenOutline } from "react-icons/io5";
import { GithubLink, LinkedInLink, ResumeLink } from "@/lib/data";
import { useActiveSectionContext } from "@/context/active-section-context";

import Link from "next/link";

export default function Hero() {
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      className="max-w-6xl w-full py-12 md:py-24 lg:py-32 scroll-mt-[80rem]"
      id="home"
    >
      <div className="container mx-auto">
        <div className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_500px]">
          <img
            alt="Profile"
            className="mx-auto aspect-content overflow-hidden rounded-xl object-center lg:w-[80%] lg:order-last lg:aspect-square"
            width={160}
            src="./imgs/profile_mono.png"
          />
          <div className="flex flex-col justify-center space-y-4 ml-3">
            <div className="space-y-2">
              <h1 className="pt-3 text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Hello, I'm <span className="text-primary">Jay</span>
              </h1>
              <p className="max-w-[600px] text-zinc-500 md:text-xl dark:text-zinc-400">
                A recent tech grad with intern experiences, seeking a full-time
                role to innovate and excel in software development
              </p>
            </div>
            <div className="flex flex-row items-center justify-start gap-2 text-lg font-medium">
              <Link
                className="group inline-flex h-10 items-center justify-center gap-2 rounded-md bg-indigo-600 px-6 text-sm font-medium text-zinc-50 shadow transition-colors hover:bg-indigo-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 dark:focus-visible:ring-zinc-300"
                href="#contact"
                onClick={() => {
                  setActiveSection("Contact");
                  setTimeOfLastClick(Date.now());
                }}
              >
                Contact Me
                <HiArrowNarrowRight className="opacity-70 group-hover:translate-x-1 transition" />
              </Link>

              <a
                className="group inline-flex h-10 items-center justify-center gap-2 rounded-md bg-indigo-600 px-6 text-sm font-medium text-zinc-50  shadow transition-colors hover:bg-indigo-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none"
                href={ResumeLink}
                target="_blank"
              >
                Open Resume
                <IoOpenOutline className="opacity-60  group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
              </a>
            </div>

            <div className="flex items-center justify-start gap-2">
              <a
                className="bg-white text-gray-700 flex items-center text-[1.8rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                href={LinkedInLink}
                target="_blank"
              >
                <FaLinkedin />
              </a>

              <a
                className="bg-white text-gray-700 flex items-center text-[1.8rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                href={GithubLink}
                target="_blank"
              >
                <FaGithubSquare />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
