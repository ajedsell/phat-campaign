import Image from "next/image";
import { siteConfig } from "@/content/site.config";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-bg-alt">
      <Image
        src="/images/hero-bg.jpg"
        alt=""
        aria-hidden="true"
        fill
        sizes="100vw"
        className="object-cover opacity-15"
      />
      <div className="relative mx-auto grid max-w-5xl md:grid-cols-2">
        <div className="relative order-1 aspect-[4/5] md:order-2 md:aspect-auto md:min-h-[420px]">
          <Image
            src="/images/hero-portrait-v2.png"
            alt={siteConfig.fullName}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain object-bottom"
            preload
          />
        </div>
        <div className="order-2 flex flex-col justify-center gap-6 px-6 py-16 sm:py-24 md:order-1 md:px-10">
          <h1 className="font-heading text-3xl leading-tight text-primary sm:text-4xl">
            Proven Leadership. <span className="text-accent">A Stronger Garden Grove.</span>
          </h1>
          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href={siteConfig.donateUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent px-6 py-3 font-body font-bold uppercase tracking-wide text-white transition-colors hover:bg-primary"
            >
              Donate
            </a>
            <a
              href="#get-involved"
              className="border-2 border-primary px-6 py-3 font-body font-bold uppercase tracking-wide text-primary transition-colors hover:bg-primary hover:text-white"
            >
              Get Involved
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
