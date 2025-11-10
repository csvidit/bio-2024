import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface GeographicChartProps {
  data: Array<{ country: string; count: number }>;
}

const GeographicChart = ({ data }: GeographicChartProps) => {
  const chartData = data.slice(0, 10).map(item => ({
    country: item.country.length > 15 ? item.country.substring(0, 12) + "..." : item.country,
    fullCountry: item.country,
    visitors: item.count,
  }));

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload[0]) {
      return (
        <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-3 shadow-lg">
          <p className="font-medium text-neutral-100">{payload[0].payload.fullCountry}</p>
          <p className="text-sm text-neutral-400">
            {payload[0].value} visitors
          </p>
        </div>
      );
    }
    return null;
  };

  if (!data || data.length === 0) {
    return (
      <div className="flex items-center justify-center h-[300px] text-neutral-500">
        No geographic data available
      </div>
    );
  }

  return (
    <div className="h-[300px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={chartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 60,
          }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="#374151"
            strokeOpacity={0.3}
          />
          <XAxis
            dataKey="country"
            angle={-45}
            textAnchor="end"
            height={100}
            tick={{ fontSize: 12, fill: "#9CA3AF" }}
            axisLine={{ stroke: "#374151" }}
          />
          <YAxis
            tick={{ fontSize: 12, fill: "#9CA3AF" }}
            axisLine={{ stroke: "#374151" }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar
            dataKey="visitors"
            fill="#10B981"
            radius={[4, 4, 0, 0]}
            className="fill-green-500"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GeographicChart;