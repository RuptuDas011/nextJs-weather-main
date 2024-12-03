import { GoogleTagManager } from '@next/third-parties/google'
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Weather App in Next JS",
  description: "Weather App in Next JS using Typescript and Javascript.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
       <GoogleTagManager gtmId="G-V9Z2QP6NC2" />
      <body className={inter.className}>
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=G-V9Z2QP6NC2"
height="0" width="0" style={{display:"none",visibility:"hidden"}}>
  </iframe>
  </noscript>

{children}

      </body>
    </html>
  );
}
