"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Check, MapPin } from "lucide-react";
import styles from "./AboutPreview.module.css";

const FOUNDED = 2014;
const YEARS = new Date().getFullYear() - FOUNDED;

const POINTS = [
  {
    en: `${YEARS}+ years serving farmers across the region`,
    hi: `${FOUNDED} से किसानों का भरोसा`,
  },
  {
    en: "Genetically superior, high-yield varieties",
    hi: "उन्नत किस्म, ज़्यादा पैदावार",
  },
  {
    en: "Nurtured for faster establishment & stronger growth",
    hi: "जल्दी जमने वाले, मज़बूत पौधे",
  },
];

export default function AboutPreview() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.56, 1]);
  const radius = useTransform(scrollYProgress, [0, 1], [72, 28]);
  const y = useTransform(scrollYProgress, [0, 1], [40, 0]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.18, 1]);
  const badgeOpacity = useTransform(scrollYProgress, [0.55, 0.9], [0, 1]);
  const badgeY = useTransform(scrollYProgress, [0.55, 0.9], [14, 0]);

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <span className={styles.eyebrow}>About Us</span>
          <h2 className={styles.heading}>
            Rooted in Saharanpur since{" "}
            <span className={styles.grad}>{FOUNDED}</span>
          </h2>
          <p className={styles.hindiLead}>
            सहारनपुर की अपनी नर्सरी — भरोसेमंद पौधे, बेहतर फसल।
          </p>
          <p className={styles.copy}>
            What began in {FOUNDED} on Chilkana Road has grown into a nursery
            that farmers across the region come back to, season after season. We
            raise fruit and timber plants from high-yielding mother stock and
            care for them at every stage — so they establish faster, grow
            stronger and deliver dependable returns.
          </p>

          <ul className={styles.points}>
            {POINTS.map((p) => (
              <li key={p.en} className={styles.point}>
                <span className={styles.check}>
                  <Check size={14} strokeWidth={3} />
                </span>
                <span className={styles.pointText}>
                  {p.en}
                  <small>{p.hi}</small>
                </span>
              </li>
            ))}
          </ul>

          <Link href="/about" className={styles.cta}>
            Read Our Story
            <ArrowRight size={17} />
          </Link>
        </div>

        <div className={styles.right} ref={ref}>
          <div className={styles.glow} aria-hidden="true" />

          <motion.div
            className={styles.imageCard}
            style={{ scale, borderRadius: radius, y }}
          >
            <motion.img
              src="https://res.cloudinary.com/t3frjw0o/image/upload/f_auto,q_50,w_800,ar_4:5,c_fill/v1784305473/mausmi_eojrq1.jpg"
              alt="Ripe mosambi sweet limes grown from Radha Krishna Bio Plantic plants"
              className={styles.image}
              style={{ scale: imgScale }}
              loading="lazy"
            />

            <motion.div
              className={styles.badge}
              style={{ opacity: badgeOpacity, y: badgeY }}
            >
              <MapPin size={15} strokeWidth={2.4} />
              Chilkana Road, Saharanpur
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}