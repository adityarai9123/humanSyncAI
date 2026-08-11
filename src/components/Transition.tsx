import React from "react";
import {AbsoluteFill, interpolate} from "remotion";

type TransitionProps = {
  frame: number;
  center: number;
  duration?: number;
};

export const Transition: React.FC<TransitionProps> = ({
  frame,
  center,
  duration = 24,
}) => {
  const half = duration / 2;

  const opacity = interpolate(
    frame,
    [
      center - half,
      center,
      center + half,
    ],
    [0, 0.55, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );

  const scale = interpolate(
    frame,
    [
      center - half,
      center,
      center + half,
    ],
    [1, 1.06, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );

  return (
    <AbsoluteFill
      style={{
        pointerEvents: "none",
        opacity,
        transform: `scale(${scale})`,
        background: `
          radial-gradient(
            circle at 50% 50%,
            rgba(255,255,255,0.95) 0%,
            rgba(239,210,255,0.75) 35%,
            rgba(205,150,255,0.25) 65%,
            rgba(255,255,255,0) 100%
          )
        `,
      }}
    />
  );
};