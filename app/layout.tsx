import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BottomNav from "@/components/BottomNav";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "S.D Modern School - Nursery to Class 8th",
  description: "S.D Modern School, Gijhore Sector 53 Noida — quality education from Nursery to Class 8th with holistic development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main className="min-h-screen pb-20 lg:pb-0">{children}</main>
        <BottomNav />
        <Footer />
      </body>
    </html>
  );
}

