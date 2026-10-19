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
  url?: string;
}

export const projects: Project[] = [
  {
    title: "DiverseCiti (DC)",
    status: "Active",
    dims: ["people", "process", "policy", "product"],
    philosophy: "City as a product.",
    summary:
      "A platform for residents to form trusted hyperlocal communities starting at the building and block level — and for cities to learn from those communities continuously.",
    detail:
      "Built on the same AI-native capability model I bring into organizations. Block communities as the activation mechanism, growing into a full city-building platform: events, ranked-choice voting, fundraising, permits, shared decision-making.",
    tags: ["Civic Tech", "Community Platform", "AI-Native"],
    url: "https://www.diverseciti.org",
  },
  {
    title: "APOLLO1 (A1)",
    status: "Active",
    dims: ["people", "process", "product"],
    philosophy: "The AI-native operating system.",
    summary:
      "The platform through which AI-native capabilities are built, deployed, and operated. Agents live here. Process and policy are codified here.",
    detail:
      "The system that makes AI-native transformation repeatable at scale. A ground-up rethinking of how organizations build and operate capabilities, with agents holding defined roles and people equipped for sensemaking, teaching, and governance.",
    tags: ["AI OS", "Learning Platform", "Agentic"],
    url: "https://www.apoll01.com",
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
    url: "https://www.sfdan.com",
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
    period: "2023 — Present",
    phase: "AI System Builder",
    description:
      "Building AI-native systems — not just AI-assisted tools, but systems where people and bots operate together as agents within intentionally designed processes, workflows, and policies. The system itself is the product: AI-native capabilities that include the agents (human and bot), the workflows that coordinate them, the policies that govern them, and the technology that enables them. APOLLO1 has evolved into the platform through which these systems are designed, delivered, and operated. Applying this directly to client organizations as a transformation partner.",
    learned:
      "An AI-native capability is not a feature — it is a system. It requires designing the agents (people and bots), the processes and workflows they operate within, the policies that govern their decisions, and the technology that connects them. Organizations that only add AI to existing roles and processes will always underperform organizations that redesign the system itself.",
  },
  {
    period: "2021 — 2023",
    phase: "System Builder",
    description:
      "Moved from building individual capabilities to designing the operating model that builds all capabilities continuously — the system that defines how an organization learns, decides, builds, and improves. Designed and implemented product operating models across a global organization, connecting customer learning to capability delivery across functions. This was the shift from building one thing well to designing the system that builds everything well.",
    learned:
      "The organizational operating model is itself a product — and most organizations inherited theirs without ever designing it intentionally. When you treat it as something to be built and continuously improved, the organization's ability to deliver compounds over time.",
  },
  {
    period: "2018 — 2021",
    phase: "Product Builder",
    description:
      "Learned to code. Shifted from building capabilities inside organizations to building my own products end-to-end — architecture, engineering, deployment. Started APOLLO1. Closed the gap between knowing what to build and being able to build it myself. This phase was about becoming a complete builder: someone who could own the full technical stack, not just the strategy and design.",
    learned:
      "Understanding how something gets built fundamentally changes how you think about what to build. The best product decisions come from people who can see both sides of that line. Start simple, ship, learn, and improve — the loop matters more than the plan.",
  },
  {
    period: "2012 — 2018",
    phase: "Capability Builder",
    description:
      "Grew from contributing to capabilities to owning them end to end. Started with the technical builds — designing and delivering the product and technology dimension of CRM and marketing operations capabilities. Then expanded to own the full capability across all four dimensions: the process design, the policy and governance, the people and change strategy, and the technology. Running the full 5 Ds — Discover, Diagnose, Define, Design, Deliver — to redesign capabilities from the ground up rather than just improving what existed.",
    learned:
      "A capability is not a tool, a role, or a process in isolation. It is a system built across all four dimensions — people, process, policy, and technology — and change only sticks when all four move together. You can't fix the technology without fixing the process. You can't fix the process without addressing the governance and the people around it.",
  },
  {
    period: "2010 — 2012",
    phase: "Capability Specialist",
    description:
      "Started in CRM and marketing operations — specialized capability domains that required working across people, process, and technology simultaneously. The work included process design, technical implementation, program management, and change management and readiness on the people side. Not yet owning capabilities end to end, but learning what it took to make change stick inside complex organizations through the full arc of a capability build.",
    learned:
      "Organizations resist change not because people are opposed to improvement but because change that touches only one dimension — just the technology, just the process — doesn't hold. The work that sticks is the work that accounts for how people actually experience the change.",
  },
];
