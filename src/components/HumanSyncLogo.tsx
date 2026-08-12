import React from "react";

type HumanSyncLogoProps = {
  size?: number;
};

export const HumanSyncLogo: React.FC<HumanSyncLogoProps> = ({
  size = 48,
}) => {
  const height = size * 0.72;

  return (
    <svg
      width={size}
      height={height}
      viewBox="0 0 110 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="humanSyncGradient"
          x1="15"
          y1="20"
          x2="95"
          y2="65"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#6425D8" />
          <stop offset="0.5" stopColor="#7139E8" />
          <stop offset="1" stopColor="#3477E8" />
        </linearGradient>
      </defs>

      {/* LEFT HEAD */}
      <circle
        cx="28"
        cy="12"
        r="10"
        fill="#6425D8"
      />

      {/* RIGHT HEAD */}
      <circle
        cx="82"
        cy="12"
        r="10"
        fill="#3477E8"
      />

      {/* MAIN HUMAN-SYNC MARK */}
      <path
        d="
          M 16 42
          C 16 34, 22 29, 29 29
          C 35 29, 39 33, 43 35

          C 60 48, 60 50, 50 45

          C 55 45, 62 37, 62 38
          C 66 33, 75 25, 81 28

          C 88 29, 94 34, 94 42

          L 94 64
          C 94 71, 89 75, 82 75
          C 75 75, 70 71, 70 64

          L 70 51

          C 66 56, 61 61, 55 61
          C 49 61, 44 56, 40 51

          L 40 64
          C 40 71, 35 75, 28 75
          C 21 75, 16 71, 16 64

          Z
        "
        fill="url(#humanSyncGradient)"
      />
    </svg>
  );
};