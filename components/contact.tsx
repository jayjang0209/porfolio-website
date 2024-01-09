"use client";

import React from "react";
import { EmailLink } from "@/lib/data";
import { IoIosSend } from "react-icons/io";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import SectionHeading from "@/components/section-heading";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true}}
    >
      <SectionHeading>Contact</SectionHeading>
      <p className="text-lg text-zinc-500 dark:text-zinc-400">
        I'm currently looking for full-time opportunities in software
        development. Feel free to reach out to me via{" "}
        <a
          className="text-primary underline text-indigo-900"
          href={`mailto:${EmailLink}`}
        >
          jayjang0209@gmail.com
        </a>{" "}
        or this form!
      </p>

      <form className="mt-10 flex flex-col gap-4">
        <input
          className="h-14 px-4 rounded-lg ring-2 ring-zinc-400 border border-indigo-700/10 transition-all dark:outline-none bg-slate-50"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg ring-2 ring-zinc-400 border border-indigo-700/10 p-4 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
      </form>
      <button className="group inline-flex h-10 mt-4 items-center justify-center gap-2 rounded-md bg-indigo-600 px-6 text-sm font-medium text-zinc-50 shadow transition-colors hover:bg-indigo-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 dark:focus-visible:ring-zinc-300">
        Contact Me
        <IoIosSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
      </button>
    </motion.section>
  );
}
