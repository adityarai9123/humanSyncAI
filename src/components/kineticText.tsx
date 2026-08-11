import React from "react";
import {
  interpolate,
  useCurrentFrame,
  Easing,
} from "remotion";

type KineticTextProps = {
  words: string[];
  startFrame?: number;
  wordDelay?: number;

  fontSize?: number;
  fontWeight?: number;
  color?: string;

  lineHeight?: number;
  letterSpacing?: number;

  italic?: boolean;

  stagger?: number;
};

export const KineticText: React.FC<KineticTextProps> = ({
  words,
  startFrame = 0,
  wordDelay = 5,

  fontSize = 40,
  fontWeight = 500,
  color = "#111",

  lineHeight = 1,
  letterSpacing = -1,

  italic = false,

  stagger = 8,
}) => {
  const frame = useCurrentFrame();

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 8,

        fontFamily:
          "Inter, Arial, Helvetica, sans-serif",

        fontSize,
        fontWeight,
        color,

        lineHeight,
        letterSpacing,

        fontStyle: italic
          ? "italic"
          : "normal",
      }}
    >
      {words.map((word, index) => {
        const wordStart =
          startFrame + index * wordDelay;

        const progress = interpolate(
          frame,
          [wordStart, wordStart + stagger],
          [0, 1],
          {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",

            easing: Easing.out(
              Easing.cubic,
            ),
          },
        );

        const y = interpolate(
          progress,
          [0, 1],
          [18, 0],
        );

        const scale = interpolate(
          progress,
          [0, 1],
          [0.94, 1],
        );

        return (
          <span
            key={`${word}-${index}`}
            style={{
              display: "inline-block",

              opacity: progress,

              transform:
                `translateY(${y}px) ` +
                `scale(${scale})`,

              transformOrigin:
                "center bottom",
            }}
          >
            {word}
          </span>
        );
      })}
    </div>
  );
};