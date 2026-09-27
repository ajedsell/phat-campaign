import type { Metadata } from "next";
import Image from "next/image";
import gallery from "@/content/gallery.json";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Photos of Phat Bui out in the Garden Grove community.",
};

export default function GalleryPage() {
  return (
    <div>
      <section className="border-b-4 border-accent bg-bg-alt">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24 md:px-10">
          <h1 className="font-heading text-4xl text-primary sm:text-5xl">Gallery</h1>
        </div>
      </section>

      <section className="bg-bg">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24 md:px-10">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            {gallery.map((photo) => (
              <div key={photo.src} className="relative aspect-square overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
                  className="object-cover transition-transform hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
