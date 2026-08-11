import React from "react";
import { interpolate, useCurrentFrame } from "remotion";

type AnimatedTextProps = {
  text: string;
  startFrame: number;
  fontSize: number;
  color?: string;
  fontWeight?: number;
  italic?: boolean;
  top: number;
  left: number;
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  startFrame,
  fontSize,
  color = "#111111",
  fontWeight = 500,
  italic = false,
  top,
  left,
}) => {
  const frame = useCurrentFrame();

  const opacity = interpolate(
    frame,
    [startFrame, startFrame + 12],
    [0, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );

  const translateY = interpolate(
    frame,
    [startFrame, startFrame + 12],
    [20, 0],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );

  return (
    <div
      style={{
        position: "absolute",
        left,
        top,
        fontFamily: "Arial, Helvetica, sans-serif",
        fontSize,
        fontWeight,
        fontStyle: italic ? "italic" : "normal",
        color,
        opacity,
        transform: `translateY(${translateY}px)`,
        whiteSpace: "nowrap",
      }}
    >
      {text}
    </div>
  );
};