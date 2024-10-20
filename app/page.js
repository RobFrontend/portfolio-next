import Image from "next/image";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Link from "next/link";
import AboutHtml from "@/public/AboutHtml.png";
import AboutCss from "@/public/AboutCss.png";
import AboutJs from "@/public/AboutJs.png";
import AboutReact from "@/public/AboutReact.png";
import AboutNext from "@/public/AboutNext.png";
import AboutNode from "@/public/AboutNode.png";
import AboutTailwind from "@/public/AboutTailwind.png";
import AboutGit from "@/public/AboutGit.png";
import AboutSupabase from "@/public/AboutSupabase.png";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <section className="max-w-[1200px] mx-auto">
        <h2 className="text-4xl tracking-[-4px] pb-6">About me</h2>
        <div className="grid grid-cols-2 gap-8 content-center justify-center justify-items-center items-center px-4 max-md:grid-cols-1">
          <div className="grid">
            <p className="pb-6 text-justify">
              I specialize in frontend development with a strong command of
              HTML, CSS, JavaScript, and React. Currently, I&apos;m enhancing my
              skills in Next.js and Tailwind CSS to build dynamic and responsive
              web applications. I also have hands-on experience with creating
              websites for clients, which has sharpened my practical knowledge
              in real-world projects. In addition, I am familiar with Git for
              version control and am exploring backend technologies, including
              Node.js. Recently, I&apos;ve started working with databases,
              focusing on MySQL and PostgreSQL, though for now, I&apos;m using
              Supabase to manage data in my projects.
            </p>
            <Link
              href="/about"
              className="text-xl border-b-[1px] border-[#575858] py-2 px-4 max-md:justify-self-center w-fit"
            >
              More about me
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-8  self-center justify-self-end w-fit max-md:row-start-1 max-md:justify-self-center max-md:gap-6">
            <Image
              src={AboutHtml}
              alt="logo"
              className="max-h-20 max-w-20 brightness-90 grayscale-[0.4] transition-all duration-500 hover:brightness-100 drop-shadow-lg max-md:max-h-16 max-md:max-w-16"
            />
            <Image
              src={AboutCss}
              alt="logo"
              className="max-h-20 max-w-20 brightness-90 grayscale-[0.4] transition-all duration-500 hover:brightness-100 drop-shadow-lg max-md:max-h-16 max-md:max-w-16"
            />
            <Image
              src={AboutJs}
              alt="logo"
              className="max-h-20 max-w-20 brightness-90 grayscale-[0.4] transition-all duration-500 hover:brightness-100 drop-shadow-lg max-md:max-h-16 max-md:max-w-16"
            />
            <Image
              src={AboutReact}
              alt="logo"
              className="max-h-20 max-w-20 brightness-90 grayscale-[0.4] transition-all duration-500 hover:brightness-100 drop-shadow-lg max-md:max-h-16 max-md:max-w-16"
            />
            <Image
              src={AboutNext}
              alt="logo"
              className="max-h-20 max-w-20 brightness-90 grayscale-[0.4] transition-all duration-500 hover:brightness-100 drop-shadow-lg max-md:max-h-16 max-md:max-w-16"
            />
            <Image
              src={AboutNode}
              alt="logo"
              className="max-h-20 max-w-20 brightness-90 grayscale-[0.4] transition-all duration-500 hover:brightness-100 drop-shadow-lg max-md:max-h-16 max-md:max-w-16"
            />
            <Image
              src={AboutTailwind}
              alt="logo"
              className="max-h-20 max-w-20 brightness-90 grayscale-[0.4] transition-all duration-500 hover:brightness-100 drop-shadow-lg max-md:max-h-16 max-md:max-w-16"
            />
            <Image
              src={AboutGit}
              alt="logo"
              className="max-h-20 max-w-20 brightness-90 grayscale-[0.4] transition-all duration-500 hover:brightness-100 drop-shadow-lg max-md:max-h-16 max-md:max-w-16"
            />
            <Image
              src={AboutSupabase}
              alt="logo"
              className="max-h-20 max-w-20 brightness-90 grayscale-[0.4] transition-all duration-500 hover:brightness-100 drop-shadow-lg max-md:max-h-16 max-md:max-w-16"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
