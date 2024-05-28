import MainContainer from "@/components/MainContainer";
import "./globals.css";
import localFont from "next/font/local";
import { DM_Mono } from "next/font/google";
import Script from "next/script";

export const metadata = {
  title: "Vidit Khandelwal Links",
  description:
    "Vidit Khandelwal's link in bio. He is a software engineer, web developer and UI engineer. Based in the United States",
  authors: [
    { name: "Vidit Khandelwal", url: "https://2024.viditkhandelwal.com" },
  ],
  applicationName: "Vidit Khandelwal Portfolio",
  keywords: [
    "Vidit Khandelwal",
    "Vidit",
    "DePauw",
    "DePauw University",
    "DPU",
    "Indianapolis",
    "Computer Science",
    "graduate",
    "entry level",
    "CS",
    "CSE",
    "software engineer",
    "web developer",
    "UI Engineer",
    "Economics",
    "Oxford",
  ],
  openGraph: {
    title: "Vidit Khandelwal Links",
    description: "Vidit Khandelwal Links",
    url: "https://bio.viditkhandelwal.com",
    siteName: "Vidit Khandelwal Links",
    images: [
      {
        url: "https://viditkhandelwal.nyc3.cdn.digitaloceanspaces.com/portfolio-2024-og.png",
        alt: "Vidit Khandelwal, Software Engineer, in text on a gradient background",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

const inter4 = localFont({
  src: [
    {
      path: "./InterVariable.woff2",
      style: "normal",
    },
    {
      path: "InterVariable-Italic.woff2",
      style: "italic",
    },
  ],
  display: "swap",
});

const dm_mono = DM_Mono({
  subsets: ["latin-ext"],
  weight: ["300", "400", "500"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script
        defer
        src="https://static.cloudflareinsights.com/beacon.min.js"
        data-cf-beacon='{"token": "89d76c777558419b9a37bd3eea92d613"}'
      ></Script>
      <body className={dm_mono.className}>
        <MainContainer>{children}</MainContainer>
      </body>
    </html>
  );
}
