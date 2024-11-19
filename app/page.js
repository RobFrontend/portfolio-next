import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";
import RevealingSections from "./components/RevealingSections";
import HomeAbout from "./components/HomeAbout";
import HomeClientProjects from "./components/HomeClientProjects";
import HomeHobbyProjects from "./components/HomeHobbyProjects";

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />

      <RevealingSections>
        <HomeAbout />
      </RevealingSections>

      <RevealingSections>
        <HomeClientProjects />
      </RevealingSections>

      <div className="bg-gradient-to-br from-[#080808] to-[#111]">
        <RevealingSections>
          <HomeHobbyProjects />
        </RevealingSections>

        <Footer />
      </div>
    </div>
  );
}
