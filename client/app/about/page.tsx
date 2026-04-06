import type { Metadata } from "next";
import AboutHero from "@/lib/components/aboutPage/AboutHero/AboutHero";
import AboutWhyThisWork from "@/lib/components/aboutPage/AboutWhyThisWork/AboutWhyThisWork";
import AboutDifferentFirm from "@/lib/components/aboutPage/AboutDifferentFirm/AboutDifferentFirm";
import AboutPrinciples from "@/lib/components/aboutPage/AboutPrinciples/AboutPrinciples";
import AboutIdentityCapabilities from "@/lib/components/aboutPage/AboutIdentityCapabilities/AboutIdentityCapabilities";
import AboutFutureOfFirm from "@/lib/components/aboutPage/AboutFutureOfFirm/AboutFutureOfFirm";
import AboutCTA from "@/lib/components/aboutPage/AboutCTA/AboutCTA";

export const metadata: Metadata = {
  title: "About — Dan Genduso",
  description:
    "Learn about Dan Genduso and the work of helping organizations transform into continuous learning systems.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutWhyThisWork />
      <AboutDifferentFirm />
      <AboutPrinciples />
      <AboutIdentityCapabilities />
      <AboutFutureOfFirm />
      <AboutCTA />
    </>
  );
}
