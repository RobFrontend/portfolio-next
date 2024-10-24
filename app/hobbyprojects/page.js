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
        <h2>Landing pages</h2>
        <p></p>
        <div className="grid grid-cols-3 gap-4 max-sm:grid-cols-1">
          <div className="grid max-sm:grid-cols-2 gap-4">
            <Image
              src={Karkonosze}
              alt="hobby landing page about karkonosze mountains"
            />
            <div className="grid gap-2">
              <h3>The Karkonosze Mountains</h3>
              <p></p>
              <Link
                href="https://karkonosze-robfrontend.netlify.app/"
                target="_blank"
              >
                Netlify Page
              </Link>
              <Link
                href="https://github.com/RobFrontend/Mountains-Page"
                target="_blank"
              >
                GitHub
              </Link>
            </div>
          </div>
          <div className="grid max-sm:grid-cols-2 gap-4">
            <Image src={City} alt="hobby landing page about los angeles city" />
            <div className="grid gap-2">
              <h3>City LA</h3>
              <p></p>
              <Link
                href="https://city-robfrontend.netlify.app/"
                target="_blank"
              >
                Netlify Page
              </Link>
              <Link href="https://github.com/RobFrontend/City" target="_blank">
                GitHub
              </Link>
            </div>
          </div>
          <div className="grid max-sm:grid-cols-2 gap-4">
            <Image src={Drose} alt="hobby landing page about derrick rose" />
            <div className="grid gap-2">
              <h3>DRose MVP</h3>
              <p></p>
              <Link
                href="https://drose-robfrontend.netlify.app/"
                target="_blank"
              >
                Netlify Page
              </Link>
              <Link href="https://github.com/RobFrontend/DRose" target="_blank">
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Websites */}
      <section className="max-w-[1200px] mx-auto">
        <h2>Websites</h2>
        <p></p>
        <div className="flex gap-4">
          <div>
            <Image
              src={Nature}
              alt="hobby landing page about karkonosze mountains"
            />
            <div className="grid gap-2">
              <h3>Project Nature</h3>
              <p></p>
              <Link
                href="https://nature-robfrontend.netlify.app/"
                target="_blank"
              >
                Netlify Page
              </Link>
              <Link
                href="https://github.com/RobFrontend/nature-project"
                target="_blank"
              >
                GitHub
              </Link>
            </div>
          </div>
          <div>
            <Image
              src={Hoophaven}
              alt="hobby landing page about los angeles city"
            />
            <div className="grid gap-2">
              <h3>Hoop Haven</h3>
              <p></p>
              <Link href="https://hoop-haven.vercel.app/" target="_blank">
                Vercel Page
              </Link>
              <Link
                href="https://github.com/RobFrontend/HoopHaven"
                target="_blank"
              >
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Games */}
      <section className="max-w-[1200px] mx-auto">
        <h2>Games</h2>
        <p></p>
        <div className="flex gap-4">
          <div>
            <Image
              src={RetroGame}
              alt="hobby landing page about karkonosze mountains"
            />
            <div className="grid gap-2">
              <h3>Retro Car Game</h3>
              <p></p>
              <Link
                href="https://retrogame-robfrontend.netlify.app/home"
                target="_blank"
              >
                Netlify Page
              </Link>
              <Link
                href="https://github.com/RobFrontend/retro-game-01"
                target="_blank"
              >
                GitHub
              </Link>
            </div>
          </div>
          <div>
            <Image
              src={Bulls}
              alt="hobby landing page about los angeles city"
            />
            <div className="grid gap-2">
              <h3>NBA Bulls Game</h3>
              <p></p>
              <Link
                href="https://bulls-game-robfrontend.netlify.app/"
                target="_blank"
              >
                Netlify
              </Link>
              <Link
                href="https://github.com/RobFrontend/BULLS-Guess-Compare-Game"
                target="_blank"
              >
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* BLOG CMS */}
      <section className="max-w-[1200px] mx-auto">
        <h2>Blog with CMS</h2>
        <p></p>
        <div className="flex gap-4">
          <div>
            <Image
              src={Bookblog}
              alt="hobby landing page about karkonosze mountains"
            />
            <div className="grid gap-2">
              <h3>Short blog with my own CMS</h3>
              <p></p>
              <Link
                href="https://testbookblog-robfrontend.netlify.app/blog"
                target="_blank"
              >
                Netlify Page
              </Link>
              <Link
                href="https://github.com/RobFrontend/Fullstack-blog"
                target="_blank"
              >
                GitHub
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* OTHERS */}
      <section className="max-w-[1200px] mx-auto">
        <h2>More Projects</h2>
        <p></p>
        <div className="grid gap-4">
          <div className="grid grid-cols-2 gap-4">
            <Image
              src={Robify}
              alt="hobby landing page about karkonosze mountains"
            />
            <div className="grid gap-2">
              <h3>Robify</h3>
              <p></p>
              <Link
                href="https://robify-robfrontend.netlify.app/"
                target="_blank"
              >
                Netlify Page
              </Link>
              <Link
                href="https://github.com/RobFrontend/robify"
                target="_blank"
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
              <h3>RobShop</h3>
              <p></p>
              <Link
                href="https://robshop-robfrontend.netlify.app/"
                target="_blank"
              >
                Netlify Page
              </Link>
              <Link
                href="https://github.com/RobFrontend/REACT-RobShop-Shop"
                target="_blank"
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
              <h3>Design Changer</h3>
              <p></p>
              <Link
                href="https://designbuttons-robfrontend.netlify.app/"
                target="_blank"
              >
                Netlify Page
              </Link>
              <Link
                href="https://github.com/RobFrontend/Change-of-design-via-text-box."
                target="_blank"
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
              <h3>Add User</h3>
              <p></p>
              <Link
                href="https://createuser-robfrontend.netlify.app/"
                target="_blank"
              >
                Netlify Page
              </Link>
              <Link
                href="https://github.com/RobFrontend/CreateUser"
                target="_blank"
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
