export type Dimension = "people" | "process" | "policy" | "product";

export const dimLabel: Record<Dimension, string> = {
  people: "People",
  process: "Process",
  policy: "Policy",
  product: "Product",
};

// ─── Capabilities ────────────────────────────────────────────────────────────

export interface Capability {
  title: string;
  body: string;
  dims: Dimension[];
}

export const capabilities: Capability[] = [
  {
    title: "Working software",
    body: "Full-stack engineering from architecture to deployment. Node.js, React, TypeScript, Python, GraphQL, PostgreSQL. I use modern tooling including Claude Code to move fast without sacrificing quality. I build complete solutions, not prototypes.",
    dims: ["product"],
  },
  {
    title: "Products people adopt",
    body: "Product management, delivery, and continuous improvement. I own the full arc: discovery, definition, roadmap, delivery, post-launch learning. Scrum, agile, roadmapping, product ops, analytics, OKRs.",
    dims: ["product", "process", "people"],
  },
  {
    title: "Operating models",
    body: "How an organization works is not fixed infrastructure. It is a product that can be designed and continuously improved. I design operating models across all four dimensions. I don't just define the change, I implement it and make it stick.",
    dims: ["people", "process", "policy", "product"],
  },
  {
    title: "Relationships, not records",
    body: "A CRM is named after the wrong goal. Building a relationship means investing over time, co-creating with the customer rather than just serving them. I design the systems and engagement models that make that possible.",
    dims: ["people", "process", "product"],
  },
  {
    title: "Learning systems",
    body: "Alignment isn't compliance. It is shared understanding built through learning. I design the feedback loops, measurement systems, and operating rhythms that turn information into organizational intelligence.",
    dims: ["people", "process", "policy", "product"],
  },
  {
    title: "Civic infrastructure",
    body: "A city isn't a static thing to be administered. It is something residents build together, continuously. I design civic systems that give people real tools to organize, decide, fund, and build.",
    dims: ["people", "process", "policy", "product"],
  },
];

// ─── Projects ─────────────────────────────────────────────────────────────────

export interface Project {
  title: string;
  status: string;
  dims: Dimension[];
  philosophy?: string;
  summary: string;
  detail: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    title: "DiverseCiti (DC)",
    status: "Active",
    dims: ["people", "process", "policy", "product"],
    philosophy: "City as a product.",
    summary:
      "A platform for residents to govern, organize, and build their local communities together, starting at the block level.",
    detail:
      "Block communities as the activation mechanism, growing into a full city-building platform: events, ranked-choice voting, fundraising, permits, shared decision-making. Built on the belief that cities improve when residents have real infrastructure to build together.",
    tags: ["Build Your Block", "Civic Tech", "Community Platform"],
  },
  {
    title: "APOLLO1 (A1)",
    status: "Active",
    dims: ["people", "process", "product"],
    philosophy: "Relationship as a product.",
    summary:
      "An innovation and relationship platform. Learn from customers, build with them, and grow trusted relationships in the process.",
    detail:
      "A ground-up rethinking of how organizations build customer relationships. Built on the premise that the best products and services are built alongside the customers they serve, with the customer as a genuine partner and not just a source of feedback.",
    tags: ["Build With Customers", "AI OS", "Learning Platform"],
  },
  {
    title: "Dan for D2 Supervisor",
    status: "Live",
    dims: ["people", "process", "policy", "product"],
    philosophy: "Government as a Product.",
    summary:
      "End-to-end digital infrastructure for a San Francisco Board of Supervisors race, built around the idea that government should be continuously built with residents, not broadcast at them.",
    detail:
      "Site, messaging, constituent engagement tooling, and campaign strategy grounded in the belief that city government should function as one unified system in service of residents.",
    tags: ["Civic Tech", "Full-Stack", "SF Politics"],
  },
  // {
  //   title: "Venue SaaS",
  //   status: "Coming Soon",
  //   dims: ["product", "process"],
  //   philosophy: "Venue as a Product.",
  //   summary:
  //     "Self-serve karaoke ordering and queue management for venue patrons, with a multi-venue SaaS platform vision.",
  //   detail:
  //     "Hybrid architecture: local KaraFun Desktop for content, cloud-hosted Next.js frontend on Railway. Mobile-first experience designed for the patron, not the staff.",
  //   tags: ["SaaS", "Hospitality Tech", "Mobile-First"],
  // },
];

// ─── Career timeline ──────────────────────────────────────────────────────────

export interface TimelineEntry {
  period: string;
  phase: string;
  description: string;
  learned: string;
}

export const timeline: TimelineEntry[] = [
  {
    period: "2024 — Present",
    phase: "AI Builder",
    description:
      "Focused on building a consulting practice with frameworks for innovation. Building two products — DiverseCiti and APOLLO1 — using AI as a core part of how I work every day.",
    learned:
      "That one person with the right depth across functions, amplified by AI, can now do what used to require an entire team. The bottleneck is no longer capability. It is clarity.",
  },
  {
    period: "2021 — 2024",
    phase: "System Builder",
    description:
      "Led product, product operations, and organizational transformation work. Designed and implemented product operating models, unifying how teams learn, build, and deliver across the organization.",
    learned:
      "That the system an organization runs on is itself a product. It can be designed, built, and continuously improved. Most organizations never treat it that way.",
  },
  {
    period: "2018 — 2021",
    phase: "Product Builder",
    description:
      "Learned to code. Started building products end-to-end, from architecture to deployment. Worked on APOLL01. Closed the gap between knowing what to build and being able to build it myself.",
    learned:
      "That understanding how something gets built changes how you think about what to build. The best product decisions come from people who can see both sides. Start simple, launch, learn, and improve.",
  },
  {
    period: "2015 — 2018",
    phase: "Capability Builder",
    description:
      "Focused on building organizational capabilities across people, process, policy, and product. Defined governance models, designed processes, identified role gaps, and managed change across large-scale platform transformations.",
    learned:
      "That technology is rarely the hard part. The hard part is getting people, process, and policy aligned around it. Change only sticks when all four dimensions move together.",
  },
  {
    period: "2010 — 2018",
    phase: "Product Manager",
    description:
      "Customer and market discovery, writing PRDs and BRDs, defining product vision and roadmap, product ownership, and scrum-based iterative delivery. Worked directly with engineering teams to prioritize backlogs, write user stories, and continuously ship and improve products.",
    learned:
      "How to own a product end to end — from understanding what customers actually need to getting it built, shipped, and improved. That the best product decisions come from staying close to the customer throughout, not just at the start.",
  },
  {
    period: "2010 — 2018",
    phase: "Project Manager",
    description:
      "Digital transformation program management, IT project management, and Scrum Master across large-scale platform rollouts including CRM, customer engagement, and marketing technology. Process design, stakeholder management, requirements gathering, and managing delivery across cross-functional teams.",
    learned:
      "How organizations actually move work through a system — and why they struggle to. How to run structured discovery, facilitate executive conversations, and keep complex programs on track across competing priorities.",
  },
];
