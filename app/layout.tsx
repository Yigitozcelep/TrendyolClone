import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MainNavbar from "../components/Navbars/MainNavbar";
import LinksNavbar from "@/components/Navbars/LinksNavbar";
import CategoriesNavBar from "@/components/Navbars/CategoriesNavBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} >
        <div className="flex justify-around border-1">
          <div className="flex flex-col w-[1240] shrink-0">
            <LinksNavbar/>
            <MainNavbar/>
            <CategoriesNavBar/>
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
