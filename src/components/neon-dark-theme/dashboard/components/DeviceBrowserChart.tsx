import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

interface DeviceBrowserChartProps {
  deviceData: Array<{ device: string; count: number; percentage: number }>;
  browserData: Array<{ browser: string; count: number; percentage: number }>;
}

const COLORS = [
  "#10B981", // green-500
  "#3B82F6", // blue-500
  "#F59E0B", // amber-500
  "#EF4444", // red-500
  "#8B5CF6", // violet-500
  "#EC4899", // pink-500
  "#06B6D4", // cyan-500
  "#84CC16", // lime-500
];

const DeviceBrowserChart = ({ deviceData, browserData }: DeviceBrowserChartProps) => {
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload[0]) {
      return (
        <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-3 shadow-lg">
          <p className="font-medium text-neutral-100">{payload[0].name}</p>
          <p className="text-sm text-neutral-400">
            {payload[0].value} users ({payload[0].payload.percentage}%)
          </p>
        </div>
      );
    }
    return null;
  };

  const CustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }: any) => {
    if (percent < 0.05) return null; // Don't show labels for small slices

    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
        fontSize={12}
        fontWeight="bold"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  const renderCustomizedLabel = (props: any) => {
    const { x, y, width, value } = props;
    return (
      <text
        x={x + width / 2}
        y={y}
        fill="white"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize={12}
        fontWeight="bold"
      >
        {value}
      </text>
    );
  };

  if ((!deviceData || deviceData.length === 0) && (!browserData || browserData.length === 0)) {
    return (
      <div className="flex items-center justify-center h-[300px] text-neutral-500">
        No device or browser data available
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Device Breakdown */}
      {deviceData && deviceData.length > 0 && (
        <div>
          <h4 className="text-sm font-medium mb-4 text-center text-neutral-100">Devices</h4>
          <div className="h-[140px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={deviceData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={CustomLabel}
                  outerRadius={50}
                  fill="#8884d8"
                  dataKey="count"
                >
                  {deviceData.map((entry, index) => (
                    <Cell key={`device-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-wrap justify-center gap-2 mt-2">
            {deviceData.slice(0, 4).map((device, index) => (
              <div key={device.device} className="flex items-center gap-1 text-xs text-neutral-300">
                <div
                  className="w-3 h-3 rounded"
                  style={{ backgroundColor: COLORS[index % COLORS.length] }}
                />
                <span className="capitalize">{device.device.toLowerCase()}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Browser Breakdown */}
      {browserData && browserData.length > 0 && (
        <div>
          <h4 className="text-sm font-medium mb-4 text-center text-neutral-100">Browsers</h4>
          <div className="h-[140px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={browserData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={CustomLabel}
                  outerRadius={50}
                  fill="#8884d8"
                  dataKey="count"
                >
                  {browserData.map((entry, index) => (
                    <Cell key={`browser-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-wrap justify-center gap-2 mt-2">
            {browserData.slice(0, 4).map((browser, index) => (
              <div key={browser.browser} className="flex items-center gap-1 text-xs text-neutral-300">
                <div
                  className="w-3 h-3 rounded"
                  style={{ backgroundColor: COLORS[index % COLORS.length] }}
                />
                <span>{browser.browser}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DeviceBrowserChart;