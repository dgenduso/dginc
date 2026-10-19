export interface Lesson {
  slug: string;
  title: string;
  objective: string;
  body: string[];
  isPublic: boolean;
  parentSlug?: string;
  children?: string[];
  publishedAt: string;
  videoUrl?: string;
}

export const lessons: Lesson[] = [
  {
    slug: "alignment",
    title: "What is organizational alignment?",
    objective: "Understand what alignment means for an organization and why it is the foundation everything else is built on.",
    body: [
      "Most organizations aren't misaligned because of bad intentions. They're misaligned because alignment was never built in. Strategy lives in documents. Values live on walls. Policy lives in binders. And the people — and increasingly, the agents — doing the work every day have no direct connection to any of it. Work happens. Alignment doesn't.",
      "Alignment isn't a feeling or a culture initiative. It is an operational property — the degree to which what an organization does matches what it's for, who it serves, and the world it operates in.",
      "It has three distinct layers. Each one shapes the one inside it. You can't understand the inner layer without understanding the outer ones first.",
    ],
    isPublic: true,
    children: ["alignment-social", "alignment-customer", "alignment-organizational"],
    publishedAt: "2026-08-24",
  },
  {
    slug: "alignment-social",
    title: "Social alignment",
    objective: "Understand how an organization aligns to the needs of the communities and society inside which it exists and operates.",
    body: [
      "Every organization exists inside a community — drawing from it, affecting it, accountable to it. Social alignment is the degree to which the organization's existence creates value for the people and communities that make up its context: employees, neighbors, citizens, the environment.",
      "Public policy is the formal expression of what society expects. Regulations, labor standards, environmental requirements, civil rights protections — these aren't constraints imposed from outside. They're the encoded expectations of the communities inside which the organization operates.",
      "An organization that meets the letter of the law but undermines community trust is misaligned. One that contributes to the health of the communities it operates in is something worth building.",
      "Social alignment is the outermost ring. It shapes everything inside it. What society expects from organizations defines the bounds within which customer value can be created and within which internal operations must function.",
    ],
    isPublic: true,
    parentSlug: "alignment",
    publishedAt: "2026-08-24",
  },
  {
    slug: "alignment-customer",
    title: "Customer alignment",
    objective: "Understand how an organization aligns to the needs of the people it serves and why that alignment requires continuous listening.",
    body: [
      "An organization exists to create value for its customers. Customer alignment is the degree to which the work being done actually meets genuine customer needs — effectively, efficiently, and in a way that builds trust over time.",
      "This is harder than it sounds. Organizations accumulate work that made sense once and was never retired. Processes drift from the needs that created them. Products get built for customers who were studied two years ago. The organization gets busy doing work — and stops asking whether that work is the right work.",
      "Customer alignment requires continuous listening — not periodic surveys, but an ongoing signal that keeps the organization oriented toward the people it's supposed to serve. What do they need? What job are they trying to accomplish? What outcome matters to them? Are we reliably producing that outcome?",
      "When the outer ring (social) and the middle ring (customer) are both right, the organization is doing the right work for the right people in the right way. That's the foundation. What remains is making sure the organization can actually deliver it.",
    ],
    isPublic: true,
    parentSlug: "alignment",
    publishedAt: "2026-08-24",
  },
  {
    slug: "alignment-organizational",
    title: "Organizational alignment",
    objective: "Understand how people and agents within an organization do work in alignment with its purpose, values, policies, and standards — and why this is where alignment most often fails.",
    body: [
      "This is where most alignment efforts focus — and where they most consistently fail.",
      "Organizational alignment is the degree to which the people and agents doing the work operate in alignment with what the organization stands for and how it has decided to operate: its purpose, mission, values, principles, policies, and standards. Not as aspirational statements, but as operational reality — embedded in the work itself.",
      "The gap between stated values and actual behavior is almost universal. It exists not because people are dishonest but because the connection between the values on the wall and the task in front of you was never built. The work and the principles that should guide it exist in separate systems — or no system at all.",
      "Closing that gap is what makes an organization genuinely coherent. It requires making explicit what has always been tacit: the knowledge workers need, the policies that govern decisions, the standards that define acceptable performance, the processes that sequence the work. Most organizations carry all of this implicitly — passed down through onboarding, absorbed through experience, filled in by judgment.",
      "A new employee can absorb it over months. An agent cannot. That requirement — which feels like a burden — is actually a forcing function. Organizations that deploy agents seriously have to become the kind of organization that knows what it stands for and has built that into how it operates. That work is hard. It is also the work that creates alignment.",
    ],
    isPublic: true,
    parentSlug: "alignment",
    publishedAt: "2026-08-24",
  },
];

export function getLessons(): Lesson[] {
  return lessons;
}

export function getLesson(slug: string): Lesson | undefined {
  return lessons.find((l) => l.slug === slug);
}

export function getRootLessons(): Lesson[] {
  return lessons.filter((l) => !l.parentSlug);
}

export function getChildLessons(parentSlug: string): Lesson[] {
  return lessons.filter((l) => l.parentSlug === parentSlug);
}

export function formatLessonDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
