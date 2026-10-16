"use client";

import Link from "next/link";
import { formatPrice } from "@/lib/data";
import { useData } from "@/lib/store";

export default function Messages() {
  const { session, messages, cars, markRead, deleteMessage } = useData();
  const list = messages.filter((m) => m.galleryId === session);

  return (
    <>
      <div className="admin-head"><h1>Mesaj ve Teklifler</h1></div>
      {list.length === 0 && <p className="empty">Henüz mesaj yok.</p>}
      {list.map((m) => {
        const car = cars.find((c) => c.id === m.carId);
        return (
          <div key={m.id} className={`panel msg ${m.read ? "" : "unread"}`}>
            <div className="msg-top">
              <strong>{m.name}</strong>
              <span>{m.phone}</span>
              <small>{m.date}</small>
              {!m.read && <span className="tag aktif">Yeni</span>}
            </div>
            {car && <div className="muted">İlgili ilan: <Link className="link" href={`/ilan/${car.id}`} target="_blank">{car.title}</Link></div>}
            <p>{m.text}</p>
            {m.offer && <div className="offer">Teklif: <strong>{formatPrice(m.offer)}</strong></div>}
            <div className="actions">
              <a className="link" href={`tel:${m.phone.replace(/\s/g, "")}`}>Ara</a>
              <button className="link" onClick={() => markRead(m.id, !m.read)}>{m.read ? "Okunmadı yap" : "Okundu işaretle"}</button>
              <button className="link danger" onClick={() => deleteMessage(m.id)}>Sil</button>
            </div>
          </div>
        );
      })}
    </>
  );
}
