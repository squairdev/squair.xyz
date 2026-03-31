import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Wallpapers",
  description: "Wallpapers for iOS",
  openGraph: {
    title: `My Wallpapers`,
    description: 'Wallpapers for iOS',
    images: [
      {
        url: '/opengraph-image.png',
        width: 64,
        height: 64,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://use.typekit.net" as="style"/>
        <link rel="stylesheet" href="https://use.typekit.net/taj5rlj.css" as="style"/>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}