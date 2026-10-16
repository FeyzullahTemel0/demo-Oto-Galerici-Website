import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { DataProvider } from "@/lib/store";
import "./globals.css";

export const metadata: Metadata = {
  title: "OtoVitrin | Oto Galeriler İçin Web Sitesi ve İlan Platformu",
  description: "Oto galericilerin kendi sayfasında araç ilanlarını yayınladığı demo platform.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>
        <DataProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </DataProvider>
      </body>
    </html>
  );
}
