import React from "react";
import { AbsoluteFill } from "remotion";

import { Background } from "../components/Background";
import { CategorySequence } from "../components/CategorySequence";
import { Scene02Headline } from "../components/Scene02Headline";
import { OrbitSystem } from "../components/OrbitSystem";
import { IconSequence } from "../components/IconSequence";

import { HumanSyncProps } from "../types";

export const Scene02Systems: React.FC<{
  systems: HumanSyncProps["systems"];
}> = ({ systems }) => {
  return (
    <AbsoluteFill>
      <Background />

      {/* 4 category pills */}
      <CategorySequence startFrame={0} />

      {/* Headline */}
      <Scene02Headline />

      {/* Orbit begins exactly with Everything */}
      <OrbitSystem startFrame={96} />

      <IconSequence startFrame={96} />
      
    </AbsoluteFill>
  );
};