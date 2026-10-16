/* eslint-disable @next/next/no-img-element */
import CarArt from "./CarArt";
import { Car } from "@/lib/data";

export default function CarImage({ car, className }: { car: Car; className?: string }) {
  if (car.imageUrl) return <img src={car.imageUrl} alt={car.title} className={`car-photo ${className ?? ""}`} />;
  return <CarArt color={car.hex} className={className} />;
}
