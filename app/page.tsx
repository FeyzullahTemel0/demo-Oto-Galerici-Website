import Listing from "@/components/Listing";
import { gallery } from "@/lib/data";

export default function Home() {
  return (
    <>
      <section className="hero">
        <h1>{gallery.name}</h1>
        <p>Güvenilir, ekspertizli ikinci el araçlar. Aradığınız aracı filtreleyin, detayını inceleyin, hemen iletişime geçin.</p>
      </section>
      <Listing />
    </>
  );
}
