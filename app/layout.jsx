import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import {Header} from "./components/header"
import { Footer } from "./components/footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio",
  description: "Wisdom portfolio weebsite",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`container ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
      <Header />
      <div className="min-h-screen">
        {children}
      </div>
      <Footer />
        
      </body>
    </html>
  );
}
