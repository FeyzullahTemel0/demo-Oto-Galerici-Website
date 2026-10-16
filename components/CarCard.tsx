"use client";

import Link from "next/link";
import CarImage from "./CarImage";
import { Car, formatKm, formatPrice } from "@/lib/data";
import { useData } from "@/lib/store";

export default function CarCard({ car, showGallery = true }: { car: Car; showGallery?: boolean }) {
  const { galleries } = useData();
  const g = galleries.find((x) => x.id === car.galleryId);
  return (
    <Link href={`/ilan/${car.id}`} className="card">
      <div className="card-img">
        <CarImage car={car} />
        <span className="badge">{car.year}</span>
      </div>
      <div className="card-body">
        <h3 className="card-title">{car.title}</h3>
        <div className="card-meta">
          {car.brand} {car.model} · {formatKm(car.km)} km · {car.gear}
        </div>
        <div className="card-price">{formatPrice(car.price)}</div>
        <div className="card-foot">
          <span>{car.city} / {car.district}</span>
          <span>{car.date}</span>
        </div>
        {showGallery && g && <div className="card-gallery">{g.name}</div>}
      </div>
    </Link>
  );
}
