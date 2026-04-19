import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Respring",
  description: "Respring using Neonmodder's method",
  openGraph: {
    title: `Respring`,
    description: `Respring using Neonmodder's method`
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
      <body>
        {children}
      </body>
    </html>
  );
}