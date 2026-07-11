import { Truck, Leaf, PhoneCall, BadgeCheck } from "lucide-react";
import styles from "./TrustStrip.module.css";

const ITEMS = [
  {
    icon: Truck,
    title: "Doorstep Delivery",
    sub: "Plants delivered straight to your field",
  },
  {
    icon: Leaf,
    title: "Replacement Support",
    sub: "We help if plants don't establish",
  },
  {
    icon: PhoneCall,
    title: "On-Call Guidance",
    sub: "Expert advice whenever you need it",
  },
  {
    icon: BadgeCheck,
    title: "Superior Mother Stock",
    sub: "Raised from high-yielding parent plants",
  },
];

export default function TrustStrip() {
  return (
    <section className={styles.section}>
      <div className={styles.strip}>
        {ITEMS.map(({ icon: Icon, title, sub }) => (
          <div key={title} className={styles.item}>
            <span className={styles.icon}>
              <Icon size={20} strokeWidth={2.1} />
            </span>
            <div className={styles.text}>
              <h3 className={styles.title}>{title}</h3>
              <p className={styles.sub}>{sub}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}