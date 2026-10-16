"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import SocialLinks from "./SocialLinks";
import { platform } from "@/lib/data";
import { useData } from "@/lib/store";

export default function Footer() {
  const path = usePathname();
  const { galleries } = useData();
  if (path.startsWith("/yonetim")) return null;
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Link href="/" className="logo">
            <span className="logo-mark">O</span> {platform.name}
          </Link>
          <p>Türkiye'deki oto galericilerin kendi sitesini kurduğu, araçlarını kolayca listelediği ve alıcılarla buluştuğu vitrin platformu.</p>
          <SocialLinks social={platform.social} />
        </div>
        <div>
          <h4>Keşfet</h4>
          <Link href="/ilanlar">Tüm İlanlar</Link>
          <Link href="/galeriler">Galeriler</Link>
          <Link href="/hakkimizda">Hakkımızda</Link>
          <Link href="/iletisim">İletişim</Link>
        </div>
        <div>
          <h4>Galeriler</h4>
          {galleries.map((g) => (
            <Link key={g.id} href={`/galeri/${g.slug}`}>{g.name}</Link>
          ))}
          <Link href="/yonetim/giris">Galeri Girişi</Link>
        </div>
        <div>
          <h4>İletişim</h4>
          <span>{platform.address}</span>
          <a href={`tel:${platform.phone.replace(/\s/g, "")}`}>{platform.phone}</a>
          <a href={`mailto:${platform.email}`}>{platform.email}</a>
        </div>
      </div>
      <div className="container footer-bottom">© 2026 {platform.name} · Bu site bir demo çalışmasıdır; galeriler ve ilanlar kurgusaldır.</div>
    </footer>
  );
}
