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
    name: "Product, Service & Delivery Transformation",
    subtitle: "Improve how your organization turns opportunities into outcomes.",
    body: "Modernize discovery, design, experimentation, product development, service delivery, and deployment practices. Coordinate changes across people, processes, policies, and products so improvements reach customers as complete experiences.",
  },
  {
    name: "AI-Native Work & Organizational Transformation",
    subtitle: "Rethink how people and AI agents learn and work together.",
    body: "Redesign activities, responsibilities, workflows, decision authority, and supporting technology to incorporate AI into how the organization operates. Go beyond automating existing tasks to create more effective and adaptable ways of working.",
  },
  {
    name: "Leadership, Team & Innovation Coaching",
    subtitle: "Develop the capabilities to sustain transformation.",
    body: "Coach leaders and cross-functional teams in customer discovery, product and service innovation, experimentation, collaboration, continuous improvement, and AI-enabled ways of working. Make learning and capability development part of the work itself.",
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
