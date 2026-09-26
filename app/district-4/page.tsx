import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "District 4",
  description:
    "Garden Grove City Council District 4 covers a central portion of Garden Grove, home to Phat Bui for more than 40 years.",
};

export default function DistrictFourPage() {
  return (
    <div>
      <section className="border-b-4 border-accent bg-bg-alt">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24 md:px-10">
          <h1 className="font-heading text-4xl text-primary sm:text-5xl">District 4</h1>
          <p className="mt-3 max-w-xl font-body text-text-muted">
            Garden Grove City Council District 4 covers a central portion of
            Garden Grove. Phat Bui has lived and worked in this community
            for more than 40 years.
          </p>
        </div>
      </section>

      <section className="bg-bg">
        <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24 md:px-10">
          <p className="font-body text-base leading-relaxed text-text-muted">
            District 4 is home to a diverse mix of families, small
            businesses, and longtime residents. Phat knows these streets,
            these neighbors, and the challenges this community faces. He is
            running to make sure every corner of District 4 has a strong
            voice at City Hall.
          </p>

          <div className="relative mt-10 aspect-square w-full overflow-hidden border border-border">
            <Image
              src="/images/district/district-4-map.png"
              alt="Map of Garden Grove City Council District 4"
              fill
              sizes="(max-width: 768px) 90vw, 672px"
              className="object-contain"
            />
          </div>

          <div className="mt-10 border-t-4 border-accent bg-bg-alt p-6">
            <h2 className="font-heading text-xl text-primary">
              Is Your Address in District 4?
            </h2>
            <p className="mt-3 font-body text-sm leading-relaxed text-text-muted">
              Not sure if you live in District 4? Use the City of Garden
              Grove&apos;s online district finder to check your address.
            </p>
            <a
              href="https://ggcity.org/maps/council-districts/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 border-b-2 border-accent pb-1 font-body text-sm font-bold tracking-wide text-primary uppercase transition-colors hover:text-primary-dark"
            >
              Find Your District →
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
