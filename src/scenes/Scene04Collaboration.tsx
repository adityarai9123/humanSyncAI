import React from "react";
import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
} from "remotion";

import { Background } from "../components/Background";
import { GlassCard } from "../components/GlassCard";

const StatCard: React.FC<{
  label: string;
  value: string;
  description: string;
  left: number;
  top: number;
  startFrame: number;
}> = ({
  label,
  value,
  description,
  left,
  top,
  startFrame,
}) => {
  return (
    <GlassCard
      startFrame={startFrame}
      left={left}
      top={top}
      width={105}
      height={68}
      rotate={-1}
    >
      <div
        style={{
          padding: "10px 11px",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            fontSize: 7,
            color: "#777",
            marginBottom: 5,
          }}
        >
          {label}
        </div>

        <div
          style={{
            fontSize: 19,
            fontWeight: 700,
            color: "#222",
          }}
        >
          {value}
        </div>

        <div
          style={{
            marginTop: 2,
            fontSize: 6.5,
            color: "#888",
          }}
        >
          {description}
        </div>
      </div>
    </GlassCard>
  );
};

const WorkloadCard: React.FC = () => {
  return (
    <GlassCard
      startFrame={15}
      left={45}
      top={55}
      width={190}
      height={135}
      rotate={-1.5}
    >
      <div
        style={{
          padding: 13,
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            fontSize: 10,
            fontWeight: 700,
            color: "#222",
          }}
        >
          Workload Balance
        </div>

        <div
          style={{
            marginTop: 4,
            fontSize: 7,
            color: "#777",
          }}
        >
          Marketing team is
        </div>

        <div
          style={{
            fontSize: 7,
            color: "#777",
          }}
        >
          overloaded by 32%
        </div>

        {/* Graph */}

        <svg
          width="164"
          height="55"
          viewBox="0 0 164 55"
          style={{
            marginTop: 7,
            overflow: "visible",
          }}
        >
          <defs>
            <linearGradient
              id="workloadGradient"
              x1="0"
              y1="0"
              x2="0"
              y2="1"
            >
              <stop
                offset="0%"
                stopColor="#c9a3ff"
                stopOpacity="0.55"
              />
              <stop
                offset="100%"
                stopColor="#c9a3ff"
                stopOpacity="0.05"
              />
            </linearGradient>
          </defs>

          <path
            d="
              M 0 44
              C 18 42, 22 30, 38 34
              C 52 38, 58 20, 72 27
              C 88 35, 95 12, 110 19
              C 126 27, 134 9, 150 13
              C 156 14, 160 10, 164 7
              L 164 55
              L 0 55
              Z
            "
            fill="url(#workloadGradient)"
          />

          <path
            d="
              M 0 44
              C 18 42, 22 30, 38 34
              C 52 38, 58 20, 72 27
              C 88 35, 95 12, 110 19
              C 126 27, 134 9, 150 13
              C 156 14, 160 10, 164 7
            "
            fill="none"
            stroke="#7044dc"
            strokeWidth="2"
          />
        </svg>

        <div
          style={{
            marginTop: 4,
            fontSize: 7,
            color: "#6542ad",
            fontWeight: 600,
          }}
        >
          View details →
        </div>
      </div>
    </GlassCard>
  );
};

