import { Sprout, ShieldCheck, Truck, Headphones } from "lucide-react";
import styles from "./NurseryBand.module.css";

const FEATURES = [
  {
    icon: Sprout,
    title: "Superior Mother Stock",
    desc: "Every sapling is propagated from proven, high-yielding parent plants.",
  },
  {
    icon: ShieldCheck,
    title: "Nurtured at Every Stage",
    desc: "Carefully hardened for faster establishment and stronger growth.",
  },
  {
    icon: Truck,
    title: "Delivered to Your Field",
    desc: "Plants brought to your doorstep, healthy and ready to plant.",
  },
  {
    icon: Headphones,
    title: "Guidance On Call",
    desc: "Practical advice on planting, care and protection whenever you need it.",
  },
];

export default function NurseryBand() {
  return (
    <section className={styles.section}>
      <div className={styles.bg}>
        <img
        //   src="https://res.cloudinary.com/t3frjw0o/image/upload/f_auto,q_auto,w_1920/v1783749412/e89c4d5e-2603-40af-972e-1036f81eda13_xkocl4.jpg"
          src="https://res.cloudinary.com/t3frjw0o/image/upload/f_auto,q_50,w_1920/v1783760703/9f83a704-eb45-4d66-b87d-781866610b45_uhll0z.jpg"
          alt="Radha Krishna Bio Plantic nursery"
          className={styles.bgImg}
          loading="lazy"
        />
        <div className={styles.overlay} aria-hidden="true" />
      </div>

      <div className={styles.content}>
        <div className={styles.head}>
          <span className={styles.eyebrow}>Why Choose Us</span>
          <h2 className={styles.heading}>
            Why farmers trust <br /> our plants
          </h2>
          <p className={styles.sub}>
            From the first cutting to the day they reach your field, our plants
            are raised with the care that shows up in your harvest.
          </p>
        </div>

        <div className={styles.grid}>
          {FEATURES.map(({ icon: Icon, title, desc }) => (
            <div key={title} className={styles.card}>
              <span className={styles.icon}>
                <Icon size={22} strokeWidth={2.1} />
              </span>
              <h3 className={styles.cardTitle}>{title}</h3>
              <p className={styles.cardDesc}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}