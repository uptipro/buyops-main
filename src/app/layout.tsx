import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import Navigation from "@/components/Navigation";
import FeedbackWidgetWrapper from "@/components/FeedbackWidgetWrapper";

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jost",
});

export const metadata: Metadata = {
  title: "BuyOps - Own the Future of Real Estate",
  description:
    "The unified ecosystem for Nigeria's smartest investors, agents, and administrators.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "BuyOps - Own the Future of Real Estate",
    description:
      "The unified ecosystem for Nigeria's smartest investors, agents, and administrators.",
    url: "https://buyops.ng",
    siteName: "BuyOps",
    images: [
      {
        url: "/favicon.svg",
        width: 400,
        height: 400,
        alt: "BuyOps Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "BuyOps - Own the Future of Real Estate",
    description:
      "The unified ecosystem for Nigeria's smartest investors, agents, and administrators.",
    images: [
      {
        url: "/favicon.svg",
        alt: "BuyOps Logo",
      },
    ],
    site: "@buyops_ng",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${jost.variable} font-primary`}>
        <SmoothScrollProvider>
          <Navigation />
          {children}
          {/* <FeedbackWidgetWrapper /> */}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
