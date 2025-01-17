import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Cairo_Play } from "next/font/google"; // Import Cairo Play properly
import Navbar from "@/components/navbar";
import "@rainbow-me/rainbowkit/styles.css";
import "./globals.css";
import { Providers } from "./providers";

// Import Geist Sans and Mono fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Import Cairo Play font
const cairoPlay = Cairo_Play({
  variable: "--font-cairo-play",
  subsets: ["latin"],
  weight: ["200", "400", "600", "800", "1000"], // Specify desired font weights
});

export const metadata: Metadata = {
  title: "BiLL HUB",
  description: "The BILL token hub",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cairoPlay.variable} antialiased min-h-screen backgorundColor text-white`}
      >
        <Providers>
          <Navbar />
          <main className="mt-10">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
