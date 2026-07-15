import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import styles from "./Reach.module.css";

export default function Reach() {
  return (
    <section className={styles.section}>
      <div className={styles.band}>
        <div className={styles.glow} aria-hidden="true" />

        <div className={styles.content}>
          <p className={styles.kicker}>Our Reach · हमारी पहुँच</p>

          <h2 className={styles.big}>
            From Chilkana Road <br />
            <em>to your field.</em>
          </h2>

          <div className={styles.body}>
            <p>
              Our plants travel from our Saharanpur nursery to farms across the
              region. We handle the delivery ourselves — so your saplings arrive
              healthy, on time and ready for the soil.
            </p>
            <p className={styles.bodyHi}>
              सहारनपुर से आपके खेत तक — पौधे सुरक्षित, समय पर।
            </p>
            <Link href="/contact" className={styles.link}>
              Ask about delivery to your area
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}