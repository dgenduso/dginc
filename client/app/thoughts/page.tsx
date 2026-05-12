import type { Metadata } from "next";
import { getPosts } from "@/lib/ghost";
import Nav from "@/lib/components/v2/Nav/Nav";
import Footer from "@/lib/components/v2/Footer/Footer";
import ThoughtsGrid from "@/lib/components/v2/ThoughtsGrid/ThoughtsGrid";
import "../v2.css";

export const metadata: Metadata = {
  title: "Thoughts — Dan Genduso",
  description: "Thinking on organizational learning, innovation, civic infrastructure, and building with AI.",
};

export default async function ThoughtsPage() {
  let posts: Awaited<ReturnType<typeof getPosts>> = [];
  try {
    posts = await getPosts();
  } catch {
    // Ghost unavailable
  }

  return (
    <div data-page="v2">
      <Nav />
      <ThoughtsGrid posts={posts} />
      <Footer />
    </div>
  );
}
