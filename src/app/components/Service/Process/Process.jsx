import styles from "./Process.module.css";

const STEPS = [
  {
    n: "01",
    title: "You tell us your land",
    hi: "अपनी ज़मीन बताइए",
    body: "Call or WhatsApp us with your location, soil type and what you're hoping to grow. We'll tell you honestly what will work.",
  },
  {
    n: "02",
    title: "We plan the varieties",
    hi: "किस्में तय करते हैं",
    body: "Our team suggests the right varieties and quantities — matched to your soil, water and the returns you're after.",
  },
  {
    n: "03",
    title: "Plants reach your field",
    hi: "पौधे खेत तक पहुँचते हैं",
    body: "We deliver the saplings to your doorstep, handled with care so they arrive healthy and ready for the soil.",
  },
  {
    n: "04",
    title: "We stay on call",
    hi: "हम साथ रहते हैं",
    body: "Planting doubts, disease, seasonal care — reach us any time. Our support doesn't end at delivery.",
  },
];

export default function Process() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <p className={styles.kicker}>How it works · कैसे काम करता है</p>
          <h2 className={styles.heading}>
            Four steps, <em>no confusion</em>
          </h2>
        </div>

        <ol className={styles.steps}>
          {STEPS.map((s) => (
            <li key={s.n} className={styles.step}>
              <div className={styles.marker}>
                <span className={styles.dot} />
                <span className={styles.line} aria-hidden="true" />
              </div>

              <div className={styles.stepBody}>
                <span className={styles.stepNum}>{s.n}</span>
                <h3 className={styles.stepTitle}>{s.title}</h3>
                <span className={styles.stepHi}>{s.hi}</span>
                <p className={styles.stepText}>{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}