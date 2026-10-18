import React from 'react';

export interface QuadrantPoint {
  id: string;
  x: number; // 0 to 100
  y: number; // 0 to 100
  name?: string;
  tier?: string;
  type?: string;
  module?: string;
  segment?: string;
  systems?: string;
  tps?: string;
  latency?: string;
  dealWindow?: string;
  tcoImpact?: string;
  capexSavings?: string;
  [key: string]: any;
}

export interface ExecutiveQuadrantChartProps {
  xAxisLabel: string;
  yAxisLabel: string;
  points: QuadrantPoint[];
  selectedPointId: string;
  onSelectPoint?: (id: string) => void;
  quadrantLabels?: {
    q1?: string;
    q2?: string;
    q3?: string;
    q4?: string;
  };
  getPointLabel?: (pt: QuadrantPoint) => string;
  className?: string;
}

export const ExecutiveQuadrantChart: React.FC<ExecutiveQuadrantChartProps> = ({
  xAxisLabel,
  yAxisLabel,
  points,
  selectedPointId,
  onSelectPoint,
  quadrantLabels,
  getPointLabel,
  className = ''
}) => {
  // SVG Canvas configuration with generous margins for axis titles, ticks, and numbers
  const width = 560;
  const height = 210;

  const originX = 54;
  const originY = 172;
  const plotTop = 26;
  const plotRight = 500;

  const plotW = plotRight - originX; // 446
  const plotH = originY - plotTop;   // 146

  const midX = originX + plotW / 2;  // 277
  const midY = plotTop + plotH / 2;  // 99

  // Helper to map 0-100 coordinates to SVG pixels
  const getPixelCoord = (x: number, y: number) => {
    const clampedX = Math.max(0, Math.min(100, x));
    const clampedY = Math.max(0, Math.min(100, y));
    const px = originX + (clampedX / 100) * plotW;
    const py = originY - (clampedY / 100) * plotH;
    return { px, py };
  };

  const ticks = [0, 25, 50, 75, 100];

  return (
    <div className={`relative w-full h-full select-none ${className}`}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full h-full overflow-visible font-inter"
      >
        <defs>
          {/* Subtle drop shadow for point badges */}
          <filter id="badge-shadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="1" stdDeviation="1" floodColor="#0f172a" floodOpacity="0.08" />
          </filter>
        </defs>

        {/* 1. Subtle Quadrant Background Areas */}
        <rect
          x={originX}
          y={plotTop}
          width={plotW / 2}
          height={plotH / 2}
          fill="#f8fafc"
          opacity="0.4"
        />
        <rect
          x={midX}
          y={plotTop}
          width={plotW / 2}
          height={plotH / 2}
          fill="#eff6ff"
          opacity="0.35"
        />
        <rect
          x={originX}
          y={midY}
          width={plotW / 2}
          height={plotH / 2}
          fill="#f8fafc"
          opacity="0.2"
        />
        <rect
          x={midX}
          y={midY}
          width={plotW / 2}
          height={plotH / 2}
          fill="#f8fafc"
          opacity="0.4"
        />

        {/* 2. Quadrant Dividing Lines (Center Dashed Lines at 50, 50) */}
        <line
          x1={midX}
          y1={plotTop}
          x2={midX}
          y2={originY}
          stroke="#94a3b8"
          strokeWidth="1.2"
          strokeDasharray="4 4"
        />
        <line
          x1={originX}
          y1={midY}
          x2={plotRight}
          y2={midY}
          stroke="#94a3b8"
          strokeWidth="1.2"
          strokeDasharray="4 4"
        />

        {/* 3. Quadrant Corner Watermark Labels */}
        <text
          x={originX + 8}
          y={plotTop + 13}
          fill="#94a3b8"
          fontSize="8"
          fontFamily="monospace"
          fontWeight="700"
          className="uppercase"
        >
          {quadrantLabels?.q2 || 'Q2: Strategic / Pre-Emption'}
        </text>
        <text
          x={plotRight - 8}
          y={plotTop + 13}
          textAnchor="end"
          fill="#2563eb"
          fontSize="8"
          fontFamily="monospace"
          fontWeight="700"
          className="uppercase"
        >
          {quadrantLabels?.q1 || 'Q1: P1 Priority Migration'}
        </text>
        <text
          x={originX + 8}
          y={originY - 8}
          fill="#94a3b8"
          fontSize="8"
          fontFamily="monospace"
          fontWeight="700"
          className="uppercase"
        >
          {quadrantLabels?.q4 || 'Q4: Nurturing / Niche'}
        </text>
        <text
          x={plotRight - 8}
          y={originY - 8}
          textAnchor="end"
          fill="#64748b"
          fontSize="8"
          fontFamily="monospace"
          fontWeight="700"
          className="uppercase"
        >
          {quadrantLabels?.q3 || 'Q3: Rapid Go-Live / High Volume'}
        </text>

        {/* 4. Axis Grid Ticks & Numbers (0, 25, 50, 75, 100) */}
        {ticks.map((val) => {
          const { px, py } = getPixelCoord(val, val);
          return (
            <g key={val}>
              {/* Y-Axis tick & number */}
              <line
                x1={originX - 4}
                y1={py}
                x2={originX}
                y2={py}
                stroke="#64748b"
                strokeWidth="1"
              />
              <text
                x={originX - 7}
                y={py + 3}
                textAnchor="end"
                fill="#64748b"
                fontSize="8"
                fontFamily="monospace"
                fontWeight="600"
              >
                {val}
              </text>

              {/* X-Axis tick & number */}
              <line
                x1={px}
                y1={originY}
                x2={px}
                y2={originY + 4}
                stroke="#64748b"
                strokeWidth="1"
              />
              <text
                x={px}
                y={originY + 14}
                textAnchor="middle"
                fill="#64748b"
                fontSize="8"
                fontFamily="monospace"
                fontWeight="600"
              >
                {val}
              </text>
            </g>
          );
        })}

        {/* 5. Cartesian Solid Axes with Arrows */}
        {/* Y-Axis Line */}
        <line
          x1={originX}
          y1={originY}
          x2={originX}
          y2={plotTop - 8}
          stroke="#334155"
          strokeWidth="1.8"
        />
        {/* Y-Axis Arrow */}
        <polygon
          points={`${originX - 3.5},${plotTop - 7} ${originX},${plotTop - 15} ${originX + 3.5},${plotTop - 7}`}
          fill="#334155"
        />
        {/* Y-Axis Title */}
        <text
          x={originX + 6}
          y={plotTop - 7}
          fill="#0f172a"
          fontSize="9"
          fontFamily="inter, sans-serif"
          fontWeight="800"
        >
          ↑ {yAxisLabel} (Y)
        </text>

        {/* X-Axis Line */}
        <line
          x1={originX}
          y1={originY}
          x2={plotRight + 12}
          y2={originY}
          stroke="#334155"
          strokeWidth="1.8"
        />
        {/* X-Axis Arrow */}
        <polygon
          points={`${plotRight + 11},${originY - 3.5} ${plotRight + 19},${originY} ${plotRight + 11},${originY + 3.5}`}
          fill="#334155"
        />
        {/* X-Axis Title */}
        <text
          x={plotRight + 18}
          y={originY + 23}
          textAnchor="end"
          fill="#0f172a"
          fontSize="9"
          fontFamily="inter, sans-serif"
          fontWeight="800"
        >
          {xAxisLabel} (X) →
        </text>

        {/* 6. Projection Dashed Coordinate Lines from Points to Axes */}
        {points.map((pt) => {
          const { px, py } = getPixelCoord(pt.x, pt.y);
          const isSelected = selectedPointId === pt.id;

          return (
            <g key={`proj-${pt.id}`} opacity={isSelected ? 1 : 0.65}>
              {/* Vertical line to X axis */}
              <line
                x1={px}
                y1={py}
                x2={px}
                y2={originY}
                stroke={isSelected ? '#2563eb' : '#94a3b8'}
                strokeWidth={isSelected ? '1.4' : '1'}
                strokeDasharray="3 3"
              />
              {/* Horizontal line to Y axis */}
              <line
                x1={originX}
                y1={py}
                x2={px}
                y2={py}
                stroke={isSelected ? '#2563eb' : '#94a3b8'}
                strokeWidth={isSelected ? '1.4' : '1'}
                strokeDasharray="3 3"
              />

              {/* Exact coordinate projection value tag on X-axis (if selected) */}
              {isSelected && (
                <g>
                  <rect
                    x={px - 10}
                    y={originY + 1}
                    width={20}
                    height={10}
                    rx="2"
                    fill="#1d4ed8"
                  />
                  <text
                    x={px}
                    y={originY + 8.5}
                    textAnchor="middle"
                    fill="#ffffff"
                    fontSize="7"
                    fontFamily="monospace"
                    fontWeight="800"
                  >
                    {pt.x}
                  </text>
                </g>
              )}

              {/* Exact coordinate projection value tag on Y-axis (if selected) */}
              {isSelected && (
                <g>
                  <rect
                    x={originX - 19}
                    y={py - 5}
                    width={18}
                    height={10}
                    rx="2"
                    fill="#1d4ed8"
                  />
                  <text
                    x={originX - 10}
                    y={py + 2.5}
                    textAnchor="middle"
                    fill="#ffffff"
                    fontSize="7"
                    fontFamily="monospace"
                    fontWeight="800"
                  >
                    {pt.y}
                  </text>
                </g>
              )}
            </g>
          );
        })}

        {/* 7. Points (Titik-Titik) and Clear Coordinate Labels */}
        {points.map((pt) => {
          const { px, py } = getPixelCoord(pt.x, pt.y);
          const isSelected = selectedPointId === pt.id;
          const label = getPointLabel
            ? getPointLabel(pt)
            : pt.name || pt.tier || pt.module || pt.id;

          // Determine label box offset to prevent overflowing the plot
          const isRightHalf = pt.x > 50;
          const isTopHalf = pt.y > 60;

          const boxX = isRightHalf ? px - 110 : px + 10;
          const boxY = isTopHalf ? py + 4 : py - 18;

          return (
            <g
              key={pt.id}
              className="cursor-pointer transition-all"
              onClick={() => onSelectPoint && onSelectPoint(pt.id)}
            >
              {/* Outer pulsing ring for selected point */}
              {isSelected && (
                <circle
                  cx={px}
                  cy={py}
                  r="11"
                  fill="#2563eb"
                  opacity="0.25"
                  className="animate-pulse"
                />
              )}

              {/* Distinct circular point dot (Titik) */}
              <circle
                cx={px}
                cy={py}
                r={isSelected ? 6 : 5}
                fill={isSelected ? '#1d4ed8' : '#2563eb'}
                stroke="#ffffff"
                strokeWidth={isSelected ? '2.5' : '2'}
              />
              <circle
                cx={px}
                cy={py}
                r="1.8"
                fill="#ffffff"
              />

              {/* Clean label card with clear coordinate numbers (Angka Koordinat) */}
              <g transform={`translate(${boxX}, ${boxY})`} filter="url(#badge-shadow)">
                <rect
                  x="0"
                  y="0"
                  width="104"
                  height="17"
                  rx="4"
                  fill={isSelected ? '#ffffff' : '#f8fafc'}
                  stroke={isSelected ? '#2563eb' : '#cbd5e1'}
                  strokeWidth={isSelected ? '1.4' : '1'}
                />

                {/* Point Name */}
                <text
                  x="5"
                  y="11.5"
                  fill={isSelected ? '#0f172a' : '#334155'}
                  fontSize="8"
                  fontFamily="inter, sans-serif"
                  fontWeight={isSelected ? '800' : '600'}
                >
                  {label.length > 14 ? label.substring(0, 13) + '…' : label}
                </text>

                {/* Clear Coordinate Value Badge (x, y) */}
                <rect
                  x="68"
                  y="2.5"
                  width="32"
                  height="12"
                  rx="2.5"
                  fill={isSelected ? '#eff6ff' : '#f1f5f9'}
                  stroke={isSelected ? '#bfdbfe' : '#e2e8f0'}
                  strokeWidth="0.8"
                />
                <text
                  x="84"
                  y="11"
                  textAnchor="middle"
                  fill={isSelected ? '#1d4ed8' : '#475569'}
                  fontSize="7.5"
                  fontFamily="monospace"
                  fontWeight="700"
                >
                  {pt.x},{pt.y}
                </text>
              </g>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default ExecutiveQuadrantChart;
