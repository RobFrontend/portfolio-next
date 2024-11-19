import Link from "next/link";
import HomeClientCarousel from "./HomeClientCarousel";

function HomeClientProjects() {
  return (
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
                <h4 className="text-lg max-sm:text-sm">Multi-Page Website:</h4>
                <p className="max-sm:text-xs">
                  I built a comprehensive website with multiple subpages, using
                  HTML, CSS, and JavaScript. The focus was on clarity, ease of
                  navigation, and delivering a professional appearance for the
                  client&apos;s business needs.
                </p>
              </li>
              <li>
                <h4 className="text-lg max-sm:text-sm">
                  Full-Stack Blog Website:
                </h4>
                <p className="max-sm:text-xs">
                  I created a full-stack website using Next.js and Tailwind CSS,
                  which included a fully integrated blog with a CMS. This allows
                  my client to easily add and manage articles. I used Supabase
                  to manage the backend and handle API requests, ensuring a
                  smooth and scalable system.
                </p>
              </li>
            </ul>
          </div>
          <Link
            href="/clientprojects"
            className="text-xl border-b-[1px] border-[#575858] py-2 px-4 justify-self-center w-fit max-[380px]:max-sm:text-lg text-center hover:opacity-80 transition-all duration-300 linkHover"
          >
            More about client projects
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomeClientProjects;
