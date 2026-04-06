import LandingHero from "@/lib/components/landingPage/landingHero/LandingHero";
import LandingRecognition from "@/lib/components/landingPage/landingRecognition/LandingRecognition";
import LandingRootCause from "@/lib/components/landingPage/landingRootCause/LandingRootCause";
import LandingModel from "@/lib/components/landingPage/landingModel/LandingModel";
import LandingImpact from "@/lib/components/landingPage/landingImpact/LandingImpact";
import LandingConversation from "@/lib/components/landingPage/landingConversation/LandingConversation";
import LandingInsightsPreview from "@/lib/components/landingPage/landingInsightsPreview/LandingInsightsPreview";

export default function Home() {
  return (
    <>
      <LandingHero />
      <LandingRecognition />
      <LandingRootCause />
      <LandingModel />
      <LandingImpact />
      <LandingConversation />
      <LandingInsightsPreview />
    </>
  );
}
