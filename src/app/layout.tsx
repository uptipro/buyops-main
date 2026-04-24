import type { Metadata } from "next";
import { Jost } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import Navigation from "@/components/Navigation";
import FeedbackWidgetWrapper from "@/components/FeedbackWidgetWrapper";
import Script from "next/script";

const jost = Jost({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jost",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://buyops.ng"),
  title: "Invest in Nigerian Real Estate | BuyOps",
  description:
    "Buy verified land and property across Nigeria. Earn returns through fractional real estate investment. Join thousands of smart investors on BuyOps.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", type: "image/x-icon" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "Invest in Nigerian Real Estate | BuyOps",
    description:
      "Buy verified land and property across Nigeria. Earn returns through fractional real estate investment. Join thousands of smart investors on BuyOps.",
    url: "https://buyops.ng",
    siteName: "BuyOps",
    locale: "en_NG",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "BuyOps — Invest in Nigerian Real Estate",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Invest in Nigerian Real Estate | BuyOps",
    description:
      "Buy verified land and property across Nigeria. Earn returns through fractional real estate investment. Join thousands of smart investors on BuyOps.",
    images: [
      {
        url: "/og-image.png",
        alt: "BuyOps — Invest in Nigerian Real Estate",
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
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID;

  return (
    <html lang="en">
      <body className={`${jost.variable} font-primary`}>
        {/* Google Analytics 4 */}
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script
              id="ga4-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}');`,
              }}
            />
          </>
        )}
        {/* Google Tag Manager */}
        {gtmId && (
          <Script
            id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`,
            }}
          />
        )}
        {/* Meta Pixel */}
        {pixelId && (
          <Script
            id="fb-pixel"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${pixelId}');fbq('track','PageView');`,
            }}
          />
        )}
        <SmoothScrollProvider>
          <Navigation />
          {children}
          {/* <FeedbackWidgetWrapper /> */}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
