"use client";

import { useState } from "react";
import { Social } from "@/lib/data";
import { useData } from "@/lib/store";

const socials: { key: keyof Social; label: string }[] = [
  { key: "instagram", label: "Instagram" },
  { key: "facebook", label: "Facebook" },
  { key: "x", label: "X (Twitter)" },
  { key: "youtube", label: "YouTube" },
  { key: "website", label: "Web sitesi" },
];

export default function Profile() {
  const { session, galleries, updateGallery } = useData();
  const g = galleries.find((x) => x.id === session);
  const [f, setF] = useState(() => g && { ...g, aboutText: g.about.join("\n\n"), servicesText: g.services.join(", ") });
  const [saved, setSaved] = useState(false);
  if (!g || !f) return null;

  const bind = (k: "name" | "owner" | "tagline" | "phone" | "whatsapp" | "email" | "address" | "city" | "hours" | "aboutText" | "servicesText") => ({
    value: f[k],
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setSaved(false);
      setF({ ...f, [k]: e.target.value });
    },
  });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    updateGallery(g.id, {
      name: f.name,
      owner: f.owner,
      tagline: f.tagline,
      phone: f.phone,
      whatsapp: f.whatsapp,
      email: f.email,
      address: f.address,
      city: f.city,
      hours: f.hours,
      mapQuery: f.address,
      about: f.aboutText.split(/\n\s*\n/).map((s) => s.trim()).filter(Boolean),
      services: f.servicesText.split(",").map((s) => s.trim()).filter(Boolean),
      social: f.social,
    });
    setSaved(true);
  };

  return (
    <>
      <div className="admin-head"><h1>Galeri Profili</h1></div>
      <form className="panel form" onSubmit={submit}>
        <div className="row">
          <label className="field"><span>Galeri adı</span><input required {...bind("name")} /></label>
          <label className="field"><span>Yetkili</span><input required {...bind("owner")} /></label>
        </div>
        <label className="field"><span>Slogan</span><input {...bind("tagline")} /></label>
        <div className="row3">
          <label className="field"><span>Telefon</span><input required {...bind("phone")} /></label>
          <label className="field"><span>WhatsApp (905xx...)</span><input required {...bind("whatsapp")} /></label>
          <label className="field"><span>E-posta (giriş e-postası)</span><input required type="email" {...bind("email")} /></label>
        </div>
        <div className="row3">
          <label className="field"><span>Şehir</span><input required {...bind("city")} /></label>
          <label className="field"><span>Adres</span><input required {...bind("address")} /></label>
          <label className="field"><span>Çalışma saatleri</span><input {...bind("hours")} /></label>
        </div>
        <label className="field"><span>Hakkımızda (paragrafları boş satırla ayırın)</span><textarea rows={6} {...bind("aboutText")} /></label>
        <label className="field"><span>Hizmetler (virgülle ayırın)</span><input {...bind("servicesText")} /></label>
        <h2>Sosyal medya hesapları</h2>
        <div className="row">
          {socials.map((s) => (
            <label key={s.key} className="field">
              <span>{s.label}</span>
              <input
                type="url"
                placeholder="https://..."
                value={f.social[s.key] ?? ""}
                onChange={(e) => {
                  setSaved(false);
                  setF({ ...f, social: { ...f.social, [s.key]: e.target.value || undefined } });
                }}
              />
            </label>
          ))}
        </div>
        <div className="form-actions">
          <button className="btn" type="submit">Kaydet</button>
          {saved && <span className="success">Kaydedildi ✓</span>}
        </div>
      </form>
    </>
  );
}
