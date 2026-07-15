"use client";

import { useState } from "react";
import { Phone, MessageCircle, MapPin, ArrowUpRight } from "lucide-react";
import styles from "./CTA.module.css";

const PHONE_DISPLAY = "+91 97196 76828";
const PHONE_TEL = "+919719676828";
const WA_NUMBER = "919719676828";

export default function CTA() {
  const [form, setForm] = useState({ name: "", phone: "", plant: "" });

  const update = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const sendWhatsApp = (e) => {
    e.preventDefault();
    const msg = `नमस्ते Radha Krishna Bio Plantic,%0A%0Aनाम: ${
      form.name || "-"
    }%0Aमोबाइल: ${form.phone || "-"}%0Aपौधे: ${
      form.plant || "-"
    }%0A%0Aकृपया जानकारी भेजें।`;
    window.open(`https://wa.me/${WA_NUMBER}?text=${msg}`, "_blank");
  };

  return (
    <section className={styles.section}>
      <div className={styles.card}>
        <div className={styles.glow} aria-hidden="true" />

        <div className={styles.left}>
          <span className={styles.eyebrow}>Get In Touch</span>
          <h2 className={styles.heading}>
            Ready to grow a <br />
            <span className={styles.grad}>better orchard?</span>
          </h2>
          <p className={styles.hindiLead}>
            अपने खेत के लिए सही पौधे चुनें — हमारी टीम आपकी मदद करेगी।
          </p>
          <p className={styles.copy}>
            Tell us what you'd like to plant and our team will help you choose
            the right varieties, quantities and care plan for your land.
          </p>

          <div className={styles.contacts}>
            <a href={`tel:${PHONE_TEL}`} className={styles.contactRow}>
              <span className={styles.cIcon}>
                <Phone size={18} strokeWidth={2.2} />
              </span>
              <div>
                <small>Call us · कॉल करें</small>
                <strong>{PHONE_DISPLAY}</strong>
              </div>
            </a>

            <a
              href={`https://wa.me/${WA_NUMBER}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactRow}
            >
              <span className={styles.cIcon}>
                <MessageCircle size={18} strokeWidth={2.2} />
              </span>
              <div>
                <small>WhatsApp · व्हाट्सएप</small>
                <strong>Chat with us</strong>
              </div>
            </a>

            <div className={styles.contactRow}>
              <span className={styles.cIcon}>
                <MapPin size={18} strokeWidth={2.2} />
              </span>
              <div>
                <small>Visit us · पता</small>
                <strong>Chilkana Road, Saharanpur – 247001, U.P.</strong>
              </div>
            </div>
          </div>
        </div>

        <form className={styles.form} onSubmit={sendWhatsApp}>
          <h3 className={styles.formTitle}>
            Send an enquiry
            <span className={styles.formTitleHi}>जानकारी के लिए भेजें</span>
          </h3>

          <label className={styles.field}>
            <span>
              Your name <em>आपका नाम</em>
            </span>
            <input
              name="name"
              value={form.name}
              onChange={update}
              placeholder="जैसे: नरेश कुमार"
              required
            />
          </label>

          <label className={styles.field}>
            <span>
              Phone number <em>मोबाइल नंबर</em>
            </span>
            <input
              name="phone"
              type="tel"
              value={form.phone}
              onChange={update}
              placeholder="जैसे: 98xxxxxxxx"
              required
            />
          </label>

          <label className={styles.field}>
            <span>
              Plants you're interested in <em>कौन से पौधे चाहिए</em>
            </span>
            <input
              name="plant"
              value={form.plant}
              onChange={update}
              placeholder="जैसे: अमरूद, आम, चंदन"
            />
          </label>

          <button type="submit" className={styles.submit}>
            Send on WhatsApp
            <ArrowUpRight size={17} />
          </button>
          <p className={styles.formNote}>
            आपकी जानकारी के साथ व्हाट्सएप खुलेगा — बस भेज दें।
          </p>
        </form>
      </div>
    </section>
  );
}