import React from "react";

type CategoryPillProps = {
  text: string;
  opacity: number;
  scale: number;
};

const PILL_COLORS: Record<string, string> = {
  Meetings: "rgba(245, 218, 252, 0.95)",
  Tasks: "rgba(228, 219, 250, 0.95)",
  Communication: "rgba(218, 228, 250, 0.95)",
  Operations: "rgba(235, 218, 248, 0.95)",
};

export const CategoryPill: React.FC<CategoryPillProps> = ({
  text,
  opacity,
  scale,
}) => {
  return (
    <div
      style={{
        opacity,

        transform: `scale(${scale})`,
        transformOrigin: "center",

        width: "100%",
        height: 24,

        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        boxSizing: "border-box",

        borderRadius: 999,

        background: PILL_COLORS[text] ?? "rgba(245, 235, 255, 0.88)",

        border: "1px solid rgba(165, 135, 195, 0.38)",

        boxShadow: "0 2px 7px rgba(80, 50, 100, 0.10)",

        color: "#29252d",

        fontFamily: "Arial, Helvetica, sans-serif",
        fontSize: 12,
        fontWeight: 400,

        whiteSpace: "nowrap",
      }}
    >
      {text}
    </div>
  );
};
