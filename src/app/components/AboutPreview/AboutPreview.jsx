import Link from "next/link";
import { ArrowRight, Check, MapPin } from "lucide-react";
import styles from "./AboutPreview.module.css";

const POINTS = [
  "Genetically superior, high-yield varieties",
  "Nurtured for faster establishment & stronger growth",
];

export default function AboutPreview() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.left}>
          <span className={styles.eyebrow}>About Us</span>
          <h2 className={styles.heading}>
            Rooted in Saharanpur, grown for{" "}
            <span className={styles.grad}>better harvests</span>
          </h2>
          <p className={styles.copy}>
            Radha Krishna Bio Plantic raises fruit, horticulture and
            sandalwood plants at our Saharanpur nursery — propagated from
            high-yielding mother stock and cared for at every stage. Our
            saplings are built to establish faster, grow stronger and deliver
            dependable returns for the farmers who trust us.
          </p>

          <ul className={styles.points}>
            {POINTS.map((p) => (
              <li key={p} className={styles.point}>
                <span className={styles.check}>
                  <Check size={14} strokeWidth={3} />
                </span>
                {p}
              </li>
            ))}
          </ul>

          <Link href="/about" className={styles.cta}>
            Read Our Story
            <ArrowRight size={17} />
          </Link>
        </div>

        <div className={styles.right}>
          <div className={styles.glow} aria-hidden="true" />
          <div className={styles.imageCard}>
            <img
              src="https://res.cloudinary.com/t3frjw0o/image/upload/f_auto,q_auto,w_800,ar_4:5,c_fill/v1783749412/af3e92c5-6727-4615-b107-3677ef6faaee_ufpoda.jpg"
              alt="Healthy saplings at Radha Krishna Bio Plantic nursery"
              className={styles.image}
              loading="lazy"
            />
            <div className={styles.badge}>
              <MapPin size={15} strokeWidth={2.4} />
              Chilkana Road, Saharanpur
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}