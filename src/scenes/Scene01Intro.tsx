import React from "react";
import { AbsoluteFill } from "remotion";

import { Background } from "../components/Background";
import { AnimatedText } from "../components/AnimatedText";
import { GlassCard } from "../components/GlassCard";

import { HumanSyncLogo } from "../components/HumanSyncLogo";
import { HumanSyncProps } from "../types";

const Avatar: React.FC<{ letter: string }> = ({ letter }) => {
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

      <HumanSyncLogo size={36} />

      {/* =========================
          LEFT SIDE — HEADLINE
      ========================== */}

      <AnimatedText
        text={intro.title}
        startFrame={5}
        fontSize={40}
        fontWeight={500}
        top={105}
        left={42}
      />

      <AnimatedText
        text={intro.highlight}
        startFrame={12}
        fontSize={48}
        fontWeight={600}
        color="#5424e8"
        top={157}
        left={42}
      />

      <AnimatedText
        text={intro.subtitle[0]}
        startFrame={20}
        fontSize={25}
        fontWeight={400}
        italic
        color="#333333"
        top={216}
        left={42}
      />

      <AnimatedText
        text={intro.subtitle[1]}
        startFrame={27}
        fontSize={25}
        fontWeight={400}
        italic
        color="#333333"
        top={246}
        left={42}
      />

      {/* =========================
          RIGHT SIDE — MARKETING
      ========================== */}

      <GlassCard
        startFrame={35}
        left={480}
        top={45}
        width={235}
        height={88}
        rotate={-2.5}
      >
        <div
          style={{
            padding: "13px 18px",
            height: "100%",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              fontSize: 18,
              fontWeight: 700,
              color: "#111",
              marginBottom: 5,
            }}
          >
            Marketing Review
          </div>

          <div
            style={{
              fontSize: 13,
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

      {/* =========================
          RIGHT SIDE — MEETINGS
      ========================== */}

      <GlassCard
        startFrame={48}
        left={455}
        top={145}
        width={235}
        height={82}
        rotate={1.5}
      >
        <div
          style={{
            padding: "15px 18px",
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
                fontSize: 18,
                fontWeight: 700,
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
              fontWeight: 600,
              color: "#555",
            }}
          >
            Team Sync Meeting starts in
          </div>

          <div
            style={{
              fontSize: 13,
              color: "#333",
              marginTop: 2,
            }}
          >
            10 min
          </div>
        </div>
      </GlassCard>

      {/* =========================
          RIGHT SIDE — PROJECT
      ========================== */}

      <GlassCard
        startFrame={60}
        left={390}
        top={260}
        width={305}
        height={120}
        rotate={-3.5}
      >
        <div
          style={{
            padding: "20px 22px",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              fontSize: 25,
              fontWeight: 700,
              color: "#111",
            }}
          >
            Project Kickoff
          </div>

          <div
            style={{
              marginTop: 6,
              fontSize: 16,
              color: "#666",
            }}
          >
            Today, 10:00 AM
          </div>

          <div
            style={{
              marginTop: 20,
              width: "100%",
              height: 5,
              borderRadius: 5,
              background: "rgba(100, 60, 160, 0.12)",
            }}
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
    </AbsoluteFill>
  );
};