export const metadata = {
  title: "Radha Krishna Bio Plantic | Coming Soon",
  description:
    "Radha Krishna Bio Plantic — quality bio & tissue-culture plants. Chilkana Road, Saharanpur, U.P. Website launching soon.",
};

export default function Home() {
  const phone = "+91 79769 86709";
  const phoneTel = "+917976986709";
  const whatsapp = "https://wa.me/917976986709";

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "24px",
        fontFamily: "system-ui, sans-serif",
      }}
    >
      <p style={{ fontSize: "13px", letterSpacing: "2px", opacity: 0.6 }}>
        WEBSITE UNDER CONSTRUCTION
      </p>

      <h1 style={{ fontSize: "34px", margin: "12px 0 4px", fontWeight: 800 }}>
        RADHA KRISHNA BIO PLANTIC
      </h1>
      <p style={{ fontSize: "15px", opacity: 0.75, margin: 0 }}>
        Bio &amp; Tissue-Culture Plants
      </p>

      <div style={{ marginTop: "28px", lineHeight: 1.9, fontSize: "15px" }}>
        <div><strong>Naresh Kumar</strong></div>
        <div>Chilkana Road, Saharanpur &ndash; 247001, U.P.</div>
        <div>
          <a href={`tel:${phoneTel}`}>{phone}</a>
        </div>
      </div>

      <div style={{ marginTop: "24px", display: "flex", gap: "12px" }}>
        <a
          href={`tel:${phoneTel}`}
          style={{ padding: "10px 18px", border: "1px solid #333", borderRadius: "8px", textDecoration: "none", color: "inherit" }}
        >
          Call
        </a>
        <a
          href={whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          style={{ padding: "10px 18px", border: "1px solid #333", borderRadius: "8px", textDecoration: "none", color: "inherit" }}
        >
          WhatsApp
        </a>
      </div>

      <p style={{ marginTop: "40px", fontSize: "12px", opacity: 0.4 }}>
        Alpha preview &middot; Built by CreatorMonk
      </p>
    </main>
  );
}