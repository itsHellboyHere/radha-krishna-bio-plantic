import { Award, Truck, Leaf, PhoneCall } from "lucide-react";
import styles from "./TrustStrip.module.css";

const FOUNDED = 2014;
const YEARS = new Date().getFullYear() - FOUNDED;

const ITEMS = [
  {
    icon: Award,
    title: `Since ${FOUNDED}`,
    sub: `${YEARS}+ years of trusted nursery work`,
  },
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