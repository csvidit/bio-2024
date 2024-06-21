"use server";

import NeonDarkTheme from "@/components/neon-dark-theme/NeonDarkTheme";
import { firestore } from "@/utils/firebase.config";
import { setDoc, doc } from "firebase/firestore/lite";
import { nanoid } from "nanoid";
import UAParser from "ua-parser-js";
import { headers } from "next/headers";
import axios from "axios";

export default async function Home({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const request_headers = headers();
  const slug = params.slug;

  await trackPageView(request_headers, slug, searchParams);

  return <NeonDarkTheme />;
}

const trackPageView = async (
  request_headers: Headers,
  pathname: string,
  searchParams: { [key: string]: string | string[] | undefined },
) => {
  const userAgent = request_headers.get("user-agent") || "";
  const ip = request_headers.get("x-forwarded-for") || "";
  const referrer = request_headers.get("referer") || "";
  const language = request_headers.get("accept-language") || "";
  const queryParams = Object.fromEntries(
    Object.entries(searchParams).filter(([_, value]) => value !== undefined),
  );

  if (referrer === "http://localhost:3000/") {
    return;
  }

  const parser = new UAParser(userAgent);
  const browser = parser.getBrowser();
  const os = parser.getOS();
  const device = parser.getDevice();

  let latitude: number | null = null;
  let longitude: number | null = null;
  let city: string | null = null;
  let country: string | null = null;

  try {
    const response = await axios.get(`http://ip-api.com/json/${ip}`);
    const data = response.data;
    latitude = data.lat;
    longitude = data.lon;
    city = data.city;
    country = data.country;
  } catch (error) {
    console.error("Error fetching IP data:", error);
  }

  const data = {
    timestamp: new Date(),
    ip,
    userAgent,
    browser: browser.name,
    browserVersion: browser.version,
    os: os.name,
    osVersion: os.version,
    device: device.type,
    referrer,
    queryParams,
    language,
    latitude,
    longitude,
    city,
    country,
  };

  // Remove undefined values from the data object
  const filteredData = Object.fromEntries(
    Object.entries(data).filter(([_, value]) => value !== undefined),
  );

  const docId = nanoid();

  try {
    await setDoc(doc(firestore, "pageViews", docId), filteredData);
  } catch (error) {
    console.error("Error storing analytics data:", error);
  }
};
