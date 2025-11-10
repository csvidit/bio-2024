import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";

interface ViewsOverTimeChartProps {
  data: Array<{ date: string; views: number }>;
}

const ViewsOverTimeChart = ({ data }: ViewsOverTimeChartProps) => {
  // Check if data is hourly (contains 'T' character like "2024-01-15T14")
  const isHourlyData = data.some(item => item.date.includes('T'));

  const formatDate = (dateString: string): string => {
    if (isHourlyData) {
      // For hourly data, parse the ISO string as UTC and convert to local time
      // dateString format: "2024-01-15T14"
      const utcDateTimeString = dateString + ":00:00Z";
      const date = new Date(utcDateTimeString);
      return date.toLocaleTimeString("en-US", {
        hour: "numeric",
        hour12: true,
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
      });
    } else {
      // For daily data, show "Jan 15" in local timezone
      const date = new Date(dateString + "T00:00:00Z");
      return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
      });
    }
  };

  const chartData = data.map(item => ({
    ...item,
    formattedDate: formatDate(item.date),
    sortKey: isHourlyData ? new Date(item.date + ":00:00Z").getTime() : new Date(item.date).getTime(),
  })).sort((a, b) => a.sortKey - b.sortKey);

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload[0]) {
      const dateString = payload[0].payload.date;
      const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      let formattedDate: string;
      if (isHourlyData) {
        // For hourly data, parse as UTC and convert to local timezone
        const utcDateTimeString = dateString + ":00:00Z";
        const date = new Date(utcDateTimeString);
        formattedDate = date.toLocaleDateString("en-US", {
          weekday: "short",
          month: "short",
          day: "numeric",
          timeZone: userTimeZone
        }) + ", " + date.toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
          timeZone: userTimeZone
        });
      } else {
        // For daily data, show full date in local timezone
        const date = new Date(dateString + "T00:00:00Z");
        formattedDate = date.toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
          timeZone: userTimeZone
        });
      }

      return (
        <div className="bg-neutral-900 border border-neutral-800 rounded-lg p-3 shadow-lg">
          <p className="font-medium text-neutral-100">{formattedDate}</p>
          <p className="text-sm text-neutral-400">
            {payload[0].value} page views
          </p>
        </div>
      );
    }
    return null;
  };

  const CustomDot = (props: any) => {
    const { cx, cy, payload } = props;
    if (payload.views === 0) return null;

    return (
      <circle
        cx={cx}
        cy={cy}
        r={4}
        fill="#10B981"
        stroke="#111827"
        strokeWidth={2}
      />
    );
  };

  if (!data || data.length === 0) {
    return (
      <div className="flex items-center justify-center h-[300px] text-neutral-500">
        No views data available
      </div>
    );
  }

  const maxViews = Math.max(...data.map(d => d.views));
  const totalViews = data.reduce((sum, d) => sum + d.views, 0);
  const avgViews = Math.round(totalViews / data.length);

  return (
    <div className="space-y-4">
      {/* Summary Stats */}
      <div className="grid grid-cols-3 gap-4 text-center">
        <div>
          <div className="text-2xl font-bold text-green-500">{totalViews.toLocaleString()}</div>
          <div className="text-sm text-neutral-400">Total Views</div>
        </div>
        <div>
          <div className="text-2xl font-bold text-green-500">{avgViews.toLocaleString()}</div>
          <div className="text-sm text-neutral-400">
            {isHourlyData ? "Hourly Average" : "Daily Average"}
          </div>
        </div>
        <div>
          <div className="text-2xl font-bold text-green-500">{maxViews.toLocaleString()}</div>
          <div className="text-sm text-neutral-400">
            {isHourlyData ? "Peak Hour" : "Peak Day"}
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="h-[350px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={chartData}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0,
            }}
          >
            <defs>
              <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#374151"
              strokeOpacity={0.3}
            />
            <XAxis
              dataKey="formattedDate"
              tick={{ fontSize: 11, fill: "#9CA3AF" }}
              interval={isHourlyData ? 3 : "preserveStartEnd"}
              axisLine={{ stroke: "#374151" }}
            />
            <YAxis
              tick={{ fontSize: 11, fill: "#9CA3AF" }}
              axisLine={{ stroke: "#374151" }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="views"
              stroke="#10B981"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorViews)"
              dot={<CustomDot />}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ViewsOverTimeChart;