import IGLogo from "@/public/logo-ig.png";
import GHLogo from "@/public/logo-gh.png";
import INLogo from "@/public/logo-in.png";
import Link from "next/link";
import Image from "next/image";
function Features() {
  return (
    <div className="flex gap-12 p-8  content-center justify-center socialsBorder max-sm:gap-8">
      <Link href="https://github.com/RobFrontend" target="_blank">
        <Image
          src={GHLogo}
          alt="logo"
          className="max-w-20 brightness-60  opacity-50  transition-all duration-500 socials max-sm:max-w-16"
        />
      </Link>
      <Link
        href="https://www.instagram.com/rob_learns_frontend/"
        target="_blank"
      >
        <Image
          src={IGLogo}
          className="max-w-20 brightness-0  opacity-50  transition-all duration-500 socials max-sm:max-w-16"
          alt="logo"
        />
      </Link>
      <Link
        href="https://www.linkedin.com/in/robert-grabowski-b97965239/"
        target="_blank"
      >
        <Image
          src={INLogo}
          className="max-w-20 brightness-60  opacity-50  transition-all duration-500 socials max-sm:max-w-16"
          alt="logo"
        />
      </Link>
    </div>
  );
}

export default Features;
