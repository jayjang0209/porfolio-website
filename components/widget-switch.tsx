"use client"

import React from 'react'
import { BsMoon, BsSun } from "react-icons/bs";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { PortfolioGihuLink } from '@/lib/data';

export default function ThemeSwitch() {
 const [theme, setTheme] = React.useState("light");

  return (
    <div className='flex flex-col fixed bottom-5 right-5 gap-2'>
      <button
        className="bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      >
        {theme === "light" ? <BsSun /> : <BsMoon />}
      </button>
      <a
        className="bg-white w-[3rem] h-[3rem] bg-opacity-80 backdrop-blur-[0.5rem] border border-white border-opacity-40 shadow-2xl rounded-full flex items-center justify-center hover:scale-[1.15] active:scale-105 transition-all dark:bg-gray-950"
        href={PortfolioGihuLink}
        target="_blank"
      >
        <FaGithubSquare />
      </a>
    </div>
  );
}
