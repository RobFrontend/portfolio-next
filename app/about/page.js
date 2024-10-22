import BGHero from "@/public/hero-background-1-blur.webp";
import Image from "next/image";
import TranIMG from "@/public/profiloweTran.webp";
import Navigation from "../components/navigation";
import OpacityH1 from "../components/OpacityH1";
import Features from "../components/Features";
import HeroSubPages from "../components/HeroSubPages";

function Page() {
  return (
    <>
      <HeroSubPages>
        About<br></br>
        <span className="text-base tracking-tighter px-1 max-[450px]:text-xs max-[450px]:px-[2px]">
          me and my coding yourney
        </span>
      </HeroSubPages>
      <Features />
    </>
  );
}

export default Page;
