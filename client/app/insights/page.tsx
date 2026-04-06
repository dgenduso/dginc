import type { Metadata } from "next";
import { getPosts } from "@/lib/ghost";
import InsightsHero from "@/lib/components/insightsPage/InsightsHero/InsightsHero";
import InsightsGrid from "@/lib/components/insightsPage/InsightsGrid/InsightsGrid";

export const metadata: Metadata = {
  title: "Insights — Dan Genduso",
  description:
    "Thinking on organizational learning, service and trust, government transformation, and learning-first organizations.",
};

export default async function InsightsPage() {
  const posts = await getPosts();

  return (
    <>
      <InsightsHero />
      <InsightsGrid posts={posts} />
    </>
  );
}
