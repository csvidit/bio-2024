"use server";

import { collection, getDocs, query, where, orderBy } from "firebase/firestore/lite";
import { firestore as db } from "@/utils/firebase.config";

export interface PageViewData {
  timestamp: Date;
  ip: string;
  userAgent: string;
  browser: string;
  browserVersion: string;
  os: string;
  osVersion: string;
  device: string | undefined;
  referrer: string;
  referrerType: string;
  referringURL: string;
  pathname: string;
  queryParams: object;
  language: string;
  latitude: number | null;
  longitude: number | null;
  city: string | null;
  country: string | null;
}

export interface AnalyticsData {
  totalViews: number;
  uniqueVisitors: number;
  topCountries: Array<{ country: string; count: number }>;
  topCities: Array<{ city: string; count: number }>;
  deviceBreakdown: Array<{ device: string; count: number; percentage: number }>;
  browserBreakdown: Array<{ browser: string; count: number; percentage: number }>;
  referrerBreakdown: Array<{ referrerType: string; count: number; percentage: number }>;
  viewsOverTime: Array<{ date: string; views: number }>;
  recentViews: PageViewData[];
}

export async function getAnalyticsData(days: number = 7): Promise<AnalyticsData> {
  try {
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);

    const pageViewsRef = collection(db, "pageViews");
    const q = query(
      pageViewsRef,
      where("timestamp", ">=", startDate),
      orderBy("timestamp", "desc")
    );

    const querySnapshot = await getDocs(q);
    const views: PageViewData[] = [];

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      views.push({
        timestamp: data.timestamp?.toDate() || new Date(),
        ip: data.ip || "",
        userAgent: data.userAgent || "",
        browser: data.browser || "Unknown",
        browserVersion: data.browserVersion || "",
        os: data.os || "Unknown",
        osVersion: data.osVersion || "",
        device: data.device,
        referrer: data.referrer || "",
        referrerType: data.referrerType || "Unknown",
        referringURL: data.referringURL || "",
        pathname: data.pathname || "",
        queryParams: data.queryParams || {},
        language: data.language || "",
        latitude: data.latitude || null,
        longitude: data.longitude || null,
        city: data.city || null,
        country: data.country || null,
      });
    });

    return processAnalyticsData(views, days);
  } catch (error) {
    console.error("Error fetching analytics data:", error);
    return getEmptyAnalyticsData();
  }
}

function processAnalyticsData(views: PageViewData[], days: number): AnalyticsData {
  if (views.length === 0) {
    return getEmptyAnalyticsData();
  }

  const totalViews = views.length;
  const uniqueVisitors = new Set(views.map(v => v.ip)).size;

  // Country breakdown
  const countryCounts: Record<string, number> = {};
  views.forEach(view => {
    if (view.country) {
      countryCounts[view.country] = (countryCounts[view.country] || 0) + 1;
    }
  });
  const topCountries = Object.entries(countryCounts)
    .map(([country, count]) => ({ country, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10);

  // City breakdown
  const cityCounts: Record<string, number> = {};
  views.forEach(view => {
    if (view.city) {
      cityCounts[view.city] = (cityCounts[view.city] || 0) + 1;
    }
  });
  const topCities = Object.entries(cityCounts)
    .map(([city, count]) => ({ city, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10);

  // Device breakdown
  const deviceCounts: Record<string, number> = {};
  views.forEach(view => {
    const device = view.device || "Unknown";
    deviceCounts[device] = (deviceCounts[device] || 0) + 1;
  });
  const deviceBreakdown = Object.entries(deviceCounts)
    .map(([device, count]) => ({
      device,
      count,
      percentage: Math.round((count / totalViews) * 100)
    }))
    .sort((a, b) => b.count - a.count);

  // Browser breakdown
  const browserCounts: Record<string, number> = {};
  views.forEach(view => {
    browserCounts[view.browser] = (browserCounts[view.browser] || 0) + 1;
  });
  const browserBreakdown = Object.entries(browserCounts)
    .map(([browser, count]) => ({
      browser,
      count,
      percentage: Math.round((count / totalViews) * 100)
    }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 8);

  // Referrer breakdown
  const referrerCounts: Record<string, number> = {};
  views.forEach(view => {
    referrerCounts[view.referrerType] = (referrerCounts[view.referrerType] || 0) + 1;
  });
  const referrerBreakdown = Object.entries(referrerCounts)
    .map(([referrerType, count]) => ({
      referrerType,
      count,
      percentage: Math.round((count / totalViews) * 100)
    }))
    .sort((a, b) => b.count - a.count);

  // Views over time - dynamic based on date range
  const viewsOverTime: Array<{ date: string; views: number }> = [];

  if (days === 1) {
    // For 24 hours, show hourly data
    const viewsByHour: Record<string, number> = {};

    views.forEach(view => {
      const hour = view.timestamp.toISOString().substring(0, 13); // YYYY-MM-DDTHH
      viewsByHour[hour] = (viewsByHour[hour] || 0) + 1;
    });

    // Generate hourly data for the last 24 hours
    const endDate = new Date();
    const startDate = new Date(endDate.getTime() - 24 * 60 * 60 * 1000);

    for (let d = new Date(startDate); d <= endDate; d.setTime(d.getTime() + 60 * 60 * 1000)) {
      const hour = d.toISOString().substring(0, 13);
      viewsOverTime.push({
        date: hour,
        views: viewsByHour[hour] || 0
      });
    }
  } else {
    // For days (7, 30), show daily data
    const viewsByDate: Record<string, number> = {};

    views.forEach(view => {
      const date = view.timestamp.toISOString().split('T')[0];
      viewsByDate[date] = (viewsByDate[date] || 0) + 1;
    });

    // Generate daily data for the specified period
    const endDate = new Date();
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);

    for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
      const date = d.toISOString().split('T')[0];
      viewsOverTime.push({
        date,
        views: viewsByDate[date] || 0
      });
    }
  }

  return {
    totalViews,
    uniqueVisitors,
    topCountries,
    topCities,
    deviceBreakdown,
    browserBreakdown,
    referrerBreakdown,
    viewsOverTime,
    recentViews: views.slice(0, 50) // Last 50 views
  };
}

function getEmptyAnalyticsData(): AnalyticsData {
  return {
    totalViews: 0,
    uniqueVisitors: 0,
    topCountries: [],
    topCities: [],
    deviceBreakdown: [],
    browserBreakdown: [],
    referrerBreakdown: [],
    viewsOverTime: [],
    recentViews: []
  };
}