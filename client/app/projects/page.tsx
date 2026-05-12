"use client";

import { useState } from "react";
import type { Dimension } from "@/lib/v2/data";
import Nav from "@/lib/components/v2/Nav/Nav";
import Projects from "@/lib/components/v2/Projects/Projects";
import Footer from "@/lib/components/v2/Footer/Footer";
import "../v2.css";

export default function ProjectsPage() {
  const [activeDimension] = useState<Dimension | null>(null);

  return (
    <div data-page="v2" style={{ background: "var(--v2-bg)", minHeight: "100svh" }}>
      <Nav />
      <Projects activeDimension={activeDimension} />

      <Footer />
    </div>
  );
}
