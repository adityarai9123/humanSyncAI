import React from "react";

type Props = {
  children: React.ReactNode;
};

export const Scene02Camera: React.FC<Props> = ({ children }) => {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
      }}
    >
      {children}
    </div>
  );
};