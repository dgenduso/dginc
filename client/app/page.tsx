import LandingHero from "@/lib/components/landingPage/landingHero/LandingHero";
import LandingProblem from "@/lib/components/landingPage/landingProblem/LandingProblem";
import LandingRootCause from "@/lib/components/landingPage/landingRootCause/LandingRootCause";
import LandingInsight from "@/lib/components/landingPage/landingInsight/LandingInsight";
import LandingDesign from "@/lib/components/landingPage/landingDesign/LandingDesign";
import LandingAI from "@/lib/components/landingPage/landingAI/LandingAI";
import LandingDeliver from "@/lib/components/landingPage/landingDeliver/LandingDeliver";
import LandingFinalCTA from "@/lib/components/landingPage/landingFinalCTA/LandingFinalCTA";

export default function Home() {
  return (
    <>
      <LandingHero />
      <LandingProblem />
      <LandingRootCause />
      <LandingInsight />
      <LandingDesign />
      <LandingAI />
      <LandingDeliver />
      <LandingFinalCTA />
    </>
  );
}
