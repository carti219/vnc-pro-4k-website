import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientBody from "./ClientBody";

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "VNC Pro 4K - Premium IPTV Streaming Device | 30,000+ Channels",
  description: "Pre-configured VNC Pro 4K with premium IPTV service. 30,000+ live channels, 100,000+ movies & shows, 50+ countries. Order anonymously via email. Fast worldwide shipping. 24/7 technical support included.",
  keywords: ["IPTV", "streaming device", "VNC Pro 4K", "live TV", "movies", "sports", "PPV", "4K streaming", "cord cutting"],
  authors: [{ name: "VNC Pro 4K" }],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "VNC Pro 4K - Premium IPTV Streaming Device",
    description: "30,000+ channels, 100,000+ movies & shows. Pre-configured and ready to stream. Order today!",
    type: "website",
    locale: "en_US",
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "VNC Pro 4K - Premium IPTV Streaming Device",
    description: "30,000+ channels, 100,000+ movies & shows. Order your pre-configured device today!",
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <ClientBody>{children}</ClientBody>
    </html>
  );
}
