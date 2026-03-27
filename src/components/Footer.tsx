export default function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#172335",
        borderTop: "1px solid rgba(241,107,58,0.2)",
        marginTop: "auto",
      }}
    >
      {/* Dedication banner */}
      <div
        style={{
          background:
            "linear-gradient(135deg, #172335 0%, #25314c 50%, #172335 100%)",
          padding: "2rem 1.5rem",
          textAlign: "center",
        }}
      >
        {/* Top accent line */}
        <div
          style={{
            width: "4rem",
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, #f16b3a, transparent)",
            margin: "0 auto 1rem",
          }}
        />

        <p
          style={{
            color: "#f5f5f5",
            fontSize: "1.1rem",
            fontWeight: 500,
            letterSpacing: "0.05em",
            margin: 0,
          }}
        >
          Dedicated to{" "}
          <span style={{ color: "#f16b3a", fontWeight: 700 }}>Mike Todd.</span>
        </p>

        {/* Bottom accent line */}
        <div
          style={{
            width: "4rem",
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, #f16b3a, transparent)",
            margin: "1rem auto 0",
          }}
        />
      </div>

      {/* Sub-footer */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.05)",
          padding: "0.75rem 1.5rem",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "rgba(245,245,245,0.3)",
            fontSize: "0.7rem",
            margin: 0,
            letterSpacing: "0.05em",
          }}
        >
          Internet Meme Timeline · 2005–2008 · Built with Next.js
        </p>
      </div>
    </footer>
  );
}
