import { gallery } from "@/lib/data";

export const metadata = { title: `İletişim | ${gallery.name}` };

export default function Contact() {
  return (
    <div className="detail">
      <h1 className="detail-title">İletişim ve Konum</h1>
      <div className="detail-grid">
        <iframe
          className="map"
          title="Galeri konumu"
          loading="lazy"
          src={`https://www.google.com/maps?q=${encodeURIComponent(gallery.mapQuery)}&output=embed`}
        />
        <div className="panel">
          <dl className="specs">
            <div><dt>Galeri</dt><dd>{gallery.name}</dd></div>
            <div><dt>Yetkili</dt><dd>{gallery.owner}</dd></div>
            <div><dt>Telefon</dt><dd><a href={`tel:${gallery.phone.replace(/\s/g, "")}`}>{gallery.phone}</a></dd></div>
            <div><dt>E-posta</dt><dd>{gallery.email}</dd></div>
            <div><dt>Adres</dt><dd>{gallery.address}</dd></div>
            <div><dt>Çalışma Saatleri</dt><dd>{gallery.hours}</dd></div>
          </dl>
          <a className="btn btn-green" href={`https://wa.me/${gallery.whatsapp}`} target="_blank" rel="noreferrer">WhatsApp ile yaz</a>
        </div>
      </div>
    </div>
  );
}
