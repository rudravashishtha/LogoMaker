import { Inter } from "next/font/google";
import "./globals.css";
import AdSense from "@/components/AdSense";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cologo",
  description: "Logo Making Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <AdSense />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
