import type { Metadata } from "next";
import Nav from "@/lib/components/v2/Nav/Nav";
import About from "@/lib/components/v2/About/About";
import Footer from "@/lib/components/v2/Footer/Footer";
import "../v2.css";

export const metadata: Metadata = {
  title: "About — Dan Genduso",
  description: "I help organizations become AI-native. 15 years of depth across organizational design, product, and engineering.",
};

export default function AboutPage() {
  return (
    <div data-page="v2">
      <Nav />
      <About />
      <Footer />
    </div>
  );
}
