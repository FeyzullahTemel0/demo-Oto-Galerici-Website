"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import CarCard from "@/components/CarCard";
import { formatPrice } from "@/lib/data";
import { useData } from "@/lib/store";

export default function Home() {
  const { cars, galleries } = useData();
  const router = useRouter();
  const [brand, setBrand] = useState("");
  const [city, setCity] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const active = useMemo(() => cars.filter((c) => c.status === "aktif"), [cars]);
  const brands = useMemo(() => Array.from(new Set(active.map((c) => c.brand))).sort(), [active]);
  const cities = useMemo(() => Array.from(new Set(active.map((c) => c.city))).sort(), [active]);
  const featured = [...active].sort((a, b) => b.id - a.id).slice(0, 8);

  const search = (e: React.FormEvent) => {
    e.preventDefault();
    const p = new URLSearchParams();
    if (brand) p.set("brand", brand);
    if (city) p.set("city", city);
    if (maxPrice) p.set("maxPrice", maxPrice);
    router.push(`/ilanlar?${p.toString()}`);
  };

  return (
    <>
      <section className="hero-home">
        <div className="container">
          <h1>Hayalinizdeki aracı güvenilir galerilerde bulun</h1>
          <p>Türkiye genelindeki oto galerilerin ekspertizli ikinci el araçları tek vitrinde. Filtreleyin, karşılaştırın, doğrudan galeriyle iletişime geçin.</p>
          <form className="search-box" onSubmit={search}>
            <select value={brand} onChange={(e) => setBrand(e.target.value)} aria-label="Marka">
              <option value="">Tüm Markalar</option>
              {brands.map((b) => <option key={b}>{b}</option>)}
            </select>
            <select value={city} onChange={(e) => setCity(e.target.value)} aria-label="İl">
              <option value="">Tüm İller</option>
              {cities.map((b) => <option key={b}>{b}</option>)}
            </select>
            <select value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} aria-label="Maksimum fiyat">
              <option value="">Maks. Fiyat</option>
              {[500000, 750000, 1000000, 1500000, 2000000].map((p) => (
                <option key={p} value={p}>{formatPrice(p)}</option>
              ))}
            </select>
            <button className="btn" type="submit">Araç Ara</button>
          </form>
          <div className="stats">
            <div><strong>{active.length}</strong><span>Yayında ilan</span></div>
            <div><strong>{galleries.length}</strong><span>Kayıtlı galeri</span></div>
            <div><strong>{cities.length}</strong><span>Farklı şehir</span></div>
          </div>
        </div>
      </section>

      <section className="container section">
        <div className="section-head">
          <h2>Öne çıkan ilanlar</h2>
          <Link href="/ilanlar" className="link">Tüm ilanlar →</Link>
        </div>
        <div className="grid">
          {featured.map((c) => <CarCard key={c.id} car={c} />)}
        </div>
      </section>

      <section className="band">
        <div className="container section">
          <div className="section-head">
            <h2>Galerilerimiz</h2>
            <Link href="/galeriler" className="link">Tüm galeriler →</Link>
          </div>
          <div className="gallery-grid">
            {galleries.map((g) => (
              <Link key={g.id} href={`/galeri/${g.slug}`} className="gallery-card" style={{ borderTopColor: g.accent }}>
                <span className="avatar" style={{ background: g.accent }}>{g.name[0]}</span>
                <h3>{g.name}</h3>
                <p>{g.tagline}</p>
                <small>{g.city} · {active.filter((c) => c.galleryId === g.id).length} ilan</small>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="container section">
        <h2 className="center">Neden OtoVitrin?</h2>
        <div className="features">
          <div><span>🔍</span><h3>Kolay arama</h3><p>Marka, yıl, KM, yakıt ve fiyat filtreleriyle saniyeler içinde doğru araca ulaşın.</p></div>
          <div><span>🏢</span><h3>Galeriye özel sayfa</h3><p>Her galeri kendi adı, logosu, hakkında bilgisi ve sosyal medya hesaplarıyla ayrı bir vitrine sahip.</p></div>
          <div><span>💬</span><h3>Doğrudan iletişim</h3><p>Telefon, WhatsApp, konum ve fiyat teklifi gönderme seçenekleriyle galeriye hızlı ulaşın.</p></div>
        </div>
      </section>

      <section className="container">
        <div className="cta">
          <div>
            <h2>Galericisiniz? Kendi vitrininizi açın.</h2>
            <p>Yönetim panelinden ilan ekleyin, düzenleyin, gelen mesaj ve teklifleri tek yerden takip edin.</p>
          </div>
          <Link href="/yonetim/giris" className="btn btn-light">Galeri Girişi / Demo Panel</Link>
        </div>
      </section>
    </>
  );
}
