import MainContainer from "@/components/neon-dark-theme/containers/MainContainer";
import "../globals.css"
import { Onest, Inter } from "next/font/google";
import { gantari, onest } from "@/utils/fonts";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <body className={gantari.className}>
        <MainContainer>{children}</MainContainer>
      </body>
    </html>
  );
}