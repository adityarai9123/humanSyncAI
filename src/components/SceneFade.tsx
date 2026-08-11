import React from "react";
import {AbsoluteFill, interpolate, useCurrentFrame} from "remotion";

type SceneFadeProps = {
  children: React.ReactNode;
  duration?: number;
  fadeIn?: boolean;
  fadeOut?: boolean;
};

export const SceneFade: React.FC<SceneFadeProps> = ({
  children,
  duration = 8,
  fadeIn = true,
  fadeOut = true,
}) => {
  const frame = useCurrentFrame();

  // We use the duration of the current Sequence.
  // The parent Sequence provides the exact scene length.
  //
  // Fade-in:
  const fadeInOpacity = fadeIn
    ? interpolate(
        frame,
        [0, duration],
        [0, 1],
        {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
        },
      )
    : 1;

  return (
    <AbsoluteFill
      style={{
        opacity: fadeInOpacity,
      }}
    >
      {children}
    </AbsoluteFill>
  );
};