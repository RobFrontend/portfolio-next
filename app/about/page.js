import BGHero from "@/public/hero-background-1-blur.webp";
import Image from "next/image";
import TranIMG from "@/public/profiloweTran.webp";
import Navigation from "../components/navigation";
import OpacityH1 from "../components/OpacityH1";
import Features from "../components/Features";

function Page() {
  return (
    <>
      <div className="min-h-screen relative z-[1] overflow-hidden heroShadow">
        <Navigation />

        <div className="max-w-[1200px] grid mx-auto pt-32 justify-items-center gap-8 max-xl:pt-16">
          <OpacityH1 />
          <h2 className="text-5xl tracking-[-5px] font-[300] z-10">
            Portfolio
          </h2>
          <div className="flex  pt-32 z-10 px-8  w-full">
            <div>
              <h3 className="text-6xl max-[450px]:text-4xl tracking-[-6px] max-[450px]:tracking-[-4px]">
                About me
              </h3>
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
          className="absolute h-[50vh] max-sm:h-[40vh]  w-auto bottom-[-5px] right-[20%] translate-x-1/2 opacity-90 hover:opacity-100 transition-all duration-500 tranIMG z-[1] max-[425px]:right-[30%]"
        />
      </div>
      <Features />
    </>
  );
}

export default Page;
