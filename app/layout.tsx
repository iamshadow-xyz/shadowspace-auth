import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Administrator from "@/components/providers/provider";
import Header from "@/components/header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shadowspace Auth",
  description: "A simple auth example using NextAuth",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.className} dark antialiased`}
      >
        <Administrator>
          <Header />
          <div className="max-w-4xl mx-auto p-5">
            {children}
          </div>
        </Administrator>
      </body>
    </html>
  );
}
