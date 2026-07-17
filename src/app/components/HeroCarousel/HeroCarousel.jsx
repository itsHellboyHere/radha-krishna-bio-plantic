"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "./HeroCarousel.module.css";

const IMAGES = [
  
  {
    src: "https://res.cloudinary.com/t3frjw0o/image/upload/f_auto,q_55,w_420,ar_2:3,c_fill/v1784305024/litchi_ndemdz.jpg",
    alt: "Ripe litchi cluster on the tree",
  },
  {
    src: "https://res.cloudinary.com/t3frjw0o/image/upload/f_auto,q_55,w_420,ar_2:3,c_fill/v1784305024/date_cvbi9l.jpg",
    alt: "Date palm saplings at Radha Krishna Bio Plantic nursery",
  },
  {
    src: "https://res.cloudinary.com/t3frjw0o/image/upload/f_auto,q_55,w_420,ar_2:3,c_fill/v1784305024/mango2_sn6ehd.jpg",
    alt: "Green mangoes hanging on a healthy mango branch",
  },
  {
    src: "https://res.cloudinary.com/t3frjw0o/image/upload/f_auto,q_55,w_420,ar_2:3,c_fill/v1784305023/apple_yxcdsk.jpg",
    alt: "Red apples on a healthy apple tree",
  },
  {
    src:"https://res.cloudinary.com/t3frjw0o/image/upload/f_auto,q_55,w_420,ar_2:3,c_fill/v1784305473/mausmi_eojrq1.jpg",
    alt:"Ripe green mosambi sweet limes"
  }
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(Math.floor(IMAGES.length / 2));
  const timer = useRef(null);
  const total = IMAGES.length;

  const next = useCallback(
    () => setCurrent((p) => (p + 1) % total),
    [total]
  );
  const prev = () => setCurrent((p) => (p - 1 + total) % total);

  const start = useCallback(() => {
    stop();
    timer.current = setInterval(next, 3000);
  }, [next]);
  const stop = () => timer.current && clearInterval(timer.current);

  useEffect(() => {
    start();
    return stop;
  }, [start]);

  return (
    <section className={styles.hero}>
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.head}>
        <h1 className={styles.title}>
          From Our Nursery to Your{" "}
          <span className={styles.grad}>Orchard</span>
        </h1>
     <p className={styles.subtitle}>
  <span className={styles.since}>Since 2014</span>, raising high-yield fruit,
  horticulture and sandalwood plants from superior mother stock in Saharanpur
  — delivered to your field with expert care.
</p>
      </div>

      <div
        className={styles.stage}
        onMouseEnter={stop}
        onMouseLeave={start}
      >
        <div className={styles.track}>
          {IMAGES.map((img, i) => {
            let pos = (i - current + total) % total;
            if (pos > Math.floor(total / 2)) pos -= total;
            const isCenter = pos === 0;
            const isAdj = Math.abs(pos) === 1;

            return (
              <div
                key={img.src}
                className={styles.card}
                style={{
                  transform: `translateX(${pos * 46}%) scale(${
                    isCenter ? 1 : isAdj ? 0.84 : 0.7
                  }) rotateY(${pos * -10}deg)`,
                  zIndex: isCenter ? 10 : isAdj ? 5 : 1,
                  opacity: isCenter ? 1 : isAdj ? 0.45 : 0,
                  filter: isCenter ? "blur(0)" : "blur(4px)",
                  visibility: Math.abs(pos) > 1 ? "hidden" : "visible",
                }}
              >
                <img src={img.src} alt={img.alt} className={styles.img} />
              </div>
            );
          })}
        </div>

        <button
          className={`${styles.arrow} ${styles.left}`}
          onClick={prev}
          aria-label="Previous"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          className={`${styles.arrow} ${styles.right}`}
          onClick={next}
          aria-label="Next"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className={styles.dots}>
        {IMAGES.map((img, i) => (
          <button
            key={img.src}
            className={`${styles.dot} ${i === current ? styles.dotOn : ""}`}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}