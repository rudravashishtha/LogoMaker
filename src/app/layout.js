import { Inter } from "next/font/google";
import "./globals.css";
import Adsense from "@/components/Adsense";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cologo",
  description: "Logo Making Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Adsense />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
