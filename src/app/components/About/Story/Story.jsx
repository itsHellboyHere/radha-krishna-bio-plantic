import styles from "./Story.module.css";

const BLOCKS = [
  {
    n: "01",
    title: "It starts with the mother plant",
    hi: "शुरुआत मातृ पौधे से",
    body: "Every sapling we raise traces back to proven, high-yielding parent stock. We don't shortcut this — because whatever the mother plant carries, your orchard inherits.",
  },
  {
    n: "02",
    title: "Years of hands in the soil",
    hi: "वर्षों का अनुभव",
    body: "Our nursery on Chilkana Road has been raising plants long enough to know what Saharanpur soil asks for. That knowledge doesn't come from books — it comes from seasons.",
  },
  {
    n: "03",
    title: "Cared for until they're ready",
    hi: "जब तक तैयार न हों",
    body: "Saplings are hardened, watched and handled with care right up to the day they leave. We'd rather hold a plant back than send one that isn't ready for your field.",
  },
];

export default function Story() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.imageCol}>
          <div className={styles.sticky}>
            <div className={styles.frame}>
              <img
                src="https://res.cloudinary.com/t3frjw0o/image/upload/f_auto,q_auto,w_900,ar_3:4,c_fill/v1784085066/fe6ce7c1-59aa-4304-b402-14a7f1cbfd7a_t3rvoe.jpg"
                alt="Radha Krishna Bio Plantic nursery, Saharanpur"
                className={styles.image}
                loading="lazy"
              />
            </div>
            <p className={styles.caption}>
              Chilkana Road, Saharanpur
              <span>चिलकाना रोड, सहारनपुर</span>
            </p>
          </div>
        </div>

        <div className={styles.textCol}>
          <p className={styles.lede}>
            We're a family-run nursery raising fruit, horticulture and
            sandalwood plants — the kind farmers come back for, season after
            season.
          </p>
          <p className={styles.ledeHi}>
            एक भरोसेमंद नर्सरी — जहाँ हर पौधा मेहनत से तैयार होता है।
          </p>

          <div className={styles.blocks}>
            {BLOCKS.map((b) => (
              <article key={b.n} className={styles.block}>
                <span className={styles.num}>{b.n}</span>
                <div>
                  <h3 className={styles.blockTitle}>
                    {b.title}
                    <span className={styles.blockHi}>{b.hi}</span>
                  </h3>
                  <p className={styles.blockBody}>{b.body}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}