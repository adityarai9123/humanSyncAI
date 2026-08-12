import React, { ReactNode } from "react";
import { interpolate, useCurrentFrame } from "remotion";

type GlassCardProps = {
  children: ReactNode;
  startFrame: number;
  left: number;
  top: number;
  width: number;
  height: number;
  rotate?: number;
  delay?: number;
  perspective?: number;
};

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  startFrame,
  left,
  top,
  width,
  height,
  rotate = 0,
  delay = 0,
  perspective = 900,
}) => {
  const frame = useCurrentFrame();

  const animationStart = startFrame + delay;

  // Card entrance animation
  const progress = interpolate(
    frame,
    [animationStart, animationStart + 18],
    [0, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );

  const opacity = progress;

  const translateY = interpolate(
    progress,
    [0, 1],
    [35, 0],
  );

  const scale = interpolate(
    progress,
    [0, 1],
    [0.92, 1],
  );

  // Subtle floating motion after the card has entered
  const activeFrame = Math.max(
    0,
    frame - animationStart,
  );

  const floatY =
    progress >= 1
      ? Math.sin(activeFrame / 20) * 2
      : 0;

  return (
    <div
      style={{
        position: "absolute",

        left,
        top,

        width,
        height,

        opacity,

        transform: `
          perspective(${perspective}px)
          translateY(${translateY + floatY}px)
          rotateY(-30deg)
          rotateZ(${rotate}deg)
          scale(${scale})
        `,

        transformOrigin: "left center",

        borderRadius: 18,

        /*
         * Reference uses a very light lavender/pink
         * glass surface rather than pure white.
         */
        background:
          "rgba(232, 217, 245, 0.88)",

        border:
          "1px solid rgba(255, 255, 255, 0.64)",

        boxShadow: `
          0 20px 38px rgba(97, 88, 106, 0.45),
          0 6px 14px rgba(84, 45, 130, 0.12)
        `,

        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",

        overflow: "hidden",

        boxSizing: "border-box",

        fontFamily:
          "Arial, Helvetica, sans-serif",
      }}
    >
      {children}
    </div>
  );
};