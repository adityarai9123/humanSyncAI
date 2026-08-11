import React from "react";
import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
} from "remotion";

import {Background} from "../components/Background";

type WorkflowNodeProps = {
  title: string;
  subtitle: string;
  icon: string;
  left: number;
  top: number;
  startFrame: number;
  width?: number;
};

const WorkflowNode: React.FC<WorkflowNodeProps> = ({
  title,
  subtitle,
  icon,
  left,
  top,
  startFrame,
  width = 145,
}) => {
  const frame = useCurrentFrame();

  const progress = interpolate(
    frame,
    [startFrame, startFrame + 18],
    [0, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );

  const y = interpolate(progress, [0, 1], [25, 0]);

  const scale = interpolate(progress, [0, 1], [0.85, 1]);

  const float =
    progress >= 1
      ? Math.sin((frame - startFrame) / 18) * 2
      : 0;

  return (
    <div
      style={{
        position: "absolute",
        left,
        top,
        width,
        opacity: progress,
        transform: `
          translateY(${y + float}px)
          scale(${scale})
        `,
      }}
    >
      <div
        style={{
          height: 48,
          padding: "0 12px",
          borderRadius: 13,
          background: "rgba(255,255,255,0.86)",
          border: "1px solid rgba(120,80,170,0.08)",
          boxShadow:
            "0 12px 30px rgba(90,50,130,0.12)",
          display: "flex",
          alignItems: "center",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            width: 25,
            height: 25,
            borderRadius: 8,
            background: "rgba(105,65,220,0.10)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 11,
            marginRight: 9,
          }}
        >
          {icon}
        </div>

        <div>
          <div
            style={{
              fontSize: 8,
              fontWeight: 700,
              color: "#222",
            }}
          >
            {title}
          </div>

          <div
            style={{
              fontSize: 6.5,
              color: "#888",
              marginTop: 3,
            }}
          >
            {subtitle}
          </div>
        </div>
      </div>
    </div>
  );
};

const Metric: React.FC<{
  label: string;
  value: string;
  suffix: string;
  left: number;
  startFrame: number;
}> = ({
  label,
  value,
  suffix,
  left,
  startFrame,
}) => {
  const frame = useCurrentFrame();

  const progress = interpolate(
    frame,
    [startFrame, startFrame + 18],
    [0, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );

  const numberProgress = interpolate(
    frame,
    [startFrame, startFrame + 25],
    [0, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );

  return (
    <div
      style={{
        position: "absolute",
        left,
        top: 280,
        opacity: progress,
        transform: `translateY(${interpolate(
          progress,
          [0, 1],
          [15, 0],
        )}px)`,
        width: 100,
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
          display: "flex",
          alignItems: "baseline",
        }}
      >
        <span
          style={{
            fontSize: 23,
            fontWeight: 700,
            color: "#111",
          }}
        >
          {value === "120+"
            ? `${Math.round(120 * numberProgress)}+`
            : value === "35%"
              ? `${Math.round(35 * numberProgress)}%`
              : `${Math.round(98 * numberProgress)}%`}
        </span>

        {suffix && (
          <span
            style={{
              fontSize: 7,
              color: "#888",
              marginLeft: 4,
            }}
          >
            {suffix}
          </span>
        )}
      </div>

      <div
        style={{
          width: 55,
          height: 2,
          borderRadius: 5,
          background: "rgba(100,60,170,0.12)",
          marginTop: 6,
        }}
      >
        <div
          style={{
            width:
              value === "120+"
                ? "82%"
                : value === "35%"
                  ? "55%"
                  : "92%",
            height: "100%",
            borderRadius: 5,
            background: "#7041df",
          }}
        />
      </div>
    </div>
  );
};

const WorkflowConnector: React.FC = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(
    frame,
    [30, 65],
    [0, 1],
    {
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    },
  );

  return (
    <svg
      width={730}
      height={400}
      viewBox="0 0 730 400"
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        opacity,
      }}
    >
      <path
        d="M 395 105 C 450 105, 440 75, 500 75"
        fill="none"
        stroke="#d58de9"
        strokeWidth="2"
        strokeDasharray="5 5"
      />

      <path
        d="M 420 165 C 470 165, 470 155, 520 155"
        fill="none"
        stroke="#d58de9"
        strokeWidth="2"
        strokeDasharray="5 5"
      />

      <path
        d="M 445 225 C 500 225, 500 250, 560 250"
        fill="none"
        stroke="#d58de9"
        strokeWidth="2"
        strokeDasharray="5 5"
      />

      <circle
        cx="395"
        cy="105"
        r="4"
        fill="#7145df"
      />

      <circle
        cx="445"
        cy="225"
        r="4"
        fill="#7145df"
      />
    </svg>
  );
};

export const Scene05Workflow: React.FC = () => {
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
    [20, 0],
  );

  return (
    <AbsoluteFill>
      <Background />

      {/* Main headline */}

      <div
        style={{
          position: "absolute",
          left: 45,
          top: 95,
          opacity: titleProgress,
          transform: `translateY(${titleY}px)`,
          fontFamily: "Arial, Helvetica, sans-serif",
          zIndex: 5,
        }}
      >
        <div
          style={{
            fontSize: 29,
            fontWeight: 700,
            color: "#111",
            lineHeight: 1.15,
          }}
        >
          Faster{" "}
          <span
            style={{
              color: "#4c75e5",
            }}
          >
            workflow
          </span>
        </div>

        <div
          style={{
            fontSize: 29,
            fontWeight: 700,
            color: "#111",
            lineHeight: 1.15,
          }}
        >
          Better{" "}
          <span
            style={{
              color: "#4c75e5",
            }}
          >
            clarity
          </span>
        </div>

        <div
          style={{
            fontSize: 29,
            fontWeight: 700,
            color: "#111",
            lineHeight: 1.15,
          }}
        >
          Smarter{" "}
          <span
            style={{
              color: "#4c75e5",
            }}
          >
            teamwork
          </span>
        </div>
      </div>

      {/* Metrics */}

      <Metric
        label="Time Saved"
        value="120+"
        suffix="hrs/month"
        left={45}
        startFrame={35}
      />

      <Metric
        label="Efficiency"
        value="35%"
        suffix=""
        left={150}
        startFrame={45}
      />

      <Metric
        label="Team Satisfaction"
        value="98%"
        suffix=""
        left={255}
        startFrame={55}
      />

      {/* Workflow network */}

      <WorkflowConnector />

      {/* Workflow nodes */}

      <WorkflowNode
        title="Review & Approve"
        subtitle="Pending approval"
        icon="✓"
        left={390}
        top={75}
        startFrame={25}
      />

      <WorkflowNode
        title="AI Assignment"
        subtitle="Automatically assigned"
        icon="✦"
        left={500}
        top={125}
        startFrame={40}
      />

      <WorkflowNode
        title="In Progress"
        subtitle="Work in progress"
        icon="◔"
        left={470}
        top={205}
        startFrame={55}
      />

      <WorkflowNode
        title="Completed"
        subtitle="Task completed"
        icon="✓"
        left={555}
        top={265}
        startFrame={70}
      />

      {/* Small animated status dots */}

      <div
        style={{
          position: "absolute",
          left: 625,
          top: 90,
          width: 8,
          height: 8,
          borderRadius: "50%",
          background: "#4fce78",
          opacity: interpolate(
            frame,
            [65, 80],
            [0, 1],
            {
              extrapolateLeft: "clamp",
              extrapolateRight: "clamp",
            },
          ),
          boxShadow:
            "0 0 0 5px rgba(79,206,120,0.10)",
        }}
      />
    </AbsoluteFill>
  );
};
