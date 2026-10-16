"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { platform } from "@/lib/data";
import { useData } from "@/lib/store";

const links = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/ilanlar", label: "İlanlar" },
  { href: "/galeriler", label: "Galeriler" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Header() {
  const path = usePathname();
  const { session } = useData();
  if (path.startsWith("/yonetim")) return null;
  const active = (h: string) => (h === "/" ? path === "/" : path.startsWith(h));
  return (
    <header className="header">
      <div className="container nav">
        <Link href="/" className="logo">
          <span className="logo-mark">O</span> {platform.name}
        </Link>
        <nav>
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={active(l.href) ? "active" : ""}>
              {l.label}
            </Link>
          ))}
        </nav>
        <Link href={session ? "/yonetim" : "/yonetim/giris"} className="btn btn-sm">
          {session ? "Yönetim Paneli" : "Galeri Girişi"}
        </Link>
      </div>
    </header>
  );
}
