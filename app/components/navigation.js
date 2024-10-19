import Link from "next/link";

function Navigation() {
  return (
    <nav className="flex justify-between items-center h-[80px] px-8">
      <Link href="/" className="text-3xl font-[400] tracking-[-3px]">
        Home
      </Link>

      <div className="flex gap-12 text-2xl font-[300] tracking-[-1px] max-md:hidden">
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
    </nav>
  );
}

export default Navigation;
