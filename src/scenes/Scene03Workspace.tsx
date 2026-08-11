import React from "react";
import { AbsoluteFill, interpolate, useCurrentFrame } from "remotion";

import { Background } from "../components/Background";
import { GlassCard } from "../components/GlassCard";
import { HumanSyncProps } from "../types";

const MiniBrandMark: React.FC = () => {
  return (
    <div
      style={{
        position: "absolute",
        width: 42,
        height: 34,
      }}
    >
      <div
        style={{
          position: "absolute",
          left: 2,
          top: 7,
          width: 17,
          height: 20,
          borderRadius: 8,
          background: "#6425d8",
          transform: "rotate(-12deg)",
        }}
      />

      <div
        style={{
          position: "absolute",
          right: 2,
          top: 7,
          width: 17,
          height: 20,
          borderRadius: 8,
          background: "#3477e8",
          transform: "rotate(12deg)",
        }}
      />

      <div
        style={{
          position: "absolute",
          left: 13,
          top: 16,
          width: 17,
          height: 7,
          borderRadius: 10,
          background: "#6425d8",
        }}
      />
    </div>
  );
};

const OnlineDot: React.FC = () => {
  return (
    <div
      style={{
        width: 5,
        height: 5,
        borderRadius: "50%",
        background: "#43c96b",
      }}
    />
  );
};

const UserRow: React.FC<{
  name: string;
  role: string;
}> = ({ name, role }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        height: 30,
      }}
    >
      <div
        style={{
          width: 23,
          height: 23,
          borderRadius: "50%",
          background: "linear-gradient(135deg, #d5c3e8, #9d7ad1)",
          marginRight: 8,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 8,
          fontWeight: 700,
          color: "#fff",
        }}
      >
        {name.charAt(0)}
      </div>

      <div
        style={{
          flex: 1,
        }}
      >
        <div
          style={{
            fontSize: 8,
            fontWeight: 700,
            color: "#222",
          }}
        >
          {name}
        </div>

        <div
          style={{
            fontSize: 7,
            color: "#888",
            marginTop: 1,
          }}
        >
          {role}
        </div>
      </div>

      <OnlineDot />

      <span
        style={{
          fontSize: 7,
          color: "#777",
          marginLeft: 4,
        }}
      >
        Online
      </span>
    </div>
  );
};

const TeamConnectedCard: React.FC<{
  members: HumanSyncProps["workspace"]["teamMembers"];
}> = ({ members }) => {
  return (
    <GlassCard
      startFrame={90}
      left={385}
      top={58}
      width={145}
      height={150}
      rotate={-1}
    >
      <div
        style={{
          padding: 12,
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            fontSize: 8,
            fontWeight: 700,
            color: "#222",
            marginBottom: 8,
          }}
        >
          👥 Team Connected
        </div>

        {members.map((member) => (
          <UserRow key={member.name} name={member.name} role={member.role} />
        ))}

        <div
          style={{
            marginTop: 5,
            fontSize: 7,
            color: "#777",
          }}
        >
          +12 more members
        </div>
      </div>
    </GlassCard>
  );
};

const WorkflowStep: React.FC<{
  label: string;
  active?: boolean;
}> = ({ label, active }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flex: 1,
      }}
    >
      <div
        style={{
          width: 22,
          height: 22,
          borderRadius: 7,
          background: active ? "#e8dcff" : "rgba(120,80,180,0.08)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 9,
          color: active ? "#6334dc" : "#777",
          fontWeight: 700,
        }}
      >
        {active ? "✓" : "•"}
      </div>

      <span
        style={{
          marginTop: 4,
          fontSize: 6.5,
          color: "#666",
          textAlign: "center",
        }}
      >
        {label}
      </span>
    </div>
  );
};

const WorkflowCard: React.FC<{
  steps: HumanSyncProps["workspace"]["workflowSteps"];
}> = ({ steps }) => {
  return (
    <GlassCard
      startFrame={112}
      left={355}
      top={225}
      width={185}
      height={110}
      rotate={1}
    >
      <div
        style={{
          padding: 12,
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            fontSize: 9,
            fontWeight: 700,
            color: "#222",
            marginBottom: 14,
          }}
        >
          ⚡ Workflows Automated
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
          }}
        >
          {steps.map((step, index) => (
            <React.Fragment key={step.label}>
              <WorkflowStep label={step.label} active={step.active} />

              {index < steps.length - 1 && (
                <div
                  style={{
                    width: 10,
                    height: 1,
                    background: "#d0c0e8",
                    marginTop: 11,
                  }}
                />
              )}
            </React.Fragment>
          ))}
        </div>

        <div
          style={{
            marginTop: 15,
            display: "flex",
            justifyContent: "space-between",
            fontSize: 7,
            color: "#777",
          }}
        >
          <span>● On track</span>
          <span>12 workflows active</span>
        </div>
      </div>
    </GlassCard>
  );
};

