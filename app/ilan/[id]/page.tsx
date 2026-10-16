"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import CarCard from "@/components/CarCard";
import CarImage from "@/components/CarImage";
import { formatKm, formatPrice } from "@/lib/data";
import { useData } from "@/lib/store";

export default function CarDetail() {
  const { id } = useParams<{ id: string }>();
  const { cars, galleries, addMessage } = useData();
  const car = cars.find((c) => String(c.id) === id);
  const g = car && galleries.find((x) => x.id === car.galleryId);
  const [form, setForm] = useState({ name: "", phone: "", text: "", offer: "" });
  const [sent, setSent] = useState(false);

  if (!car || !g) {
    return (
      <div className="container page">
        <p className="empty">İlan bulunamadı. <Link href="/ilanlar" className="link">İlanlara dön</Link></p>
      </div>
    );
  }

  const tel = g.phone.replace(/\s/g, "");
  const rows: [string, string][] = [
    ["İlan No", `1000${car.id}`],
    ["İlan Tarihi", car.date],
    ["Marka", car.brand],
    ["Model", car.model],
    ["Yıl", String(car.year)],
    ["Yakıt", car.fuel],
    ["Vites", car.gear],
    ["Kasa Tipi", car.body],
    ["KM", formatKm(car.km)],
    ["Renk", car.color],
  ];
  const wa = `https://wa.me/${g.whatsapp}?text=${encodeURIComponent(`Merhaba, ${car.title} (İlan No: 1000${car.id}) ilanı hakkında bilgi almak istiyorum.`)}`;
  const similar = cars.filter((c) => c.galleryId === g.id && c.id !== car.id && c.status === "aktif").slice(0, 4);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    addMessage({ galleryId: g.id, carId: car.id, name: form.name, phone: form.phone, text: form.text, offer: form.offer ? +form.offer : undefined });
    setSent(true);
  };

  return (
    <div className="container detail">
      <Link href="/ilanlar" className="back">← İlanlara dön</Link>
      <h1 className="detail-title">{car.title}</h1>
      {car.status !== "aktif" && <div className="notice">Bu ilan şu an yayında değil ({car.status === "satildi" ? "satıldı" : "pasif"}).</div>}
      <div className="detail-grid">
        <div>
          <CarImage car={car} className="detail-img" />
          <div className="panel">
            <h2>Açıklama</h2>
            <p>{car.description}</p>
            {car.features.length > 0 && (
              <>
                <h2>Donanım</h2>
                <ul className="chips">{car.features.map((f) => <li key={f}>{f}</li>)}</ul>
              </>
            )}
          </div>
          <div className="panel">
            <h2>Galeriye mesaj / teklif gönder</h2>
            {sent ? (
              <p className="success">Mesajınız {g.name} galerisine iletildi.</p>
            ) : (
              <form className="form" onSubmit={submit}>
                <div className="row">
                  <input required placeholder="Ad Soyad" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
                  <input required placeholder="Telefon" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                </div>
                <input type="number" placeholder="Teklif fiyatınız (TL, isteğe bağlı)" value={form.offer} onChange={(e) => setForm({ ...form, offer: e.target.value })} />
                <textarea required rows={3} placeholder="Mesajınız" value={form.text} onChange={(e) => setForm({ ...form, text: e.target.value })} />
                <button className="btn" type="submit">Gönder</button>
              </form>
            )}
          </div>
        </div>
        <aside>
          <div className="panel">
            <div className="detail-price">{formatPrice(car.price)}</div>
            <div className="loc">{car.city} / {car.district}</div>
            <dl className="specs">
              {rows.map(([k, v]) => (
                <div key={k}><dt>{k}</dt><dd>{v}</dd></div>
              ))}
            </dl>
          </div>
          <div className="panel seller">
            <Link href={`/galeri/${g.slug}`} className="seller-name">
              <span className="avatar" style={{ background: g.accent }}>{g.name[0]}</span>
              <span><strong>{g.name}</strong><small>{g.owner}</small></span>
            </Link>
            <a className="btn" href={`tel:${tel}`}>Ara: {g.phone}</a>
            <a className="btn btn-green" href={wa} target="_blank" rel="noreferrer">WhatsApp ile yaz</a>
            <a className="btn btn-outline" href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(g.address)}`} target="_blank" rel="noreferrer">Konumu göster</a>
            <Link className="btn btn-outline" href={`/galeri/${g.slug}`}>Galerinin tüm ilanları</Link>
          </div>
        </aside>
      </div>
      {similar.length > 0 && (
        <section className="section">
          <h2>Galerinin diğer ilanları</h2>
          <div className="grid">{similar.map((c) => <CarCard key={c.id} car={c} showGallery={false} />)}</div>
        </section>
      )}
    </div>
  );
}
