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
        <div className="grid grid-cols-2 gap-8 content-center justify-center justify-items-center items-center">
          <div>
            <p className="pb-6">
              My primary expertise, representing the sphere where I continue to
              focus and evolve significantly. I create clean and elegant code,
              with an effective character. My primary expertise, representing
              the sphere where I continue to focus and evolve significantly. I
              create clean and elegant code, with an effective character.
            </p>
            <Link
              href="/about"
              className="text-xl border-b-[1px] border-[#575858] py-2 px-4"
            >
              More about me
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-4  self-center justify-self-center w-fit">
            <Image
              src={AboutHtml}
              alt="logo"
              className="max-h-20 max-w-20 brightness-90 grayscale-[0.4] transition-all duration-500 hover:brightness-100 drop-shadow-lg"
            />
            <Image
              src={AboutCss}
              alt="logo"
              className="max-h-20 max-w-20 brightness-90 grayscale-[0.4] transition-all duration-500 hover:brightness-100 drop-shadow-lg"
            />
            <Image
              src={AboutJs}
              alt="logo"
              className="max-h-20 max-w-20 brightness-90 grayscale-[0.4] transition-all duration-500 hover:brightness-100 drop-shadow-lg"
            />
            <Image
              src={AboutReact}
              alt="logo"
              className="max-h-20 max-w-20 brightness-90 grayscale-[0.4] transition-all duration-500 hover:brightness-100 drop-shadow-lg"
            />
            <Image
              src={AboutNext}
              alt="logo"
              className="max-h-20 max-w-20 brightness-90 grayscale-[0.4] transition-all duration-500 hover:brightness-100 drop-shadow-lg"
            />
            <Image
              src={AboutNode}
              alt="logo"
              className="max-h-20 max-w-20 brightness-90 grayscale-[0.4] transition-all duration-500 hover:brightness-100 drop-shadow-lg"
            />
            <Image
              src={AboutTailwind}
              alt="logo"
              className="max-h-20 max-w-20 brightness-90 grayscale-[0.4] transition-all duration-500 hover:brightness-100 drop-shadow-lg"
            />
            <Image
              src={AboutGit}
              alt="logo"
              className="max-h-20 max-w-20 brightness-90 grayscale-[0.4] transition-all duration-500 hover:brightness-100 drop-shadow-lg"
            />
            <Image
              src={AboutSupabase}
              alt="logo"
              className="max-h-20 max-w-20 brightness-90 grayscale-[0.4] transition-all duration-500 hover:brightness-100 drop-shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
