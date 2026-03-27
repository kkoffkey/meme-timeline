"use client";

import { useRef, useEffect, useState } from "react";
import { MEMES, generateMonthMarkers } from "@/data/memes";
import MemeCard from "./MemeCard";

const MONTH_WIDTH = 220; // px per month column
const LEFT_PAD = 120; // px left padding before first month

function getLeftPx(year: number, month: number): number {
  const index = (year - 2005) * 12 + (month - 1);
  return LEFT_PAD + index * MONTH_WIDTH;
}

export default function Timeline() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeYear, setActiveYear] = useState(2005);
  const markers = generateMonthMarkers();

  // Track active year from scroll position
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onScroll = () => {
      const scrollX = el.scrollLeft;
      const raw =
        2005 +
        Math.floor(
          (scrollX - LEFT_PAD + (MONTH_WIDTH * 6)) / (12 * MONTH_WIDTH)
        );
      setActiveYear(Math.max(2005, Math.min(2008, raw)));
    };

    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  function scrollToYear(year: number) {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTo({
      left: getLeftPx(year, 1) - LEFT_PAD,
      behavior: "smooth",
    });
  }

  const totalWidth = LEFT_PAD + 48 * MONTH_WIDTH + LEFT_PAD;

  // Build meme positions, handling multiple memes in the same month
  const monthCounter: Record<string, number> = {};
  const positionedMemes = MEMES.map((meme) => {
    const key = `${meme.year}-${meme.month}`;
    const idx = monthCounter[key] ?? 0;
    monthCounter[key] = idx + 1;
    const leftPx = getLeftPx(meme.year, meme.month) + idx * 60;
    const above = idx % 2 === 0;
    return { meme, leftPx, above };
  });

  return (
    <section style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
      {/* Year navigation */}
      <div
        style={{
          backgroundColor: "rgba(23,35,53,0.95)",
          backdropFilter: "blur(8px)",
          borderBottom: "1px solid rgba(241,107,58,0.15)",
          padding: "0.6rem 1.5rem",
          display: "flex",
          gap: "0.5rem",
          alignItems: "center",
          position: "sticky",
          top: 0,
          zIndex: 40,
          flexWrap: "wrap",
        }}
      >
        <span
          style={{
            color: "rgba(245,245,245,0.4)",
            fontSize: "0.7rem",
            fontWeight: 500,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginRight: "0.5rem",
          }}
        >
          Jump to year:
        </span>
        {[2005, 2006, 2007, 2008].map((yr) => (
          <button
            key={yr}
            onClick={() => scrollToYear(yr)}
            style={{
              padding: "0.25rem 0.85rem",
              borderRadius: "9999px",
              border: "none",
              cursor: "pointer",
              fontSize: "0.8rem",
              fontWeight: 600,
              fontFamily: "inherit",
              transition: "all 0.2s",
              backgroundColor: activeYear === yr ? "#f16b3a" : "rgba(37,49,76,0.8)",
              color: activeYear === yr ? "#ffffff" : "rgba(245,245,245,0.55)",
              boxShadow: activeYear === yr ? "0 2px 8px rgba(241,107,58,0.4)" : "none",
            }}
          >
            {yr}
          </button>
        ))}
      </div>

      {/* Horizontal scroll container */}
      <div
        ref={scrollRef}
        className="scrollbar-timeline"
        style={{
          overflowX: "auto",
          overflowY: "hidden",
          height: "580px",
          flex: "none",
        }}
      >
        <div
          style={{
            position: "relative",
            width: `${totalWidth}px`,
            height: "100%",
          }}
        >
          {/* Timeline spine */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
              left: `${LEFT_PAD}px`,
              width: `${48 * MONTH_WIDTH}px`,
              height: "2px",
              background:
                "linear-gradient(90deg, rgba(37,49,76,0) 0%, rgba(241,107,58,0.3) 10%, rgba(241,107,58,0.3) 90%, rgba(37,49,76,0) 100%)",
            }}
          />

          {/* Month markers */}
          {markers.map((marker) => {
            const leftPx = getLeftPx(marker.year, marker.month);
            const isJan = marker.month === 1;
            return (
              <div
                key={marker.label}
                style={{
                  position: "absolute",
                  top: "50%",
                  left: `${leftPx}px`,
                  transform: "translateX(-50%)",
                }}
              >
                {/* Tick */}
                <div
                  style={{
                    position: "absolute",
                    left: 0,
                    transform: "translateX(-50%) translateY(-50%)",
                    width: isJan ? "2px" : "1px",
                    height: isJan ? "20px" : "10px",
                    backgroundColor: isJan
                      ? "#f16b3a"
                      : "rgba(245,245,245,0.2)",
                  }}
                />
                {/* Label */}
                <div
                  style={{
                    position: "absolute",
                    top: isJan ? "14px" : "8px",
                    left: 0,
                    transform: "translateX(-50%)",
                    whiteSpace: "nowrap",
                    fontSize: isJan ? "0.75rem" : "0.6rem",
                    fontWeight: isJan ? 600 : 400,
                    color: isJan
                      ? "#f16b3a"
                      : "rgba(245,245,245,0.3)",
                  }}
                >
                  {isJan ? `${marker.year}` : marker.shortLabel}
                </div>
              </div>
            );
          })}

          {/* Meme cards */}
          {positionedMemes.map(({ meme, leftPx, above }) => (
            <div
              key={meme.id}
              style={{
                position: "absolute",
                top: "50%",
                left: `${leftPx}px`,
                transform: "translateY(-50%)",
              }}
            >
              {/* Dot on spine */}
              <div
                style={{
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  backgroundColor: "#f16b3a",
                  border: "2px solid #172335",
                  position: "absolute",
                  top: "50%",
                  left: 0,
                  transform: "translate(-50%, -50%)",
                  boxShadow: "0 0 6px rgba(241,107,58,0.5)",
                  zIndex: 2,
                }}
              />
              <MemeCard meme={meme} above={above} />
            </div>
          ))}
        </div>
      </div>

      {/* Hint text */}
      <div
        style={{
          textAlign: "center",
          padding: "0.5rem",
          color: "rgba(245,245,245,0.25)",
          fontSize: "0.65rem",
          letterSpacing: "0.05em",
        }}
      >
        ← Scroll to explore the timeline →
      </div>
    </section>
  );
}
