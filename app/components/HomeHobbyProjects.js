import Image from "next/image";
import Link from "next/link";
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

function HomeHobbyProjects() {
  return (
    <section className="max-w-[1200px] mx-auto">
      <h2 className="text-4xl tracking-[-4px] pb-6">Hobby projects</h2>
      <div className="grid  gap-8 content-center justify-center justify-items-center items-center px-4 max-sm:gap-5">
        <div className="grid grid-cols-4 max-md:grid-cols-3 max-[425px]:grid-cols-2">
          <Image
            src={RetroGame}
            alt="hobby project game"
            className="opacity-90"
          />
          <Image
            src={Robify}
            alt="hobby project spotify"
            className="opacity-90"
          />
          <Image src={BlogCms} alt="hobby project cms" className="opacity-90" />
          <Image
            src={HoopHaven}
            alt="hobby project courts"
            className="opacity-90"
          />
          <Image
            src={Karkonosze}
            alt="hobby project mountain"
            className="opacity-90"
          />
          <Image
            src={CityLa}
            alt="hobby project los angeles"
            className="opacity-90"
          />
          <Image
            src={Nature}
            alt="hobby project booking"
            className="opacity-90"
          />
          <Image
            src={Robshop}
            alt="hobby project shop"
            className="opacity-90"
          />
          <Image src={Bulls} alt="hobby project game" className="opacity-90" />
          <Image
            src={NodeTeams}
            alt="hobby project node teams"
            className="opacity-90"
          />
          <Image src={NbaNews} alt="hobby project api" className="opacity-90" />
          <Image
            src={CreateUser}
            alt="hobby project oop"
            className="opacity-90"
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
                  In my free time, I&apos;ve developed a wide range of projects
                  that demonstrate my versatility and passion for learning new
                  technologies. These projects include landing pages, multi-page
                  websites, small e-commerce shops, user input fields, and a
                  full-stack blog with a custom CMS. I&apos;ve also worked on
                  API integrations, both building my own and consuming external
                  APIs. One of my recent smaller projects involved creating a
                  Spotify cover component.
                </p>
              </li>
              <li>
                <h3 className="text-xl max-sm:text-lg text-[#787979] tracking-[-1.5px]">
                  Diverse Technology Stack
                </h3>
                <p className="max-sm:text-sm text-[#898a8a] max-md:text-justify">
                  These projects span a variety of technologies, from HTML, CSS,
                  and JavaScript, to more advanced tools like React, Next.js
                  with Tailwind CSS, Supabase, and even a project in Node.js.
                  Some of my projects also incorporate local storage to enhance
                  user experience. Through these projects, I continuously
                  challenge myself to improve, both as a developer and a
                  creator.
                </p>
              </li>
            </ul>
          </div>
          <Link
            href="/hobbyprojects"
            className="text-xl border-b-[1px] border-[#575858] text-[#787979] py-2 px-4 justify-self-center w-fit max-[380px]:max-sm:text-lg text-center hover:opacity-80 transition-all duration-300 linkHover"
          >
            More about hobby projects
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomeHobbyProjects;
