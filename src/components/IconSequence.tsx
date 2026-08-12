import React from "react";
import {
  Easing,
  interpolate,
  staticFile,
  useCurrentFrame,
} from "remotion";

type IconSequenceProps = {
  startFrame?: number;
};

type IconProps = {
  src: string;
  startFrame: number;
  left: number;
  top: number;
  size: number;
  rotation?: number;
};

const AnimatedIcon: React.FC<IconProps> = ({
  src,
  startFrame,
  left,
  top,
  size,
  rotation = 0,
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

  const scale = interpolate(
    progress,
    [0, 1],
    [0.82, 1],
  );

  return (
    <img
      src={src}
      style={{
        position: "absolute",

        left,
        top,

        width: size,
        height: size,

        objectFit: "contain",

        opacity,

        /*
         * Icons stay completely fixed.
         * ONLY the orbit dots rotate.
         */
        transform: `scale(${scale}) rotate(${rotation}deg)`,
        transformOrigin: "center center",

        pointerEvents: "none",

        zIndex: 10,
      }}
    />
  );
};

export const IconSequence: React.FC<IconSequenceProps> = ({
  startFrame = 96,
}) => {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,

        width: "100%",
        height: "100%",

        pointerEvents: "none",

        zIndex: 10,
      }}
    >
      {/* =====================================================
          GMAIL
          Appears when "Everything" starts
         ===================================================== */}

      <AnimatedIcon
        src={staticFile("/icons/Gmail.svg.webp")}
        startFrame={startFrame+4}
        left={420}
        top={300}
        size={48}
        rotation={6}
      />

      {/* =====================================================
          GOOGLE SHEETS
          Appears when "scattered" starts
         ===================================================== */}

      <AnimatedIcon
        src={staticFile("/icons/sheets.svg.png")}
        startFrame={startFrame + 10}
        left={685}
        top={140}
        size={52}
        rotation={1}
      />

      {/* =====================================================
          GOOGLE DRIVE
          Appears when "across" starts
         ===================================================== */}

      <AnimatedIcon
        src={staticFile("/icons/Drive.svg")}
        startFrame={startFrame + 24}
        left={380}
        top={125}
        size={88}
        rotation={5}
      />

      {/* =====================================================
          MICROSOFT TEAMS
          Appears when "across" has settled
         ===================================================== */}

      <AnimatedIcon
        src={staticFile("/icons/team.svg.png")}
        startFrame={startFrame + 34}
        left={595}
        top={240}
        size={110}
        rotation={5}
      />

      {/* =====================================================
          GOOGLE DOCS / FILE
          Appears when "different" has settled,
          immediately before "systems"
         ===================================================== */}

      <AnimatedIcon
        src={staticFile("/icons/file.png")}
        startFrame={startFrame + 48}
        left={500}
        top={58}
        size={46}
        rotation={0}
      />
    </div>
  );
};