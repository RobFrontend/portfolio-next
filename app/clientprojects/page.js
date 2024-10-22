import Features from "../components/Features";
import HeroSubPages from "../components/HeroSubPages";

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
    </>
  );
}

export default Page;
