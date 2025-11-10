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
        <div className="bg-neutral-950 border border-neutral-900 rounded-lg p-3 shadow-sm">
          <p className="text-xs font-light text-neutral-100 mb-1">{formattedDate}</p>
          <p className="text-sm font-light text-lime-500">
            {payload[0].value} views
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
        r={2}
        fill="#84CC16"
        stroke="#84CC16"
        strokeWidth={1}
      />
    );
  };

  if (!data || data.length === 0) {
    return (
      <div className="flex items-center justify-center h-[300px] text-neutral-700">
        No views data available
      </div>
    );
  }

  const maxViews = Math.max(...data.map(d => d.views));
  const totalViews = data.reduce((sum, d) => sum + d.views, 0);
  const avgViews = Math.round(totalViews / data.length);

  return (
    <div className="space-y-4">
      {/* Chart */}
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={chartData}
            margin={{
              top: 10,
              right: 20,
              left: 0,
              bottom: 20,
            }}
          >
            <defs>
              <linearGradient id="colorViews" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#84CC16" stopOpacity={0.2}/>
                <stop offset="95%" stopColor="#84CC16" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="1 1"
              stroke="#1F2937"
              strokeOpacity={0.3}
            />
            <XAxis
              dataKey="formattedDate"
              tick={{ fontSize: 10, fill: "#6B7280" }}
              interval={isHourlyData ? 4 : "preserveStartEnd"}
              axisLine={{ stroke: "#1F2937" }}
            />
            <YAxis
              tick={{ fontSize: 10, fill: "#6B7280" }}
              axisLine={{ stroke: "#1F2937" }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="views"
              stroke="#84CC16"
              strokeWidth={1}
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