const ProductivityCard: React.FC<{
  productivity: HumanSyncProps["workspace"]["productivity"];
}> = ({ productivity }) => {
  return (
    <GlassCard
      startFrame={130}
      left={540}
      top={175}
      width={150}
      height={180}
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
            fontSize: 9,
            fontWeight: 700,
            color: "#222",
            marginBottom: 14,
          }}
        >
          📊 Productivity Insights
        </div>

        <div
          style={{
            marginBottom: 13,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: 7,
              color: "#777",
            }}
          >
            <span>Team Efficiency</span>
            <span
              style={{
                color: "#42a868",
                fontWeight: 700,
              }}
            >
              {productivity.efficiency}
            </span>
          </div>

          <div
            style={{
              height: 3,
              borderRadius: 4,
              background: "#eadff3",
              marginTop: 5,
            }}
          >
            <div
              style={{
                width: "72%",
                height: "100%",
                borderRadius: 4,
                background: "#6d3ee5",
              }}
            />
          </div>
        </div>

        <div
          style={{
            marginBottom: 13,
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: 7,
              color: "#777",
            }}
          >
            <span>Task Completion</span>
            <span
              style={{
                fontWeight: 700,
                color: "#333",
              }}
            >
              {productivity.completion}
            </span>
          </div>

          <div
            style={{
              height: 3,
              borderRadius: 4,
              background: "#eadff3",
              marginTop: 5,
            }}
          >
            <div
              style={{
                width: "92%",
                height: "100%",
                borderRadius: 4,
                background: "#4e8fe8",
              }}
            />
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: 8,
          }}
        >
          <span
            style={{
              fontSize: 7,
              color: "#777",
            }}
          >
            Avg. Response Time
          </span>

          <strong
            style={{
              fontSize: 10,
              color: "#222",
            }}
          >
            {productivity.responseTime}
          </strong>
        </div>

        <div
          style={{
            marginTop: 18,
            padding: "7px 8px",
            borderRadius: 8,
            background: "rgba(110,60,220,0.07)",
            fontSize: 7,
            color: "#6b45b7",
          }}
        >
          ✦ Insights updated in real time
        </div>
      </div>
    </GlassCard>
  );
};

const ConnectionLines: React.FC = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [80, 115], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <svg
      width="736"
      height="414"
      viewBox="0 0 736 414"
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
        opacity,
      }}
    >
      <path
        d="M 520 105 C 555 105, 550 125, 580 145"
        fill="none"
        stroke="#d77ce8"
        strokeWidth="2"
      />

      <path
        d="M 520 185 C 550 185, 545 225, 555 235"
        fill="none"
        stroke="#d77ce8"
        strokeWidth="2"
      />

      <path
        d="M 530 280 C 550 280, 550 280, 555 280"
        fill="none"
        stroke="#d77ce8"
        strokeWidth="2"
      />

      <circle cx="520" cy="105" r="4" fill="#7a4ee8" />

      <circle cx="555" cy="280" r="4" fill="#7a4ee8" />
    </svg>
  );
};

export const Scene03Workspace: React.FC<{
  workspace: HumanSyncProps["workspace"];
}> = ({ workspace }) => {
  const frame = useCurrentFrame();

  const textProgress = interpolate(frame, [0, 30], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const textY = interpolate(textProgress, [0, 1], [25, 0]);

  return (
    <AbsoluteFill>
      <Background />

      {/* Main message */}

      <div
        style={{
          position: "absolute",
          left: 45,
          top: 135,
          width: 285,
          opacity: textProgress,
          transform: `translateY(${textY}px)`,
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 27,
            fontWeight: 700,
            color: "#111",
            lineHeight: 1.05,
          }}
        >
          Changes that
        </div>

        <div
          style={{
            marginTop: 9,
            fontSize: 10,
            fontStyle: "italic",
            color: "#555",
            lineHeight: 1.4,
            maxWidth: 210,
          }}
        >
          one intelligent workspace built to connect teams, workflows, and
          productivity in real time.
        </div>
      </div>

      {/* Small brand icon */}

      <div
        style={{
          position: "absolute",
          left: 130,
          top: 105,
          opacity: textProgress,
          transform: `scale(${0.8 + textProgress * 0.2})`,
        }}
      >
        <MiniBrandMark />
      </div>

      {/* Connection system */}

      <ConnectionLines />

      {/* Product UI */}

      <TeamConnectedCard members={workspace.teamMembers} />

      <WorkflowCard steps={workspace.workflowSteps} />

      <ProductivityCard productivity={workspace.productivity} />

      {/* Floating product icon */}

      <div
        style={{
          position: "absolute",
          left: 555,
          top: 45,
          width: 35,
          height: 35,
          borderRadius: 10,
          background: "linear-gradient(135deg, #7647e9, #9b5ce8)",
          boxShadow: "0 10px 25px rgba(100,40,150,0.18)",
          opacity: interpolate(frame, [70, 90], [0, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          }),
          transform: `scale(${interpolate(frame, [70, 90], [0.6, 1], {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
          })})`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MiniBrandMark />
      </div>
    </AbsoluteFill>
  );
};
