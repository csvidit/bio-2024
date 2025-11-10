import { AnalyticsData } from "@/actions/analytics";

interface VisitorOverviewProps {
  data: AnalyticsData;
}

const VisitorOverview = ({ data }: VisitorOverviewProps) => {
  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + "M";
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + "K";
    }
    return num.toString();
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Total Views */}
      <div className="bg-neutral-950 border border-neutral-900 rounded-lg p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-light text-neutral-600">Total Views</span>
          <div className="w-1 h-1 bg-lime-500 rounded-full"></div>
        </div>
        <div className="text-3xl font-light text-lime-500">
          {formatNumber(data.totalViews)}
        </div>
        <div className="text-xs text-neutral-600 mt-1">
          All page views
        </div>
      </div>

      {/* Unique Visitors */}
      <div className="bg-neutral-950 border border-neutral-900 rounded-lg p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-light text-neutral-600">Unique Visitors</span>
          <div className="w-1 h-1 bg-neutral-400 rounded-full"></div>
        </div>
        <div className="text-3xl font-light text-neutral-100">
          {formatNumber(data.uniqueVisitors)}
        </div>
        <div className="text-xs text-neutral-600 mt-1">
          Individual visitors
        </div>
      </div>

      {/* Engagement Rate */}
      <div className="bg-neutral-950 border border-neutral-900 rounded-lg p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-light text-neutral-600">Avg. Views/Visitor</span>
          <div className="w-1 h-1 bg-neutral-400 rounded-full"></div>
        </div>
        <div className="text-3xl font-light text-neutral-100">
          {data.uniqueVisitors > 0
            ? (data.totalViews / data.uniqueVisitors).toFixed(1)
            : "0"
          }
        </div>
        <div className="text-xs text-neutral-600 mt-1">
          Per unique visitor
        </div>
      </div>

      {/* Top Country */}
      <div className="bg-neutral-950 border border-neutral-900 rounded-lg p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-light text-neutral-600">Top Country</span>
          <div className="w-1 h-1 bg-lime-500 rounded-full"></div>
        </div>
        <div className="text-lg font-light text-lime-500">
          {data.topCountries.length > 0 ? data.topCountries[0].country : "—"}
        </div>
        <div className="text-xs text-neutral-600 mt-1">
          {data.topCountries.length > 0
            ? `${data.topCountries[0].count} visitors`
            : "No data"
          }
        </div>
      </div>
    </div>
  );
};

export default VisitorOverview;