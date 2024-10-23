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
import AboutNext from "@/public/AboutNext.png";
import AboutTailwind from "@/public/AboutTailwind.png";
import AboutSupabase from "@/public/AboutSupabase.png";

import Image from "next/image";
import ClientProjectCarousel from "../components/ClientProjectCarousel";

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
      <section className="overflow-hidden relative">
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

          <div className="grid ">
            <div className="flex gap-8 pb-8 pt-2 content-center justify-center flex-wrap max-sm:gap-4">
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
            <div className="p-4">
              <h3 className="text-center text-xl">Server Side Rendering</h3>
              <p className="text-justify">
                This project{" "}
                <Link
                  href="https://www.jeszczestronaalbosto.pl/"
                  target="_blank"
                  className="border-b-[1px] border-[#575858] w-min"
                >
                  jeszczestronaalbosto.pl
                </Link>{" "}
                is a fully responsive, full-stack website built with Next.js,
                Tailwind CSS, and Supabase, making it one of the most complex
                projects I&apos;ve developed for a client. The website includes
                five main pages: Home Page, About Me, Collab, Contact, and Blog.
                It&apos;s dedicated to book enthusiasts, with the blog serving
                as a platform for book reviews.
              </p>
            </div>
            <div className="grid p-4 gap-4">
              <h3 className="text-center text-xl">Own CMS</h3>
              <div className="max-w-[600px] justify-self-center max-[800px]:max-w-[300px] max-[375px]:max-w-[250px]">
                <ClientProjectCarousel />
              </div>

              <p className="text-justify">
                To provide my client with full control over the blog content, I
                created a custom CMS, hosted on a separate domain and accessible
                after authentication. This allows the client to easily add and
                manage new blog posts. The site also includes a notification
                system using React Hot Toast, ensuring that the owner stays
                updated with important actions on the site.
              </p>
            </div>
            <div className="p-4">
              <p className="text-justify">
                Users can read reviews of their favorite books, explore book
                publishing companies featured on the site, and use the contact
                form to directly reach out to the site owner. This project
                stands out for its complexity and attention to user experience,
                combining a dynamic front-end with a powerful back-end.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-2 drop-shadow-xl ">
          <Image src={ClientStrona1} alt="project" />
          <Image src={ClientStrona2} alt="project" />
          <Image src={ClientStrona3} alt="project" />
          <Image src={ClientStrona4} alt="project" />
          <Image src={ClientStrona5} alt="project" />
          <Image src={ClientStrona6} alt="project" />
          <Image src={ClientStrona7} alt="project" />
          <Image src={ClientStrona8} alt="project" />
          {/* <Image
          src={JeszczeStrona}
          fill
          alt="bg"
          className="object-cover object-center z-[-1]  opacity-10"
        /> */}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Page;
