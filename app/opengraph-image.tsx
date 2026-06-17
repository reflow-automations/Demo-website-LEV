import { ImageResponse } from "next/og";

/**
 * Site-wide default Open Graph / Twitter card (1200x630), generated on the fly.
 * Brand colours from globals.css: paper #F6F0E5, ink #2D1F14, cobalt #155F7D.
 * Satori only supports flexbox + a CSS subset (no grid); every multi-child
 * container sets display:flex.
 */

export const alt =
  "Digital Concepts Factory — digitale innovatie voor HR, Inkoop en Marketing";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          backgroundColor: "#F6F0E5",
          color: "#2D1F14",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              width: "44px",
              height: "44px",
              borderRadius: "10px",
              backgroundColor: "#155F7D",
            }}
          />
          <div
            style={{
              display: "flex",
              fontSize: "24px",
              letterSpacing: "6px",
              textTransform: "uppercase",
              color: "#8A7660",
            }}
          >
            Digital Concepts Factory
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: "70px",
            fontWeight: 600,
            lineHeight: 1.05,
            letterSpacing: "-2px",
            maxWidth: "940px",
          }}
        >
          Grip op groei begint met digitale innovatie.
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <div
            style={{
              display: "flex",
              width: "120px",
              height: "4px",
              backgroundColor: "#155F7D",
            }}
          />
          <div style={{ display: "flex", fontSize: "27px", color: "#155F7D" }}>
            De brug tussen traditionele organisaties en de digitale toekomst
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
