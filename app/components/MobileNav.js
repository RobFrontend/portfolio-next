"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const openNav = isOpen
    ? "translate-x-[0%] opacity-100"
    : "translate-x-[150%] opacity-0 -rotate-45";

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

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

      <div
        className={`absolute grid justify-center content-center gap-12 text-2xl font-[300] tracking-[-1px] left-0  top-0  z-[-1] bg-slate-100/80 w-full h-[100vh] backdrop-blur-sm transition-all duration-500 ${openNav} `}
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
    </>
  );
}

export default MobileNav;
