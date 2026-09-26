import type { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/content/site.config";

export const metadata: Metadata = {
  title: "Meet Phat",
  description: `${siteConfig.fullName}'s story and background.`,
};

export default function AboutPage() {
  return (
    <section className="bg-bg">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24 md:px-10">
        <div className="grid gap-10 md:grid-cols-[minmax(0,320px)_1fr]">
          <div className="relative aspect-[4/5] w-full max-w-sm overflow-hidden">
            <Image
              src="/images/about-portrait.jpg"
              alt={`${siteConfig.fullName} speaking to Garden Grove residents`}
              fill
              sizes="(max-width: 768px) 90vw, 320px"
              className="object-cover object-top"
            />
          </div>
          <div>
            <h1 className="font-heading text-4xl text-primary sm:text-5xl">
              Meet {siteConfig.fullName}
            </h1>
            <div className="mt-6 space-y-4 font-body text-base leading-relaxed text-text-muted">
              <p>
                For more than four decades, Phat Bui has called Garden Grove
                home. He came to America as a refugee, and Garden Grove gave
                his family the opportunity to build a new life. He raised
                his children here, operated a small business, and dedicated
                years of service to the community that gave him so much.
              </p>
              <p>
                As a former Garden Grove City Councilmember (2014-2022) and
                Planning Commissioner, Phat understands how City Hall works
                and how to make it work better for residents. He knows that
                good leadership requires more than ideas. It requires
                listening, bringing people together, making difficult
                decisions, and delivering results.
              </p>
              <p>
                Today, Phat serves as a Commissioner on the Orange County
                Housing and Community Development Commission, where he
                works on housing policy and community investment across
                Orange County. He also serves as Chairman of the Vietnamese
                American Federation of Southern California, representing
                one of the region&apos;s most vibrant communities.
              </p>
              <p>
                As a small business owner, Phat understands the challenges
                Garden Grove&apos;s working families and local businesses
                face every day. He has seen firsthand how rising costs,
                crime, and homelessness affect our neighbors and businesses.
                And he has the experience to do something about it.
              </p>
              <p>
                Garden Grove is one of the most diverse cities in Orange
                County, and that diversity is one of its greatest strengths.
                As a councilmember, Phat represented every resident
                regardless of background, and he will do so again. No
                neighborhood and no community will feel forgotten.
              </p>
              <p>
                Phat is running for City Council because Garden Grove
                deserves leadership that is experienced, accountable, and
                focused on results. He will put residents first, protect
                public safety, demand fiscal responsibility, and fight every
                day to make Garden Grove a stronger, safer, and more
                prosperous community for every family.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2">
          <figure>
            <div className="relative aspect-[3/2] w-full overflow-hidden">
              <Image
                src="/images/about-photo-1.jpg"
                alt="Phat Bui at a community health fair"
                fill
                sizes="(max-width: 640px) 90vw, 45vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-2 font-body text-xs text-text-muted">
              Phat at a community health resource fair.
            </figcaption>
          </figure>
          <figure>
            <div className="relative aspect-[3/2] w-full overflow-hidden">
              <Image
                src="/images/about-photo-2.jpg"
                alt="Phat Bui helping a resident with a housing assistance application"
                fill
                sizes="(max-width: 640px) 90vw, 45vw"
                className="object-cover"
              />
            </div>
            <figcaption className="mt-2 font-body text-xs text-text-muted">
              Phat helping a resident with housing assistance.
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
