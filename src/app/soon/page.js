export const metadata = {
  title: "Radha Krishna Bio Plantic",
  robots: { index: false, follow: false },
};

export default function Soon() {
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
        gap: "10px",
      }}
    >
      <p style={{ fontSize: 12, letterSpacing: "2px", opacity: 0.5 }}>
        LAUNCHING SOON
      </p>
      <h1 style={{ fontSize: "clamp(1.8rem,4vw,2.6rem)", fontWeight: 700 }}>
        Radha Krishna Bio Plantic
      </h1>
      <p style={{ color: "var(--text-muted)" }}>
        फलदार एवं चंदन के पौधे · सहारनपुर
      </p>
      <a
        href="tel:+919719676828"
        style={{
          marginTop: 20,
          padding: "12px 24px",
          borderRadius: 999,
          color: "#fff",
          background: "var(--gradient-brand)",
          fontWeight: 600,
        }}
      >
        +91 97196 76828
      </a>
    </main>
  );
}