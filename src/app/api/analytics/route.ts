import { firestore } from "@/utils/firebase.config";
import { setDoc, doc } from "firebase/firestore";
import { nanoid } from "nanoid";
import { NextRequest } from "next/server";
import UAParser from "ua-parser-js";

export async function POST(req: NextRequest) {
  try {
    if (req.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method Not Allowed" }), {
        status: 405,
        headers: { "Content-Type": "application/json" },
      });
    }

    // const authHeader = req.headers.get("authorization");
    // const token = authHeader && authHeader.split(" ")[1];

    // if (token !== process.env.ANALYTICS_ADD_TOKEN) {
    //   return new Response(JSON.stringify({ error: "Unauthorized" }), {
    //     status: 401,
    //     headers: { "Content-Type": "application/json" },
    //   });
    // }

    const body = await req.json();
    // const { request_headers, slug, searchParams, geo } = body;

    // await trackPageView(request_headers, slug, searchParams, geo);

    const { slug, searchParams, geo } = body;
    const request_headers = req.headers;

    await trackPageView(request_headers, slug, searchParams, geo);

    return new Response(JSON.stringify({ success: true }), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error processing request:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

const trackPageView = async (
    request_headers: Headers,
    slug: string,
    searchParams: { [key: string]: string | string[] | undefined },
    geo: Geolocation
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
  
    if (geo) {
      try {
        const position = await new Promise<GeolocationPosition>(
          (resolve, reject) => {
            geo.getCurrentPosition(resolve, reject);
          },
        );
  
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
  
        // Reverse geocode the coordinates to get the city and country
        const response = await fetch(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`,
        );
        const data = await response.json();
  
        city = data.city;
        country = data.countryName;
      } catch (error) {
        console.error("Error retrieving geolocation:", error);
      }
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
      pageUrl: `/${slug}`,
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
  