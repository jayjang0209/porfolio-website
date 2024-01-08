import React, { useState } from "react";

export default function About() {
  return (
    <section
      className="mt-24 mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      id="about"
    >
      <h1 className="text-4xl font-bold mb-5">About Me</h1>
      <p className="mb-3">
        Greetings! I'm Jay, a fresh-faced tech graduate from the British Columbia Institute
        of Technology with a passion for software innovation and cloud
        computing. At SAP, as an Agile Developer Intern in the platform
        infrastructure team, I engaged in developing microservices running on
        diverse cloud platforms and honed my skills in DevOps through updates
        and troubleshooting of virtual Linux machines. During my tenure at IOTO,
        I embraced the full-stack developer role, where I crafted sophisticated
        web scrapers, APIs, and user interfaces from the ground up. I'm now
        seeking a full-time position where I can apply my diverse skill set in a
        dynamic and innovative environment.
      </p>
    </section>
  );
}
