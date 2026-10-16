import Link from "next/link";
import CarArt from "./CarArt";
import { Car, formatKm, formatPrice } from "@/lib/data";

export default function CarCard({ car }: { car: Car }) {
  return (
    <Link href={`/ilan/${car.id}`} className="card">
      <div className="card-img">
        <CarArt color={car.hex} />
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
      </div>
    </Link>
  );
}
