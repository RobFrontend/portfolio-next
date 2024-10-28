import BGHero from "@/public/hero-background-1-blur.webp";
import Image from "next/image";
import TranIMG from "@/public/oparcieTran.webp";
import Navigation from "../components/navigation";
import OpacityH1 from "../components/OpacityH1";
import Link from "next/link";
import Footer from "../components/Footer";

export const metadata = {
  title: "Contact",
};

function Page() {
  return (
    <div className="min-h-screen relative z-[1] overflow-hidden heroShadow">
      <Navigation />
      <div className="max-w-[1200px] grid mx-auto pt-32 justify-items-center gap-8 max-xl:pt-16">
        <OpacityH1 />
        <h2 className="text-5xl tracking-[-5px] font-[300] z-10 headingPrimarySub">
          Portfolio
        </h2>
        <div className="flex flex-col  items-center pt-16 max-xl:pt-8  w-full gap-3 text-center pb-16 ">
          <div>
            <h3 className="text-3xl max-[425px]:text-xl">Phone number</h3>
            <p>+48 609 843 405</p>
          </div>
          <div>
            <h3 className="text-3xl max-[425px]:text-xl">E-mail</h3>
            <p>robert.grabowski97@gmail.com</p>
          </div>
          <div>
            <h3 className="text-3xl max-[425px]:text-xl">Linkedin</h3>
            <Link
              href="https://www.linkedin.com/in/robert-grabowski-b97965239/"
              target="_blank"
              className="border-b-[1px] border-[#575858] transition-all duration-300 hover:opacity-80"
            >
              robert-grabowski-b97965239
            </Link>
          </div>
          <div>
            <h3 className="text-3xl max-[425px]:text-xl">GitHub</h3>
            <Link
              href="https://github.com/RobFrontend"
              target="_blank"
              className="border-b-[1px] border-[#575858] transition-all duration-300 hover:opacity-80"
            >
              RobFrontend
            </Link>
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
      <div className="absolute bottom-8 -translate-x-1/2 left-1/2 translate-y-1/2 w-full">
        <Footer />
      </div>
    </div>
  );
}

export default Page;
