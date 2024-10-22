import Image from "next/image";

import Features from "../components/Features";
import HeroSubPages from "../components/HeroSubPages";
import Footer from "../components/Footer";

import AboutHtml from "@/public/AboutHtml.png";
import AboutCss from "@/public/AboutCss.png";
import AboutJs from "@/public/AboutJs.png";
import AboutReact from "@/public/AboutReact.png";
import AboutNext from "@/public/AboutNext.png";
import AboutNode from "@/public/AboutNode.png";
import AboutTailwind from "@/public/AboutTailwind.png";
import AboutGit from "@/public/AboutGit.png";
import AboutSupabase from "@/public/AboutSupabase.png";

function Page() {
  return (
    <>
      <HeroSubPages>
        About<br></br>
        <span className="text-base tracking-tighter px-1 max-[450px]:text-xs max-[450px]:px-[2px]">
          me and my coding journey
        </span>
      </HeroSubPages>
      <Features />
      <section className="max-w-[1200px] mx-auto">
        <h2 className="text-4xl tracking-[-4px] pb-6 leading-4">
          Frontend<br></br>
          <span className="text-lg tracking-[-1px] px-1">My Core Focus</span>
        </h2>

        <div className="flex gap-8 pb-8 pt-2 content-center justify-center flex-wrap max-sm:gap-4">
          <Image
            src={AboutHtml}
            alt="logo"
            className="h-16 w-16 brightness-90 grayscale-[0.4] transition-all duration-500 hover:brightness-100 drop-shadow-lg hover:translate-y-[-6px] max-sm:h-8 max-sm:w-8"
          />
          <Image
            src={AboutCss}
            alt="logo"
            className="h-16 w-16 brightness-90 grayscale-[0.4] transition-all duration-500 hover:brightness-100 drop-shadow-lg hover:translate-y-[-6px] max-sm:h-8 max-sm:w-8"
          />
          <Image
            src={AboutJs}
            alt="logo"
            className="h-16 w-16 brightness-90 grayscale-[0.4] transition-all duration-500 hover:brightness-100 drop-shadow-lg hover:translate-y-[-6px] max-sm:h-8 max-sm:w-8"
          />
          <Image
            src={AboutReact}
            alt="logo"
            className="h-16 w-16 brightness-90 grayscale-[0.4] transition-all duration-500 hover:brightness-100 drop-shadow-lg hover:translate-y-[-6px] max-sm:h-8 max-sm:w-8"
          />
          <Image
            src={AboutTailwind}
            alt="logo"
            className="h-16 w-16 brightness-90 grayscale-[0.4] transition-all duration-500 hover:brightness-100 drop-shadow-lg hover:translate-y-[-6px] max-sm:h-8 max-sm:w-8"
          />
        </div>

        <p className="pb-6 text-justify max-sm:text-sm">
          My coding journey began in February 2023 with HTML and CSS courses.
          From the start, I was drawn to designing and refining the look of my
          projects, especially focusing on responsive web design (RWD). By
          April, I realized the need for JavaScript to make my websites more
          dynamic. I took initiative to dive beyond course material, exploring
          resources like StackOverflow and MDN to solve real-world problems.
        </p>
        <p className="pb-6 text-justify max-sm:text-sm">
          In May, I landed my first client project, which went live in June.
          Over the months, I expanded my vanilla JavaScript knowledge, building
          projects that combined HTML, CSS, and JavaScript. Creating mini-games
          like &quot;Guess the Player&quot; and &quot;Compare Height to
          Basketball Player&quot; helped me understand how JavaScript interacts
          with modern methods and APIs.
        </p>
        <p className="pb-6 text-justify max-sm:text-sm">
          In January 2024, I started learning React, and it transformed my
          development process. React allowed me to create more complex
          applications quickly, using tools like useState, useEffect, and
          useReducer. Projects like a shop with a cart and a Spotify cover
          deepened my understanding of component-based architecture. From there,
          I embraced optimization techniques like Redux, React Query, and
          memoization, which streamlined connections to databases like Supabase.
        </p>
        <p className="pb-6 text-justify max-sm:text-sm">
          Building a blog with a custom CMS, fully integrated with Supabase, was
          a personal achievement. Incorporating Tailwind CSS for rapid UI
          development further elevated my work, enabling me to go from landing
          pages in HTML/CSS to full-scale, independent single-page applications
          (SPA) using React, Tailwind, APIs, and databases.
        </p>
      </section>
      <section className="max-w-[1200px] mx-auto">
        <h2 className="text-4xl tracking-[-4px] pb-6 leading-4">
          Backend<br></br>
          <span className="text-lg tracking-[-1px] px-1">& Databases</span>
        </h2>
        <div className="flex gap-8 pb-8 pt-2 content-center justify-center flex-wrap max-sm:gap-4">
          <Image
            src={AboutNext}
            alt="logo"
            className="h-16 w-16 brightness-90 grayscale-[0.4] transition-all duration-500 hover:brightness-100 drop-shadow-lg hover:translate-y-[-6px] max-sm:h-8 max-sm:w-8"
          />
          <Image
            src={AboutSupabase}
            alt="logo"
            className="h-16 w-16 brightness-90 grayscale-[0.4] transition-all duration-500 hover:brightness-100 drop-shadow-lg hover:translate-y-[-6px] max-sm:h-8 max-sm:w-8"
          />
          <Image
            src={AboutNode}
            alt="logo"
            className="h-16 w-16 brightness-90 grayscale-[0.4] transition-all duration-500 hover:brightness-100 drop-shadow-lg hover:translate-y-[-6px] max-sm:h-8 max-sm:w-8"
          />
        </div>
        <p className="pb-6 text-justify max-sm:text-sm">
          On the backend, I started with the basics of Node.js, learning how to
          create and launch a server while understanding the differences between
          synchronous and asynchronous operations. These fundamentals prepared
          me for Next.js, which became a key focus in my journey after gaining
          proficiency in frontend development.
        </p>
        <p className="pb-6 text-justify max-sm:text-sm">
          Next.js impressed me with its powerful project architecture and
          performance optimization capabilities. I&apos;ve created several
          Next.js projects, including converting a client&apos;s website into a
          full-stack, server-side rendered (SSR) application, which dramatically
          improved its performance and scalability.
        </p>
        <p className="pb-6 text-justify max-sm:text-sm">
          For databases, I currently use Supabase for its ease of integration
          with file storage and authentication features. However, I&apos;m eager
          to deepen my backend knowledge by learning SQL (MySQL or PostgreSQL)
          to eventually code my own databases, aiming for complete independence
          as a web developer.
        </p>
      </section>
      <Footer />
    </>
  );
}

export default Page;
