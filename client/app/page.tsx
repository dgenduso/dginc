import { getPosts } from "@/lib/ghost";
import Nav from "@/lib/components/v2/Nav/Nav";
import HeroV3 from "@/lib/components/v2/HeroV3/HeroV3";
import ValueCards from "@/lib/components/v2/ValueCards/ValueCards";
import HowIBuild from "@/lib/components/v2/HowIBuild/HowIBuild";
import Offering from "@/lib/components/v2/Offering/Offering";
import Methodology from "@/lib/components/v2/Methodology/Methodology";
import HowWeEngage from "@/lib/components/v2/HowWeEngage/HowWeEngage";
import ThoughtsGrid from "@/lib/components/v2/ThoughtsGrid/ThoughtsGrid";
import FinalCTA from "@/lib/components/v2/FinalCTA/FinalCTA";
import Footer from "@/lib/components/v2/Footer/Footer";
import "./v2.css";

export default async function Home() {
  let posts: Awaited<ReturnType<typeof getPosts>> = [];
  try {
    posts = await getPosts();
  } catch {
    // Ghost unavailable
  }

  return (
    <div data-page="v2">
      <Nav />
      <HeroV3 />
      <ValueCards />
      <HowIBuild />
      <Offering />
      <Methodology />
      <HowWeEngage />
      <ThoughtsGrid posts={posts} preview />
      <FinalCTA />
      <Footer />
    </div>
  );
}
