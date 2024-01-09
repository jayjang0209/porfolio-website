import React from "react";
import { EmailLink } from "@/lib/data";

export default function Contact() {
  return (
    <section
      id="contact"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
    >
      <h1 className="text-4xl font-bold mb-5 text-center">Contact Me</h1>
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

      <form className="mt-10 flex flex-col gap-4"></form>
    </section>
  );
}
