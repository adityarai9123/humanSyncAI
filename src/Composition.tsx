import {
  AbsoluteFill,
  Composition,
  Sequence,
} from "remotion";

import { Scene01Intro } from "./scenes/Scene01Intro";
import { Scene02Systems } from "./scenes/Scene02Systems";
import { Scene03Workspace } from "./scenes/Scene03Workspace";
import { Scene04Collaboration } from "./scenes/Scene04Collaboration";
import { Scene05Workflow } from "./scenes/Scene05Workflow";
import { Scene06Outro } from "./scenes/Scene06Outro";

import { SceneFade } from "./components/SceneFade";

import { HumanSyncProps } from "./types";


export const MyComposition = () => {
  return (
    <Composition
      id="MyComp"
      component={MyComponent}
      durationInFrames={750}
      fps={25}
      width={736}
      height={414}
      defaultProps={defaultProps}
    />
  );
};

export const MyComponent: React.FC<HumanSyncProps> = (props) => {
  return (
    <AbsoluteFill>
      {/* Scene 1 */}
      <Sequence from={0} durationInFrames={175}>
        <Scene01Intro intro={props.intro} />
      </Sequence>

      {/* Scene 2 */}
      <Sequence from={175} durationInFrames={115}>
        <SceneFade duration={8}>
          <Scene02Systems />
        </SceneFade>
      </Sequence>

      {/* Scene 3 */}
      <Sequence from={290} durationInFrames={185}>
        <SceneFade duration={8}>
          <Scene03Workspace />
        </SceneFade>
      </Sequence>

      {/* Scene 4 */}
      <Sequence from={475} durationInFrames={125}>
        <SceneFade duration={8}>
          <Scene04Collaboration />
        </SceneFade>
      </Sequence>

      {/* Scene 5 */}
      <Sequence from={600} durationInFrames={125}>
        <SceneFade duration={8}>
          <Scene05Workflow />
        </SceneFade>
      </Sequence>

      {/* Scene 6 */}
      <Sequence from={725} durationInFrames={25}>
        <SceneFade duration={8}>
          <Scene06Outro />
        </SceneFade>
      </Sequence>
    </AbsoluteFill>
  );
};

const defaultProps: HumanSyncProps = {
  brandName: "HumanSync",
  brandSuffix: "AI",

  intro: {
    title: "Modern teams",
    highlight: "move fast",
    subtitle: [
      "but workflow still",
      "feels disconnected",
    ],
  },

  systems: {
    title: "Everything",
    highlightedLines: [
      "scattered across",
      "different systems",
    ],
    tags: [
      "Meetings",
      "Tasks",
      "Communication",
      "Operations",
    ],
  },

  workspace: {
    title: "Changes that",
    description:
      "one intelligent workspace built to connect teams, workflows, and productivity in real time.",
  },

  collaboration: {
    title: "From smart insights to seamless collaborations",
    highlightedWords: [
      "smart insights",
      "collaborations",
    ],
  },

  workflow: {
    headline: [
      "Faster workflow",
      "Better clarity",
      "Smarter teamwork",
    ],
    metrics: [
      {
        label: "Time Saved",
        value: "120+",
        suffix: "hrs/month",
      },
      {
        label: "Efficiency",
        value: "35%",
      },
      {
        label: "Team Satisfaction",
        value: "98%",
      },
    ],
  },
};
