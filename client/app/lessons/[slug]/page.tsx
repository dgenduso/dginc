import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Nav from "@/lib/components/v2/Nav/Nav";
import LessonDetail from "@/lib/components/v2/LessonDetail/LessonDetail";
import Footer from "@/lib/components/v2/Footer/Footer";
import { getLessons, getLesson } from "@/lib/v2/lessons";
import "../../v2.css";

export async function generateStaticParams() {
  return getLessons().map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const lesson = getLesson(slug);
  if (!lesson) return {};
  return {
    title: `${lesson.title} — Dan Genduso`,
    description: lesson.objective,
  };
}

export default async function LessonPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const lesson = getLesson(slug);
  if (!lesson) notFound();

  return (
    <div data-page="v2">
      <Nav />
      <LessonDetail lesson={lesson} />
      <Footer />
    </div>
  );
}
