import React from "react";
import {
  Easing,
  interpolate,
  useCurrentFrame,
} from "remotion";

type KineticWord = {
  text: string;
  color?: string;
};

type KineticTextProps = {
  words: KineticWord[];

  startFrame?: number;
  wordDelay?: number;
  duration?: number;

  fontSize?: number;
  fontWeight?: number;
  lineHeight?: number;
  letterSpacing?: number;

  gap?: number;

  blur?: boolean;

  /**
   * "word" = each word enters separately
   * "character" = every character enters separately
   */
  mode?: "word" | "character";

  characterDelay?: number;
};

export const KineticText: React.FC<KineticTextProps> = ({
  words,
  startFrame = 0,
  wordDelay = 5,
  duration = 8,

  fontSize = 24,
  fontWeight = 500,
  lineHeight = 1,
  letterSpacing = -0.5,

  gap = 5,

  blur = true,

  mode = "word",
  characterDelay = 1.2,
}) => {
  const frame = useCurrentFrame();

  if (mode === "character") {
    const fullText = words.map((word) => word.text).join(" ");

    return (
      <div
        style={{
          display: "flex",
          alignItems: "baseline",
          whiteSpace: "pre",
          fontFamily: "Inter, Arial, Helvetica, sans-serif",
          fontSize,
          fontWeight,
          lineHeight,
          letterSpacing,
        }}
      >
        {Array.from(fullText).map((character, index) => {
          const characterStart =
            startFrame + index * characterDelay;

          const progress = interpolate(
            frame,
            [characterStart, characterStart + duration],
            [0, 1],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.out(Easing.cubic),
            },
          );

          const y = interpolate(
            progress,
            [0, 1],
            [10, 0],
          );

          const opacity = interpolate(
            progress,
            [0, 0.5, 1],
            [0, 0.7, 1],
          );

          const blurAmount = blur
            ? interpolate(
                progress,
                [0, 1],
                [3, 0],
              )
            : 0;

          return (
            <span
              key={`${character}-${index}`}
              style={{
                display: "inline-block",
                color: "#333333",
                opacity,
                transform: `translate3d(0, ${y}px, 0)`,
                filter:
                  blurAmount > 0
                    ? `blur(${blurAmount}px)`
                    : "none",
                fontStyle: "italic",
              }}

            >
              {character}
            </span>
          );
        })}
      </div>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "baseline",
        gap,
        whiteSpace: "nowrap",
        fontFamily: "Inter, Arial, Helvetica, sans-serif",
        fontSize,
        fontWeight,
        lineHeight,
        letterSpacing,
      }}
    >
      {words.map((word, index) => {
        const wordStart =
          startFrame + index * wordDelay;

        const progress = interpolate(
          frame,
          [wordStart, wordStart + duration],
          [0, 1],
          {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          },
        );

        const y = interpolate(
          progress,
          [0, 1],
          [18, 0],
        );

        const opacity = interpolate(
          progress,
          [0, 0.65, 1],
          [0, 0.65, 1],
        );

        const scale = interpolate(
          progress,
          [0, 1],
          [0.96, 1],
        );

        const blurAmount = blur
          ? interpolate(
              progress,
              [0, 1],
              [4, 0],
            )
          : 0;

        return (
          <span
            key={`${word.text}-${index}`}
            style={{
              display: "inline-block",
              color: word.color ?? "#111111",
              opacity,
              transform:
                `translate3d(0, ${y}px, 0) ` +
                `scale(${scale})`,
              filter:
                blurAmount > 0
                  ? `blur(${blurAmount}px)`
                  : "none",
              transformOrigin: "left bottom",
            }}
          >
            {word.text}
          </span>
        );
      })}
    </div>
  );
};