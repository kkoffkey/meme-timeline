export default function Header() {
  return (
    <header
      style={{
        backgroundColor: "#172335",
        borderBottom: "1px solid rgba(241,107,58,0.2)",
        padding: "1.5rem 1.5rem 1.25rem",
        textAlign: "center",
        position: "sticky",
        top: 0,
        zIndex: 50,
        boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
      }}
    >
      {/* Gradient accent line */}
      <div
        style={{
          width: "6rem",
          height: "3px",
          borderRadius: "9999px",
          background: "linear-gradient(90deg, #f16b3a, #0693e3)",
          margin: "0 auto 1rem",
        }}
      />
      <h1
        style={{
          color: "#ffffff",
          fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
          fontWeight: 700,
          margin: 0,
          letterSpacing: "-0.02em",
          lineHeight: 1.2,
        }}
      >
        Internet Meme Timeline
      </h1>
      <p
        style={{
          color: "#f16b3a",
          fontSize: "0.8rem",
          fontWeight: 500,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          marginTop: "0.4rem",
          marginBottom: 0,
        }}
      >
        2005 – 2008 · The Golden Age of Internet Culture
      </p>
    </header>
  );
}
