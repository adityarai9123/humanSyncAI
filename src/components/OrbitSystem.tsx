import React from "react";
import { interpolate, useCurrentFrame } from "remotion";
import { HumanSyncLogo } from "./HumanSyncLogo";

type OrbitSystemProps = {
  startFrame?: number;
};

const OrbitDot: React.FC<{
  radius: number;
  angle: number;
  size?: number;
  color?: string;
}> = ({ radius, angle, size = 7, color = "#20bfe8" }) => {
  const x = Math.cos(angle) * radius;
  const y = Math.sin(angle) * radius;

  return (
    <div
      style={{
        position: "absolute",

        left: "50%",
        top: "50%",

        width: size,
        height: size,

        marginLeft: -size / 2,
        marginTop: -size / 2,

        borderRadius: "50%",

        background: color,

        transform: `translate(${x}px, ${y}px)`,

        boxShadow: `0 0 10px ${color}`,
      }}
    />
  );
};

export const OrbitSystem: React.FC<OrbitSystemProps> = ({
  startFrame = 96,
}) => {
  const frame = useCurrentFrame();

  /*
   * Orbit entrance
   */
  const enterProgress = interpolate(
    frame,
    [startFrame, startFrame + 30],
    [0, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );

  const opacity = enterProgress;

  const scale = interpolate(enterProgress, [0, 1], [0.78, 1]);

  /*
   * Slight movement from the right.
   */
  const translateX = interpolate(enterProgress, [0, 1], [55, 0]);

  /*
   * IMPORTANT:
   *
   * The orbit itself is tilted in perspective.
   *
   * We do NOT use a simple rotate().
   *
   * scaleX() compresses the horizontal depth slightly,
   * while rotateY() gives the right side a subtle
   * "going backwards" perspective.
   */

  /*
   * Keep the orbit slightly further RIGHT
   * than the current version.
   */
  const centerX = 545;
  const centerY = 210;

  const orbitSize = 360;

  /*
   * Dots rotate.
   *
   * Icons themselves do NOT rotate.
   */
  const rotation = (frame - startFrame) * 0.012;

  return (
    <div
      style={{
        position: "absolute",

        left: centerX + translateX,
        top: centerY,

        width: orbitSize,
        height: orbitSize,

        marginLeft: -orbitSize / 2,
        marginTop: -orbitSize / 2,

        opacity,

        transform: `
      perspective(1200px)
      rotateX(17deg)
      rotateY(-20deg)
      rotateZ(5deg)
      scale(${scale})
    `,

        transformOrigin: "center center",

        transformStyle: "preserve-3d",

        /*
         * Allows the glow/ring to remain visible.
         */
        overflow: "visible",
      }}
    >
      {/* =====================================================
          OUTER ORBIT
         ===================================================== */}

      <div
        style={{
          position: "absolute",

          inset: 5,

          borderRadius: "50%",

          border: "2px dashed rgba(18, 12, 28, 0.17)",
        }}
      />

      {/* =====================================================
          INNER ORBIT
         ===================================================== */}

      <div
        style={{
          position: "absolute",

          inset: 38,

          borderRadius: "50%",

          border: "1.5px dashed rgba(25, 15, 41, 0.55)",
        }}
      />

      {/* =====================================================
          COLOURED PADDING / GLOW AROUND HUMAN SYNC CIRCLE
         ===================================================== */}

      {/* Subtle circular coloured padding/rim */}
      <div
        style={{
          position: "absolute",

          left: "50%",
          top: "50%",

          width: 227,
          height: 220,

          marginLeft: -112,
          marginTop: -117,

          borderRadius: "50%",

          background: "rgba(226, 151, 239, 0.12)",

          border: "4px solid rgb(190, 5, 252)",

          boxShadow: "0 0 10px rgba(181, 62, 221, 0.85)",

          zIndex: 1,
        }}
      />

      {/* =====================================================
          CENTRAL HUMAN SYNC CIRCLE
         ===================================================== */}

      <div
        style={{
          position: "absolute",

          left: "50%",
          top: "50%",

          width: 222,
          height: 219,

          marginLeft: -110,
          marginTop: -114,

          borderRadius: "50%",

          background:
            "radial-gradient(circle at 40% 35%, rgba(255,220,255,0.96), rgba(233, 193, 240, 0.8))",

          /*
           * White inner edge + purple coloured edge.
           */
          border: "4px solid rgb(255, 255, 255)",

          boxShadow:
            "0 0 0 2px rgba(195, 82, 235, 0.16), 0 0 10px rgba(255,255,255,0.90), 0 0 18px rgba(153,65,235,0.28)",

          zIndex: 2,

          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* HumanSync logo — DOES NOT ROTATE */}

        <div
          style={{
            width: 105,
            height: 70,

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            zIndex: 3,
          }}
        >
          <HumanSyncLogo size={105} />
        </div>
      </div>

      {/* =====================================================
          ROTATING DOT SYSTEM
          
          ONLY THIS LAYER ROTATES.
          Icons are intentionally NOT inside this layer.
         ===================================================== */}

      <div
        style={{
          position: "absolute",

          inset: 0,

          transform: `rotate(${rotation}rad)`,

          zIndex: 5,

          pointerEvents: "none",
        }}
      >
        <OrbitDot radius={175} angle={0} />

        <OrbitDot radius={175} angle={Math.PI * 0.52} color="#25cce8" />

        <OrbitDot radius={175} angle={Math.PI} color="#279ce8" />

        <OrbitDot radius={137} angle={Math.PI * 0.25} color="#319de9" />

        <OrbitDot radius={137} angle={Math.PI * 1.25} color="#20c7e8" />
      </div>
    </div>
  );
};
