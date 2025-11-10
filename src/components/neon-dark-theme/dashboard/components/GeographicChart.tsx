import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

interface GeographicChartProps {
  data: Array<{ country: string; count: number }>;
}

const GeographicChart = ({ data }: GeographicChartProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const chartData = data.slice(0, 10).map((item) => ({
    country:
      item.country.length > 15
        ? item.country.substring(0, 12) + "..."
        : item.country,
    fullCountry: item.country,
    visitors: item.count,
  }));

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload[0]) {
      return (
        <div className="rounded-lg border border-neutral-900 bg-neutral-950 p-3 shadow-sm">
          <p className="mb-1 text-xs font-light text-neutral-100">
            {payload[0].payload.fullCountry}
          </p>
          <p className="text-sm font-light text-lime-500">
            {payload[0].value} visitors
          </p>
        </div>
      );
    }
    return null;
  };

  if (!data || data.length === 0) {
    return (
      <div className="flex h-[250px] items-center justify-center text-neutral-700">
        No geographic data available
      </div>
    );
  }

  return (
    <div className="h-[250px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={chartData}
          margin={{
            top: 10,
            right: 20,
            left: 0,
            bottom: 60,
          }}
        >
          <CartesianGrid
            strokeDasharray="1 1"
            stroke="#1F2937"
            strokeOpacity={0.3}
          />
          <XAxis
            dataKey="country"
            angle={-45}
            textAnchor="end"
            height={80}
            tick={{ fontSize: 10, fill: "#6B7280" }}
            axisLine={{ stroke: "#1F2937" }}
          />
          <YAxis
            tick={{ fontSize: 10, fill: "#6B7280" }}
            axisLine={{ stroke: "#1F2937" }}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: "#262626" }} />
          <Bar dataKey="visitors" fill="#84CC16" radius={[2, 2, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GeographicChart;
