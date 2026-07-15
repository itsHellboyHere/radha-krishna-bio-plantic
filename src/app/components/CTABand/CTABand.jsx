import { Phone, MessageCircle } from "lucide-react";
import styles from "./CTABand.module.css";

const PHONE_TEL = "+917976986709";
const WA = "https://wa.me/917976986709";

export default function CTABand() {
  return (
    <section className={styles.section}>
      <div className={styles.band}>
        <div className={styles.glow} aria-hidden="true" />

        <div className={styles.content}>
          <span className={styles.eyebrow}>Get In Touch</span>
          <h2 className={styles.heading}>
            Ready to grow a <span className={styles.grad}>better orchard?</span>
          </h2>
          <p className={styles.hindiLead}>
            अपने खेत के लिए सही पौधे चुनें — हमारी टीम आपकी मदद करेगी।
          </p>
          <p className={styles.copy}>
            Talk to our team about the right varieties and quantities for your
            land — we're just a call away.
          </p>

          <div className={styles.actions}>
            <a href={`tel:${PHONE_TEL}`} className={styles.primary}>
              <Phone size={18} strokeWidth={2.2} />
              Call · कॉल करें
            </a>
            <a
              href={WA}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.secondary}
            >
              <MessageCircle size={18} strokeWidth={2.2} />
              WhatsApp · व्हाट्सएप
            </a>
          </div>

          <p className={styles.phoneLine}>{"+91 79769 86709"}</p>
        </div>
      </div>
    </section>
  );
}