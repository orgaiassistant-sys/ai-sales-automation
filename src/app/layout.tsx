import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI Sales Automation",
  description: "AI-powered social media sales automation platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
