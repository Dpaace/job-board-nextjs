import '@/app/styles/globals.css';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "@/app/ui/components/Header";
import Footer from "@/app/ui/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gemello | Home Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Header */}
        <Header />
        
        {/* Main Content */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}

