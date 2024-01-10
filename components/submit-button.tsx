import React from "react";
import { IoIosSend } from "react-icons/io";
import { useFormStatus } from "react-dom";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button className="group btn_primary w-40" disabled={pending}>
      {/* if pending, show spinner, else show text */}
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
  );
}
