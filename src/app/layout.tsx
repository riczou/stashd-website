import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://stashdapp.io"),
  title: "Stashd - Save workouts. Get fit.",
  description: "Save workout videos from TikTok, Instagram, and YouTube. Our AI analyzes exercises, sets, and reps. Build weekly routines and track your progress.",
  keywords: ["fitness app", "workout tracker", "save workouts", "TikTok workouts", "Instagram workouts", "YouTube workouts", "AI fitness", "exercise tracker"],
  authors: [{ name: "Stashd" }],
  openGraph: {
    title: "Stashd - Save workouts. Get fit.",
    description: "Save workout videos from TikTok, Instagram, and YouTube. Our AI analyzes exercises, sets, and reps.",
    url: "https://stashdapp.io",
    siteName: "Stashd",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Stashd - Save workouts. Get fit.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stashd - Save workouts. Get fit.",
    description: "Save workout videos from TikTok, Instagram, and YouTube. Our AI analyzes exercises, sets, and reps.",
    images: ["/og-image.png"],
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
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
