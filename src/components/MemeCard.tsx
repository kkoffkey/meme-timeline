import type { Meme } from "@/data/memes";

type Props = {
  meme: Meme;
  above: boolean;
};

export default function MemeCard({ meme, above }: Props) {
  return (
    <a
      href={meme.kymUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "absolute",
        width: "180px",
        left: "-90px",
        ...(above
          ? { bottom: "calc(100% + 1.5rem)" }
          : { top: "calc(100% + 1.5rem)" }),
        textDecoration: "none",
        display: "block",
      }}
      className="meme-card-link"
    >
      {/* Connector line */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          width: "1px",
          backgroundColor: "rgba(241,107,58,0.5)",
          height: "1.5rem",
          ...(above ? { bottom: "-1.5rem" } : { top: "-1.5rem" }),
        }}
      />

      {/* Card */}
      <div
        className="meme-card"
        style={{
          backgroundColor: "#25314c",
          border: "1px solid rgba(241,107,58,0.2)",
          borderRadius: "0.75rem",
          overflow: "hidden",
          boxShadow: "0 4px 16px rgba(0,0,0,0.3)",
          transition: "border-color 0.2s, box-shadow 0.2s",
        }}
      >
        {/* Thumbnail */}
        <div
          style={{
            width: "100%",
            height: "100px",
            backgroundColor: "#172335",
            overflow: "hidden",
            position: "relative",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={meme.thumbnailUrl}
            alt={meme.name}
            loading="lazy"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              transition: "transform 0.4s",
            }}
            className="meme-thumb"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          {/* Gradient overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(23,35,53,0.7) 0%, transparent 60%)",
              pointerEvents: "none",
            }}
          />
        </div>

        {/* Text */}
        <div style={{ padding: "0.6rem 0.7rem 0.75rem" }}>
          <h3
            style={{
              color: "#ffffff",
              fontSize: "0.72rem",
              fontWeight: 600,
              margin: "0 0 0.3rem",
              lineHeight: 1.3,
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}
          >
            {meme.name}
          </h3>
          <p
            style={{
              color: "rgba(245,245,245,0.55)",
              fontSize: "0.62rem",
              margin: "0 0 0.4rem",
              lineHeight: 1.4,
              overflow: "hidden",
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
            }}
          >
            {meme.description}
          </p>
          <span
            style={{
              color: "#0693e3",
              fontSize: "0.6rem",
              fontWeight: 500,
            }}
            className="kym-link"
          >
            Know Your Meme ↗
          </span>
        </div>
      </div>
    </a>
  );
}
