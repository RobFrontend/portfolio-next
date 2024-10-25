import Features from "../components/Features";
import Footer from "../components/Footer";
import HeroSubPages from "../components/HeroSubPages";
import AboutHtml from "@/public/AboutHtml.png";
import AboutCss from "@/public/AboutCss.png";
import AboutJs from "@/public/AboutJs.png";
import AboutReact from "@/public/AboutReact.png";
import AboutNext from "@/public/AboutNext.png";
import AboutNode from "@/public/AboutNode.png";
import AboutTailwind from "@/public/AboutTailwind.png";
import AboutSupabase from "@/public/AboutSupabase.png";
import Drose from "@/public/drose.webp";
import City from "@/public/city.webp";
import Karkonosze from "@/public/karkonosze.webp";
import Hoophaven from "@/public/hoophaven.webp";
import Nature from "@/public/nature1.webp";
import Bulls from "@/public/bulls1.webp";
import RetroGame from "@/public/retrogame.webp";
import Bookblog from "@/public/bookblog1.webp";
import Robify from "@/public/robify.webp";
import Robshop from "@/public/robshop.webp";
import DesignChanger from "@/public/designchanger.webp";
import CreateUser from "@/public/createuser.webp";
import Image from "next/image";
import Link from "next/link";

function Page() {
  return (
    <>
      <HeroSubPages>
        Hobby <br></br>
        <span className="text-base tracking-tighter px-1 max-[450px]:text-sm max-[450px]:px-[2px]">
          projects
        </span>
      </HeroSubPages>
      <Features />
      {/* Landing Pages */}
      <section className="max-w-[1200px] mx-auto">
        <h2 className="text-4xl tracking-[-4px] pb-6 leading-4">
          Landing pages
        </h2>
        <div className="flex gap-8 pb-6 pt-4 content-center justify-center flex-wrap max-sm:gap-4">
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
        </div>
        <p className="text-justify max-sm:text-sm pb-5">
          I&apos;ve crafted a collection of responsive landing pages using HTML,
          CSS, and JavaScript that focus on user-friendly experiences and
          unique, eye-catching designs. Each page is tailored to be easy to
          navigate, delivering smooth functionality across devices while
          showcasing creative layouts that make each design memorable.
        </p>
        <div className="grid grid-cols-3 gap-8 max-lg:grid-cols-1 items-start">
          <div className="grid max-lg:grid-cols-2 gap-4 max-md:grid-cols-1 pb-2">
            <h3 className="text-center text-xl max-lg:col-span-2 max-md:col-span-1">
              The Karkonosze Mountains
            </h3>
            <Image
              src={Karkonosze}
              alt="hobby landing page about karkonosze mountains"
              className="max-md:max-w-[75%] justify-self-center max-[500px]:max-w-[100%]"
            />
            <div className="grid gap-2 justify-items-center">
              <p className="text-justify text-sm px-2 max-sm:text-xs">
                Built with HTML, CSS, and JavaScript, captures the stunning
                beauty of the Karkonosze range. Using JavaScript observers,
                sections reveal smoothly as users scroll, adding a dynamic feel
                to the experience. A mobile navigation menu enhances
                functionality, ensuring seamless access to content on any
                device. The page design emphasizes natural beauty while
                maintaining a responsive, user-friendly interface.
              </p>
              <Link
                href="https://karkonosze-robfrontend.netlify.app/"
                target="_blank"
                className="border-b-[1px] border-[#575858] w-fit h-min  "
              >
                Netlify Page
              </Link>
              <Link
                href="https://github.com/RobFrontend/Mountains-Page"
                target="_blank"
                className="border-b-[1px] border-[#575858] w-fit h-min  "
              >
                GitHub
              </Link>
            </div>
          </div>
          <div className="grid max-lg:grid-cols-2 gap-4 max-md:grid-cols-1 pb-2">
            <h3 className="text-center text-xl max-lg:col-span-2 max-md:col-span-1">
              City LA
            </h3>
            <Image
              src={City}
              alt="hobby landing page about los angeles city"
              className="max-md:max-w-[75%] justify-self-center max-[500px]:max-w-[100%]"
            />
            <div className="grid gap-2 justify-items-center">
              <p className="text-justify text-sm px-2 max-sm:text-xs">
                Developed with HTML, CSS, and JavaScript, showcases the dynamic
                energy of LA with smooth section reveals powered by JavaScript
                observers. A functional mobile menu ensures easy navigation, and
                JS intervals add rhythmic transitions for a seamless, visually
                engaging experience. This responsive design highlights key
                elements of the city, offering users a captivating and
                easy-to-navigate interface across all devices.
              </p>
              <Link
                href="https://city-robfrontend.netlify.app/"
                target="_blank"
                className="border-b-[1px] border-[#575858] w-fit h-min "
              >
                Netlify Page
              </Link>
              <Link
                href="https://github.com/RobFrontend/City"
                target="_blank"
                className="border-b-[1px] border-[#575858] w-fit h-min "
              >
                GitHub
              </Link>
            </div>
          </div>
          <div className="grid max-lg:grid-cols-2 gap-4 max-md:grid-cols-1">
            <h3 className="text-center text-xl max-lg:col-span-2 max-md:col-span-1">
              DRose MVP
            </h3>
            <Image
              src={Drose}
              alt="hobby landing page about derrick rose"
              className="max-md:max-w-[75%] justify-self-center max-[500px]:max-w-[100%]"
            />
            <div className="grid gap-2 justify-items-center px-2">
              <p className="text-justify text-sm px-2 max-sm:text-xs">
                My very first LP project, is crafted with HTML and CSS to
                highlight a clear, user-friendly design that puts the spotlight
                on Derrick Rose&apos;s iconic footwear. Fully responsive, it
                adapts seamlessly to any screen size, ensuring a smooth browsing
                experience. This project was a foundational step in my journey,
                reflecting both simplicity and attention to detail for effective
                online shopping.
              </p>
              <Link
                href="https://drose-robfrontend.netlify.app/"
                target="_blank"
                className="border-b-[1px] border-[#575858] w-fit h-min "
              >
                Netlify Page
              </Link>
              <Link
                href="https://github.com/RobFrontend/DRose"
                target="_blank"
                className="border-b-[1px] border-[#575858] w-fit h-min "
              >
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Websites */}
      <section className="max-w-[1200px] mx-auto">
        <h2 className="text-4xl tracking-[-4px] pb-6 leading-4">Websites</h2>
        <div className="flex gap-8 pb-6 pt-4 content-center justify-center flex-wrap max-sm:gap-4">
          <Image
            src={AboutReact}
            alt="logo"
            className="h-16 w-16 brightness-90 grayscale-[0.4] transition-all duration-500 hover:brightness-100 drop-shadow-lg hover:translate-y-[-6px] max-sm:h-8 max-sm:w-8"
          />
          <Image
            src={AboutNext}
            alt="logo"
            className="h-16 w-16 brightness-90 grayscale-[0.4] transition-all duration-500 hover:brightness-100 drop-shadow-lg hover:translate-y-[-6px] max-sm:h-8 max-sm:w-8"
          />
          <Image
            src={AboutTailwind}
            alt="logo"
            className="h-16 w-16 brightness-90 grayscale-[0.4] transition-all duration-500 hover:brightness-100 drop-shadow-lg hover:translate-y-[-6px] max-sm:h-8 max-sm:w-8"
          />
          <Image
            src={AboutSupabase}
            alt="logo"
            className="h-16 w-16 brightness-90 grayscale-[0.4] transition-all duration-500 hover:brightness-100 drop-shadow-lg hover:translate-y-[-6px] max-sm:h-8 max-sm:w-8"
          />
        </div>
        <p className="text-justify max-sm:text-sm pb-5">
          These multi-page websites, built with React, Next.js, and Tailwind
          CSS, leverage both Client-Side Rendering (CSR) and Server-Side
          Rendering (SSR) to optimize performance and enhance user experience.
          Designed for speed and responsiveness, they incorporate modern
          JavaScript methods to deliver smooth interactions and efficient data
          handling across multiple subpages. The integration of Next.js ensures
          dynamic rendering tailored to user needs, while Tailwind CSS adds a
          streamlined, visually engaging design.
        </p>
        <div className="grid grid-cols-2 items-start gap-8 max-lg:grid-cols-1">
          <div className="grid max-lg:grid-cols-2 gap-4 max-md:grid-cols-1 pb-2">
            <h3 className="text-center text-xl max-lg:col-span-2 max-md:col-span-1">
              Project Nature
            </h3>
            <Image
              src={Nature}
              alt="hobby website about nature"
              className="max-md:max-w-[75%] justify-self-center max-[500px]:max-w-[100%]"
            />
            <div className="grid gap-2 justify-items-center">
              <p className="text-justify text-sm px-2 max-sm:text-xs">
                A visually captivating website built with React and Tailwind
                CSS. It features a beautifully designed Home Page that immerses
                users in a natural aesthetic. The Booking Page includes a
                sorting system and price slider, giving users the flexibility to
                filter options based on their preferences. Additionally, an
                admin notification system alerts if a booking price appears
                discounted beyond a set threshold, ensuring error prevention and
                smooth booking management.
              </p>
              <Link
                href="https://nature-robfrontend.netlify.app/"
                target="_blank"
                className="border-b-[1px] border-[#575858] w-fit h-min "
              >
                Netlify Page
              </Link>
              <Link
                href="https://github.com/RobFrontend/nature-project"
                target="_blank"
                className="border-b-[1px] border-[#575858] w-fit h-min "
              >
                GitHub
              </Link>
            </div>
          </div>
          <div className="grid max-lg:grid-cols-2 gap-4 max-md:grid-cols-1">
            <h3 className="text-center text-xl max-lg:col-span-2 max-md:col-span-1">
              Hoop Haven
            </h3>
            <Image
              src={Hoophaven}
              alt="hobby landing page about los angeles city"
              className="max-md:max-w-[75%] justify-self-center max-[500px]:max-w-[100%]"
            />
            <div className="grid gap-2 justify-items-center">
              <p className="text-justify text-sm px-2 max-sm:text-xs">
                Hoop Haven is a Next.js server-side-rendered (SSR) application
                built with Tailwind CSS that allows users to explore basketball
                courts, with each court having its own unique URL parameter for
                easy access and sharing. Court data is dynamically fetched from
                a Supabase database, enabling seamless updates and accurate
                information on every court&apos;s details, location, and
                facilities.
              </p>
              <Link
                href="https://hoop-haven.vercel.app/"
                target="_blank"
                className="border-b-[1px] border-[#575858] w-fit h-min "
              >
                Vercel Page
              </Link>
              <Link
                href="https://github.com/RobFrontend/HoopHaven"
                target="_blank"
                className="border-b-[1px] border-[#575858] w-fit h-min "
              >
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Games */}
      <section className="max-w-[1200px] mx-auto">
        <h2 className="text-4xl tracking-[-4px] pb-6 leading-4">Games</h2>
        <div className="flex gap-8 pb-6 pt-4 content-center justify-center flex-wrap max-sm:gap-4">
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
        <p className="text-justify max-sm:text-sm pb-5">
          In my free time, I&apos;ve developed two interactive games that
          showcase my skills in both JavaScript and React. The first is built
          with HTML, CSS, and JavaScript and features classic gameplay with
          smooth animations. The second game leverages React and Tailwind CSS
          for a modern, responsive design, incorporating dynamic states and
          effects for an engaging user experience. Each game demonstrates my
          ability to create interactive and visually appealing projects,
          reflecting both creativity and technical versatility.
        </p>
        <div className="grid grid-cols-2 items-start gap-8 max-lg:grid-cols-1">
          <div className="grid max-lg:grid-cols-2 gap-4 max-md:grid-cols-1 pb-2">
            <h3 className="text-center text-xl max-lg:col-span-2 max-md:col-span-1">
              Retro Car Game
            </h3>
            <Image
              src={RetroGame}
              alt="hobby landing page about karkonosze mountains"
              className="max-md:max-w-[75%] justify-self-center max-[500px]:max-w-[100%]"
            />
            <div className="grid gap-2 justify-items-center">
              <p className="text-justify text-sm px-2 max-sm:text-xs">
                Interactive project built with React and Tailwind CSS that
                combines classic gameplay with a modern design. Players control
                a car in pursuit of randomly generated points on the map to earn
                time before it counts down to zero. Along the way, they must
                dodge obstacles that drain valuable seconds if hit, adding an
                extra layer of challenge. High scores unlock faster cars,
                enhancing the gameplay experience and encouraging players to
                improve with each round. This game showcases my skills in
                creating engaging, responsive games with dynamic elements and
                progression features.
              </p>
              <Link
                href="https://retrogame-robfrontend.netlify.app/home"
                target="_blank"
                className="border-b-[1px] border-[#575858] w-fit h-min "
              >
                Netlify Page
              </Link>
              <Link
                href="https://github.com/RobFrontend/retro-game-01"
                target="_blank"
                className="border-b-[1px] border-[#575858] w-fit h-min "
              >
                GitHub
              </Link>
            </div>
          </div>
          <div className="grid max-lg:grid-cols-2 gap-4 max-md:grid-cols-1">
            <h3 className="text-center text-xl max-lg:col-span-2 max-md:col-span-1">
              NBA Bulls Game
            </h3>
            <Image
              src={Bulls}
              alt="hobby landing page about los angeles city"
              className="max-md:max-w-[75%] justify-self-center max-[500px]:max-w-[100%]"
            />
            <div className="grid gap-2 justify-items-center">
              <p className="text-justify text-sm px-2 max-sm:text-xs">
                Interactive project created using HTML, CSS, and JavaScript.
                This game features two main activities: a &quot;Guess the
                Player&quot; game and a &quot;Height Comparison&quot; tool. In
                the Guess the Player segment, players have four chances to
                identify the names of four hidden Chicago Bulls players. The
                Height Comparison section allows users to input any height and
                compare it to the heights of Chicago Bulls players, making it an
                engaging way to explore player statistics. The design captures
                the essence of the Chicago Bulls, making the game visually
                enjoyable for fans.
              </p>
              <Link
                href="https://bulls-game-robfrontend.netlify.app/"
                target="_blank"
                className="border-b-[1px] border-[#575858] w-fit h-min "
              >
                Netlify Page
              </Link>
              <Link
                href="https://github.com/RobFrontend/BULLS-Guess-Compare-Game"
                target="_blank"
                className="border-b-[1px] border-[#575858] w-fit h-min "
              >
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* BLOG CMS */}
      <section className="max-w-[1200px] mx-auto">
        <h2 className="text-4xl tracking-[-4px] pb-6 leading-4">
          Blog with CMS
        </h2>
        <div className="flex gap-8 pb-6 pt-4 content-center justify-center flex-wrap max-sm:gap-4 ">
          <Image
            src={AboutReact}
            alt="logo"
            className="h-16 w-16 brightness-90 grayscale-[0.4] transition-all duration-500 hover:brightness-100 drop-shadow-lg hover:translate-y-[-6px] max-sm:h-8 max-sm:w-8"
          />
          <Image
            src={AboutSupabase}
            alt="logo"
            className="h-16 w-16 brightness-90 grayscale-[0.4] transition-all duration-500 hover:brightness-100 drop-shadow-lg hover:translate-y-[-6px] max-sm:h-8 max-sm:w-8"
          />
        </div>

        <div className="grid grid-cols-2 gap-8 max-md:grid-cols-1 max-md:gap-4">
          <Image
            src={Bookblog}
            alt="hobby landing page about karkonosze mountains"
            className="max-md:max-w-[75%] justify-self-center max-[500px]:max-w-[100%]"
          />
          <div className="grid gap-4 justify-items-center">
            <p className="text-justify text-sm px-2 max-sm:text-xs">
              This project showcases my ability to create a dynamic content
              management system, allowing users to manage blog posts
              seamlessly.The application includes a login authentication system,
              ensuring secure access to the CMS. Once logged in, users can
              easily add new blog posts, which are then stored directly in the
              Supabase database. This setup not only streamlines content
              creation but also allows for efficient data management. With a
              focus on user experience and functionality, this project
              exemplifies my skills in combining frontend and backend
              technologies, demonstrating my commitment to building intuitive
              and effective web applications.
            </p>
            <Link
              href="https://testbookblog-robfrontend.netlify.app/blog"
              target="_blank"
              className="border-b-[1px] border-[#575858] w-fit h-min "
            >
              Netlify Page
            </Link>
            <Link
              href="https://github.com/RobFrontend/Fullstack-blog"
              target="_blank"
              className="border-b-[1px] border-[#575858] w-fit h-min "
            >
              GitHub
            </Link>
          </div>
        </div>
      </section>
      {/* OTHERS */}
      <section className="max-w-[1200px] mx-auto">
        <h2 className="text-4xl tracking-[-4px] pb-6 leading-4">
          More Projects
        </h2>
        <p></p>
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={Robify}
              alt="hobby landing page about karkonosze mountains"
            />
            <div className="grid gap-2">
              <h3 className="text-center text-xl">Robify</h3>
              <p></p>
              <Link
                href="https://robify-robfrontend.netlify.app/"
                target="_blank"
                className="border-b-[1px] border-[#575858] w-fit h-min "
              >
                Netlify Page
              </Link>
              <Link
                href="https://github.com/RobFrontend/robify"
                target="_blank"
                className="border-b-[1px] border-[#575858] w-fit h-min "
              >
                GitHub
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={Robshop}
              alt="hobby landing page about karkonosze mountains"
            />
            <div className="grid gap-2">
              <h3 className="text-center text-xl">RobShop</h3>
              <p></p>
              <Link
                href="https://robshop-robfrontend.netlify.app/"
                target="_blank"
                className="border-b-[1px] border-[#575858] w-fit h-min "
              >
                Netlify Page
              </Link>
              <Link
                href="https://github.com/RobFrontend/REACT-RobShop-Shop"
                target="_blank"
                className="border-b-[1px] border-[#575858] w-fit h-min "
              >
                GitHub
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={DesignChanger}
              alt="hobby landing page about karkonosze mountains"
            />
            <div className="grid gap-2">
              <h3 className="text-center text-xl">Design Changer</h3>
              <p></p>
              <Link
                href="https://designbuttons-robfrontend.netlify.app/"
                target="_blank"
                className="border-b-[1px] border-[#575858] w-fit h-min "
              >
                Netlify Page
              </Link>
              <Link
                href="https://github.com/RobFrontend/Change-of-design-via-text-box."
                target="_blank"
                className="border-b-[1px] border-[#575858] w-fit h-min "
              >
                GitHub
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={CreateUser}
              alt="hobby landing page about karkonosze mountains"
            />
            <div className="grid gap-2">
              <h3 className="text-center text-xl">Add User</h3>
              <p></p>
              <Link
                href="https://createuser-robfrontend.netlify.app/"
                target="_blank"
                className="border-b-[1px] border-[#575858] w-fit h-min "
              >
                Netlify Page
              </Link>
              <Link
                href="https://github.com/RobFrontend/CreateUser"
                target="_blank"
                className="border-b-[1px] border-[#575858] w-fit h-min "
              >
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Page;
