"use client";

import Link from "next/link";
import { useState } from "react";

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-8 z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
        />
      </svg>

      {isOpen && (
        <div
          className="absolute grid justify-center content-center gap-12 text-2xl font-[300] tracking-[-1px] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-[-1] bg-slate-100/80 w-full h-dvh backdrop-blur-sm"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Link
            href="about"
            className="hover:opacity-90 transition-all duration-300"
          >
            About me
          </Link>

          <Link
            href="clientprojects"
            className="hover:opacity-90 transition-all duration-300"
          >
            Client projects
          </Link>
          <Link
            href="hobyprojects"
            className="hover:opacity-90 transition-all duration-300"
          >
            Hobby projects
          </Link>
        </div>
      )}
    </>
  );
}

export default MobileNav;
