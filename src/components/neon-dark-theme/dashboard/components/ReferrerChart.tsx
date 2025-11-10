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
        <div className="bg-neutral-950 border border-neutral-900 rounded-lg p-3 shadow-sm">
          <p className="text-xs font-light text-neutral-100 mb-1">{payload[0].payload.type}</p>
          <p className="text-sm font-light text-lime-500">
            {payload[0].value} visitors ({payload[0].payload.percentage}%)
          </p>
        </div>
      );
    }
    return null;
  };

  if (!data || data.length === 0) {
    return (
      <div className="flex items-center justify-center h-[200px] text-neutral-700">
        No referrer data available
      </div>
    );
  }

  return (
    <div className="h-[200px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={chartData}
          margin={{
            top: 10,
            right: 20,
            left: 0,
            bottom: 40,
          }}
        >
          <CartesianGrid
            strokeDasharray="1 1"
            stroke="#1F2937"
            strokeOpacity={0.3}
          />
          <XAxis
            dataKey="type"
            tick={{ fontSize: 10, fill: "#6B7280" }}
            axisLine={{ stroke: "#1F2937" }}
          />
          <YAxis
            tick={{ fontSize: 10, fill: "#6B7280" }}
            axisLine={{ stroke: "#1F2937" }}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: "#262626" }} />
          <Bar
            dataKey="count"
            fill="#84CC16"
            radius={[2, 2, 0, 0]}
            className="hover:fill-opacity-80"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ReferrerChart;