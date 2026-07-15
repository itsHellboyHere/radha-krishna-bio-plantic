"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import styles from "./Reveal.module.css";

export default function Reveal({ src, poster, video = false }) {
  const ref = useRef(null);
  const videoRef = useRef(null);
  const inView = useInView(ref, { margin: "200px" });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [0.72, 1]);
  const radius = useTransform(scrollYProgress, [0, 0.5], [64, 0]);
  const textY = useTransform(scrollYProgress, [0.2, 0.7], [40, 0]);
  const textOpacity = useTransform(scrollYProgress, [0.25, 0.55], [0, 1]);
  
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    if (inView) {
      el.play().catch(() => {});
    } else {
      el.pause();
    }
  }, [inView]);

  return (
    <section className={styles.section} ref={ref}>
      <motion.div
        className={styles.frame}
        style={{ scale, borderRadius: radius }}
      >
        {video ? (
          <video
            ref={videoRef}
            className={styles.media}
            src={src}
            poster={poster}
            muted
            loop
            playsInline
            preload="none"
          />
        ) : (
          <img className={styles.media} src={src} alt="" loading="lazy" />
        )}

        <div className={styles.shade} aria-hidden="true" />

        <motion.div
          className={styles.caption}
          style={{ y: textY, opacity: textOpacity }}
        >
          <h2>
            Grown here. <em>Trusted there.</em>
          </h2>
          <p>हर पौधा — मेहनत से तैयार, भरोसे के साथ।</p>
        </motion.div>
      </motion.div>
    </section>
  );
}