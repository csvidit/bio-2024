import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface ReferrerChartProps {
  data: Array<{ referrerType: string; count: number; percentage: number }>;
}

const ReferrerChart = ({ data }: ReferrerChartProps) => {
  const getReferrerLabel = (type: string): string => {
    switch (type) {
      case "Direct":
        return "Direct Traffic";
      case "External":
        return "External Sites";
      case "Social":
        return "Social Media";
      case "Search":
        return "Search Engines";
      default:
        return type;
    }
  };

  const chartData = data.map(item => ({
    type: getReferrerLabel(item.referrerType),
    count: item.count,
    percentage: item.percentage,
  }));

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload[0]) {
      return (
        <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-3 shadow-lg">
          <p className="font-medium text-neutral-100">{payload[0].payload.type}</p>
          <p className="text-sm text-neutral-400">
            {payload[0].value} visitors ({payload[0].payload.percentage}%)
          </p>
        </div>
      );
    }
    return null;
  };

  const CustomLabel = ({ x, y, width, value }: any) => {
    return (
      <text
        x={x + width / 2}
        y={y - 5}
        fill="#F3F4F6"
        textAnchor="middle"
        fontSize={12}
        fontWeight="bold"
      >
        {value}
      </text>
    );
  };

  if (!data || data.length === 0) {
    return (
      <div className="flex items-center justify-center h-[300px] text-neutral-500">
        No referrer data available
      </div>
    );
  }

  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={chartData}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#374151"
            strokeOpacity={0.3}
          />
          <XAxis
            dataKey="type"
            tick={{ fontSize: 12, fill: "#9CA3AF" }}
            axisLine={{ stroke: "#374151" }}
          />
          <YAxis
            tick={{ fontSize: 12, fill: "#9CA3AF" }}
            axisLine={{ stroke: "#374151" }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar
            dataKey="count"
            fill="#3B82F6"
            radius={[4, 4, 0, 0]}
            label={CustomLabel}
            className="fill-blue-500"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ReferrerChart;