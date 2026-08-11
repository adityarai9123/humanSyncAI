import React from "react";

export const Background: React.FC = () => {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",

        background: `
          radial-gradient(
            ellipse at 92% 35%,
            #c66cff 0%,
            #dda0ff 25%,
            #edc9ff 48%,
            #f4e5ff 70%,
            #faf7ff 100%
          )
        `,
      }}
    />
  );
};