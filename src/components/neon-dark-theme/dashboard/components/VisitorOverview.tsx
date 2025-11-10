import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AnalyticsData } from "@/actions/analytics";
import { Users, Eye, TrendingUp, Globe } from "lucide-react";

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

  const getPercentageChange = (current: number, previous: number): number => {
    if (previous === 0) return 0;
    return Math.round(((current - previous) / previous) * 100);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Total Views */}
      <Card className="bg-neutral-900 border-neutral-800">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-neutral-100">Total Views</CardTitle>
          <Eye className="h-4 w-4 text-green-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-green-500">{formatNumber(data.totalViews)}</div>
          <p className="text-xs text-neutral-400">
            Total page views
          </p>
        </CardContent>
      </Card>

      {/* Unique Visitors */}
      <Card className="bg-neutral-900 border-neutral-800">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-neutral-100">Unique Visitors</CardTitle>
          <Users className="h-4 w-4 text-blue-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-blue-500">{formatNumber(data.uniqueVisitors)}</div>
          <p className="text-xs text-neutral-400">
            Individual visitors
          </p>
        </CardContent>
      </Card>

      {/* Engagement Rate */}
      <Card className="bg-neutral-900 border-neutral-800">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-neutral-100">Avg. Views/Visitor</CardTitle>
          <TrendingUp className="h-4 w-4 text-amber-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-amber-500">
            {data.uniqueVisitors > 0
              ? (data.totalViews / data.uniqueVisitors).toFixed(1)
              : "0"
            }
          </div>
          <p className="text-xs text-neutral-400">
            Views per unique visitor
          </p>
        </CardContent>
      </Card>

      {/* Top Country */}
      <Card className="bg-neutral-900 border-neutral-800">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-neutral-100">Top Country</CardTitle>
          <Globe className="h-4 w-4 text-violet-500" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold text-violet-500">
            {data.topCountries.length > 0 ? data.topCountries[0].country : "N/A"}
          </div>
          <p className="text-xs text-neutral-400">
            {data.topCountries.length > 0
              ? `${data.topCountries[0].count} visitors`
              : "No data"
            }
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default VisitorOverview;