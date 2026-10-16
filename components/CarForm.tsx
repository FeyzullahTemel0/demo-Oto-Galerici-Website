"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { bodies, Car, CarStatus, fuels, gears } from "@/lib/data";
import { useData } from "@/lib/store";

export default function CarForm({ car }: { car?: Car }) {
  const { session, galleries, addCar, updateCar } = useData();
  const router = useRouter();
  const g = galleries.find((x) => x.id === session);
  const [f, setF] = useState({
    title: car?.title ?? "",
    brand: car?.brand ?? "",
    model: car?.model ?? "",
    year: String(car?.year ?? new Date().getFullYear() - 3),
    km: String(car?.km ?? ""),
    price: String(car?.price ?? ""),
    fuel: car?.fuel ?? fuels[0],
    gear: car?.gear ?? gears[0],
    body: car?.body ?? bodies[0],
    color: car?.color ?? "",
    hex: car?.hex ?? "#9ca3af",
    city: car?.city ?? g?.city ?? "",
    district: car?.district ?? "",
    imageUrl: car?.imageUrl ?? "",
    description: car?.description ?? "",
    features: car?.features.join(", ") ?? "",
    status: (car?.status ?? "aktif") as CarStatus,
  });
  const bind = (k: keyof typeof f) => ({
    value: f[k],
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => setF({ ...f, [k]: e.target.value }),
  });

  if (!g) return null;

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
      title: f.title.trim(),
      brand: f.brand.trim(),
      model: f.model.trim(),
      year: +f.year,
      km: +f.km,
      price: +f.price,
      fuel: f.fuel,
      gear: f.gear,
      body: f.body,
      color: f.color.trim(),
      hex: f.hex,
      city: f.city.trim(),
      district: f.district.trim(),
      imageUrl: f.imageUrl.trim() || undefined,
      description: f.description.trim(),
      features: f.features.split(",").map((s) => s.trim()).filter(Boolean),
      status: f.status,
    };
    if (car) updateCar(car.id, data);
    else addCar({ ...data, galleryId: g.id });
    router.push("/yonetim/ilanlar");
  };

  const opts = (list: string[]) => list.map((o) => <option key={o}>{o}</option>);

  return (
    <form className="panel form" onSubmit={submit}>
      <label className="field"><span>İlan başlığı</span><input required {...bind("title")} placeholder="Örn: Hasarsız, bakımlı Clio 1.0 TCe" /></label>
      <div className="row3">
        <label className="field"><span>Marka</span><input required {...bind("brand")} /></label>
        <label className="field"><span>Model</span><input required {...bind("model")} /></label>
        <label className="field"><span>Yıl</span><input required type="number" min={1980} max={2030} {...bind("year")} /></label>
      </div>
      <div className="row3">
        <label className="field"><span>KM</span><input required type="number" min={0} {...bind("km")} /></label>
        <label className="field"><span>Fiyat (TL)</span><input required type="number" min={0} {...bind("price")} /></label>
        <label className="field"><span>Durum</span>
          <select {...bind("status")}><option value="aktif">Yayında</option><option value="pasif">Pasif</option><option value="satildi">Satıldı</option></select>
        </label>
      </div>
      <div className="row3">
        <label className="field"><span>Yakıt</span><select {...bind("fuel")}>{opts(fuels)}</select></label>
        <label className="field"><span>Vites</span><select {...bind("gear")}>{opts(gears)}</select></label>
        <label className="field"><span>Kasa tipi</span><select {...bind("body")}>{opts(bodies)}</select></label>
      </div>
      <div className="row3">
        <label className="field"><span>Renk</span><input required {...bind("color")} /></label>
        <label className="field"><span>İl</span><input required {...bind("city")} /></label>
        <label className="field"><span>İlçe</span><input required {...bind("district")} /></label>
      </div>
      <div className="row">
        <label className="field"><span>Görsel rengi (fotoğraf yoksa çizim rengi)</span><input type="color" {...bind("hex")} /></label>
        <label className="field"><span>Fotoğraf URL (isteğe bağlı)</span><input type="url" {...bind("imageUrl")} placeholder="https://..." /></label>
      </div>
      <label className="field"><span>Açıklama</span><textarea rows={4} required {...bind("description")} /></label>
      <label className="field"><span>Donanım (virgülle ayırın)</span><input {...bind("features")} placeholder="ABS, Klima, Geri Görüş Kamerası" /></label>
      <div className="form-actions">
        <button className="btn" type="submit">{car ? "Değişiklikleri Kaydet" : "İlanı Yayınla"}</button>
        <button className="btn btn-outline" type="button" onClick={() => router.push("/yonetim/ilanlar")}>Vazgeç</button>
      </div>
    </form>
  );
}
