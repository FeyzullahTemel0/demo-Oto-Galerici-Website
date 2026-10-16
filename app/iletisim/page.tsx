"use client";

import { useState } from "react";
import SocialLinks from "@/components/SocialLinks";
import { platform } from "@/lib/data";

export default function Page() {
  const [sent, setSent] = useState(false);
  return (
    <div className="container page">
      <h1 className="page-title">İletişim</h1>
      <div className="two-col">
        <div className="panel">
          <h2>Bize yazın</h2>
          {sent ? (
            <p className="success">Mesajınız alındı (demo). Teşekkürler!</p>
          ) : (
            <form
              className="form"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <input required placeholder="Ad Soyad" />
              <input required type="email" placeholder="E-posta" />
              <textarea required rows={5} placeholder="Mesajınız" />
              <button className="btn" type="submit">Gönder</button>
            </form>
          )}
        </div>
        <div className="panel">
          <h2>İletişim bilgileri</h2>
          <dl className="specs">
            <div><dt>Telefon</dt><dd>{platform.phone}</dd></div>
            <div><dt>E-posta</dt><dd>{platform.email}</dd></div>
            <div><dt>Adres</dt><dd>{platform.address}</dd></div>
          </dl>
          <SocialLinks social={platform.social} />
        </div>
      </div>
    </div>
  );
}
