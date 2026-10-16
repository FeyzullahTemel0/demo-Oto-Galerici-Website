import GalleryShell from "@/components/GalleryShell";
import { seedGalleries } from "@/lib/data";

export function generateStaticParams() {
  return seedGalleries.map((g) => ({ slug: g.slug }));
}

export default function Layout({ children, params }: { children: React.ReactNode; params: { slug: string } }) {
  return <GalleryShell slug={params.slug}>{children}</GalleryShell>;
}
