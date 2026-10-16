"use client";

import { useParams } from "next/navigation";
import { Suspense } from "react";
import Listing from "@/components/Listing";
import { useData } from "@/lib/store";

export default function Page() {
  const { slug } = useParams<{ slug: string }>();
  const { galleries } = useData();
  const g = galleries.find((x) => x.slug === slug);
  if (!g) return null;
  return (
    <Suspense fallback={<p className="empty">Yükleniyor…</p>}>
      <Listing galleryId={g.id} />
    </Suspense>
  );
}
