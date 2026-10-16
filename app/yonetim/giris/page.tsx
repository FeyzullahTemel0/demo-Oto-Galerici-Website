"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { DEMO_PASSWORD, useData } from "@/lib/store";

export default function Login() {
  const { login, galleries } = useData();
  const router = useRouter();
  const [email, setEmail] = useState(galleries[0].email);
  const [pw, setPw] = useState(DEMO_PASSWORD);
  const [err, setErr] = useState("");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (login(email, pw)) router.push("/yonetim");
    else setErr("E-posta veya şifre hatalı.");
  };

  return (
    <div className="login">
      <form className="panel form" onSubmit={submit}>
        <Link href="/" className="logo"><span className="logo-mark">O</span> OtoVitrin</Link>
        <h1>Galeri Girişi</h1>
        <p className="muted">Demo hesap bilgileri hazır geliyor. Aşağıdan farklı bir galeri de seçebilirsiniz.</p>
        <input type="email" required placeholder="E-posta" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" required placeholder="Şifre" value={pw} onChange={(e) => setPw(e.target.value)} />
        {err && <p className="error">{err}</p>}
        <button className="btn" type="submit">Giriş Yap</button>
        <div className="demo-accounts">
          <small>Demo hesaplar (şifre: {DEMO_PASSWORD})</small>
          {galleries.map((g) => (
            <button type="button" key={g.id} className="link" onClick={() => setEmail(g.email)}>{g.name} — {g.email}</button>
          ))}
        </div>
      </form>
    </div>
  );
}
