import {
  Sprout,
  Truck,
  RefreshCw,
  PhoneCall,
  Tractor,
  Recycle,
} from "lucide-react";
import styles from "./Services.module.css";

const SERVICES = [
  {
    icon: Sprout,
    title: "Technical Advisory",
    hi: "तकनीकी सलाह",
    desc: "Guidance on planting methods, management practices and plant protection for better establishment and growth.",
  },
  {
    icon: Truck,
    title: "Doorstep Delivery",
    hi: "खेत तक डिलीवरी",
    desc: "Healthy plants delivered directly to your field, ready to plant on arrival.",
  },
  {
    icon: RefreshCw,
    title: "Replacement Support",
    hi: "पौधा बदलने की सुविधा",
    desc: "Help with replacing plants that don't establish, so your orchard stays on track.",
  },
  {
    icon: PhoneCall,
    title: "Telephonic Guidance",
    hi: "फ़ोन पर सलाह",
    desc: "Reach our team on call to resolve your queries whenever you need answers.",
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
    desc: "Support on organic manures and bio-inputs for healthier soil and sustainable farming.",
  },
];

export default function Services() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <span className={styles.eyebrow}>What We Offer</span>
          <h2 className={styles.heading}>
            Support that goes{" "}
            <span className={styles.grad}>beyond the sale</span>
          </h2>
          <p className={styles.hindiLead}>
            पौधा देने के बाद भी हम आपके साथ — हर मौसम में।
          </p>
          <p className={styles.sub}>
            From the day you plant to every season after, our team stays with
            you — so your investment grows into a thriving, productive orchard.
          </p>
        </div>

        <div className={styles.grid}>
          {SERVICES.map(({ icon: Icon, title, hi, desc }) => (
            <div key={title} className={styles.card}>
              <span className={styles.icon}>
                <Icon size={22} strokeWidth={2.1} />
              </span>
              <h3 className={styles.cardTitle}>
                {title}
                <span className={styles.cardTitleHi}>{hi}</span>
              </h3>
              <p className={styles.cardDesc}>{desc}</p>
              <span className={styles.corner} aria-hidden="true" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}