"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Sprout, Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";

const NAV_ITEMS = [
  { name: "Home", link: "/" },
  { name: "About Us", link: "/about" },
  { name: "Service", link: "/service" },
  { name: "Infrastructure", link: "/infrastructure" },
  { name: "Product", link: "/product" },
//   { name: "Contact", link: "/contact" },
];

export default function Navbar() {
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (curr) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(curr > 20);
    if (curr < 80 || curr < prev) {
      setVisible(true); // at top OR scrolling up
    } else {
      setVisible(false); // scrolling down
      setOpen(false);
    }
  });

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: visible ? 0 : -110, opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.28, ease: "easeInOut" }}
      className={styles.wrap}
    >
      <nav className={`${styles.pill} ${scrolled ? styles.solid : ""}`}>
        <Link href="/" className={styles.brand} onClick={() => setOpen(false)}>
          <span className={styles.mark}>
            <Sprout size={18} strokeWidth={2.2} />
          </span>
          <span className={styles.brandText}>
            Radha&nbsp;Krishna
            <small>Bio Plantic</small>
          </span>
        </Link>

        <ul className={styles.links}>
          {NAV_ITEMS.map((item) => (
            <li key={item.link}>
              <Link
                href={item.link}
                className={`${styles.link} ${
                  pathname === item.link ? styles.active : ""
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/contact" className={styles.cta}>
          Enquire
        </Link>

        <button
          className={styles.burger}
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            {NAV_ITEMS.map((item) => (
              <li key={item.link}>
                <Link
                  href={item.link}
                  className={`${styles.mLink} ${
                    pathname === item.link ? styles.mActive : ""
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className={styles.mCta}
                onClick={() => setOpen(false)}
              >
                Enquire
              </Link>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  );
}