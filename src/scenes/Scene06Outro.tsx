import React from "react";
import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
} from "remotion";

import {Background} from "../components/Background";

export const Scene06Outro: React.FC = () => {
  const frame = useCurrentFrame();

  const progress = interpolate(
    frame,
    [0, 15],
    [0, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );

  const scale = interpolate(
    progress,
    [0, 1],
    [0.85, 1],
  );

  return (
    <AbsoluteFill>
      <Background />

      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          opacity: progress,
          transform: `scale(${scale})`,
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        {/* Logo */}

        <div
          style={{
            width: 65,
            height: 50,
            position: "relative",
            marginBottom: 15,
          }}
        >
          <div
            style={{
              position: "absolute",
              left: 10,
              top: 10,
              width: 30,
              height: 36,
              borderRadius: 12,
              background: "#6425d8",
              transform: "rotate(-12deg)",
            }}
          />

          <div
            style={{
              position: "absolute",
              right: 10,
              top: 10,
              width: 30,
              height: 36,
              borderRadius: 12,
              background: "#3477e8",
              transform: "rotate(12deg)",
            }}
          />

          <div
            style={{
              position: "absolute",
              left: 25,
              top: 28,
              width: 30,
              height: 10,
              borderRadius: 10,
              background: "#6425d8",
            }}
          />
        </div>

        {/* Brand */}

        <div
          style={{
            fontSize: 31,
            fontWeight: 700,
            letterSpacing: -1.5,
          }}
        >
          <span
            style={{
              color: "#c044d7",
            }}
          >
            Human
          </span>

          <span
            style={{
              color: "#3d6ee9",
            }}
          >
            Sync
          </span>

          <span
            style={{
              marginLeft: 8,
              color: "#4c36df",
            }}
          >
            AI
          </span>
        </div>
      </div>
    </AbsoluteFill>
  );
};