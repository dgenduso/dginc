"use client";

import { useState } from "react";
import WhereFocusModal from "@/lib/components/whereFocusModal/WhereFocusModal";
import styles from "./LandingRootCause.module.css";


const currentInvestment = [
  {
    title: "Diminishing returns.",
    detail: "Delivery is already the most mature capability. Further investment produces marginal gains on something that is already working relatively well.",
  },
  {
    title: "Efficiency without effectiveness.",
    detail: "Even if delivery gets faster, what it delivers is still determined by the quality of what came before it. Speed doesn't improve the value of the output.",
  },
  {
    title: "The problem persists.",
    detail: "Investing in the strongest link doesn't fix the weak ones. The root cause remains upstream, untouched.",
  },
];

const upstreamInvestment = [
  {
    title: "Highest available return.",
    detail: "The maturity gap is greatest in earlier capabilities. Investment here produces the largest improvement because the baseline is lowest and the leverage is highest.",
  },
  {
    title: "Efficiency and effectiveness together.",
    detail: "When work arrives at delivery clearly defined and well understood, delivery gets easier and faster — as a byproduct of upstream improvement, not a separate investment.",
  },
  {
    title: "Substantially greater value.",
    detail: "Better discovery, diagnosis, definition, and design means what gets delivered is more likely to solve the right problem. That is where the return on innovation investment comes from.",
  },
];

export default function LandingRootCause() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.label}>The diagnosis</p>
        <h2 className={styles.heading}>
          Innovation is a system of interconnected capabilities. Delivery is
          one of them.
        </h2>
        <p className={styles.body}>
          Each capability in the innovation system feeds the next. The quality
          of what moves through the system — the clarity of the problem, the
          depth of understanding, the precision of the solution — depends on
          the maturity of every capability in the chain. When earlier
          capabilities are weak, everything downstream inherits that weakness.
        </p>


        <p className={styles.chainNote}>
          At most organizations,{" "}
          <strong>delivery is the most mature capability in the chain</strong>{" "}
          — the result of decades of investment in digital transformation,
          agile, and tooling. The capabilities before it are significantly less
          mature. The learning deficiency created by immature early capabilities
          accumulates as it moves through the system and shows up at the end as
          the delivery problem.{" "}
          <strong>
            Delivery isn&apos;t failing — it&apos;s absorbing everything the
            earlier capabilities didn&apos;t resolve.
          </strong>{" "}
          And the customer evaluation at the end reflects the full chain, not
          just the last link.
        </p>

        {/* Investment comparison */}
        <div className={styles.investmentGrid}>
          <div className={styles.investmentCol}>
            <p className={styles.investmentColLabel}>Where investment currently goes</p>
            <h3 className={styles.investmentColHeading}>Delivery capability.</h3>
            <div className={styles.investmentItems}>
              {currentInvestment.map((item) => (
                <div key={item.title} className={styles.investmentItem}>
                  <p className={styles.investmentItemTitle}>{item.title}</p>
                  <p className={styles.investmentItemDetail}>{item.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={`${styles.investmentCol} ${styles.investmentColNew}`}>
            <p className={`${styles.investmentColLabel} ${styles.investmentColLabelDark}`}>Where investment should go</p>
            <h3 className={`${styles.investmentColHeading} ${styles.investmentColHeadingDark}`}>Upstream innovation capability.</h3>
            <div className={styles.investmentItems}>
              {upstreamInvestment.map((item) => (
                <div key={item.title} className={`${styles.investmentItem} ${styles.investmentItemDark}`}>
                  <p className={`${styles.investmentItemTitle} ${styles.investmentItemTitleDark}`}>{item.title}</p>
                  <p className={`${styles.investmentItemDetail} ${styles.investmentItemDetailDark}`}>{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className={styles.close}>
          Investing upstream doesn&apos;t just make delivery more efficient. It
          makes what gets delivered worth delivering. Both outcomes improve
          simultaneously — and neither is achievable through continued
          investment in delivery alone.
        </p>

        <button className={styles.focusBtn} onClick={() => setModalOpen(true)}>
          Where we focus →
        </button>
      </div>

      {modalOpen && <WhereFocusModal onClose={() => setModalOpen(false)} />}
    </section>
  );
}
