import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPosts, getPostBySlug } from "@/lib/ghost";
import Nav from "@/lib/components/v2/Nav/Nav";
import Footer from "@/lib/components/v2/Footer/Footer";
import Article from "@/lib/components/v2/Article/Article";
import "../../v2.css";

export async function generateStaticParams() {
  try {
    const posts = await getPosts();
    return posts.map((post) => ({ slug: post.slug }));
  } catch {
    return [];
  }
}

export async function generateMetadata(
  props: PageProps<"/thoughts/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Dan Genduso`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.published_at,
      ...(post.feature_image && { images: [{ url: post.feature_image }] }),
    },
  };
}

export default async function ArticlePage(props: PageProps<"/thoughts/[slug]">) {
  const { slug } = await props.params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  return (
    <div data-page="v2">
      <Nav />
      <Article post={post} />
      <Footer />
    </div>
  );
}
