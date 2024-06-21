"use client"

import NeonDarkTheme from "@/components/neon-dark-theme/NeonDarkTheme";
import { firestore } from "@/utils/firebase.config";
import { setDoc, doc } from "firebase/firestore/lite";
import { nanoid } from "nanoid";
import UAParser from "ua-parser-js";
// import { headers } from "next/headers";
import { useEffect } from "react";

export default function Home({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  // const request_headers = headers();
  const slug = params.slug;
  const geo = navigator.geolocation;

  // await fetch("/api/analytics", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     Authorization: `Bearer ${process.env.ANALYTICS_ADD_TOKEN}`,
  //   },
  //   body: JSON.stringify({
  //     request_headers: Object.fromEntries(request_headers.entries()),
  //     slug,
  //     searchParams,
  //     geo: geo,
  //   }),
  // });

  useEffect(() => {
    const recordPageView = async () => {
      try {
        await fetch("/api/analytics", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${process.env.ANALYTICS_ADD_TOKEN}`,
          },
          body: JSON.stringify({
            // request_headers: Object.fromEntries(request_headers.entries()),
            slug,
            searchParams,
            geo: geo,
          }),
        });
      } catch (error) {
        console.error("Error sending analytics data:", error);
      }
    };

    recordPageView()
  });

  // await trackPageView(request_headers, slug, searchParams, geo);

  return <NeonDarkTheme />;
}
//   request_headers: Headers,
//   pathname: string,
//   searchParams: { [key: string]: string | string[] | undefined },
//   geo: Geolocation
// ) => {
//   const userAgent = request_headers.get("user-agent") || "";
//   const ip = request_headers.get("x-forwarded-for") || "";
//   const referrer = request_headers.get("referer") || "";
//   const language = request_headers.get("accept-language") || "";
//   const queryParams = Object.fromEntries(
//     Object.entries(searchParams).filter(([_, value]) => value !== undefined),
//   );

//   if (referrer === "http://localhost:3000/") {
//     return;
//   }

//   const parser = new UAParser(userAgent);
//   const browser = parser.getBrowser();
//   const os = parser.getOS();
//   const device = parser.getDevice();

//   let latitude: number | null = null;
//   let longitude: number | null = null;
//   let city: string | null = null;
//   let country: string | null = null;

//   if (geo) {
//     try {
//       const position = await new Promise<GeolocationPosition>(
//         (resolve, reject) => {
//           geo.getCurrentPosition(resolve, reject);
//         },
//       );

//       latitude = position.coords.latitude;
//       longitude = position.coords.longitude;

//       // Reverse geocode the coordinates to get the city and country
//       const response = await fetch(
//         `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`,
//       );
//       const data = await response.json();

//       city = data.city;
//       country = data.countryName;
//     } catch (error) {
//       console.error("Error retrieving geolocation:", error);
//     }
//   }

//   const data = {
//     timestamp: new Date(),
//     ip,
//     userAgent,
//     browser: browser.name,
//     browserVersion: browser.version,
//     os: os.name,
//     osVersion: os.version,
//     device: device.type,
//     referrer,
//     pageUrl: `/${pathname}`,
//     queryParams,
//     language,
//     latitude,
//     longitude,
//     city,
//     country,
//   };

//   // Remove undefined values from the data object
//   const filteredData = Object.fromEntries(
//     Object.entries(data).filter(([_, value]) => value !== undefined),
//   );

//   const docId = nanoid();

//   try {
//     await setDoc(doc(firestore, "pageViews", docId), filteredData);
//   } catch (error) {
//     console.error("Error storing analytics data:", error);
//   }
// };
