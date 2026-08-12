import React from "react";
import { AbsoluteFill } from "remotion";

export const Background: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        background:
          "linear-gradient(90deg, #faf4ff 0%, #f7ebfd 20%, #f1dcfc 35%, #e9c7fb 50%, #e1b1fa 65%, #d99cf9 80%, #d28bf8 95%, #c978e8 100%)",
      }}
    >
      {/* Soft central glow */}
      <div
        style={{
          position: "absolute",
          left: "34%",
          top: "5%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0) 70%)",
          filter: "blur(25px)",
        }}
      />
      {/* Lower soft highlight */}
      <div
        style={{
          position: "absolute",
          left: "-12%",
          bottom: "-30%",
          width: 560,
          height: 420,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.30) 0%, rgba(255,255,255,0) 70%)",
          filter: "blur(30px)",
        }}
      />
    </AbsoluteFill>
  );
};
