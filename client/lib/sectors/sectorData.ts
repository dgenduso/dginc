export type Deficit = {
  name: string;
  detail: string;
};

export type Pattern = {
  problem: string;
  detail: string;
};

export type Phase = {
  number: string;
  name: string;
  description: string;
};

export type Dimension = {
  name: string;
  detail: string;
};

export type SectorData = {
  id: string;
  label: string;
  stakeholder: string;
  hero: {
    eyebrow: string;
    headline: string;
    subheads: string[];
  };
  problem: {
    heading: string;
    body: string;
    patterns: Pattern[];
    close: string;
  };
  whyItHappens: {
    heading: string;
    bodies: string[];
    deficitsIntro: string;
    deficits: Deficit[];
    deficitsClose: string;
  };
  approach: {
    heading: string;
    intros: string[];
    phases: Phase[];
  };
  whatItInvolves: {
    heading: string;
    bodies: string[];
    dimLabel: string;
    dimensions: Dimension[];
  };
};

export const sectors: SectorData[] = [
  {
    id: "general",
    label: "General",
    stakeholder: "customer",
    hero: {
      eyebrow: "Dan Genduso, Inc",
      headline: "Break Through the Growth Barrier.",
      subheads: [
        "We help organizations transform how they learn and innovate so they can understand customer needs deeply, build the right solutions, and unlock sustained growth.",
      ],
    },
    problem: {
      heading: "You're Doing More. But Not Breaking Through.",
      body: "Most organizations hit a point where growth slows even as effort increases.",
      patterns: [
        {
          problem: "Teams keep shipping features.",
          detail: "The roadmap stays full. Velocity looks healthy. But customers aren't meaningfully better served than they were a year ago.",
        },
        {
          problem: "Sales pushes harder.",
          detail: "More outreach, more pipeline, more pressure. But churn quietly offsets the gains and net growth stays flat.",
        },
        {
          problem: "New initiatives get launched.",
          detail: "Reorganizations, OKRs, strategy offsites. Each one promises a breakthrough. None of them change the underlying dynamic.",
        },
        {
          problem: "Work expands. Impact doesn't.",
          detail: "The organization is busy. Everyone is working. But the product doesn't meaningfully improve in the eyes of the customer. Growth plateaus. Churn increases.",
        },
      ],
      close:
        "This is not an execution problem. The effort is real. The problem is something deeper.",
    },
    whyItHappens: {
      heading: "Built to respond. Not to solve.",
      bodies: [
        "This is not about effort, intention, or the quality of the people doing the work. Most organizations were designed and optimized for responding — intake, assign, close ticket. That system has workflows, metrics, and accountability structures all built around response times, tickets closed, cases resolved.",
        "There is no equivalent system upstream. No process for moving from symptom to cause to clearly defined opportunity space to lasting resolution. Information exists everywhere — in support queues, feedback forms, customer conversations — but it never flows through the organization as learning. It gets captured and stored, but rarely used to understand what is actually happening and why.",
        "This is not a resource problem. It is not a people problem. It is a system design problem.",
      ],
      deficitsIntro:
        "Every cycle that passes without resolution creates two compounding crises.",
      deficits: [
        {
          name: "A cost deficit that cuts can't fix.",
          detail:
            "Servicing symptoms is expensive. As underlying causes grow, the cost of managing them at the surface grows with them. Cutting budgets doesn't solve this — it just means doing less of the same ineffective work. The responsibility doesn't shrink with the budget.",
        },
        {
          name: "A trust deficit that communication can't reverse.",
          detail:
            "Repeated exposure to the same unresolved problems teaches customers one thing: the organization cannot solve problems. Not won't. Can't. Every cycle that passes without resolution deepens that belief. And once formed, it is very hard to reverse — not through messaging, not through apologies, only through visible, felt progress.",
        },
      ],
      deficitsClose:
        "An organization that cannot afford to keep operating the way it does, with increasing costs and decreasing customer trust reinforcing each other. That is what makes this problem urgent.",
    },
    approach: {
      heading: "Innovation is a learning process.",
      intros: [
        "Most organizations add AI to their existing delivery engine and wonder why nothing changes. AI amplifies whatever engine it's attached to — bolt it onto a delivery engine and you get a faster delivery engine. The ceiling stays. Attach it to a learning engine and it becomes a genuine accelerant — synthesizing customer conversations at scale, extracting signal no team could capture manually, and freeing people to focus entirely on learning rather than note-taking. The 5D framework is that learning engine. Customer conversations are the fuel. Each phase deepens the understanding. Each cycle compounds.",
      ],
      phases: [
        {
          number: "01",
          name: "Discover",
          description:
            "Understand the problem as customers experience it. Not themes from a survey — deep understanding of what keeps happening and what it means for the people living it.",
        },
        {
          number: "02",
          name: "Diagnose",
          description:
            "Identify the underlying causes. What conditions are generating this problem? Which of them, if addressed, would have the greatest impact on preventing it from reappearing?",
        },
        {
          number: "03",
          name: "Define",
          description:
            "Get precise. Vague diagnoses produce vague solutions. This phase turns a diagnosed cause into a clearly defined problem with a clear picture of what resolution looks like.",
        },
        {
          number: "04",
          name: "Design",
          description:
            "Build the treatment plan. What interventions address each defined problem — individually and collectively? In what sequence? With what dependencies?",
        },
        {
          number: "05",
          name: "Deliver",
          description:
            "Implement, evaluate, and confirm the experience actually changed. Not asking, 'did we deliver it?' Instead asking, 'did the problem stop appearing?' Immediate relief continues in parallel so customers aren't waiting while the deeper work happens.",
        },
      ],
    },
    whatItInvolves: {
      heading: "A new way of operating.",
      bodies: [
        "This is a top-down transformation that enables bottom-up innovation. It starts at the executive level — because changing how an organization operates requires the authority and commitment to make it stick. We work with leadership teams to shift the identity and culture of the organization from a delivery mindset to a learning mindset. That shift is what makes everything else possible.",
        "Within that cultural foundation, transformation happens across four dimensions — People, Process, Policy, and Product. Each one changes to support the learning engine: how teams form around problems, how work moves from customer signal to delivered solution, what rules govern decisions, and what systems capture and synthesize learning at scale.",
      ],
      dimLabel: "Change happens across four dimensions",
      dimensions: [
        {
          name: "People",
          detail:
            "The humans and AI agents doing the work — trained to learn from customers, capture signal, and move it forward rather than close tickets and move on.",
        },
        {
          name: "Process",
          detail:
            "A structured problem-solving process that runs consistently — from customer experience through to lasting resolution — and improves with every cycle.",
        },
        {
          name: "Policy",
          detail:
            "The rules and principles that guide decisions — updated to support learning, continuous improvement, and cross-functional coordination.",
        },
        {
          name: "Product",
          detail:
            "The internal and external systems that capture learning, support diagnosis, and deliver services that reflect what customers actually need.",
        },
      ],
    },
  },
  {
    id: "government",
    label: "City Government",
    stakeholder: "resident",
    hero: {
      eyebrow: "City Government",
      headline: "Your city responds to everything. It solves almost nothing.",
      subheads: [
        "Every problem generates a response. The ticket closes. The crew dispatches. The case gets logged. But the same problems keep coming back — cycle after cycle — because responding is not the same as solving.",
        "We help city governments build the system that comes after the response — the one that learns from residents, works through underlying causes, and makes problems stop reappearing.",
      ],
    },
    problem: {
      heading:
        "The response is where the process ends. It should be where it begins.",
      body: "City governments respond to problems every day. But responding is not solving. Without a process that continues past the response into the underlying causes, the defined issues, and the designed solutions, the same problems keep resurfacing, cycle after cycle, compounding as they go.",
      patterns: [
        {
          problem: "Respond. Close. Repeat.",
          detail:
            "Every problem generates a response. The sidewalk gets patched. The trash gets picked up. The ticket closes. But the underlying condition that keeps generating those problems goes unexamined. The response provides relief — like taking Tylenol every day. Necessary in the moment. But not a path to sustained health. Over time the volume of responses grows, the cost compounds, and the city runs faster and faster just to stay in the same place.",
        },
        {
          problem: "Underlying causes compound. Costs grow.",
          detail:
            "What starts as a manageable issue becomes a massive, entrenched one. Homelessness is a clear example — the symptom gets more expensive to manage every cycle while the underlying causes push more people onto the street. The city spends more and more treating the surface while the conditions generating the problem grow.",
        },
        {
          problem: "Occasional progress. No repeatable system.",
          detail:
            "Problems do get solved — but slowly, singularly, and in ways that can't be replicated. It happens despite the system, not because of it. There is no structured process that moves consistently from symptom to cause to resolution. Just occasional progress surrounded by persistent problems.",
        },
        {
          problem: "Everything feels urgent. Nothing feels solvable.",
          detail:
            "Without a system for working through problems, prioritization becomes impossible. Every issue competes for attention. Resources get spread across symptoms. Nothing gets the sustained, structured effort required to actually resolve it. The backlog grows. The team burns out. And residents stop believing anything will change.",
        },
      ],
      close:
        "This is not a failure of effort or intention. It is a signal of an ineffective system. And every cycle that passes without resolution makes the next one harder.",
    },
    whyItHappens: {
      heading: "Built to respond. Not to solve.",
      bodies: [
        "This is not about effort, intention, or the quality of the people doing the work. Government was designed and optimized for responding — intake, dispatch, close ticket. That system has workflows, metrics, and accountability structures all built around response times, tickets closed, cases resolved.",
        "There is no equivalent system upstream. No process for moving from symptom to cause to clearly defined opportunity space to lasting resolution. Information exists everywhere — in 311 calls, service tickets, case notes, conversations — but it never flows through the organization as learning. It gets captured and stored, but rarely used to understand what is actually happening and why.",
        "This is not a resource problem. It is not a people problem. It is a system design problem.",
      ],
      deficitsIntro:
        "Every cycle that passes without resolution creates two compounding crises.",
      deficits: [
        {
          name: "A budget deficit that cuts can't fix.",
          detail:
            "Servicing symptoms is expensive. As underlying causes grow, the cost of managing them at the surface grows with them. Cutting budgets doesn't solve this — it just means doing less of the same ineffective work. The responsibility doesn't shrink with the budget.",
        },
        {
          name: "A trust deficit that communication can't reverse.",
          detail:
            "Decades of the same problems reappearing have taught residents one thing: the system cannot solve problems. Not won't. Can't. Every cycle that passes without resolution deepens that belief. And once formed, it is very hard to reverse — not through messaging, not through community meetings, only through visible, felt progress.",
        },
      ],
      deficitsClose:
        "A city that cannot afford to keep operating the way it does, increasing costs and decreasing trust in a cyclical manner. That is what makes this problem existential.",
    },
    approach: {
      heading: "Innovation is a learning process.",
      intros: [
        "Most cities add AI to their existing systems and wonder why the same problems persist. AI amplifies whatever engine it's attached to — bolt it onto a response system and you get faster responses. The problems keep coming back. Attach it to a learning engine and it becomes a genuine accelerant — synthesizing resident conversations at scale, extracting signal no team could capture manually, and freeing staff to focus entirely on understanding rather than note-taking. The 5D framework is that learning engine. Resident conversations are the fuel. Each phase deepens the understanding. Each cycle compounds.",
      ],
      phases: [
        {
          number: "01",
          name: "Discover",
          description:
            "Understand the problem as residents experience it. Not themes from a survey — deep understanding of what keeps happening and what it means for the people living it.",
        },
        {
          number: "02",
          name: "Diagnose",
          description:
            "Identify the underlying causes. What conditions are generating this problem? Which of them, if addressed, would have the greatest impact on preventing it from reappearing?",
        },
        {
          number: "03",
          name: "Define",
          description:
            "Get precise. Vague diagnoses produce vague solutions. This phase turns a diagnosed cause into a clearly defined problem with a clear picture of what resolution looks like.",
        },
        {
          number: "04",
          name: "Design",
          description:
            "Build the treatment plan. What interventions address each defined problem — individually and collectively? In what sequence? With what dependencies?",
        },
        {
          number: "05",
          name: "Deliver",
          description:
            "Implement, evaluate, and confirm the experience actually changed. Not asking, 'did we deliver it?' Instead asking, 'did the problem stop appearing?' Band-aid work continues in parallel so residents don't wait while the deeper work happens.",
        },
      ],
    },
    whatItInvolves: {
      heading: "A new way of operating.",
      bodies: [
        "This is a top-down transformation that enables bottom-up innovation. It starts at the leadership level — because changing how a city operates requires the authority and commitment to make it stick. We work with city leadership to shift the identity and culture of the organization from a response mindset to a learning mindset. That shift is what makes everything else possible.",
        "Within that cultural foundation, transformation happens across four dimensions — People, Process, Policy, and Product. Each one changes to support the learning engine: how teams form around problems, how work moves from resident signal to delivered solution, what rules govern decisions, and what systems capture and synthesize learning at scale.",
      ],
      dimLabel: "Change happens across four dimensions",
      dimensions: [
        {
          name: "People",
          detail:
            "The humans and AI agents doing the work — trained to learn from residents, capture signal, and move it forward rather than close tickets and move on.",
        },
        {
          name: "Process",
          detail:
            "A structured problem-solving process that runs consistently — from resident experience through to lasting resolution — and improves with every cycle.",
        },
        {
          name: "Policy",
          detail:
            "The rules and principles that guide decisions — updated to support learning, continuous improvement, and cross-functional coordination.",
        },
        {
          name: "Product",
          detail:
            "The internal and external systems that capture learning, support diagnosis, and deliver services that reflect what residents actually need.",
        },
      ],
    },
  },
];

export const defaultSector = sectors[0];
