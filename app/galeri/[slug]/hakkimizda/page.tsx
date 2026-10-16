"use client";

import { useParams } from "next/navigation";
import SocialLinks from "@/components/SocialLinks";
import { useData } from "@/lib/store";

export default function Page() {
  const { slug } = useParams<{ slug: string }>();
  const { galleries, cars } = useData();
  const g = galleries.find((x) => x.slug === slug);
  if (!g) return null;
  const count = cars.filter((c) => c.galleryId === g.id && c.status === "aktif").length;
  return (
    <div className="two-col">
      <div className="panel prose">
        <h2>{g.name} hakkında</h2>
        {g.about.map((p, i) => <p key={i}>{p}</p>)}
        <h2>Hizmetlerimiz</h2>
        <ul className="chips">{g.services.map((s) => <li key={s}>{s}</li>)}</ul>
      </div>
      <div className="panel">
        <dl className="specs">
          <div><dt>Kuruluş</dt><dd>{g.founded}</dd></div>
          <div><dt>Yetkili</dt><dd>{g.owner}</dd></div>
          <div><dt>Şehir</dt><dd>{g.city}</dd></div>
          <div><dt>Yayında ilan</dt><dd>{count}</dd></div>
          <div><dt>Çalışma saatleri</dt><dd>{g.hours}</dd></div>
        </dl>
        <h3>Bizi takip edin</h3>
        <SocialLinks social={g.social} />
      </div>
    </div>
  );
}
