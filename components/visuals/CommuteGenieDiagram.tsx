/** CommuteGenie — LangGraph agent routing (portfolio dark theme) */

type NodeProps = {
  x: number;
  y: number;
  w: number;
  h: number;
  label: string;
  fill: string;
  stroke: string;
};

function Node({ x, y, w, h, label, fill, stroke }: NodeProps) {
  const lines = label.split("\n");
  const lineHeight = 13;
  const startY = y + h / 2 - ((lines.length - 1) * lineHeight) / 2 + 4;

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx={10}
        fill={fill}
        stroke={stroke}
        strokeWidth={1.5}
      />
      {lines.map((line, i) => (
        <text
          key={line}
          x={x + w / 2}
          y={startY + i * lineHeight}
          textAnchor="middle"
          fill="#fff"
          fontSize={10}
          fontWeight={600}
          fontFamily="var(--font-jetbrains), monospace"
        >
          {line}
        </text>
      ))}
    </g>
  );
}

function Arrow({ d }: { d: string }) {
  return (
    <path
      d={d}
      fill="none"
      stroke="rgba(0,255,224,0.35)"
      strokeWidth={1.2}
      markerEnd="url(#arrowhead)"
    />
  );
}

export default function CommuteGenieDiagram() {
  return (
    <div className="w-full rounded-xl border border-cyan-accent/15 bg-[#0a0a12] p-4 md:p-6 overflow-x-auto">
      <p className="font-mono text-xs text-cyan-accent/80 mb-4 text-center md:text-left">
        CommuteGenie — LangGraph Agent Routing
      </p>
      <svg
        viewBox="0 0 520 340"
        className="w-full min-w-[320px] max-w-xl mx-auto h-auto"
        role="img"
        aria-label="CommuteGenie LangGraph agent routing diagram"
      >
        <defs>
          <marker
            id="arrowhead"
            markerWidth="8"
            markerHeight="8"
            refX="6"
            refY="4"
            orient="auto"
          >
            <polygon points="0 0, 8 4, 0 8" fill="rgba(0,255,224,0.5)" />
          </marker>
        </defs>

        {/* Row 1 */}
        <Node
          x={20}
          y={16}
          w={88}
          h={36}
          label="User Query"
          fill="rgba(0,255,224,0.12)"
          stroke="#00FFE0"
        />
        <Arrow d="M 108 34 L 138 34" />
        <Node
          x={140}
          y={16}
          w={100}
          h={36}
          label="Manager Router"
          fill="rgba(123,47,255,0.2)"
          stroke="#7B2FFF"
        />

        {/* Router to agents */}
        <Arrow d="M 190 52 L 190 72 L 72 72 L 72 88" />
        <Arrow d="M 190 52 L 190 72 L 190 88" />
        <Arrow d="M 190 52 L 190 72 L 308 72 L 308 88" />
        <Arrow d="M 190 52 L 190 72 L 426 72 L 426 88" />

        {/* Row 2 — agents */}
        <Node
          x={28}
          y={90}
          w={88}
          h={40}
          label={"Trip\nPlanner"}
          fill="rgba(123,47,255,0.15)"
          stroke="#9d6bff"
        />
        <Node
          x={146}
          y={90}
          w={88}
          h={40}
          label={"Transport\nAgent"}
          fill="rgba(236,72,153,0.15)"
          stroke="#ec4899"
        />
        <Node
          x={264}
          y={90}
          w={88}
          h={40}
          label={"Context\nAgent"}
          fill="rgba(0,255,224,0.1)"
          stroke="#00FFE0"
        />
        <Node
          x={382}
          y={90}
          w={88}
          h={40}
          label={"Weather\nAgent"}
          fill="rgba(52,211,153,0.12)"
          stroke="#34d399"
        />

        {/* Agents to writer */}
        <Arrow d="M 72 130 L 72 148 L 230 148 L 230 168" />
        <Arrow d="M 190 130 L 190 168" />
        <Arrow d="M 308 130 L 308 148 L 230 148" />
        <Arrow d="M 426 130 L 426 148 L 230 148" />

        <Node
          x={180}
          y={170}
          w={100}
          h={36}
          label="Manager Writer"
          fill="rgba(123,47,255,0.2)"
          stroke="#7B2FFF"
        />

        <Arrow d="M 230 206 L 230 228" />
        <Node
          x={168}
          y={230}
          w={124}
          h={40}
          label={"Critic Agent\n(Validator)"}
          fill="rgba(248,113,113,0.12)"
          stroke="#f87171"
        />

        <Arrow d="M 292 250 L 380 250 L 380 268" />
        <Node
          x={352}
          y={270}
          w={88}
          h={36}
          label="Final Answer"
          fill="rgba(0,255,224,0.12)"
          stroke="#00FFE0"
        />
      </svg>
    </div>
  );
}
