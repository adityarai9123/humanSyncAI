import React from "react";

type HumanSyncLogoProps = {
  size?: number;
};

export const HumanSyncLogo: React.FC<HumanSyncLogoProps> = ({
  size = 48,
}) => {
  const height = size * 1.15;

  return (
    <svg
      width={size}
      height={height}
      viewBox="0 0 48 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="humanSyncLogoGradient"
          x1="7"
          y1="4"
          x2="43"
          y2="50"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#6425D8" />
          <stop offset="0.55" stopColor="#7139E8" />
          <stop offset="1" stopColor="#3477E8" />
        </linearGradient>
      </defs>

      {/* Left dot */}
      <circle
        cx="16"
        cy="7"
        r="5"
        fill="#6425D8"
      />

      {/* Right dot */}
      <circle
        cx="34"
        cy="7"
        r="5"
        fill="#3477E8"
      />

      {/* Left vertical */}
      <rect
        x="8"
        y="17"
        width="13"
        height="29"
        rx="6.5"
        fill="url(#humanSyncLogoGradient)"
      />

      {/* Right vertical */}
      <rect
        x="27"
        y="17"
        width="13"
        height="29"
        rx="6.5"
        fill="url(#humanSyncLogoGradient)"
      />

      {/* Central connection */}
      <path
        d="M17 27C20.5 27 23 31 27 31"
        stroke="url(#humanSyncLogoGradient)"
        strokeWidth="8"
        strokeLinecap="round"
      />

      <path
        d="M17 31C20.5 31 23 27 27 27"
        stroke="url(#humanSyncLogoGradient)"
        strokeWidth="8"
        strokeLinecap="round"
      />
    </svg>
  );
};