import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "#FFDE00",
          display: "flex",
          position: "relative",
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
    ),
    size,
  );
}
