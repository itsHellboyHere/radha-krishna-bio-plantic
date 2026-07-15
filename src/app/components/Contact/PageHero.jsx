"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./PageHero.module.css";

const ease = [0.22, 1, 0.36, 1];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.11, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease },
  },
};

export default function PageHero({ eyebrow, title, titleHi, sub, image }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section className={styles.hero} ref={ref}>
      <div className={styles.bg}>
        <motion.img
          src={image}
          alt=""
          className={styles.img}
          aria-hidden="true"
          initial={{ scale: 1.16 }}
          animate={{ scale: 1.04 }}
          transition={{ duration: 1.6, ease }}
          style={{ y: imgY }}
        />
        <motion.div
          className={styles.overlay}
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease }}
        />
      </div>

      <motion.div
        className={styles.content}
        variants={container}
        initial="hidden"
        animate="show"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        {eyebrow && (
          <motion.span className={styles.eyebrow} variants={item}>
            {eyebrow}
          </motion.span>
        )}

        <h1 className={styles.title}>
          <span className={styles.mask}>
            <motion.span className={styles.line} variants={item}>
              {title}
            </motion.span>
          </span>

          {titleHi && (
            <span className={styles.mask}>
              <motion.span
                className={`${styles.line} ${styles.titleHi}`}
                variants={item}
              >
                {titleHi}
              </motion.span>
            </span>
          )}
        </h1>

        {sub && (
          <motion.p className={styles.sub} variants={item}>
            {sub}
          </motion.p>
        )}
      </motion.div>
    </section>
  );
}