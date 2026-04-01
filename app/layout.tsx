import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hey, I'm Squair.",
  description: "A solo web developer.",
  openGraph: {
    title: `Hey, I'm Squair.`,
    description: 'A solo web developer.',
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
      <body>
        {children}
      </body>
    </html>
  );
}