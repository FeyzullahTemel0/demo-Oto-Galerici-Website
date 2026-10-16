import Link from "next/link";
import { notFound } from "next/navigation";
import CarArt from "@/components/CarArt";
import { cars, formatKm, formatPrice, gallery } from "@/lib/data";

export function generateStaticParams() {
  return cars.map((c) => ({ id: String(c.id) }));
}

export default function CarDetail({ params }: { params: { id: string } }) {
  const car = cars.find((c) => String(c.id) === params.id);
  if (!car) notFound();

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
  const wa = `https://wa.me/${gallery.whatsapp}?text=${encodeURIComponent(`Merhaba, ${car.title} (İlan No: 1000${car.id}) ilanı hakkında bilgi almak istiyorum.`)}`;

  return (
    <div className="detail">
      <Link href="/" className="back">← İlanlara dön</Link>
      <h1 className="detail-title">{car.title}</h1>
      <div className="detail-grid">
        <div>
          <CarArt color={car.hex} className="detail-img" />
          <div className="panel">
            <h2>Açıklama</h2>
            <p>{car.description}</p>
            <h2>Donanım</h2>
            <ul className="chips">
              {car.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
        </div>
        <aside>
          <div className="panel">
            <div className="detail-price">{formatPrice(car.price)}</div>
            <div className="loc">{car.city} / {car.district}</div>
            <dl className="specs">
              {rows.map(([k, v]) => (
                <div key={k}>
                  <dt>{k}</dt>
                  <dd>{v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="panel seller">
            <strong>{gallery.name}</strong>
            <span>{gallery.owner}</span>
            <a className="btn" href={`tel:${gallery.phone.replace(/\s/g, "")}`}>Ara: {gallery.phone}</a>
            <a className="btn btn-green" href={wa} target="_blank" rel="noreferrer">WhatsApp ile yaz</a>
            <a
              className="btn btn-outline"
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(gallery.address)}`}
              target="_blank"
              rel="noreferrer"
            >
              Konumu göster
            </a>
          </div>
        </aside>
      </div>
    </div>
  );
}
