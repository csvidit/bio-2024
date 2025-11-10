import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

interface DeviceBrowserChartProps {
  deviceData: Array<{ device: string; count: number; percentage: number }>;
  browserData: Array<{ browser: string; count: number; percentage: number }>;
}

const COLORS = [
  "#84CC16", // lime-500
  "#374151", // neutral-700
  "#4B5563", // neutral-600
  "#6B7280", // neutral-500
];

const DeviceBrowserChart = ({ deviceData, browserData }: DeviceBrowserChartProps) => {
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload[0]) {
      return (
        <div className="bg-neutral-950 border border-neutral-900 rounded-lg p-3 shadow-sm">
          <p className="text-xs font-light text-neutral-100 mb-1">{payload[0].name}</p>
          <p className="text-sm font-light text-lime-500">
            {payload[0].value} users ({payload[0].payload.percentage}%)
          </p>
        </div>
      );
    }
    return null;
  };

  if ((!deviceData || deviceData.length === 0) && (!browserData || browserData.length === 0)) {
    return (
      <div className="flex items-center justify-center h-[200px] text-neutral-700">
        No device or browser data available
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Device Breakdown */}
      {deviceData && deviceData.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-light text-neutral-600">Devices</span>
          </div>
          <div className="h-[120px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={deviceData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={40}
                  fill="#8884d8"
                  dataKey="count"
                >
                  {deviceData.map((entry, index) => (
                    <Cell key={`device-${index}`} fill={COLORS[index % COLORS.length]} className="hover:opacity-80" />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            {deviceData.slice(0, 4).map((device, index) => (
              <div key={device.device} className="flex items-center gap-2 text-xs">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: COLORS[index % COLORS.length] }}
                />
                <span className="text-neutral-400 capitalize">{device.device.toLowerCase()}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Browser Breakdown */}
      {browserData && browserData.length > 0 && (
        <div>
          <div className="flex items-center justify-between mb-3">
            <span className="text-xs font-light text-neutral-600">Browsers</span>
          </div>
          <div className="h-[120px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={browserData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={40}
                  fill="#8884d8"
                  dataKey="count"
                >
                  {browserData.map((entry, index) => (
                    <Cell key={`browser-${index}`} fill={COLORS[index % COLORS.length]} className="hover:opacity-80" />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-wrap justify-center gap-3 mt-4">
            {browserData.slice(0, 4).map((browser, index) => (
              <div key={browser.browser} className="flex items-center gap-2 text-xs">
                <div
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: COLORS[index % COLORS.length] }}
                />
                <span className="text-neutral-400">{browser.browser}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DeviceBrowserChart;