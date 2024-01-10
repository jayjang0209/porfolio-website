"use client";

import React, { useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import { useActiveSectionContext } from "@/context/active-section-context";
import { GiHamburgerMenu } from "react-icons/gi";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-[999]">
      <div className="mx-auto px-4 bg-white bg-opacity-50 backdrop-blur-[0.5rem] dark:bg-opacity-40 dark:bg-black">
        <div className="flex justify-between items-center">
          {/* Website Logo */}
          <a href="#" className="flex items-center py-4 px-2 gap-1">
            <span className="font-semibold text-gray-500 text-lg dark:text-slate-100">
              Jay
            </span>
            <span className="font-semibold text-indigo-600 text-lg">Jang</span>
          </a>

          {/* Primary Navbar items */}
          <ul className="hidden sm:flex items-center space-x-1">
            {links.map((link) => (
              <li key={link.hash} className="relative">
                <Link
                  href={link.hash}
                  className="flex w-full items-center justify-center px-3 py-3 hover:text-indigo-600 transition dark:text-slate-100 dark:hover:text-indigo-400"
                  onClick={() => {
                    setActiveSection(link.name);
                    setTimeOfLastClick(Date.now());
                  }}
                >
                  {link.name}

                  {/* Active Indicator */}
                  {link.name === activeSection && (
                    <motion.span
                      layoutId="activeSection"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                      className="w-[80%] mx-auto border-b-3 bottom-2 absolute inset-0 -z-10 border-indigo-600 opacity-80 dark:border-indigo-400"
                    ></motion.span>
                  )}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center">
            <button
              className="outline-none mobile-menu-button"
              onClick={() => setIsOpen(!isOpen)}
            >
              <GiHamburgerMenu className="w-8 h-8 text-gray-500 hover:text-indigo-600 dark:text-slate-100" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.ul
        className={`absolute top-full left-0 w-full bg-white z-50 bg-opacity-50 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:hidden dark:bg-black dark:bg-opacity-70 dark:shadow-white/[0.03] dark:backdrop-blur-[0.5rem]
        
        ${isOpen ? "block" : "hidden"} text-right `}
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: isOpen ? 1 : 0,
          y: isOpen ? 0 : -20,
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {links.map((link) => (
          <li key={link.hash} className="">
            <Link
              href={link.hash}
              className={clsx("block py-2 px-4 text-md hover:bg-indigo-200", {
                "text-indigo-600 dark:text-indigo-400":
                  link.name === activeSection,
              })}
              onClick={() => {
                setActiveSection(link.name);
                setTimeOfLastClick(Date.now());
                setIsOpen(false);
              }}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </motion.ul>
    </nav>
  );
}
