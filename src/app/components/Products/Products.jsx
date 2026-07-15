"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import styles from "./Products.module.css";

const PRODUCTS = [
  {
    name: "Guava",
    hi: "अमरूद",
    tag: "Sweet, high-yield pale-green variety",
    img: "/products/guava.jpg",
  },
  {
    name: "Mosambi",
    hi: "मौसंबी",
    tag: "Juicy sweet lime for strong returns",
    img: "/products/mosambi.jpg",
  },
  {
    name: "Kagzi Lemon",
    hi: "कागज़ी नींबू",
    tag: "Thin-skinned, seedless, heavy bearing",
    img: "/products/lemon.jpg",
  },
  {
    name: "Sandalwood",
    hi: "चंदन",
    tag: "Premium chandan for long-term value",
    img: "/products/sandalwood.jpg",
  },
  {
    name: "Mango",
    hi: "आम",
    tag: "Golden, orchard-grade fruiting stock",
    img: "/products/mango.jpg",
  },
  {
    name: "Pomegranate",
    hi: "अनार",
    tag: "Ruby-red anar, rich yielding",
    img: "/products/pomegranate.jpg",
  },
];

export default function Products() {
  const trackRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const drag = useRef({ active: false, startX: 0, startLeft: 0, moved: false });

  const updateProgress = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    setProgress(max > 0 ? el.scrollLeft / max : 0);
    setAtStart(el.scrollLeft <= 2);
    setAtEnd(el.scrollLeft >= max - 2);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateProgress();
    el.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      el.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, [updateProgress]);

  const scrollByCard = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector(`.${styles.card}`);
    const step = card ? card.offsetWidth + 20 : 320;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  // mouse-only drag (touch devices use native scroll)
  const onPointerDown = (e) => {
    if (e.pointerType !== "mouse") return;
    const el = trackRef.current;
    if (!el) return;
    drag.current = {
      active: true,
      startX: e.clientX,
      startLeft: el.scrollLeft,
      moved: false,
    };
  };

  const onPointerMove = (e) => {
    if (!drag.current.active) return;
    const el = trackRef.current;
    const dx = e.clientX - drag.current.startX;
    if (Math.abs(dx) > 5) drag.current.moved = true;
    if (drag.current.moved) {
      e.preventDefault();
      el.scrollLeft = drag.current.startLeft - dx;
    }
  };

  const endDrag = () => {
    drag.current.active = false;
  };

  // block navigation only if the pointer actually dragged
  const guardClick = (e) => {
    if (drag.current.moved) {
      e.preventDefault();
    }
    drag.current.moved = false;
  };

  return (
    <section className={styles.section}>
      <div className={styles.head}>
        <div>
          <span className={styles.eyebrow}>Our Plants</span>
          <h2 className={styles.heading}>
            Grown to <span className={styles.grad}>bear more</span>
          </h2>
          <p className={styles.hindiLead}>
            स्वस्थ पौधे — बेहतर पैदावार के लिए
          </p>
          <p className={styles.sub}>
            A selection of our fruit, horticulture and sandalwood plants —
            raised from superior mother stock for healthy, high-yielding
            orchards.
          </p>
        </div>

        <div className={styles.arrows}>
          <button
            className={styles.arrow}
            onClick={() => scrollByCard(-1)}
            disabled={atStart}
            aria-label="Previous"
          >
            <ArrowLeft size={18} />
          </button>
          <button
            className={styles.arrow}
            onClick={() => scrollByCard(1)}
            disabled={atEnd}
            aria-label="Next"
          >
            <ArrowRight size={18} />
          </button>
        </div>
      </div>

      <div
        className={styles.track}
        ref={trackRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        onPointerCancel={endDrag}
      >
        {PRODUCTS.map((p) => (
          <Link
            key={p.name}
            href="/contact"
            className={styles.card}
            onClick={guardClick}
            onDragStart={(e) => e.preventDefault()}
            draggable={false}
          >
            <div className={styles.imgWrap}>
              <img
                src={p.img}
                alt={p.name}
                className={styles.img}
                draggable={false}
                loading="lazy"
              />
              <div className={styles.shade} aria-hidden="true" />
            </div>

            <div className={styles.info}>
              <div className={styles.textBlock}>
                <h3 className={styles.name}>
                  {p.name}
                  <span className={styles.nameHi}>{p.hi}</span>
                </h3>
                <p className={styles.tag}>{p.tag}</p>
              </div>
              <span className={styles.enquire}>
                Enquire <ArrowUpRight size={15} />
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className={styles.progress}>
        <div className={styles.progressTrack}>
          <div
            className={styles.progressThumb}
            style={{ left: `calc(${progress} * (100% - 64px))` }}
          />
        </div>
      </div>
    </section>
  );
}