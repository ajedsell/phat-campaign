import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/content/site.config";
import quickFacts from "@/content/quick-facts.json";

export function MeetSection() {
  return (
    <section className="bg-bg">
      <div className="mx-auto grid max-w-5xl grid-cols-[5px_1fr] gap-6 px-6 py-16 sm:gap-10 sm:py-24 md:px-10">
        <div className="bg-accent" />
        <div>
          <h2 className="font-heading text-3xl text-primary sm:text-4xl">
            Meet {siteConfig.fullName}
          </h2>

          <div className="relative mt-6 aspect-[8/5] w-full max-w-xl overflow-hidden">
            <Image
              src="/images/meet-photo.jpg"
              alt="Phat Bui at a legislative committee hearing with Senator Janet Nguyen"
              fill
              sizes="(max-width: 768px) 90vw, 576px"
              className="object-cover"
            />
          </div>

          <div className="mt-6 max-w-2xl space-y-4 font-body text-base leading-relaxed text-text-muted">
            <p>
              Phat Bui has called Garden Grove home for more than 40 years.
              He raised his family here, built a business, and has
              dedicated years of service to the community. As a former
              Garden Grove Councilmember and Planning Commissioner, Phat
              knows how City Hall works and how to make it work better for
              our residents.
            </p>
            <p>
              Today, Phat serves as a Commissioner on the Orange County
              Housing and Community Development Commission and as Chairman
              of the Vietnamese American Federation of Southern California.
              He is running for Garden Grove City Council to bring
              accountability, protect taxpayer dollars, and deliver real
              results for our community.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {quickFacts.map((fact) => (
              <div key={fact.label} className="border-t-4 border-accent bg-bg-alt p-4">
                <p className="font-heading text-lg text-primary">{fact.stat}</p>
                <p className="mt-1 font-body text-xs leading-tight text-text-muted">
                  {fact.label}
                </p>
              </div>
            ))}
          </div>

          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-2 border-b-2 border-accent pb-1 font-body text-sm font-bold tracking-wide text-primary uppercase transition-colors hover:text-primary-dark"
          >
            Learn More →
          </Link>
        </div>
      </div>
    </section>
  );
}
