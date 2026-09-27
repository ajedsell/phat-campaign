import type { Metadata } from "next";
import { siteConfig } from "@/content/site.config";

export const metadata: Metadata = {
  title: "Donate",
  description: `Contribute to ${siteConfig.fullName}'s campaign.`,
};

export default function DonatePage() {
  return (
    <div>
      <section className="border-b-4 border-accent bg-bg-alt">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24 md:px-10">
          <h1 className="font-heading text-4xl text-primary sm:text-5xl">Donate</h1>
          <p className="mt-3 max-w-xl font-body text-text-muted">
            Every contribution helps get Phat&apos;s message to voters
            across District 4.
          </p>
        </div>
      </section>

      <section className="bg-bg">
        <div className="mx-auto grid max-w-3xl gap-8 px-6 py-16 sm:py-24 sm:grid-cols-2 md:px-10">
          <div className="border-t-4 border-accent bg-bg-alt p-6">
            <h2 className="font-heading text-xl text-primary">Contribute by Check</h2>
            <div className="mt-4 space-y-3 font-body text-sm leading-relaxed text-text-muted">
              <p>
                Write to:
                <br />
                <span className="text-primary">{siteConfig.committeeName}</span>
              </p>
              <p>
                Mail to:
                <br />
                <span className="text-primary">
                  10071 Trask Ave, Garden Grove, CA 92843
                </span>
              </p>
            </div>
          </div>

          <div className="border-t-4 border-accent bg-bg-alt p-6">
            <h2 className="font-heading text-xl text-primary">Contribute Online</h2>
            <p className="mt-4 font-body text-sm leading-relaxed text-text-muted">
              Give securely online through eFundraising Connections.
            </p>
            <a
              href={siteConfig.donateUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Donate to ${siteConfig.siteName} (opens in new tab)`}
              className="mt-6 inline-block bg-accent px-6 py-3 text-center font-body font-bold uppercase tracking-wide text-white transition-colors hover:bg-primary"
            >
              Donate Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
