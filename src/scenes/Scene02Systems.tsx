import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";

import { Background } from "../components/Background";
import { HumanSyncProps } from "../types";

type FloatingIconProps = {
  left: number;
  top: number;
  size: number;
  color: string;
  rotation?: number;
  startFrame: number;
};

const FloatingIcon: React.FC<FloatingIconProps> = ({
  left,
  top,
  size,
  color,
  rotation = 0,
  startFrame,
}) => {
  const frame = useCurrentFrame();

  const progress = interpolate(frame, [startFrame, startFrame + 18], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const opacity = progress;

  const scale = interpolate(progress, [0, 1], [0.5, 1]);

  const y = interpolate(progress, [0, 1], [25, 0]);

const float =
  frame >= startFrame
    ? Math.sin((frame - startFrame) / 15) * 3
    : 0;
  return (
    <div
      style={{
        position: "absolute",
        left,
        top,
        width: size,
        height: size,
        opacity,
        transform: `
          translateY(${y + float}px)
          rotate(${rotation}deg)
          scale(${scale})
        `,
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: size * 0.22,
          background: color,
          boxShadow: "0 10px 25px rgba(70, 30, 100, 0.15)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            width: size * 0.48,
            height: size * 0.48,
            borderRadius: "30%",
            background: "rgba(255,255,255,0.85)",
          }}
        />
      </div>
    </div>
  );
};

const CentralLogo: React.FC = () => {
  const frame = useCurrentFrame();

  const scale = interpolate(frame, [15, 35], [0.7, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const opacity = interpolate(frame, [15, 30], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <div
      style={{
        position: "absolute",
        left: 365,
        top: 90,
        width: 170,
        height: 170,
        borderRadius: "50%",
        opacity,
        transform: `scale(${scale})`,
        background:
          "radial-gradient(circle, #efd9ff 0%, #e5b7ff 55%, #d59cff 100%)",
        border: "2px solid rgba(255,255,255,0.8)",
        boxShadow: "0 20px 50px rgba(100, 40, 160, 0.18)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          width: 78,
          height: 55,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 4,
            top: 14,
            width: 30,
            height: 30,
            borderRadius: 10,
            background: "#6425d8",
            transform: "rotate(-15deg)",
          }}
        />

        <div
          style={{
            position: "absolute",
            right: 4,
            top: 14,
            width: 30,
            height: 30,
            borderRadius: 10,
            background: "#3477e8",
            transform: "rotate(15deg)",
          }}
        />

        <div
          style={{
            position: "absolute",
            left: 25,
            top: 27,
            width: 28,
            height: 10,
            borderRadius: 10,
            background: "#6425d8",
          }}
        />
      </div>
    </div>
  );
};

export const Scene02Systems: React.FC<{
  systems: HumanSyncProps["systems"];
}> = ({ systems }) => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 15], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const titleY = interpolate(frame, [0, 15], [20, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <AbsoluteFill>
      <Background />

      {/* Main text */}

      <div
        style={{
          position: "absolute",
          left: 42,
          top: 105,
          opacity: titleOpacity,
          transform: `translateY(${titleY}px)`,
          fontFamily: "Arial, Helvetica, sans-serif",
          fontSize: 36,
          fontWeight: 700,
          lineHeight: 1.05,
          color: "#111",
        }}
      >
        <div>{systems.title}</div>

        <div
          style={{
            color: "#4779e8",
          }}
        >
          {systems.highlightedLines[0]}
        </div>

        <div
          style={{
            color: "#4779e8",
          }}
        >
          {systems.highlightedLines[1]}
        </div>
      </div>

      {/* Category pills */}

      <div
        style={{
          position: "absolute",
          left: 42,
          top: 225,
          display: "flex",
          gap: 6,
          opacity: titleOpacity,
          transform: `translateY(${titleY}px)`,
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        {systems.tags.map((label) => (
          <div
            key={label}
            style={{
              padding: "4px 9px",
              borderRadius: 20,
              background: "rgba(255,255,255,0.65)",
              border: "1px solid rgba(130,90,160,0.12)",
              fontSize: 8,
              color: "#555",
              whiteSpace: "nowrap",
            }}
          >
            {label}
          </div>
        ))}
      </div>

      {/* Orbit rings */}

      <div
        style={{
          position: "absolute",
          left: 315,
          top: 40,
          width: 270,
          height: 270,
          border: "1px dashed rgba(90,60,130,0.25)",
          borderRadius: "50%",
          transform: `rotate(${frame * 0.08}deg)`,
        }}
      />

      <div
        style={{
          position: "absolute",
          left: 280,
          top: 5,
          width: 340,
          height: 340,
          border: "1px dashed rgba(90,60,130,0.16)",
          borderRadius: "50%",
          transform: `rotate(${-frame * 0.05}deg)`,
        }}
      />

      {/* Central HumanSync element */}

      <CentralLogo />

      {/* Scattered systems */}

      <FloatingIcon
        left={300}
        top={45}
        size={48}
        color="#3f83e8"
        rotation={-12}
        startFrame={25}
      />

      <FloatingIcon
        left={570}
        top={65}
        size={42}
        color="#f0bd45"
        rotation={12}
        startFrame={35}
      />

      <FloatingIcon
        left={585}
        top={245}
        size={52}
        color="#dd4c92"
        rotation={-8}
        startFrame={45}
      />

      <FloatingIcon
        left={270}
        top={285}
        size={45}
        color="#42a86b"
        rotation={15}
        startFrame={55}
      />

      <FloatingIcon
        left={625}
        top={175}
        size={38}
        color="#7556df"
        rotation={8}
        startFrame={65}
      />
    </AbsoluteFill>
  );
};
