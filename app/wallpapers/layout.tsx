import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "My Wallpapers",
  description: "Wallpapers for iOS",
  openGraph: {
    title: `My Wallpapers`,
    description: `My wallpapers made in Mica, Apple's internal software`
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
        <link rel="preconnect" href="https://use.typekit.net"/>
        <link rel="stylesheet" href="https://use.typekit.net/taj5rlj.css" as="style"/>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}