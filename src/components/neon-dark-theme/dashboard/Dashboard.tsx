"use client";

import { useState, useEffect } from "react";
import ListLink from "@/components/neon-dark-theme/links/ListLink";
import { PiSignOutFill } from "react-icons/pi";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getAnalyticsData, AnalyticsData } from "@/actions/analytics";
import VisitorOverview from "./components/VisitorOverview";
import GeographicChart from "./components/GeographicChart";
import DeviceBrowserChart from "./components/DeviceBrowserChart";
import ReferrerChart from "./components/ReferrerChart";
import ViewsOverTimeChart from "./components/ViewsOverTimeChart";

const Dashboard = () => {
  const [analyticsData, setAnalyticsData] = useState<AnalyticsData | null>(
    null,
  );
  const [isLoading, setIsLoading] = useState(true);
  const [dateRange, setDateRange] = useState<string>("7");

  useEffect(() => {
    const fetchAnalytics = async () => {
      setIsLoading(true);
      try {
        const days = parseInt(dateRange);
        const data = await getAnalyticsData(days);
        setAnalyticsData(data);
      } catch (error) {
        console.error("Failed to fetch analytics:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAnalytics();
  }, [dateRange]);

  return (
    <div className="flex h-full w-screen flex-col gap-4 p-8 *:text-xs lg:*:text-sm">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex flex-row items-center justify-between">
          <h1 className="text-2xl font-bold">Analytics Dashboard</h1>
          <div className="flex items-center gap-4">
            <Select value={dateRange} onValueChange={setDateRange}>
              <SelectTrigger className="w-[180px] bg-neutral-900 border-neutral-800 text-neutral-100 focus:ring-green-500 focus:border-green-500">
                <SelectValue placeholder="Select date range" className="text-neutral-100" />
              </SelectTrigger>
              <SelectContent className="bg-neutral-900 border-neutral-800">
                <SelectItem value="1" className="text-neutral-100 focus:bg-neutral-800">Last 24 hours</SelectItem>
                <SelectItem value="7" className="text-neutral-100 focus:bg-neutral-800">Last 7 days</SelectItem>
                <SelectItem value="30" className="text-neutral-100 focus:bg-neutral-800">Last 30 days</SelectItem>
              </SelectContent>
            </Select>
            <ListLink
              className="w-fit"
              icon={<PiSignOutFill />}
              href="/api/auth/logout?"
            >
              Log out
            </ListLink>
          </div>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[...Array(4)].map((_, i) => (
              <Card key={i} className="animate-pulse bg-neutral-900 border-neutral-800">
                <CardHeader className="pb-2">
                  <div className="h-4 w-3/4 rounded bg-neutral-700"></div>
                </CardHeader>
                <CardContent>
                  <div className="h-8 w-1/2 rounded bg-neutral-700"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Analytics Content */}
        {!isLoading && analyticsData && (
          <div className="space-y-6">
            {/* Visitor Overview Cards */}
            <VisitorOverview data={analyticsData} />

            {/* Charts Grid */}
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
              {/* Views Over Time */}
              <Card className="lg:col-span-2 bg-neutral-900 border-neutral-800">
                <CardHeader>
                  <CardTitle className="text-neutral-100">Views Over Time</CardTitle>
                  <CardDescription className="text-neutral-400">
                    Daily page views for the last 30 days
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ViewsOverTimeChart data={analyticsData.viewsOverTime} />
                </CardContent>
              </Card>

              {/* Geographic Distribution */}
              <Card className="bg-neutral-900 border-neutral-800">
                <CardHeader>
                  <CardTitle className="text-neutral-100">Geographic Distribution</CardTitle>
                  <CardDescription className="text-neutral-400">
                    Top countries by visitor count
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <GeographicChart data={analyticsData.topCountries} />
                </CardContent>
              </Card>

              {/* Device & Browser Breakdown */}
              <Card className="bg-neutral-900 border-neutral-800">
                <CardHeader>
                  <CardTitle className="text-neutral-100">Device & Browser Breakdown</CardTitle>
                  <CardDescription className="text-neutral-400">
                    Visitor devices and browsers
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <DeviceBrowserChart
                    deviceData={analyticsData.deviceBreakdown}
                    browserData={analyticsData.browserBreakdown}
                  />
                </CardContent>
              </Card>

              {/* Traffic Sources */}
              <Card className="lg:col-span-2 bg-neutral-900 border-neutral-800">
                <CardHeader>
                  <CardTitle className="text-neutral-100">Traffic Sources</CardTitle>
                  <CardDescription className="text-neutral-400">
                    Where your visitors come from
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ReferrerChart data={analyticsData.referrerBreakdown} />
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Empty State */}
        {!isLoading && (!analyticsData || analyticsData.totalViews === 0) && (
          <Card className="bg-neutral-900 border-neutral-800">
            <CardHeader>
              <CardTitle className="text-neutral-100">No Analytics Data</CardTitle>
              <CardDescription className="text-neutral-400">
                Start sharing your link-in-bio page to see visitor analytics
                here.
              </CardDescription>
            </CardHeader>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
