import styles from "./Story.module.css";

const FOUNDED = 2014;
const YEARS = new Date().getFullYear() - FOUNDED;

const BLOCKS = [
  {
    n: "01",
    title: "It starts with the mother plant",
    hi: "शुरुआत मातृ पौधे से",
    body: "Every sapling we raise traces back to proven, high-yielding parent stock. We don't shortcut this — because whatever the mother plant carries, your orchard inherits.",
  },
  {
    n: "02",
    title: `${YEARS} years of hands in the soil`,
    hi: `${FOUNDED} से लगातार`,
    body: `Since ${FOUNDED}, our nursery on Chilkana Road has raised plants long enough to know what Saharanpur soil asks for. That knowledge doesn't come from books — it comes from seasons.`,
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
                // src="https://res.cloudinary.com/t3frjw0o/image/upload/f_auto,q_auto,w_900,ar_3:4,c_fill/v1784085066/fe6ce7c1-59aa-4304-b402-14a7f1cbfd7a_t3rvoe.jpg"
                src="https://res.cloudinary.com/t3frjw0o/image/upload/f_auto,q_auto,w_900,ar_3:4,c_fill/v1784307347/Eucalyptus_t7dvff.jpg"
                alt="Radha Krishna Bio Plantic nursery, Saharanpur"
                className={styles.image}
                loading="lazy"
              />
              <span className={styles.estBadge}>
                Est.
                <strong>{FOUNDED}</strong>
              </span>
            </div>

            <p className={styles.caption}>
              Chilkana Road, Saharanpur
              <span>चिलकाना रोड, सहारनपुर</span>
            </p>

            <div className={styles.founder}>
              <span className={styles.founderRule} aria-hidden="true" />
              <div>
                <strong>Satpal Singh</strong>
                <small>Managing Director · प्रबंध निदेशक</small>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.textCol}>
          <p className={styles.lede}>
            Founded on 1 July {FOUNDED}, we're a family-run nursery raising
            fruit and timber plants — the kind farmers come back for, season
            after season.
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