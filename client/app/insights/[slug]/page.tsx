import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPosts, getPostBySlug } from "@/lib/ghost";
import ArticleHeader from "@/lib/components/articlePage/ArticleHeader/ArticleHeader";
import ArticleBody from "@/lib/components/articlePage/ArticleBody/ArticleBody";

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(
  props: PageProps<"/insights/[slug]">
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
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      ...(post.feature_image && { images: [post.feature_image] }),
    },
  };
}

export default async function ArticlePage(props: PageProps<"/insights/[slug]">) {
  const { slug } = await props.params;
  const post = await getPostBySlug(slug);

  if (!post) notFound();

  return (
    <>
      <ArticleHeader post={post} />
      <ArticleBody html={post.html} />
    </>
  );
}
