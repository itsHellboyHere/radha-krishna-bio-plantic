import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import styles from "./ProductGrid.module.css";

const PRODUCTS = [
  {
    n: "01",
    name: "Guava",
    hi: "अमरूद",
    img: "/products/guava.jpg",
    body: "A dependable, fast-bearing choice. Our guava stock is raised for sweet, heavy fruiting and holds up well across Saharanpur's soil and seasons.",
    points: ["Early bearing", "Sweet pale-green fruit", "Hardy in local soil"],
  },
  {
    n: "02",
    name: "Mosambi",
    hi: "मौसंबी",
    img: "/products/mosambi.jpg",
    body: "Sweet lime that rewards patient farming. Propagated from high-yielding mother plants for consistent juice content and strong market demand.",
    points: ["High juice content", "Steady market demand", "Long productive life"],
  },
  {
    n: "03",
    name: "Kagzi Lemon",
    hi: "कागज़ी नींबू",
    img: "/products/lemon.jpg",
    body: "Thin-skinned, seedless and a heavy bearer. One of the most reliable returns for farmers looking at citrus for the first time.",
    points: ["Seedless variety", "Thin skin, high yield", "Year-round demand"],
  },
  {
    n: "04",
    name: "Sandalwood",
    hi: "चंदन",
    img: "/products/sandalwood.jpg",
    body: "A long-term investment in your land. Chandan takes patience, but few crops match its value at maturity. We'll guide you on spacing and host plants.",
    points: ["Long-term value", "Low ongoing input", "Guidance included"],
  },
  {
    n: "05",
    name: "Mango",
    hi: "आम",
    img: "/products/mango.jpg",
    body: "Orchard-grade fruiting stock from proven parent trees — for farmers building an orchard meant to last generations.",
    points: ["Grafted from proven stock", "Rich golden fruit", "Generational crop"],
  },
  {
    n: "06",
    name: "Pomegranate",
    hi: "अनार",
    img: "/products/pomegranate.jpg",
    body: "Ruby-red anar with strong yields and excellent shelf life. Suits farmers wanting good returns without a decade-long wait.",
    points: ["Rich yielding", "Good shelf life", "Quick returns"],
  },
];

export default function ProductGrid() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {PRODUCTS.map((p, i) => (
          <article
            key={p.name}
            className={`${styles.row} ${i % 2 ? styles.flip : ""}`}
          >
            <div className={styles.imgWrap}>
              <img src={p.img} alt={p.name} className={styles.img} loading="lazy" />
              <span className={styles.num}>{p.n}</span>
            </div>

            <div className={styles.body}>
              <h2 className={styles.name}>
                {p.name}
                <span className={styles.nameHi}>{p.hi}</span>
              </h2>
              <p className={styles.desc}>{p.body}</p>

              <ul className={styles.points}>
                {p.points.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>

              <Link href="/contact" className={styles.link}>
                Enquire about {p.name}
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}