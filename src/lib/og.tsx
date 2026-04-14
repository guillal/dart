import { ImageResponse } from "next/og";

interface OGParams {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  accent?: string;
}

export const OG_SIZE = { width: 1200, height: 630 };

export function generateOGImage({ eyebrow, title, subtitle, accent }: OGParams) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#000000",
          display: "flex",
          padding: "80px",
          position: "relative",
          fontFamily: "sans-serif",
        }}
      >
        {/* Grain-like gradient overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "4px",
            background: "linear-gradient(to right, transparent, #FFDE00, transparent)",
            display: "flex",
          }}
        />

        {/* Duck stamp — bottom right corner */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            right: "40px",
            width: "80px",
            height: "80px",
            backgroundColor: "#FFDE00",
            display: "flex",
          }}
        >
          {/* Body */}
          <div
            style={{
              position: "absolute",
              left: "20%",
              top: "40%",
              width: "76%",
              height: "44%",
              backgroundColor: "#000000",
              borderRadius: "50%",
              display: "flex",
            }}
          />
          {/* Head */}
          <div
            style={{
              position: "absolute",
              left: "18%",
              top: "20%",
              width: "40%",
              height: "40%",
              backgroundColor: "#000000",
              borderRadius: "50%",
              display: "flex",
            }}
          />
          {/* Beak */}
          <div
            style={{
              position: "absolute",
              left: "4%",
              top: "36%",
              width: "18%",
              height: "10%",
              backgroundColor: "#000000",
              borderRadius: "4px",
              display: "flex",
            }}
          />
          {/* Eye */}
          <div
            style={{
              position: "absolute",
              left: "40%",
              top: "32%",
              width: "6%",
              height: "6%",
              backgroundColor: "#FFDE00",
              borderRadius: "50%",
              display: "flex",
            }}
          />
        </div>

        {/* Big yellow accent number (right side, faded) */}
        {accent && (
          <div
            style={{
              position: "absolute",
              top: "40px",
              right: "80px",
              fontSize: 260,
              fontWeight: 700,
              color: "rgba(255, 222, 0, 0.12)",
              lineHeight: 1,
              letterSpacing: "-0.04em",
              display: "flex",
            }}
          >
            {accent}
          </div>
        )}

        {/* Main content (left, vertically centered-ish) */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            height: "100%",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Top: eyebrow */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            {eyebrow && (
              <div
                style={{
                  fontSize: 22,
                  color: "#FFDE00",
                  letterSpacing: "0.3em",
                  textTransform: "uppercase",
                  display: "flex",
                  alignItems: "center",
                  gap: 18,
                }}
              >
                <div style={{ width: 64, height: 2, backgroundColor: "#FFDE00", display: "flex" }} />
                <span>{eyebrow}</span>
              </div>
            )}
          </div>

          {/* Middle: title + subtitle */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24, maxWidth: "900px" }}>
            <div
              style={{
                fontSize: title.length > 40 ? 72 : 88,
                fontWeight: 700,
                color: "#FFFFFF",
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                display: "flex",
              }}
            >
              {title}
            </div>
            {subtitle && (
              <div
                style={{
                  fontSize: 32,
                  color: "#FFDE00",
                  fontStyle: "italic",
                  display: "flex",
                }}
              >
                {subtitle}
              </div>
            )}
          </div>

          {/* Bottom: branding */}
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <div
              style={{
                fontSize: 30,
                fontWeight: 700,
                color: "#FFFFFF",
                display: "flex",
                letterSpacing: "-0.02em",
              }}
            >
              <span style={{ color: "#FFDE00" }}>darc</span>
              <span>.barcelona</span>
            </div>
            <div
              style={{
                fontSize: 18,
                color: "#999999",
                display: "flex",
              }}
            >
              Màster en Direcció d&apos;Art i Comunicació · UAB
            </div>
          </div>
        </div>
      </div>
    ),
    OG_SIZE,
  );
}
