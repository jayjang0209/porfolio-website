import React from 'react'
import { IoIosSend } from "react-icons/io";
import { useFormStatus } from "react-dom";



export default function SubmitBtn() {
  const { pending } = useFormStatus();
  
  return (
    <button className="group inline-flex h-10 items-center justify-center rounded-lg bg-indigo-600 px-4 w-36 text-sm font-medium text-zinc-50 shadow transition-colors hover:bg-indigo-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:sclae-100 disabled:opacity-80 disabled:cursor-not-allowed dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90 dark:focus-visible:ring-zinc-300"
    disabled={pending}
    >
      {pending ? (
        <span className="h-5 w-5 animate-spin rounded-full border-b-2 border-white ">
          <IoIosSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
        </span>
      ) : (
        <span className="flex items-center gap-2">
          Contact Me{" "}
          <IoIosSend className="group-hover:translate-x-1 group-hover:-translate-y-1 transition" />
        </span>
      )}
    </button>
  )
}
