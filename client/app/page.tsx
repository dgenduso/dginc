import Nav from "@/lib/components/v2/Nav/Nav";
import HeroV3 from "@/lib/components/v2/HeroV3/HeroV3";
import ValueCards from "@/lib/components/v2/ValueCards/ValueCards";
import HowIBuild from "@/lib/components/v2/HowIBuild/HowIBuild";
import Offering from "@/lib/components/v2/Offering/Offering";
import Thinking from "@/lib/components/v2/Thinking/Thinking";
import Footer from "@/lib/components/v2/Footer/Footer";
import "./v2.css";

export default function Home() {
  return (
    <div data-page="v2">
      <Nav />
      <HeroV3 />
      <ValueCards />
      <HowIBuild />
      <Offering />
      <Thinking preview />
      <Footer />
    </div>
  );
}
