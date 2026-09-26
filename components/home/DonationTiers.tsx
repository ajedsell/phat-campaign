import { siteConfig } from "@/content/site.config";

const AMOUNTS = [
  { value: 150 },
  { value: 250 },
  { value: 500 },
  { value: 1000 },
  { value: 2500 },
  { value: 5900, label: "Maximum" },
];

export function DonationTiers() {
  return (
    <section className="bg-bg-alt">
      <div className="mx-auto max-w-5xl px-6 py-16 text-center sm:py-24 md:px-10">
        <h2 className="font-heading text-3xl text-primary sm:text-4xl">
          Chip In
        </h2>
        <p className="mx-auto mt-3 max-w-md font-body text-sm text-text-muted">
          Every dollar helps get Phat&apos;s message to voters across the district.
        </p>
        <div className="mx-auto mt-8 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-4">
          {AMOUNTS.map(({ value, label }) => (
            <a
              key={value}
              href={siteConfig.donateUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Donate $${value.toLocaleString()}${label ? ` (${label})` : ""} (opens in new tab)`}
              className="flex flex-col items-center justify-center rounded-lg border-2 border-primary bg-white py-5 font-heading text-2xl text-primary transition-colors hover:bg-primary hover:text-white"
            >
              ${value.toLocaleString()}
              {label && (
                <span className="mt-1 font-body text-xs font-bold tracking-wide uppercase">
                  {label}
                </span>
              )}
            </a>
          ))}
          <a
            href={siteConfig.donateUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Donate another amount (opens in new tab)"
            className="flex items-center justify-center gap-2 rounded-lg border-2 border-border bg-white py-5 font-heading text-2xl text-text-muted transition-colors hover:border-primary hover:text-primary"
          >
            $ Other
          </a>
        </div>
      </div>
    </section>
  );
}
