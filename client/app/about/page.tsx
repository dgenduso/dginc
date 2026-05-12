import type { Metadata } from "next";
import Nav from "@/lib/components/v2/Nav/Nav";
import About from "@/lib/components/v2/About/About";
import Footer from "@/lib/components/v2/Footer/Footer";
import "../v2.css";

export const metadata: Metadata = {
  title: "About — Dan Genduso",
  description: "Systems thinker, builder, and organizational innovator based in San Francisco.",
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
