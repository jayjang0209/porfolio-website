import React from 'react'

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center gap-1 py-3 bg-indigo-600/80 text-white/80 dark:bg-opacity-40 dark:bg-black">
      <p className="text-sm">
        &copy; 2024 Jay Jang. All rights reserved.
      </p>
      <p className='text-xs text-center'>
        Built with <a className="text-primary underline" href="https://nextjs.org/">Next.js</a>,{" "}
        <a className="text-primary underline" href="https://www.typescriptlang.org/">TypeScript</a>,{" "}
         <a className="text-primary underline" href="https://tailwindcss.com/">Tailwind CSS</a>,{" "}
          <a className="text-primary underline" href="https://www.framer.com/motion/">Framer Motion</a>,
          and hosted on <a className="text-primary underline" href="https://vercel.com/">Vercel</a>.
      </p>
    </footer>
  )
}
