import React from "react";
import { AbsoluteFill } from "remotion";

import { Background } from "../components/Background";
import { GlassCard } from "../components/GlassCard";
import { HumanSyncLogo } from "../components/HumanSyncLogo";
import { KineticText } from "../components/KineticText_temp";
import { HumanSyncProps } from "../types";

const Avatar: React.FC<{ letter: string }> = ({
  letter,
}) => {
  return (
    <div
      style={{
        width: 23,
        height: 23,
        borderRadius: "50%",
        background: "#c7b5d8",
        border: "2px solid white",
        marginLeft: -3,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: 10,
        fontWeight: 700,
        color: "#ffffff",
      }}
    >
      {letter}
    </div>
  );
};

export const Scene01Intro: React.FC<{
  intro: HumanSyncProps["intro"];
}> = ({ intro }) => {
  return (
    <AbsoluteFill>
      <Background />

      {/* =================================
          HUMAN SYNC LOGO — TOP LEFT
      ================================== */}

      <div
        style={{
          position: "absolute",
          left: 42,
          top: 18,
          zIndex: 30,
        }}
      >
        <HumanSyncLogo size={23} />
      </div>

      {/* =================================
          MAIN HEADLINE
      ================================== */}

      <div
        style={{
          position: "absolute",
          left: 38,
          top: 110,
          zIndex: 10,
        }}
      >
        {/* Modern teams */}

        <KineticText
          words={[
            {
              text: "Modern",
              color: "#111111",
            },
            {
              text: "teams",
              color: "#111111",
            },
          ]}
          startFrame={3}
          wordDelay={5}
          duration={7}
          fontSize={55}
          fontWeight={450}
          gap={12}
          mode="word"
        />

        {/* move fast */}

        <div
          style={{
            marginTop: -5,
          }}
        >
          <KineticText
            words={[
              {
                text: "move",
                color: "#5424D8",
              },
              {
                text: "fast",
                color: "#5424D8",
              },
            ]}
            startFrame={12}
            wordDelay={5}
            duration={7}
            fontSize={55}
            fontWeight={450}
            gap={12}
            mode="word"
          />
        </div>
      </div>

      {/* =================================
          MARKETING REVIEW
      ================================== */}

      <GlassCard
        startFrame={30}
        left={465}
        top={30}
        width={245}
        height={100}
        rotate={-0.5}
      >
        <div
          style={{
            padding: "13px 28px",
            height: "100%",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: "#111",
              marginBottom: 5,
            }}
          >
            Marketing Review
          </div>

          <div
            style={{
              fontSize: 15,
              color: "#666",
              marginBottom: 8,
            }}
          >
            Today, 2:00 PM
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Avatar letter="A" />
            <Avatar letter="S" />
            <Avatar letter="M" />
            <Avatar letter="R" />

            <span
              style={{
                marginLeft: 6,
                fontSize: 13,
                color: "#555",
              }}
            >
              +2
            </span>
          </div>
        </div>
      </GlassCard>

      {/* =================================
          MEETINGS
      ================================== */}

      <GlassCard
        startFrame={43}
        left={445}
        top={138}
        width={245}
        height={88}
        rotate={1.8}
      >
        <div
          style={{
            padding: "13px 28px",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 8,
            }}
          >
            <span
              style={{
                fontSize: 20,
                fontWeight: 550,
              }}
            >
              Meetings
            </span>

            <span
              style={{
                fontSize: 13,
                color: "#555",
              }}
            >
              11:00 AM
            </span>
          </div>

          <div
            style={{
              fontSize: 12,
              fontWeight: 550,
              color: "#524f4fd5",
            }}
          >
            Team Sync Meeting starts in
          </div>

          <div
            style={{
              fontSize: 13,
              color: "#080707cf",
              marginTop: 1,
            }}
          >
            10 min
          </div>
        </div>
      </GlassCard>

      {/* =================================
          PROJECT KICKOFF
      ================================== */}

      <GlassCard
        startFrame={58}
        left={305}
        top={285}
        width={395}
        height={155}
        rotate={-1.5}
      >
        <div
          style={{
            padding: "22px 60px",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              fontSize: 38,
              fontWeight: 550,
              color: "#080707",
            }}
          >
            Project Kickoff
          </div>

          <div
            style={{
              marginTop: 4,
              fontSize: 28,
              color: "#666",
            }}
          >
            Today, 10:00 AM
          </div>

          <div
            // style={{
            //   marginTop: 20,
            //   width: "100%",
            //   height: 5,
            //   borderRadius: 5,
            //   background:
            //     "rgba(100, 60, 160, 0.12)",
            // }}
          >
            <div
              style={{
                width: "65%",
                height: "100%",
                borderRadius: 5,
                background: "#7040e8",
              }}
            />
          </div>
        </div>
      </GlassCard>

      {/* =================================
          SUBTITLE — CHARACTER LEVEL
      ================================== */}

      <div
        style={{
          position: "absolute",
          left: 38,
          top: 220,
          zIndex: 10,
        }}
      >
        <KineticText
          words={[
            {
              text: "but workflow still",
            },
          ]}
          startFrame={68}
          duration={12}
          characterDelay={0.5}
          fontSize={28}
          fontWeight={350}
          letterSpacing={-0.2}
          mode="character"
          blur
        />

        <div
          style={{
            marginTop: 0,
          }}
        >
          <KineticText
            words={[
              {
                text: "feels disconnected",
              },
            ]}
            startFrame={82}
            duration={4}
            characterDelay={0.5}
            fontSize={28}
            fontWeight={350}
            letterSpacing={-0.2}
            mode="character"
            blur
          />
        </div>
      </div>
    </AbsoluteFill>
  );
};