import React from "react";
import {
  Easing,
  interpolate,
  useCurrentFrame,
} from "remotion";

type AnimatedWordProps = {
  text: string;
  startFrame: number;
  color: string;
  fontSize?: number;
  fontWeight?: number;
};

const AnimatedWord: React.FC<AnimatedWordProps> = ({
  text,
  startFrame,
  color,
  fontSize = 35,
  fontWeight = 700,
}) => {
  const frame = useCurrentFrame();

  const progress = interpolate(
    frame,
    [startFrame, startFrame + 10],
    [0, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.out(Easing.cubic),
    },
  );

  const opacity = progress;

  const y = interpolate(
    progress,
    [0, 1],
    [14, 0],
  );

  const blur = interpolate(
    progress,
    [0, 1],
    [4, 0],
  );

  const scale = interpolate(
    progress,
    [0, 1],
    [0.97, 1],
  );

  return (
    <span
      style={{
        display: "inline-block",

        marginRight: 8,

        opacity,

        color,
        fontSize,
        fontWeight,

        lineHeight: 1.05,

        transform: `
          translateY(${y}px)
          scale(${scale})
        `,

        filter: `blur(${blur}px)`,
      }}
    >
      {text}
    </span>
  );
};

export const Scene02Headline: React.FC = () => {
  return (
    <div
      style={{
        position: "absolute",

        left: 48,
        top: 105,

        width: 430,

        zIndex: 20,

        fontFamily:
          "Arial, Helvetica, sans-serif",
      }}
    >
      {/* Everything — same moment as orbit */}
      <div
        style={{
          height: 39,
          whiteSpace: "nowrap",
        }}
      >
        <AnimatedWord
          text="Everything"
          startFrame={96}
          color="#111111"
          fontSize={35}
          fontWeight={700}
        />
      </div>

      {/* scattered → across */}
      <div
        style={{
          height: 39,
          whiteSpace: "nowrap",
        }}
      >
        <AnimatedWord
          text="scattered"
          startFrame={106}
          color="#4779E8"
          fontSize={35}
          fontWeight={700}
        />

        <AnimatedWord
          text="across"
          startFrame={120}
          color="#4779E8"
          fontSize={35}
          fontWeight={700}
        />
      </div>

      {/* different → systems */}
      <div
        style={{
          height: 39,
          whiteSpace: "nowrap",
        }}
      >
        <AnimatedWord
          text="different"
          startFrame={134}
          color="#4779E8"
          fontSize={35}
          fontWeight={700}
        />

        <AnimatedWord
          text="systems"
          startFrame={148}
          color="#4779E8"
          fontSize={35}
          fontWeight={700}
        />
      </div>
    </div>
  );
};