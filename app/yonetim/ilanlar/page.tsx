"use client";

import Link from "next/link";
import { useState } from "react";
import { CarStatus, formatKm, formatPrice, statusLabel } from "@/lib/data";
import { useData } from "@/lib/store";

export default function MyListings() {
  const { session, cars, setCarStatus, deleteCar } = useData();
  const [filter, setFilter] = useState<"" | CarStatus>("");
  const mine = cars.filter((c) => c.galleryId === session && (!filter || c.status === filter));

  return (
    <>
      <div className="admin-head">
        <h1>İlanlarım</h1>
        <div className="head-actions">
          <select value={filter} onChange={(e) => setFilter(e.target.value as "" | CarStatus)}>
            <option value="">Tüm durumlar</option>
            <option value="aktif">Yayında</option>
            <option value="pasif">Pasif</option>
            <option value="satildi">Satıldı</option>
          </select>
          <Link href="/yonetim/ilanlar/yeni" className="btn btn-sm">+ Yeni İlan Ekle</Link>
        </div>
      </div>
      <div className="panel table-wrap">
        <table className="table">
          <thead>
            <tr><th>İlan</th><th>Yıl</th><th>KM</th><th>Fiyat</th><th>Durum</th><th></th></tr>
          </thead>
          <tbody>
            {mine.map((c) => (
              <tr key={c.id}>
                <td><Link href={`/ilan/${c.id}`} target="_blank">{c.title}</Link></td>
                <td>{c.year}</td>
                <td>{formatKm(c.km)}</td>
                <td>{formatPrice(c.price)}</td>
                <td>
                  <select value={c.status} onChange={(e) => setCarStatus(c.id, e.target.value as CarStatus)}>
                    {(Object.keys(statusLabel) as CarStatus[]).map((s) => <option key={s} value={s}>{statusLabel[s]}</option>)}
                  </select>
                </td>
                <td className="actions">
                  <Link href={`/yonetim/ilanlar/${c.id}`} className="link">Düzenle</Link>
                  <button className="link danger" onClick={() => { if (confirm("İlan silinsin mi?")) deleteCar(c.id); }}>Sil</button>
                </td>
              </tr>
            ))}
            {mine.length === 0 && <tr><td colSpan={6}>Bu filtrede ilan yok.</td></tr>}
          </tbody>
        </table>
      </div>
    </>
  );
}
