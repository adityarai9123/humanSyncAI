import React from "react";
import { AbsoluteFill } from "remotion";

export const Background: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        background:
          "linear-gradient(135deg, #faf4ff 0%, #f1d9ff 42%, #d477ff 100%)",
      }}
    >
      {/* Soft central glow */}
      <div
        style={{
          position: "absolute",
          left: "38%",
          top: "8%",
          width: 420,
          height: 420,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0) 70%)",
          filter: "blur(20px)",
        }}
      />

      {/* Lower soft highlight */}
      <div
        style={{
          position: "absolute",
          left: "-10%",
          bottom: "-35%",
          width: 520,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.32) 0%, rgba(255,255,255,0) 70%)",
          filter: "blur(25px)",
        }}
      />
    </AbsoluteFill>
  );
};