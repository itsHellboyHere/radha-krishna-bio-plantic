import styles from "./Values.module.css";

const VALUES = [
  {
    n: "01",
    en: "Quality over quantity",
    hi: "मात्रा नहीं, गुणवत्ता",
    body: "We'd rather send fewer plants than send weak ones.",
  },
  {
    n: "02",
    en: "The farmer comes first",
    hi: "किसान पहले",
    body: "Your yield is the only proof of our work that matters.",
  },
  {
    n: "03",
    en: "Honest guidance",
    hi: "सच्ची सलाह",
    body: "If a variety won't suit your land, we'll tell you so.",
  },
  {
    n: "04",
    en: "Clean, responsible growing",
    hi: "जैविक और सुरक्षित",
    body: "No hazardous waste, no shortcuts — healthy soil, healthy plants.",
  },
];

export default function Values() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.heading}>
          What we <span className={styles.grad}>stand on</span>
          <span className={styles.headingHi}>हमारे मूल्य</span>
        </h2>

        <ul className={styles.list}>
          {VALUES.map((v) => (
            <li key={v.n} className={styles.row}>
              <span className={styles.num}>{v.n}</span>
              <div className={styles.rowMain}>
                <h3 className={styles.rowTitle}>{v.en}</h3>
                <span className={styles.rowHi}>{v.hi}</span>
              </div>
              <p className={styles.rowBody}>{v.body}</p>
              <span className={styles.fill} aria-hidden="true" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}