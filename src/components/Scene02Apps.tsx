import React from "react";
import { interpolate, Easing, useCurrentFrame } from "remotion";

type AppProps = {
  startFrame: number;
  left: number;
  top: number;
  size: number;
  children: React.ReactNode;
};

const AppIcon: React.FC<AppProps> = ({
  startFrame,
  left,
  top,
  size,
  children,
}) => {
  const frame = useCurrentFrame();

  const progress = interpolate(
    frame,
    [startFrame, startFrame + 12],
    [0, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
      easing: Easing.out(Easing.cubic),
    }
  );

  const opacity = progress;

  const scale = interpolate(
    progress,
    [0, 1],
    [0.75, 1]
  );

  const y = interpolate(
    progress,
    [0, 1],
    [18, 0]
  );

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
          translateY(${y}px)
          scale(${scale})
        `,

        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        zIndex: 10,
      }}
    >
      {children}
    </div>
  );
};

export const Scene02Apps: React.FC<{
  startFrame?: number;
}> = ({ startFrame = 125 }) => {
  return (
    <>
      {/* Gmail */}
      <AppIcon
        startFrame={startFrame}
        left={285}
        top={265}
        size={48}
      >
        <div
          style={{
            fontSize: 42,
            fontWeight: 700,
            color: "#EA4335",
          }}
        >
          M
        </div>
      </AppIcon>

      {/* Google Drive */}
      <AppIcon
        startFrame={startFrame + 12}
        left={300}
        top={65}
        size={48}
      >
        <div
          style={{
            width: 0,
            height: 0,
            borderLeft: "24px solid transparent",
            borderRight: "24px solid transparent",
            borderBottom: "42px solid #34A853",
          }}
        />
      </AppIcon>

      {/* Google Sheets */}
      <AppIcon
        startFrame={startFrame + 24}
        left={570}
        top={75}
        size={45}
      >
        <div
          style={{
            width: 38,
            height: 44,
            borderRadius: 4,
            background: "#34A853",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontWeight: 700,
            fontSize: 20,
          }}
        >
          ▦
        </div>
      </AppIcon>

      {/* Microsoft Teams */}
      <AppIcon
        startFrame={startFrame + 36}
        left={585}
        top={220}
        size={52}
      >
        <div
          style={{
            width: 44,
            height: 44,
            borderRadius: 8,
            background: "#6264A7",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 700,
            fontSize: 24,
          }}
        >
          T
        </div>
      </AppIcon>

      {/* Folder */}
      <AppIcon
        startFrame={startFrame + 48}
        left={420}
        top={25}
        size={45}
      >
        <div
          style={{
            width: 42,
            height: 30,
            borderRadius: 5,
            border: "3px solid #6B5BE7",
            background: "rgba(255,255,255,0.15)",
          }}
        />
      </AppIcon>
    </>
  );
};