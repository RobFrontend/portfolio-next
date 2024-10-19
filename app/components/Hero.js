import BGHero from "@/public/hero-background-1-blur.webp";
import Image from "next/image";
import TranIMG from "@/public/oparcieTran.webp";
import Navigation from "./navigation";
import OpacityH1 from "./OpacityH1";

function Hero() {
  return (
    <div className="min-h-[100dvh] relative z-[1] overflow-hidden heroShadow">
      <div className="z-[99]">
        <Navigation />
      </div>
      <div className="max-w-[1200px] grid mx-auto pt-32 justify-items-center gap-8 max-xl:pt-16">
        <OpacityH1 />
        <h2 className="text-5xl tracking-[-5px] font-[300] z-10">Portfolio</h2>
        <div className="flex justify-between pt-24 z-10 px-8 max-xl:pt-16  w-full">
          <div className="w-[30%]">
            <h3 className="text-3xl max-[400px]:text-xl">Frontend</h3>
            <p className="max-sm:hidden">
              My primary expertise, representing the sphere where I continue to
              focus and evolve significantly. I create clean and elegant code,
              with an effective character.
            </p>
          </div>
          <div className="w-[30%] ">
            <h3 className="text-3xl max-sm:text-right max-[400px]:text-xl">
              Creator
            </h3>
            <p className="max-sm:hidden">
              My passion for creation has been a lifelong pursuit. I
              continuously challenge myself with diverse tasks to expand and
              refine my skill set.
            </p>
          </div>
        </div>
      </div>
      <Image
        src={BGHero}
        alt="blurred bg"
        priority
        fill
        className="-z-[1] object-center object-cover opacity-60 w-[110%] h-[110%]"
      />
      <Image
        src={TranIMG}
        alt="transparent"
        className="absolute h-[55dvh] max-sm:h-[45dvh]  w-auto bottom-[-5px] right-1/2 translate-x-1/2 opacity-90 hover:opacity-100 transition-all duration-500 tranIMG z-[1]"
      />
    </div>
  );
}

export default Hero;
