"use client";

import styles from "./LessonVideo.module.css";

function getYouTubeEmbedUrl(url: string): string | null {
  try {
    const u = new URL(url);
    // youtu.be/ID
    if (u.hostname === "youtu.be") {
      return `https://www.youtube.com/embed${u.pathname}`;
    }
    // youtube.com/watch?v=ID
    if (u.hostname.includes("youtube.com")) {
      const v = u.searchParams.get("v");
      if (v) return `https://www.youtube.com/embed/${v}`;
    }
    return null;
  } catch {
    return null;
  }
}

export default function LessonVideo({ videoUrl }: { videoUrl?: string }) {
  if (!videoUrl) {
    return (
      <div className={styles.placeholder}>
        <p className={styles.placeholderText}>Video coming soon</p>
      </div>
    );
  }

  const embedUrl = getYouTubeEmbedUrl(videoUrl);

  if (embedUrl) {
    return (
      <div className={styles.videoWrap}>
        <iframe
          className={styles.iframe}
          src={embedUrl}
          title="Lesson video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
  }

  // S3 or other direct video URL
  return (
    <div className={styles.videoWrap}>
      <video className={styles.video} controls preload="metadata">
        <source src={videoUrl} />
      </video>
    </div>
  );
}
