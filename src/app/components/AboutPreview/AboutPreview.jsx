"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Check, MapPin } from "lucide-react";
import styles from "./AboutPreview.module.css";

const POINTS = [
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
            Rooted in Saharanpur, grown for{" "}
            <span className={styles.grad}>better harvests</span>
          </h2>
          <p className={styles.hindiLead}>
            सहारनपुर की अपनी नर्सरी — भरोसेमंद पौधे, बेहतर फसल।
          </p>
          <p className={styles.copy}>
            Radha Krishna Bio Plantic raises fruit, horticulture and sandalwood
            plants at our Saharanpur nursery — propagated from high-yielding
            mother stock and cared for at every stage. Our saplings are built to
            establish faster, grow stronger and deliver dependable returns for
            the farmers who trust us.
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
              src="https://res.cloudinary.com/t3frjw0o/image/upload/f_auto,q_auto,w_800,ar_4:5,c_fill/v1783749412/af3e92c5-6727-4615-b107-3677ef6faaee_ufpoda.jpg"
              alt="Healthy saplings at Radha Krishna Bio Plantic nursery"
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