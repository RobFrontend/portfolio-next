"use client";
import Link from "next/link";
import MobileNav from "./MobileNav";
import Headroom from "react-headroom";

function Navigation() {
  return (
    <Headroom>
      <nav className="flex justify-between items-center h-[80px] px-8 max-sm:px-5 max-sm:h-[64px]">
        <Link href="/" className="text-3xl font-[400] tracking-[-3px] z-50">
          Home
        </Link>

        <ul className="flex gap-12 text-2xl font-[300] tracking-[-1px] max-[900px]:hidden max-lg:gap-8">
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
            href="hobbyprojects"
            className="hover:opacity-90 transition-all duration-300"
          >
            Hobby projects
          </Link>
          <Link
            href="contact"
            className="hover:opacity-90 transition-all duration-300"
          >
            Contact
          </Link>
        </ul>
        <div className="min-[901px]:hidden z-40">
          <MobileNav />
        </div>
      </nav>
    </Headroom>
  );
}

export default Navigation;
