"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import SocialLinks from "./SocialLinks";
import { useData } from "@/lib/store";

export default function GalleryShell({ slug, children }: { slug: string; children: ReactNode }) {
  const { galleries, cars } = useData();
  const path = usePathname();
  const g = galleries.find((x) => x.slug === slug);

  if (!g) {
    return (
      <div className="container page">
        <p className="empty">Galeri bulunamadı. <Link href="/galeriler" className="link">Galerilere dön</Link></p>
      </div>
    );
  }

  const base = `/galeri/${g.slug}`;
  const tabs = [
    { href: base, label: `İlanlar (${cars.filter((c) => c.galleryId === g.id && c.status === "aktif").length})` },
    { href: `${base}/hakkimizda`, label: "Hakkımızda" },
    { href: `${base}/iletisim`, label: "İletişim" },
  ];

  return (
    <>
      <section className="g-banner" style={{ background: `linear-gradient(135deg, ${g.accent}, #0f172a)` }}>
        <div className="container g-banner-in">
          <span className="avatar big" style={{ background: "#fff", color: g.accent }}>{g.name[0]}</span>
          <div>
            <h1>{g.name}</h1>
            <p>{g.tagline}</p>
            <small>{g.address}</small>
          </div>
          <div className="g-actions">
            <a className="btn btn-light" href={`tel:${g.phone.replace(/\s/g, "")}`}>{g.phone}</a>
            <a className="btn btn-green" href={`https://wa.me/${g.whatsapp}`} target="_blank" rel="noreferrer">WhatsApp</a>
            <SocialLinks social={g.social} className="on-dark" />
          </div>
        </div>
      </section>
      <div className="g-tabs">
        <div className="container">
          {tabs.map((t) => (
            <Link key={t.href} href={t.href} className={path === t.href ? "active" : ""}>{t.label}</Link>
          ))}
        </div>
      </div>
      <div className="container page">{children}</div>
    </>
  );
}
