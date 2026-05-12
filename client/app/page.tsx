import Nav from "@/lib/components/v2/Nav/Nav";
import Hero from "@/lib/components/v2/Hero/Hero";
import BuilderProfile from "@/lib/components/v2/BuilderProfile/BuilderProfile";
import BuildLevels from "@/lib/components/v2/BuildLevels/BuildLevels";
import Projects from "@/lib/components/v2/Projects/Projects";
import Thinking from "@/lib/components/v2/Thinking/Thinking";
import Footer from "@/lib/components/v2/Footer/Footer";
import "./v2.css";

export default function Home() {
  return (
    <div data-page="v2">
      <Nav />
      <Hero />
      <BuilderProfile />
      <BuildLevels />
      <Projects activeDimension={null} preview />
      <Thinking preview />
      <Footer />
    </div>
  );
}
