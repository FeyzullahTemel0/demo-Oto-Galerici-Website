"use client";

import { useParams } from "next/navigation";
import { useState } from "react";
import SocialLinks from "@/components/SocialLinks";
import { useData } from "@/lib/store";

export default function Page() {
  const { slug } = useParams<{ slug: string }>();
  const { galleries, addMessage } = useData();
  const g = galleries.find((x) => x.slug === slug);
  const [form, setForm] = useState({ name: "", phone: "", text: "" });
  const [sent, setSent] = useState(false);
  if (!g) return null;

  return (
    <div className="two-col">
      <div>
        <iframe
          className="map"
          title="Galeri konumu"
          loading="lazy"
          src={`https://www.google.com/maps?q=${encodeURIComponent(g.mapQuery)}&output=embed`}
        />
        <div className="panel">
          <dl className="specs">
            <div><dt>Adres</dt><dd>{g.address}</dd></div>
            <div><dt>Telefon</dt><dd><a href={`tel:${g.phone.replace(/\s/g, "")}`}>{g.phone}</a></dd></div>
            <div><dt>E-posta</dt><dd>{g.email}</dd></div>
            <div><dt>Çalışma saatleri</dt><dd>{g.hours}</dd></div>
          </dl>
          <SocialLinks social={g.social} />
        </div>
      </div>
      <div className="panel">
        <h2>Galeriye mesaj gönderin</h2>
        {sent ? (
          <p className="success">Mesajınız iletildi. En kısa sürede dönüş yapılacaktır.</p>
        ) : (
          <form
            className="form"
            onSubmit={(e) => {
              e.preventDefault();
              addMessage({ galleryId: g.id, ...form });
              setSent(true);
            }}
          >
            <input required placeholder="Ad Soyad" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            <input required placeholder="Telefon" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
            <textarea required rows={5} placeholder="Mesajınız" value={form.text} onChange={(e) => setForm({ ...form, text: e.target.value })} />
            <button className="btn" type="submit">Gönder</button>
          </form>
        )}
      </div>
    </div>
  );
}
