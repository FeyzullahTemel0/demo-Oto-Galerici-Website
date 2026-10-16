import { Suspense } from "react";
import Listing from "@/components/Listing";

export const metadata = { title: "Araç İlanları | OtoVitrin" };

export default function Page() {
  return (
    <div className="container page">
      <h1 className="page-title">Araç İlanları</h1>
      <Suspense fallback={<p className="empty">Yükleniyor…</p>}>
        <Listing />
      </Suspense>
    </div>
  );
}
