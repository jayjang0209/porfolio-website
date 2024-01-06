"use client"

import React, {useState} from 'react'
import Link from 'next/link'
import { links } from '@/lib/data'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="relative">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center">
                    {/* Website Logo */}
                    <a href="#" className="flex items-center py-4 px-2 gap-1">
                        <span className="font-semibold text-gray-500 text-lg">Jay</span>
                        <span className="font-semibold text-indigo-600 text-lg">Jang</span>
                    </a>

                    {/* Primary Navbar items */}
                    <ul className="hidden sm:flex items-center space-x-1">
                        {links.map((link) => (
                            <li key={link.hash}>
                                <Link href={link.hash}>
                                    <span className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">{link.name}</span>
                                </Link>

                            </li>

                        ))}
                    </ul>

                    {/* Mobile menu button */}
                    <div className="sm:hidden flex items-center">
                        <button className="outline-none mobile-menu-button" onClick={() => setIsOpen(!isOpen)}>
                            <svg className="w-6 h-6 text-gray-500 hover:text-green-500"
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
            <div className={`absolute top-full left-0 w-full bg-white z-50 sm:hidden ${isOpen ? 'block' : 'hidden'} text-right`}>
                <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Home</a>
                <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Services</a>
                <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">About</a>
                <a href="#" className="block py-2 px-4 text-sm hover:bg-gray-200">Contact Us</a>
            </div>
        </nav>
    );
};

