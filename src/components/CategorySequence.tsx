import React from "react";
import {
  Easing,
  interpolate,
  useCurrentFrame,
} from "remotion";

import { CategoryPill } from "./CategoryPill";

const ITEMS = [
  {
    text: "Meetings",
    width: 66,
  },
  {
    text: "Tasks",
    width: 56,
  },
  {
    text: "Communication",
    width: 104,
  },
  {
    text: "Operations",
    width: 84,
  },
];

const GAP = 3;

type CategorySequenceProps = {
  startFrame?: number;
};

export const CategorySequence: React.FC<
  CategorySequenceProps
> = ({
  startFrame = 0,
}) => {
  const frame = useCurrentFrame();

  const stageFrames = [
    startFrame,
    startFrame + 28,
    startFrame + 56,
    startFrame + 84,
  ];

  /*
   * 4 stages:
   *
   * 0   Meetings
   * 28  Tasks
   * 56  Communication
   * 84  Operations
   *
   * The important final transition:
   *
   * 84 → 106
   *
   * During this movement:
   *
   * Everything + Orbit begin at 96.
   */

  const stageLeft = [
    442,
    342,
    222,
    50,
  ];

  const getItemX = (index: number) => {
    let x = 0;

    for (let i = 0; i < index; i++) {
      x += ITEMS[i].width + GAP;
    }

    return x;
  };

  const getCurrentStage = () => {
    if (frame >= stageFrames[3]) {
      return 4;
    }

    if (frame >= stageFrames[2]) {
      return 3;
    }

    if (frame >= stageFrames[1]) {
      return 2;
    }

    return 1;
  };

  const currentStage = getCurrentStage();

  return (
    <div
      style={{
        position: "absolute",

        left: 0,
        top: 230,

        width: "100%",
        height: 40,
      }}
    >
      {ITEMS.map((item, index) => {
        const itemStart = stageFrames[index];

        if (frame < itemStart) {
          return null;
        }

        const entrance = interpolate(
          frame,
          [itemStart, itemStart + 12],
          [0, 1],
          {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          },
        );

        const scale = interpolate(
          frame,
          [itemStart, itemStart + 12],
          [0.88, 1],
          {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          },
        );

        let rowLeft =
          stageLeft[currentStage - 1];

        /*
         * Move the entire row when a new
         * category appears.
         */
        if (currentStage > 1) {
          const transitionStart =
            stageFrames[currentStage - 1];

          const transitionEnd =
            transitionStart + 22;

          const progress = interpolate(
            frame,
            [transitionStart, transitionEnd],
            [0, 1],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
              easing: Easing.inOut(Easing.cubic),
            },
          );

          rowLeft = interpolate(
            progress,
            [0, 1],
            [
              stageLeft[currentStage - 2],
              stageLeft[currentStage - 1],
            ],
          );
        }

        const itemX = getItemX(index);

        const isEntering =
          frame >= itemStart &&
          frame < itemStart + 12;

        return (
          <div
            key={item.text}
            style={{
              position: "absolute",

              left: rowLeft + itemX,
              top: 0,

              width: item.width,
              height: 24,

              zIndex: index + 1,

              opacity: isEntering
                ? entrance
                : 1,

              transform: `scale(${
                isEntering
                  ? scale
                  : 1
              })`,

              transformOrigin: "center",
            }}
          >
            <CategoryPill
              text={item.text}
              opacity={1}
              scale={1}
            />
          </div>
        );
      })}
    </div>
  );
};