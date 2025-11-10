"use client";

import { useState, useEffect } from "react";
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
import { cn } from "@/utils/css-utils";

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
    <div className="min-h-screen w-screen bg-neutral-950 p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h1 className={cn("text-xl font-light text-lime-500 tracking-wide", )}><span className="text-neutral-50">VK Links</span> Analytics</h1>
          <div className="flex items-center gap-8">
            <Select value={dateRange} onValueChange={setDateRange}>
              <SelectTrigger className="w-40 bg-neutral-950 border-neutral-900 text-neutral-300 focus:ring-lime-500 focus:border-lime-500 focus:ring-opacity-20">
                <SelectValue placeholder="Select date range" className="text-neutral-300" />
              </SelectTrigger>
              <SelectContent className="bg-neutral-950 border-neutral-900">
                <SelectItem value="1" className="text-neutral-300 focus:bg-neutral-900 focus:text-lime-500">Last 24 hours</SelectItem>
                <SelectItem value="7" className="text-neutral-300 focus:bg-neutral-900 focus:text-lime-500">Last 7 days</SelectItem>
                <SelectItem value="30" className="text-neutral-300 focus:bg-neutral-900 focus:text-lime-500">Last 30 days</SelectItem>
              </SelectContent>
            </Select>
            <button
              onClick={() => window.location.href = "/api/auth/logout?"}
              className="text-neutral-600 hover:text-lime-500 transition-colors text-sm"
            >
              Sign out
            </button>
          </div>
        </div>

        {/* Loading State */}
        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="bg-neutral-950 border border-neutral-900 rounded-lg p-4">
                <div className="h-4 w-20 bg-neutral-900 rounded animate-pulse mb-3"></div>
                <div className="h-6 w-16 bg-neutral-900 rounded animate-pulse"></div>
              </div>
            ))}
          </div>
        )}

        {/* Analytics Content */}
        {!isLoading && analyticsData && (
          <div className="space-y-8">
            {/* Visitor Overview Cards */}
            <VisitorOverview data={analyticsData} />

            {/* Charts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Views Over Time */}
              <div className="lg:col-span-2 bg-neutral-950 border border-neutral-900 rounded-lg p-6">
                <div className="mb-4">
                  <h3 className="text-sm font-light text-neutral-100 mb-1">Views Over Time</h3>
                  <p className="text-xs text-neutral-600">
                    Page views for the selected time range
                  </p>
                </div>
                <ViewsOverTimeChart data={analyticsData.viewsOverTime} />
              </div>

              {/* Geographic Distribution */}
              <div className="bg-neutral-950 border border-neutral-900 rounded-lg p-6">
                <div className="mb-4">
                  <h3 className="text-sm font-light text-neutral-100 mb-1">Geographic Distribution</h3>
                  <p className="text-xs text-neutral-600">
                    Top countries by visitor count
                  </p>
                </div>
                <GeographicChart data={analyticsData.topCountries} />
              </div>

              {/* Device & Browser Breakdown */}
              <div className="bg-neutral-950 border border-neutral-900 rounded-lg p-6">
                <div className="mb-4">
                  <h3 className="text-sm font-light text-neutral-100 mb-1">Device & Browser Breakdown</h3>
                  <p className="text-xs text-neutral-600">
                    Visitor devices and browsers
                  </p>
                </div>
                <DeviceBrowserChart
                  deviceData={analyticsData.deviceBreakdown}
                  browserData={analyticsData.browserBreakdown}
                />
              </div>

              {/* Traffic Sources */}
              <div className="lg:col-span-2 bg-neutral-950 border border-neutral-900 rounded-lg p-6">
                <div className="mb-4">
                  <h3 className="text-sm font-light text-neutral-100 mb-1">Traffic Sources</h3>
                  <p className="text-xs text-neutral-600">
                    Where your visitors come from
                  </p>
                </div>
                <ReferrerChart data={analyticsData.referrerBreakdown} />
              </div>
            </div>
          </div>
        )}

        {/* Empty State */}
        {!isLoading && (!analyticsData || analyticsData.totalViews === 0) && (
          <div className="bg-neutral-950 border border-neutral-900 rounded-lg p-8 text-center">
            <h3 className="text-sm font-light text-neutral-100 mb-2">No Analytics Data</h3>
            <p className="text-xs text-neutral-600">
              Start sharing your link-in-bio page to see visitor analytics here.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
