import {
  Sprout,
  Truck,
  RefreshCw,
  PhoneCall,
  Tractor,
  Recycle,
} from "lucide-react";
import styles from "./ServiceList.module.css";

const SERVICES = [
  {
    icon: Sprout,
    title: "Technical Advisory",
    hi: "तकनीकी सलाह",
    desc: "Guidance on planting methods, spacing, management practices and plant protection — so your saplings establish well and grow strong from the first season.",
    span: "wide",
    feature: true,
  },
  {
    icon: Truck,
    title: "Doorstep Delivery",
    hi: "खेत तक डिलीवरी",
    desc: "Plants brought directly to your field, handled carefully in transit and ready to plant on arrival.",
  },
  {
    icon: RefreshCw,
    title: "Replacement Support",
    hi: "पौधा बदलने की सुविधा",
    desc: "If plants don't establish, we help you replace them — so your orchard stays on track.",
  },
  {
    icon: PhoneCall,
    title: "Guidance On Call",
    hi: "फ़ोन पर सलाह",
    desc: "Reach our team any time with questions about care, disease or seasonal work. No appointment needed.",
    span: "tall",
  },
  {
    icon: Tractor,
    title: "On-Farm Demonstrations",
    hi: "खेत पर प्रदर्शन",
    desc: "Practical field guidance on correct usage, dosage and crop stages for higher yields.",
  },
  {
    icon: Recycle,
    title: "Organic Farming Guidance",
    hi: "जैविक खेती की जानकारी",
    desc: "Support on organic manures and bio-inputs — for healthier soil and sustainable farming.",
  },
];

export default function ServiceList() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <h2 className={styles.heading}>
            Everything after the <span className={styles.grad}>handshake</span>
          </h2>
          <p className={styles.headHi}>
            पौधा देने के बाद भी हम आपके साथ खड़े हैं।
          </p>
        </div>

        <div className={styles.bento}>
          {SERVICES.map(({ icon: Icon, title, hi, desc, span, feature }) => (
            <article
              key={title}
              className={[
                styles.tile,
                span === "wide" ? styles.wide : "",
                span === "tall" ? styles.tall : "",
                feature ? styles.feature : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              <span className={styles.icon}>
                <Icon size={20} strokeWidth={2.1} />
              </span>

              <div className={styles.tileText}>
                <h3 className={styles.tileTitle}>{title}</h3>
                <span className={styles.tileHi}>{hi}</span>
                <p className={styles.tileDesc}>{desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}