"use client";

import Link from "next/link";
import { formatPrice, statusLabel } from "@/lib/data";
import { useData } from "@/lib/store";

export default function Dashboard() {
  const { session, cars, messages, galleries } = useData();
  const g = galleries.find((x) => x.id === session);
  if (!g) return null;
  const mine = cars.filter((c) => c.galleryId === g.id);
  const msgs = messages.filter((m) => m.galleryId === g.id);
  const stats = [
    { label: "Yayındaki ilan", value: mine.filter((c) => c.status === "aktif").length },
    { label: "Satılan araç", value: mine.filter((c) => c.status === "satildi").length },
    { label: "Okunmamış mesaj", value: msgs.filter((m) => !m.read).length },
    { label: "Stok değeri", value: formatPrice(mine.filter((c) => c.status === "aktif").reduce((s, c) => s + c.price, 0)) },
  ];

  return (
    <>
      <div className="admin-head">
        <h1>Hoş geldiniz, {g.owner}</h1>
        <Link href="/yonetim/ilanlar/yeni" className="btn btn-sm">+ Yeni İlan Ekle</Link>
      </div>
      <div className="stat-cards">
        {stats.map((s) => (
          <div key={s.label} className="panel"><strong>{s.value}</strong><span>{s.label}</span></div>
        ))}
      </div>
      <div className="two-col">
        <div className="panel">
          <h2>Son ilanlar</h2>
          <table className="table">
            <tbody>
              {mine.slice(0, 5).map((c) => (
                <tr key={c.id}>
                  <td><Link href={`/yonetim/ilanlar/${c.id}`}>{c.title}</Link></td>
                  <td>{formatPrice(c.price)}</td>
                  <td><span className={`tag ${c.status}`}>{statusLabel[c.status]}</span></td>
                </tr>
              ))}
              {mine.length === 0 && <tr><td>Henüz ilanınız yok.</td></tr>}
            </tbody>
          </table>
        </div>
        <div className="panel">
          <h2>Son mesajlar</h2>
          {msgs.slice(0, 4).map((m) => (
            <div key={m.id} className="msg-mini">
              <strong>{m.name}</strong> {!m.read && <span className="tag aktif">Yeni</span>}
              <p>{m.text}</p>
            </div>
          ))}
          {msgs.length === 0 && <p className="muted">Mesaj yok.</p>}
          <Link href="/yonetim/mesajlar" className="link">Tümünü gör →</Link>
        </div>
      </div>
    </>
  );
}
