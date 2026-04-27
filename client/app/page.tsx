import LandingHero from "@/lib/components/landingPage/landingHero/LandingHero";
import LandingProblem from "@/lib/components/landingPage/landingProblem/LandingProblem";
import LandingMisdiagnosis from "@/lib/components/landingPage/landingMisdiagnosis/LandingMisdiagnosis";
import LandingRootCause from "@/lib/components/landingPage/landingRootCause/LandingRootCause";
import LandingInsight from "@/lib/components/landingPage/landingInsight/LandingInsight";
import LandingFinalCTA from "@/lib/components/landingPage/landingFinalCTA/LandingFinalCTA";

export default function Home() {
  return (
    <>
      <LandingHero />
      <LandingProblem />
      <LandingMisdiagnosis />
      <LandingRootCause />
      <LandingInsight />
      <LandingFinalCTA />
    </>
  );
}
