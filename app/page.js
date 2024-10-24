import Image from "next/image";
import Hero from "./components/Hero";
import Features from "./components/Features";
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
//
import HomeClientCarousel from "./components/HomeClientCarousel";
// Hobby imgs
import RetroGame from "@/public/retrogame.webp";
import BlogCms from "@/public/cms.webp";
import Robshop from "@/public/robshop.webp";
import Robify from "@/public/robify.webp";
import CityLa from "@/public/city.webp";
import Karkonosze from "@/public/karkonosze.webp";
import Bulls from "@/public/bulls.webp";
import NodeTeams from "@/public/teamsnode.webp";
import CreateUser from "@/public/createuser.webp";
import HoopHaven from "@/public/hoophaven.webp";
import Nature from "@/public/nature.webp";
import NbaNews from "@/public/nbanews.webp";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      {/* ABOUT */}
      <section className="max-w-[1200px] mx-auto">
        <h2 className="text-4xl tracking-[-4px] pb-6">About me</h2>
        <div className="grid grid-cols-2 gap-8 content-center justify-center justify-items-center items-center px-4 max-md:grid-cols-1">
          <div className="grid">
            <p className="pb-6 text-justify max-sm:text-sm">
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
              className="text-xl border-b-[1px] border-[#575858] py-2 px-4 max-md:justify-self-center w-fit max-[380px]:max-sm:text-lg hover:opacity-80 transition-all duration-300"
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
      {/* CLIENT PROJECTS */}
      <section className="max-w-[1200px] mx-auto">
        <h2 className="text-4xl tracking-[-4px] pb-6">Client projects</h2>
        <div className="grid  gap-8 content-center justify-center justify-items-center items-center px-4 max-sm:gap-5">
          <HomeClientCarousel />
          <div className="grid">
            <div className="pb-6 max-sm:text-justify">
              <h3 className=" text-xl max-sm:text-base">
                Over the course of my freelance work, I&apos;ve successfully
                delivered a variety of projects for clients, each with its own
                unique requirements:
              </h3>
              <ul className="grid gap-3 p-2">
                <li>
                  <h4 className="text-lg max-sm:text-sm">Landing Pages:</h4>
                  <p className="max-sm:text-xs">
                    I developed two landing pages—one using HTML, CSS, and
                    JavaScript, and another using React with component-based
                    styling. Both projects were designed to be responsive and
                    visually engaging, providing my clients with user-friendly,
                    conversion-focused pages.
                  </p>
                </li>
                <li>
                  <h4 className="text-lg max-sm:text-sm">
                    Multi-Page Website:
                  </h4>
                  <p className="max-sm:text-xs">
                    I built a comprehensive website with multiple subpages,
                    using HTML, CSS, and JavaScript. The focus was on clarity,
                    ease of navigation, and delivering a professional appearance
                    for the client&apos;s business needs.
                  </p>
                </li>
                <li>
                  <h4 className="text-lg max-sm:text-sm">
                    Full-Stack Blog Website:
                  </h4>
                  <p className="max-sm:text-xs">
                    I created a full-stack website using Next.js and Tailwind
                    CSS, which included a fully integrated blog with a CMS. This
                    allows my client to easily add and manage articles. I used
                    Supabase to manage the backend and handle API requests,
                    ensuring a smooth and scalable system.
                  </p>
                </li>
              </ul>
            </div>
            <Link
              href="/clientprojects"
              className="text-xl border-b-[1px] border-[#575858] py-2 px-4 justify-self-center w-fit max-[380px]:max-sm:text-lg text-center hover:opacity-80 transition-all duration-300"
            >
              More about client projects
            </Link>
          </div>
        </div>
      </section>
      {/* DARK MODE */}
      <div className="bg-gradient-to-br from-[#080808] to-[#111]">
        {/* HOBBY POJECTS */}
        <section className="max-w-[1200px] mx-auto">
          <h2 className="text-4xl tracking-[-4px] pb-6">Hobby projects</h2>
          <div className="grid  gap-8 content-center justify-center justify-items-center items-center px-4 max-sm:gap-5">
            <div className="grid grid-cols-4 max-md:grid-cols-3 max-[425px]:grid-cols-2">
              <Image
                src={RetroGame}
                alt="hobby project game"
                className="brightness-90 hover:brightness-100 transition-all duration-500"
              />
              <Image
                src={Robify}
                alt="hobby project spotify"
                className="brightness-90 hover:brightness-100 transition-all duration-500"
              />
              <Image
                src={BlogCms}
                alt="hobby project cms"
                className="brightness-90 hover:brightness-100 transition-all duration-500"
              />
              <Image
                src={HoopHaven}
                alt="hobby project courts"
                className="brightness-90 hover:brightness-100 transition-all duration-500"
              />
              <Image
                src={Karkonosze}
                alt="hobby project mountain"
                className="brightness-90 hover:brightness-100 transition-all duration-500"
              />
              <Image
                src={CityLa}
                alt="hobby project los angeles"
                className="brightness-90 hover:brightness-100 transition-all duration-500"
              />
              <Image
                src={Nature}
                alt="hobby project booking"
                className="brightness-90 hover:brightness-100 transition-all duration-500"
              />
              <Image
                src={Robshop}
                alt="hobby project shop"
                className="brightness-90 hover:brightness-100 transition-all duration-500"
              />
              <Image
                src={Bulls}
                alt="hobby project game"
                className="brightness-90 hover:brightness-100 transition-all duration-500"
              />
              <Image
                src={NodeTeams}
                alt="hobby project node teams"
                className="brightness-90 hover:brightness-100 transition-all duration-500"
              />
              <Image
                src={NbaNews}
                alt="hobby project api"
                className="brightness-90 hover:brightness-100 transition-all duration-500"
              />
              <Image
                src={CreateUser}
                alt="hobby project oop"
                className="brightness-90 hover:brightness-100 transition-all duration-500"
              />
            </div>
            <div className="grid">
              <div className="pb-6 max-sm:text-justify">
                <ul className="grid gap-3">
                  <li>
                    <h3 className="text-xl max-sm:text-lg text-[#787979] tracking-[-1.5px]">
                      Versatile Project Development
                    </h3>
                    <p className="max-sm:text-sm text-[#898a8a] max-md:text-justify">
                      In my free time, I&apos;ve developed a wide range of
                      projects that demonstrate my versatility and passion for
                      learning new technologies. These projects include landing
                      pages, multi-page websites, small e-commerce shops, user
                      input fields, and a full-stack blog with a custom CMS.
                      I&apos;ve also worked on API integrations, both building
                      my own and consuming external APIs. One of my recent
                      smaller projects involved creating a Spotify cover
                      component.
                    </p>
                  </li>
                  <li>
                    <h3 className="text-xl max-sm:text-lg text-[#787979] tracking-[-1.5px]">
                      Diverse Technology Stack
                    </h3>
                    <p className="max-sm:text-sm text-[#898a8a] max-md:text-justify">
                      These projects span a variety of technologies, from HTML,
                      CSS, and JavaScript, to more advanced tools like React,
                      Next.js with Tailwind CSS, Supabase, and even a project in
                      Node.js. Some of my projects also incorporate local
                      storage to enhance user experience. Through these
                      projects, I continuously challenge myself to improve, both
                      as a developer and a creator.
                    </p>
                  </li>
                </ul>
              </div>
              <Link
                href="/clientprojects"
                className="text-xl border-b-[1px] border-[#575858] text-[#787979] py-2 px-4 justify-self-center w-fit max-[380px]:max-sm:text-lg text-center hover:opacity-80 transition-all duration-300"
              >
                More about hobby projects
              </Link>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </div>
  );
}
