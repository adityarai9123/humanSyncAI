import React from "react";

type LogoProps = {
  size?: number;
};

export const Logo: React.FC<LogoProps> = ({ size = 34 }) => {
  return (
    <div
      style={{
        position: "absolute",
        left: 42,
        top: 22,
        width: size,
        height: size,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          position: "relative",
          width: size * 0.72,
          height: size * 0.72,
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 0,
            top: size * 0.2,
            width: size * 0.32,
            height: size * 0.32,
            borderRadius: "45% 55% 55% 45%",
            background: "#6d28d9",
          }}
        />

        <div
          style={{
            position: "absolute",
            right: 0,
            top: size * 0.2,
            width: size * 0.32,
            height: size * 0.32,
            borderRadius: "55% 45% 45% 55%",
            background: "#2563eb",
          }}
        />

        <div
          style={{
            position: "absolute",
            left: "25%",
            top: "38%",
            width: "50%",
            height: size * 0.14,
            borderRadius: 10,
            background: "#6d28d9",
          }}
        />
      </div>
    </div>
  );
};