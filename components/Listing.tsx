"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import CarCard from "./CarCard";
import { bodies, fuels, gears } from "@/lib/data";
import { useData } from "@/lib/store";

const keys = ["q", "brand", "city", "fuel", "gear", "body", "minPrice", "maxPrice", "minYear", "maxKm"] as const;
type Filters = Record<(typeof keys)[number], string>;

export default function Listing({ galleryId }: { galleryId?: number }) {
  const { cars } = useData();
  const params = useSearchParams();
  const empty = Object.fromEntries(keys.map((k) => [k, ""])) as Filters;
  const [f, setF] = useState<Filters>(() => Object.fromEntries(keys.map((k) => [k, params.get(k) ?? ""])) as Filters);
  const [sort, setSort] = useState("new");

  const base = useMemo(() => cars.filter((c) => c.status === "aktif" && (!galleryId || c.galleryId === galleryId)), [cars, galleryId]);
  const brandOpts = useMemo(() => Array.from(new Set(base.map((c) => c.brand))).sort(), [base]);
  const cityOpts = useMemo(() => Array.from(new Set(base.map((c) => c.city))).sort(), [base]);

  const set = (k: keyof Filters) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setF((p) => ({ ...p, [k]: e.target.value }));

  const list = useMemo(() => {
    const q = f.q.trim().toLocaleLowerCase("tr");
    const res = base.filter(
      (c) =>
        (!q || `${c.title} ${c.brand} ${c.model}`.toLocaleLowerCase("tr").includes(q)) &&
        (!f.brand || c.brand === f.brand) &&
        (!f.city || c.city === f.city) &&
        (!f.fuel || c.fuel === f.fuel) &&
        (!f.gear || c.gear === f.gear) &&
        (!f.body || c.body === f.body) &&
        (!f.minPrice || c.price >= +f.minPrice) &&
        (!f.maxPrice || c.price <= +f.maxPrice) &&
        (!f.minYear || c.year >= +f.minYear) &&
        (!f.maxKm || c.km <= +f.maxKm)
    );
    if (sort === "price-asc") res.sort((a, b) => a.price - b.price);
    else if (sort === "price-desc") res.sort((a, b) => b.price - a.price);
    else if (sort === "km") res.sort((a, b) => a.km - b.km);
    else if (sort === "year") res.sort((a, b) => b.year - a.year);
    else res.sort((a, b) => b.id - a.id);
    return res;
  }, [f, sort, base]);

  const sel = (k: keyof Filters, label: string, opts: string[]) => (
    <label className="field">
      <span>{label}</span>
      <select value={f[k]} onChange={set(k)}>
        <option value="">Tümü</option>
        {opts.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </label>
  );
  const num = (k: keyof Filters, label: string, ph: string) => (
    <label className="field">
      <span>{label}</span>
      <input type="number" inputMode="numeric" placeholder={ph} value={f[k]} onChange={set(k)} />
    </label>
  );

  return (
    <div className="layout">
      <aside className="filters">
        <div className="filters-head">
          <strong>Filtrele</strong>
          <button className="link" onClick={() => setF(empty)}>Temizle</button>
        </div>
        <label className="field">
          <span>Ara</span>
          <input placeholder="Marka, model, kelime..." value={f.q} onChange={set("q")} />
        </label>
        {sel("brand", "Marka", brandOpts)}
        {!galleryId && sel("city", "İl", cityOpts)}
        {sel("body", "Kasa Tipi", bodies)}
        {sel("fuel", "Yakıt", fuels)}
        {sel("gear", "Vites", gears)}
        <div className="row">
          {num("minPrice", "Min Fiyat", "TL")}
          {num("maxPrice", "Max Fiyat", "TL")}
        </div>
        <div className="row">
          {num("minYear", "Min Yıl", "2018")}
          {num("maxKm", "Max KM", "100000")}
        </div>
      </aside>

      <section>
        <div className="toolbar">
          <span><strong>{list.length}</strong> ilan bulundu</span>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="new">En yeni</option>
            <option value="price-asc">Fiyat (Artan)</option>
            <option value="price-desc">Fiyat (Azalan)</option>
            <option value="year">Yıl (Yeni → Eski)</option>
            <option value="km">KM (Düşük → Yüksek)</option>
          </select>
        </div>
        {list.length === 0 ? (
          <p className="empty">Kriterlere uygun ilan bulunamadı.</p>
        ) : (
          <div className="grid">
            {list.map((c) => (
              <CarCard key={c.id} car={c} showGallery={!galleryId} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
