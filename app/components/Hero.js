import BGHero from "@/public/hero-background-1-blur.webp";
import Image from "next/image";
import TranIMG from "@/public/oparcieTran.webp";
import Navigation from "./navigation";
import OpacityH1 from "./OpacityH1";

function Hero() {
  return (
    <div className="min-h-screen relative z-[1] overflow-hidden heroShadow">
      <Navigation />

      <div className="max-w-[1200px] grid mx-auto pt-32 justify-items-center gap-8 max-xl:pt-16">
        <OpacityH1 />
        <h2 className="text-5xl tracking-[-5px] font-[300] z-10">Portfolio</h2>
        <div className="flex justify-between pt-24 z-10 px-8 max-xl:pt-16  w-full">
          <div className="w-[30%] max-sm:w-[50%]">
            <h3 className="text-3xl max-[400px]:text-xl">Frontend</h3>
            <p className="max-sm:hidden">
              This is where I excel, focusing on clean, efficient code and
              creating intuitive, visually appealing interfaces. I prioritize
              user experience, ensuring both aesthetics and functionality are
              perfectly balanced.
            </p>
          </div>
          <div className="w-[30%] max-sm:w-[50%]">
            <h3 className="text-3xl max-sm:text-right max-[400px]:text-xl">
              Full-Stack
            </h3>
            <p className="max-sm:hidden">
              While frontend is my strength, I&apos;m equally committed to
              mastering backend technologies, databases, and design. I thrive in
              creating complete, polished projects from start to finish.
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
        className="absolute h-[55vh] max-sm:h-[45dvh]  w-auto bottom-[-5px] right-1/2 translate-x-1/2 opacity-90 hover:opacity-100 transition-all duration-500 tranIMG z-[1]"
      />
    </div>
  );
}

export default Hero;
