"use client";

import { useParams } from "next/navigation";
import CarForm from "@/components/CarForm";
import { useData } from "@/lib/store";

export default function Page() {
  const { id } = useParams<{ id: string }>();
  const { cars, session } = useData();
  const car = cars.find((c) => String(c.id) === id && c.galleryId === session);
  if (!car) return <p className="empty">İlan bulunamadı.</p>;
  return (
    <>
      <div className="admin-head"><h1>İlanı Düzenle</h1></div>
      <CarForm key={car.id} car={car} />
    </>
  );
}
