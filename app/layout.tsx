import type { Metadata } from "next";
import Link from "next/link";
import { gallery } from "@/lib/data";
import "./globals.css";

export const metadata: Metadata = {
  title: `${gallery.name} | İkinci El Araç`,
  description: "Demo oto galeri web sitesi: araç ilanları, filtreleme ve detay sayfaları.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="tr">
      <body>
        <header className="header">
          <div className="container nav">
            <Link href="/" className="logo">
              <span className="logo-mark">D</span> {gallery.name}
            </Link>
            <nav>
              <Link href="/">İlanlar</Link>
              <Link href="/iletisim">İletişim</Link>
              <a className="btn btn-sm" href={`tel:${gallery.phone.replace(/\s/g, "")}`}>{gallery.phone}</a>
            </nav>
          </div>
        </header>
        <main className="container">{children}</main>
        <footer className="footer">
          <div className="container">
            © 2026 {gallery.name} · Bu site bir demo çalışmasıdır, ilanlar kurgusaldır.
          </div>
        </footer>
      </body>
    </html>
  );
}
