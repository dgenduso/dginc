import GovHero from "@/lib/components/sectors/government/GovHero";
import GovProblem from "@/lib/components/sectors/government/GovProblem";
import GovWhyItHappens from "@/lib/components/sectors/government/GovWhyItHappens";
import LandingApproach from "@/lib/components/landingPage/landingApproach/LandingApproach";
import LandingWhatItInvolves from "@/lib/components/landingPage/landingWhatItInvolves/LandingWhatItInvolves";
import LandingOutcome from "@/lib/components/landingPage/landingOutcome/LandingOutcome";
import LandingFinalCTA from "@/lib/components/landingPage/landingFinalCTA/LandingFinalCTA";

export const metadata = {
  title: "City Government | Dan Genduso, Inc",
  description:
    "We help city governments build the system that comes after the response — one that learns from residents, works through underlying causes, and makes problems stop reappearing.",
};

export default function GovernmentPage() {
  return (
    <>
      <GovHero />
      <GovProblem />
      <GovWhyItHappens />
      <LandingApproach />
      <LandingWhatItInvolves />
      <LandingOutcome />
      <LandingFinalCTA />
    </>
  );
}
