"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ReactNode, useEffect } from "react";
import { useData } from "@/lib/store";

export default function AdminLayout({ children }: { children: ReactNode }) {
  const { session, galleries, messages, logout, resetDemo, ready } = useData();
  const path = usePathname();
  const router = useRouter();
  const isLogin = path === "/yonetim/giris";

  useEffect(() => {
    if (ready && !session && !isLogin) router.replace("/yonetim/giris");
  }, [ready, session, isLogin, router]);

  if (isLogin) return <>{children}</>;
  const g = galleries.find((x) => x.id === session);
  if (!ready || !g) return <p className="empty" style={{ margin: 40 }}>Yükleniyor…</p>;

  const unread = messages.filter((m) => m.galleryId === g.id && !m.read).length;
  const nav = [
    { href: "/yonetim", label: "Genel Bakış" },
    { href: "/yonetim/ilanlar", label: "İlanlarım" },
    { href: "/yonetim/ilanlar/yeni", label: "+ Yeni İlan Ekle" },
    { href: "/yonetim/mesajlar", label: `Mesaj ve Teklifler${unread ? ` (${unread})` : ""}` },
    { href: "/yonetim/profil", label: "Galeri Profili" },
  ];

  return (
    <div className="admin">
      <aside className="admin-side">
        <Link href="/" className="logo"><span className="logo-mark">O</span> OtoVitrin</Link>
        <div className="admin-gallery">
          <span className="avatar" style={{ background: g.accent }}>{g.name[0]}</span>
          <div><strong>{g.name}</strong><small>Yönetim Paneli</small></div>
        </div>
        <nav>
          {nav.map((n) => (
            <Link key={n.href} href={n.href} className={path === n.href ? "active" : ""}>{n.label}</Link>
          ))}
          <Link href={`/galeri/${g.slug}`} target="_blank">Sayfamı Görüntüle ↗</Link>
        </nav>
        <div className="admin-bottom">
          <button className="link" onClick={() => { if (confirm("Demo verileri sıfırlansın mı?")) resetDemo(); }}>Demoyu sıfırla</button>
          <button className="btn btn-outline btn-sm" onClick={() => { logout(); router.push("/yonetim/giris"); }}>Çıkış Yap</button>
        </div>
      </aside>
      <section className="admin-main">{children}</section>
    </div>
  );
}
