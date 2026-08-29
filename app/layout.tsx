import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TechStore - Your Premium Tech Shop",
  description: "Shop the latest gadgets and tech products",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-gray-50">
        <nav className="bg-blue-600 text-white shadow-lg">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <Link href="/" className="text-2xl font-bold">
                TechStore
              </Link>
              <div className="flex gap-6">
                <Link href="/" className="hover:text-blue-200 transition">
                  Home
                </Link>
                <Link href="/products" className="hover:text-blue-200 transition">
                  Products
                </Link>
                <Link href="/cart" className="hover:text-blue-200 transition">
                  Cart
                </Link>
                <Link href="/about" className="hover:text-blue-200 transition">
                  About
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <main className="flex-1">{children}</main>
        <footer className="bg-gray-800 text-white py-8 mt-12">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p>&copy; 2024 TechStore. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
