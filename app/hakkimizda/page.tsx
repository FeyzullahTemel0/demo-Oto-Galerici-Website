import Link from "next/link";
import { platform } from "@/lib/data";

export const metadata = { title: "Hakkımızda | OtoVitrin" };

export default function Page() {
  return (
    <div className="container page">
      <h1 className="page-title">Hakkımızda</h1>
      <div className="panel prose">
        <h2>Biz kimiz?</h2>
        <p>
          {platform.name}, Türkiye'deki oto galerilerin dijitalde kolayca görünür olması için geliştirilen bir vitrin platformudur.
          Amacımız, her galerinin kendi adıyla yayınlanan, düzenli ve profesyonel bir web sayfasına sahip olması; alıcıların da güvenilir
          galerilere tek noktadan ulaşabilmesidir.
        </p>
        <h2>Nasıl çalışır?</h2>
        <p>
          Galeriler yönetim paneline giriş yapar, araçlarını fotoğraf, fiyat ve teknik bilgilerle ekler. İlanlar hem genel ilan listesinde
          hem de galerinin kendi sayfasında yayınlanır. Alıcılar telefon, WhatsApp veya mesaj/teklif formu ile galeriye ulaşır.
        </p>
        <h2>Değerlerimiz</h2>
        <ul>
          <li>Şeffaf ve doğru ilan bilgisi</li>
          <li>Galeriye özel, kendi markasını öne çıkaran sayfalar</li>
          <li>Sade ve hızlı kullanım</li>
        </ul>
        <Link href="/yonetim/giris" className="btn btn-sm">Galeri olarak katılın</Link>
      </div>
    </div>
  );
}
