import { ImageResponse } from "next/og";
export const alt = "Damilola Oseyemi — Build with purpose. Grow with strategy.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "#101114",
        color: "white",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        padding: 80,
        justifyContent: "center",
      }}
    >
      <div style={{ fontSize: 22, color: "#a1a1aa", marginBottom: 40 }}>
        DAMILOLA OSEYEMI / DIGITAL SOLUTIONS
      </div>
      <div style={{ fontSize: 76, fontWeight: 800 }}>Build with purpose.</div>
      <div style={{ fontSize: 76, fontWeight: 800, color: "#a3e635" }}>
        Grow with strategy.
      </div>
      <div style={{ fontSize: 22, color: "#a1a1aa", marginTop: 40 }}>
        WEB DEVELOPMENT · AI AUTOMATION · CONTENT STRATEGY
      </div>
    </div>,
    size,
  );
}
