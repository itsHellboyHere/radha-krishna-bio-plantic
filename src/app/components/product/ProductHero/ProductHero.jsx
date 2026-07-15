import styles from "./ProductHero.module.css";

const STRIP = [
  "/products/guava.jpg",
  "/products/mango.jpg",
  "/products/lemon.jpg",
  "/products/pomegranate.jpg",
];

export default function ProductHero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.text}>
          <p className={styles.kicker}>Our Plants · हमारे पौधे</p>
          <h1 className={styles.title}>
            Fruit, horticulture <br />&amp; <em>sandalwood</em>
          </h1>
          <p className={styles.sub}>
            Every variety we raise comes from proven, high-yielding mother
            stock — chosen for farmers who want their land to actually pay
            back.
          </p>
          <p className={styles.subHi}>
            उन्नत मातृ पौधों से तैयार — भरोसेमंद किस्में, बेहतर पैदावार।
          </p>
        </div>

        <div className={styles.strip} aria-hidden="true">
          {STRIP.map((src, i) => (
            <span key={src} className={styles.chip} data-i={i}>
              <img src={src} alt="" loading="eager" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}