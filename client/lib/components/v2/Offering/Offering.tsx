"use client";

import CalendlyButton from "@/lib/components/calendly/CalendlyButton";
import styles from "./Offering.module.css";

const services = [
  {
    name: "Operating Model Transformation",
    subtitle: "Redesign how your organization works together to deliver value.",
    body: "Design organizational structures, cross-functional teams, roles, responsibilities, workflows, and governance that align work around customer outcomes. Establish operating models that connect strategy, innovation, and execution across the organization.",
  },
  {
    name: "Customer Insights & Continuous Learning",
    subtitle: "Build an organization that continuously learns from customers.",
    body: "Strengthen customer discovery, conversational research, feedback systems, and organizational knowledge-sharing practices. Use AI to identify patterns, surface gaps in understanding, and guide ongoing learning that informs innovation and decisions.",
  },
  {
    name: "Innovation Strategy & Portfolio Management",
    subtitle: "Focus investment on the opportunities that create value.",
    body: "Connect customer needs, business strategy, and organizational capabilities to opportunity identification, prioritization, portfolio planning, and investment decisions. Shift from disconnected initiatives toward coordinated, outcome-driven innovation.",
  },
  {
    name: "Product & Service Innovation Capability",
    subtitle: "Build the end-to-end capability to discover, deliver, and evolve.",
    body: "Design and develop the practices, structures, and ways of working that connect customer discovery to product and service delivery — as one continuous capability. Move from disconnected projects and handoffs to an organization that can consistently turn insight into outcomes and improve what it offers over time.",
  },
  {
    name: "AI-Native Organizational Transformation",
    subtitle: "Architect how people and AI agents learn and work together.",
    body: "Design the systems, structures, and governance through which humans and AI agents collaborate, make decisions, and improve over time. Move beyond automating existing work to building an organization that learns continuously — one where people and AI operate as a coherent, adaptive system.",
  },
  {
    name: "Leadership, Team & Innovation Coaching",
    subtitle: "Develop the capabilities to sustain transformation.",
    body: "Coach leaders and cross-functional teams in customer discovery, product and service innovation, experimentation, collaboration, continuous improvement, and AI-enabled ways of working. Make learning and capability development part of the work itself.",
  },
  {
    name: "AI Product Development",
    subtitle: "Design and build AI-native products and capabilities.",
    body: "Take ideas from definition through deployment — combining product thinking, modern AI tooling, and engineering execution. Build software that works at the speed of the problem: internal tools, customer-facing products, and AI capabilities that deliver real outcomes.",
  },
];

export default function Offering() {
  return (
    <section id="services" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className={styles.label}>Services</p>
          <h2 className={styles.heading}>How I help organizations transform.</h2>
          <p className={styles.subheading}>
            I partner with organizations to design and implement the operating
            models, innovation practices, and capabilities needed to continuously
            improve products, services, customer experiences, and business
            outcomes.
          </p>
        </div>

        <div className={styles.phases}>
          {services.map((service, i) => (
            <div key={service.name} className={styles.phase}>
              <div className={styles.phaseLeft}>
                <span className={styles.phaseNumber}>0{i + 1}</span>
              </div>
              <div className={styles.phaseRight}>
                <h3 className={styles.phaseName}>{service.name}</h3>
                <p className={styles.phaseSubtitle}>{service.subtitle}</p>
                <p className={styles.phaseBody}>{service.body}</p>
              </div>
            </div>
          ))}
        </div>

        <CalendlyButton label="Let's Talk" className={styles.cta} />
      </div>
    </section>
  );
}
