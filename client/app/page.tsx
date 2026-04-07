import LandingHero from "@/lib/components/landingPage/landingHero/LandingHero";
import LandingProblem from "@/lib/components/landingPage/landingProblem/LandingProblem";
import LandingWhyItHappens from "@/lib/components/landingPage/landingWhyItHappens/LandingWhyItHappens";
import LandingApproach from "@/lib/components/landingPage/landingApproach/LandingApproach";
import LandingWhatItInvolves from "@/lib/components/landingPage/landingWhatItInvolves/LandingWhatItInvolves";
import LandingOutcome from "@/lib/components/landingPage/landingOutcome/LandingOutcome";
import LandingFinalCTA from "@/lib/components/landingPage/landingFinalCTA/LandingFinalCTA";
import LandingInsightsPreview from "@/lib/components/landingPage/landingInsightsPreview/LandingInsightsPreview";

export default function Home() {
  return (
    <>
      <LandingHero />
      <LandingProblem />
      <LandingWhyItHappens />
      <LandingApproach />
      <LandingWhatItInvolves />
      <LandingOutcome />
      <LandingFinalCTA />
      <LandingInsightsPreview />
    </>
  );
}
