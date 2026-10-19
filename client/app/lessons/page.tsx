import type { Metadata } from "next";
import Nav from "@/lib/components/v2/Nav/Nav";
import LessonsGrid from "@/lib/components/v2/LessonsGrid/LessonsGrid";
import Footer from "@/lib/components/v2/Footer/Footer";
import "../v2.css";

export const metadata: Metadata = {
  title: "Lessons — Dan Genduso",
  description: "Short, focused lessons on organizational alignment, AI-native operations, and building organizations that continuously improve.",
};

export default function LessonsPage() {
  return (
    <div data-page="v2">
      <Nav />
      <LessonsGrid />
      <Footer />
    </div>
  );
}
