import Link from "next/link";
import Features from "../components/Features";
import Footer from "../components/Footer";
import HeroSubPages from "../components/HeroSubPages";
import ClientStrona1 from "@/public/ClientStrona1.webp";
import ClientStrona2 from "@/public/ClientStrona2.webp";
import ClientStrona3 from "@/public/ClientStrona3.webp";
import ClientStrona4 from "@/public/ClientStrona4.webp";
import ClientStrona5 from "@/public/ClientStrona5.webp";
import ClientStrona6 from "@/public/ClientStrona6.webp";
import ClientStrona7 from "@/public/ClientStrona7.webp";
import ClientStrona8 from "@/public/ClientStrona8.webp";
import JeszczeStrona from "@/public/JeszczeStrona.webp";

import Image from "next/image";

function Page() {
  return (
    <>
      <HeroSubPages>
        Client<br></br>
        <span className="text-base tracking-tighter px-1 max-[450px]:text-sm max-[450px]:px-[2px]">
          projects
        </span>
      </HeroSubPages>
      <Features />
      <section>
        <div className="max-w-[1200px] mx-auto">
          <div className="grid">
            <Link
              href="https://www.jeszczestronaalbosto.pl/"
              target="_blank"
              className="border-b-[1px] border-[#575858] mb-4 mx-1 w-min"
            >
              Jeszczestronaalbosto.pl
            </Link>

            <h2 className="text-4xl tracking-[-4px] pb-6 leading-4">
              Full-stack website<br></br>
              <span className="text-lg tracking-[-1px] px-1">
                with blog & own CMS
              </span>
            </h2>
          </div>
          <div className="grid grid-cols-2">
            <div></div>
            <div className="flex">
              <div>
                <h3></h3>
                <p></p>
                <ul>
                  <li></li>
                </ul>
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 p-8 gap-4 drop-shadow-xl">
          <Image src={ClientStrona1} alt="project" />
          <Image src={ClientStrona2} alt="project" />
          <Image src={ClientStrona8} alt="project" />
          <Image src={ClientStrona5} alt="project" />
          <Image src={ClientStrona3} alt="project" />
          <Image src={ClientStrona4} alt="project" />
          <Image src={ClientStrona6} alt="project" />
          <Image src={ClientStrona7} alt="project" />
          <Image
            src={JeszczeStrona}
            fill
            alt="bg"
            className="object-cover object-center z-[-1]  opacity-10"
          />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Page;
