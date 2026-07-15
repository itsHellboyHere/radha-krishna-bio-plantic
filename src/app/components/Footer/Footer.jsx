import Link from "next/link";
import { Sprout, Phone, MapPin } from "lucide-react";
import styles from "./Footer.module.css";

const LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Service", href: "/service" },
//   { name: "Infrastructure", href: "/infrastructure" },
  { name: "Product", href: "/product" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brandCol}>
          <div className={styles.brand}>
            <span className={styles.mark}>
              <Sprout size={20} strokeWidth={2.2} />
            </span>
            <span className={styles.brandText}>
              Radha Krishna
              <small>Bio Plantic</small>
            </span>
          </div>
          <p className={styles.tagline}>
            Fruit, horticulture and sandalwood plants raised from superior
            mother stock in Saharanpur — grown for healthier, higher-yielding
            orchards.
          </p>
        </div>

        <div className={styles.linksCol}>
          <h4>Quick Links</h4>
          <ul>
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.contactCol}>
          <h4>Contact</h4>
          <a href="tel:+919719676828" className={styles.cRow}>
            <Phone size={16} strokeWidth={2.2} />
            +91 97196 76828
          </a>
          <div className={styles.cRow}>
            <MapPin size={16} strokeWidth={2.2} />
            Chilkana Road, Saharanpur – 247001, U.P.
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>
          © {new Date().getFullYear()} Radha Krishna Bio Plantic. All rights
          reserved.
        </p>
        <p className={styles.credit}>
          Crafted by{" "}
          <a href="https://creatormonk.in" target="_blank" rel="noopener noreferrer">
            CreatorMonk
          </a>
        </p>
      </div>
    </footer>
  );
}