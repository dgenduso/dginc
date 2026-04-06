export interface GhostPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  feature_image: string | null;
  published_at: string;
  reading_time: number;
  tags: { name: string }[];
  html: string;
}

const GHOST_URL = process.env.GHOST_URL;
const GHOST_KEY = process.env.GHOST_KEY;

function apiUrl(path: string): string {
  return `${GHOST_URL}/ghost/api/content/${path}&key=${GHOST_KEY}`;
}

// In development Ghost serves images from localhost (a private IP), which
// Next.js blocks. Rewrite those URLs through our /ghost-image proxy route.
function proxyImageUrl(src: string | null): string | null {
  if (!src || !GHOST_URL) return src;
  const isDev = process.env.NODE_ENV === "development";
  if (!isDev) return src;
  return `/ghost-image?src=${encodeURIComponent(src)}`;
}

function normalizePosts(posts: GhostPost[]): GhostPost[] {
  return posts.map((post) => ({
    ...post,
    feature_image: proxyImageUrl(post.feature_image),
  }));
}

export async function getPosts(): Promise<GhostPost[]> {
  const res = await fetch(
    apiUrl("posts/?include=tags&limit=all"),
    { next: { revalidate: 60 } }
  );
  if (!res.ok) throw new Error(`Ghost API error: ${res.status}`);
  const { posts } = await res.json();
  return normalizePosts(posts);
}

export async function getPostBySlug(slug: string): Promise<GhostPost | null> {
  const res = await fetch(
    apiUrl(`posts/slug/${slug}/?include=tags`),
    { next: { revalidate: 60 } }
  );
  if (!res.ok) return null;
  const { posts } = await res.json();
  const post = posts[0] ?? null;
  return post ? normalizePosts([post])[0] : null;
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
