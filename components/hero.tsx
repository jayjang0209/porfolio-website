import React from "react";

import MainProfileImg from "@/public/imgs/jj_profile_main.png";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
      <div className="container mx-auto">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <img
            alt="Profile"
            className="mx-auto aspect-content overflow-hidden rounded-xl object-center lg:w-[80%] lg:order-last lg:aspect-square"
            width={160}
            src='./imgs/profile_mono.png'
          />
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Hello, I'm <span className="text-primary">Jay</span>
              </h1>
              <p className="max-w-[600px] text-zinc-500 md:text-xl dark:text-zinc-400">
              A recent tech grad with intern experience, seeking a full-time
              role to innovate and excel in software development
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
