import Image from "next/image";
import Link from "next/link";
// About icons
import AboutHtml from "@/public/AboutHtml.png";
import AboutCss from "@/public/AboutCss.png";
import AboutJs from "@/public/AboutJs.png";
import AboutReact from "@/public/AboutReact.png";
import AboutNext from "@/public/AboutNext.png";
import AboutNode from "@/public/AboutNode.png";
import AboutTailwind from "@/public/AboutTailwind.png";
import AboutGit from "@/public/AboutGit.png";
import AboutSupabase from "@/public/AboutSupabase.png";
import AboutJira from "@/public/AboutJira.png";
import AboutVSCode from "@/public/AboutVSCode.png";
import AboutAEM from "@/public/AboutAem.png";

function HomeAbout() {
  return (
    <section
      className="max-w-[1200px] mx-auto"
      // ref={aboutEl}
    >
      <h2 className="text-4xl tracking-[-4px] pb-6">About me</h2>
      <div className="grid grid-cols-2 gap-8 content-center justify-center justify-items-center items-center px-4 max-md:grid-cols-1">
        <div className="grid">
          <p className="pb-6 text-justify max-sm:text-sm">
            I specialize in frontend development with a strong command of HTML,
            CSS, JavaScript, and React. Currently, I&apos;m enhancing my skills
            in Next.js and Tailwind CSS to build dynamic and responsive web
            applications. I also have hands-on experience with creating websites
            for clients, which has sharpened my practical knowledge in
            real-world projects. In addition, I am familiar with Git for version
            control and am exploring backend technologies, including Node.js.
            Recently, I&apos;ve started working with databases, focusing on
            MySQL and PostgreSQL, though for now, I&apos;m using Supabase to
            manage data in my projects.
          </p>
          <Link
            href="/about"
            className="text-xl border-b-[1px] border-[#575858] py-2 px-4 max-md:justify-self-center w-fit max-[380px]:max-sm:text-lg hover:opacity-80 transition-all duration-300 linkHover"
          >
            More about me
          </Link>
        </div>
        <div className="grid grid-cols-4 gap-8  self-center justify-self-end w-fit max-lg:grid-cols-3 max-md:grid-cols-4 max-md:row-start-1 max-md:justify-self-center max-md:gap-6 max-sm:gap-4">
          <Image
            src={AboutHtml}
            alt="logo html"
            className="max-h-20 max-w-20 brightness-90 grayscale-[0.4] transition-all duration-500 hover:brightness-100 drop-shadow-lg max-md:max-h-16 max-md:max-w-16 hover:translate-y-[-6px] max-sm:h-10 max-sm:w-10"
          />
          <Image
            src={AboutCss}
            alt="logo css"
            className="max-h-20 max-w-20 brightness-90 grayscale-[0.4] transition-all duration-500 hover:brightness-100 drop-shadow-lg max-md:max-h-16 max-md:max-w-16 hover:translate-y-[-6px] max-sm:h-10 max-sm:w-10"
          />
          <Image
            src={AboutJs}
            alt="logo javascript"
            className="max-h-20 max-w-20 brightness-90 grayscale-[0.4] transition-all duration-500 hover:brightness-100 drop-shadow-lg max-md:max-h-16 max-md:max-w-16 hover:translate-y-[-6px] max-sm:h-10 max-sm:w-10"
          />
          <Image
            src={AboutReact}
            alt="logo react"
            className="max-h-20 max-w-20 brightness-90 grayscale-[0.4] transition-all duration-500 hover:brightness-100 drop-shadow-lg max-md:max-h-16 max-md:max-w-16 hover:translate-y-[-6px] max-sm:h-10 max-sm:w-10"
          />
          <Image
            src={AboutNext}
            alt="logo next"
            className="max-h-20 max-w-20 brightness-90 grayscale-[0.4] transition-all duration-500 hover:brightness-100 drop-shadow-lg max-md:max-h-16 max-md:max-w-16 hover:translate-y-[-6px] max-sm:h-10 max-sm:w-10"
          />
          <Image
            src={AboutNode}
            alt="logo node"
            className="max-h-20 max-w-20 brightness-90 grayscale-[0.4] transition-all duration-500 hover:brightness-100 drop-shadow-lg max-md:max-h-16 max-md:max-w-16 hover:translate-y-[-6px] max-sm:h-10 max-sm:w-10"
          />
          <Image
            src={AboutTailwind}
            alt="logo tailwind"
            className="max-h-20 max-w-20 brightness-90 grayscale-[0.4] transition-all duration-500 hover:brightness-100 drop-shadow-lg max-md:max-h-16 max-md:max-w-16 hover:translate-y-[-6px] max-sm:h-10 max-sm:w-10"
          />
          <Image
            src={AboutGit}
            alt="logo git"
            className="max-h-20 max-w-20 brightness-90 grayscale-[0.4] transition-all duration-500 hover:brightness-100 drop-shadow-lg max-md:max-h-16 max-md:max-w-16 hover:translate-y-[-6px] max-sm:h-10 max-sm:w-10"
          />
          <Image
            src={AboutSupabase}
            alt="logo supabase"
            className="max-h-20 max-w-20 brightness-90 grayscale-[0.4] transition-all duration-500 hover:brightness-100 drop-shadow-lg max-md:max-h-16 max-md:max-w-16 hover:translate-y-[-6px] max-sm:h-10 max-sm:w-10"
          />
          <Image
            src={AboutJira}
            alt="logo Jira"
            className="max-h-20 max-w-20 brightness-90 grayscale-[0.4] transition-all duration-500 hover:brightness-100 drop-shadow-lg max-md:max-h-16 max-md:max-w-16 hover:translate-y-[-6px] max-sm:h-10 max-sm:w-10"
          />
          <Image
            src={AboutAEM}
            alt="logo AEM"
            className="max-h-20 max-w-20 brightness-90 grayscale-[0.4] transition-all duration-500 hover:brightness-100 drop-shadow-lg max-md:max-h-16 max-md:max-w-16 hover:translate-y-[-6px] max-sm:h-10 max-sm:w-10"
          />
          <Image
            src={AboutVSCode}
            alt="logo VS Code"
            className="max-h-20 max-w-20 brightness-90 grayscale-[0.4] transition-all duration-500 hover:brightness-100 drop-shadow-lg max-md:max-h-16 max-md:max-w-16 hover:translate-y-[-6px] max-sm:h-10 max-sm:w-10"
          />
        </div>
      </div>
    </section>
  );
}

export default HomeAbout;
