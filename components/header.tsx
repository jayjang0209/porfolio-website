"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Header() {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionContext();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-[999]">
      <div className="max-w-6xl mx-auto px-4 bg-white bg-opacity-50 backdrop-blur-[0.5rem]">
        <div className="flex justify-between items-center">
          {/* Website Logo */}
          <a href="#" className="flex items-center py-4 px-2 gap-1">
            <span className="font-semibold text-gray-500 text-lg">Jay</span>
            <span className="font-semibold text-indigo-600 text-lg">Jang</span>
          </a>

          {/* Primary Navbar items */}
          <ul className="hidden sm:flex items-center space-x-1">
            {links.map((link) => (
              <li key={link.hash} className="relative">
                <Link
                  href={link.hash}
                  className="flex w-full items-center justify-center px-3 py-3 hover:text-indigo-600 transition dark:text-gray-500 dark:hover:text-gray-300"
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
                      className="w-[80%] mx-auto border-b-3 bottom-2 absolute inset-0 -z-10 border-indigo-500 opacity-80 dark:bg-gray-800"
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
              <svg
                className="w-6 h-6 text-gray-500 hover:text-indigo-600"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <ul
        className={`absolute top-full left-0 w-full bg-white z-50 bg-opacity-50 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:hidden ${
          isOpen ? "block" : "hidden"
        } text-right `}
      >
        {links.map((link) => (
          <li key={link.hash} className="">
            <Link
              href={link.hash}
              className="block py-2 px-4 text-sm hover:bg-indigo-200"
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
      </ul>
    </nav>
  );
}
