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
}) => {
  const frame = useCurrentFrame();

  const animationStart = startFrame + delay;

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

  const translateY = interpolate(progress, [0, 1], [35, 0]);

  const scale = interpolate(progress, [0, 1], [0.92, 1]);

  // Very subtle floating motion after the card has entered.
  const activeFrame = Math.max(0, frame - animationStart);

  const floatY = progress >= 1 ? Math.sin(activeFrame / 20) * 2 : 0;

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
          perspective(1000px)
          translate3d(0, ${translateY + floatY}px, 0)
          rotate(${rotate}deg)
          scale(${scale})
        `,

        borderRadius: 18,

        background: "rgba(255, 255, 255, 0.72)",

        border: "1px solid rgba(255, 255, 255, 0.75)",

        boxShadow: `
          0 18px 45px rgba(70, 35, 110, 0.16),
          0 4px 12px rgba(70, 35, 110, 0.08)
        `,

        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",

        overflow: "hidden",

        boxSizing: "border-box",

        fontFamily: "Arial, Helvetica, sans-serif",
      }}
    >
      {children}
    </div>
  );
};
