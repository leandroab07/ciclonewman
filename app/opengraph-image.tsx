import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Círculo Newman — Cor ad cor loquitur";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#4A1219",
          fontFamily: "Georgia, 'Times New Roman', serif",
          position: "relative",
        }}
      >
        {/* Radial glow */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse 80% 70% at 50% 50%, rgba(107,30,42,0.9) 0%, rgba(58,14,20,1) 100%)",
            display: "flex",
          }}
        />

        {/* Decorative top border */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 4,
            background:
              "linear-gradient(90deg, transparent, #C9A84C, transparent)",
            display: "flex",
          }}
        />
        {/* Decorative bottom border */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            background:
              "linear-gradient(90deg, transparent, #C9A84C, transparent)",
            display: "flex",
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 0,
            position: "relative",
            zIndex: 1,
            padding: "0 80px",
            textAlign: "center",
          }}
        >
          {/* Heart + Cross SVG */}
          <svg
            width="72"
            height="83"
            viewBox="0 0 40 46"
            fill="none"
            style={{ marginBottom: 24 }}
          >
            <path
              d="M20 42 C9 34 2 26 2 18 C2 10 10 6 20 12 C30 6 38 10 38 18 C38 26 31 34 20 42Z"
              fill="rgba(201,168,76,0.15)"
              stroke="#C9A84C"
              strokeWidth="1.4"
              strokeLinejoin="round"
            />
            <line
              x1="20" y1="2" x2="20" y2="36"
              stroke="white" strokeWidth="1.8" strokeLinecap="round"
            />
            <line
              x1="13" y1="9" x2="27" y2="9"
              stroke="white" strokeWidth="1.8" strokeLinecap="round"
            />
          </svg>

          {/* Left-right gold lines */}
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
            <div style={{ width: 80, height: 1, background: "rgba(201,168,76,0.5)" }} />
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#C9A84C" }} />
            <div style={{ width: 80, height: 1, background: "rgba(201,168,76,0.5)" }} />
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: 88,
              fontWeight: "bold",
              color: "white",
              lineHeight: 1.0,
              letterSpacing: "-1px",
              marginBottom: 16,
            }}
          >
            Círculo Newman
          </div>

          {/* Latin tagline */}
          <div
            style={{
              fontSize: 34,
              fontStyle: "italic",
              color: "#C9A84C",
              marginBottom: 12,
            }}
          >
            &ldquo;Cor ad cor loquitur&rdquo;
          </div>

          {/* Translation */}
          <div
            style={{
              fontSize: 20,
              color: "rgba(255,255,255,0.45)",
              letterSpacing: "0.25em",
              marginBottom: 32,
            }}
          >
            CORAÇÃO FALA AO CORAÇÃO
          </div>

          {/* Bottom ornament */}
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 20 }}>
            <div style={{ width: 50, height: 1, background: "rgba(201,168,76,0.35)" }} />
            <div style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(201,168,76,0.5)" }} />
            <div style={{ width: 50, height: 1, background: "rgba(201,168,76,0.35)" }} />
          </div>

          {/* URL */}
          <div
            style={{
              fontSize: 18,
              color: "rgba(255,255,255,0.3)",
              letterSpacing: "0.12em",
            }}
          >
            circulonewman.vercel.app
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