const ChatMessage: React.FC<{
  name: string;
  text: string;
  time: string;
  delay: number;
}> = ({ name, text, time, delay }) => {
  const frame = useCurrentFrame();

  const progress = interpolate(
    frame,
    [delay, delay + 15],
    [0, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );

  const opacity = progress;

  const translateX = interpolate(
    progress,
    [0, 1],
    [18, 0],
  );

  return (
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        marginTop: 12,
        opacity,
        transform: `translateX(${translateX}px)`,
      }}
    >
      <div
        style={{
          width: 23,
          height: 23,
          borderRadius: "50%",
          background:
            "linear-gradient(135deg, #d8c6e8, #a486d0)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 7,
          fontWeight: 700,
          color: "#fff",
          flexShrink: 0,
        }}
      >
        {name.charAt(0)}
      </div>

      <div
        style={{
          marginLeft: 8,
          flex: 1,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <span
            style={{
              fontSize: 7,
              fontWeight: 700,
              color: "#222",
            }}
          >
            {name}
          </span>

          <span
            style={{
              fontSize: 6,
              color: "#aaa",
            }}
          >
            {time}
          </span>
        </div>

        <div
          style={{
            marginTop: 3,
            fontSize: 7,
            lineHeight: 1.3,
            color: "#666",
          }}
        >
          {text}
        </div>
      </div>
    </div>
  );
};

const CollaborationCard: React.FC = () => {
  return (
    <GlassCard
      startFrame={35}
      left={515}
      top={35}
      width={185}
      height={275}
      rotate={1.5}
    >
      <div
        style={{
          padding: 14,
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            fontSize: 10,
            fontWeight: 700,
            color: "#222",
          }}
        >
          Team Collaboration
        </div>

        <ChatMessage
          name="Olivia Rhye"
          text="@team Please review the update plan"
          time="2m ago"
          delay={55}
        />

        <ChatMessage
          name="Alex Mitchell"
          text="Looks good! Approved"
          time="9m ago"
          delay={70}
        />

        <ChatMessage
          name="Sophie Hale"
          text="I will take care of the next steps."
          time="8m ago"
          delay={85}
        />
      </div>
    </GlassCard>
  );
};

export const Scene04Collaboration: React.FC = () => {
  const frame = useCurrentFrame();

  const titleProgress = interpolate(
    frame,
    [0, 20],
    [0, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );

  const titleY = interpolate(
    titleProgress,
    [0, 1],
    [25, 0],
  );

  return (
    <AbsoluteFill>
      <Background />

      {/* Main message */}

      <div
        style={{
          position: "absolute",
          left: 255,
          top: 155,
          width: 235,
          opacity: titleProgress,
          transform: `translateY(${titleY}px)`,
          fontFamily: "Arial, Helvetica, sans-serif",
          zIndex: 5,
        }}
      >
        <div
          style={{
            fontSize: 24,
            fontWeight: 700,
            lineHeight: 1.08,
            color: "#111",
          }}
        >
          From{" "}
          <span
            style={{
              color: "#4f78e8",
            }}
          >
            smart insights
          </span>
        </div>

        <div
          style={{
            fontSize: 24,
            fontWeight: 700,
            lineHeight: 1.08,
            color: "#111",
          }}
        >
          to seamless
        </div>

        <div
          style={{
            fontSize: 24,
            fontWeight: 700,
            lineHeight: 1.08,
            color: "#111",
          }}
        >
          <span
            style={{
              color: "#4f78e8",
            }}
          >
            collaborations
          </span>
        </div>
      </div>

      {/* Main analytics card */}

      <WorkloadCard />

      {/* Bottom statistics */}

      <StatCard
        label="Task Completed"
        value="+18%"
        description="vs last month"
        left={55}
        top={225}
        startFrame={45}
      />

      <StatCard
        label="On-time Delivery"
        value="+24%"
        description="vs last month"
        left={175}
        top={225}
        startFrame={55}
      />

      {/* Collaboration */}

      <CollaborationCard />

      {/* Small floating accent */}

      <div
        style={{
          position: "absolute",
          left: 475,
          top: 85,
          width: 22,
          height: 22,
          borderRadius: 7,
          background: "#7550e6",
          opacity: interpolate(
            frame,
            [15, 35],
            [0, 1],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            },
          ),
          transform: `rotate(${frame * 1.5}deg)`,
          boxShadow:
            "0 8px 20px rgba(90,50,150,0.18)",
        }}
      />
    </AbsoluteFill>
  );
};