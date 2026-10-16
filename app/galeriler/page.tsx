"use client";

import Link from "next/link";
import SocialLinks from "@/components/SocialLinks";
import { useData } from "@/lib/store";

export default function Page() {
  const { galleries, cars } = useData();
  return (
    <div className="container page">
      <h1 className="page-title">Galeriler</h1>
      <div className="gallery-grid">
        {galleries.map((g) => (
          <div key={g.id} className="gallery-card" style={{ borderTopColor: g.accent }}>
            <span className="avatar" style={{ background: g.accent }}>{g.name[0]}</span>
            <h3>{g.name}</h3>
            <p>{g.tagline}</p>
            <small>{g.city} · {cars.filter((c) => c.galleryId === g.id && c.status === "aktif").length} ilan</small>
            <SocialLinks social={g.social} />
            <Link href={`/galeri/${g.slug}`} className="btn btn-sm">Galeriyi Gör</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
