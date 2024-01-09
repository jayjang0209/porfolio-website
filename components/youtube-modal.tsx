"use client";

import React from "react";
import type { YoutubeModalProps } from "@/types/components/YoutubeModalPropsType";

export default function YoutubeModal({
  videoUrl,
  onClose,
}: YoutubeModalProps): JSX.Element | null {
  if (!videoUrl) return null;

  console.log(videoUrl);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-30 flex justify-center items-center ">
      <div className="bg-white p-2 rounded-lg shadow-lg">
        <iframe
          src={videoUrl}
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-[30rem] sm:h-[25rem] sm:w-[35rem] md:h-[35rem] md:w-[45rem]"
        />
        <button
          onClick={onClose}
          className="mt-3 inline-flex h-10 items-center justify-center gap-2 rounded-md bg-indigo-600 px-6 text-sm font-medium text-zinc-50 shadow transition-colors hover:bg-indigo-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 dark:focus-visible:ring-zinc-300"
        >
          Close
        </button>
      </div>
    </div>
  );
}
