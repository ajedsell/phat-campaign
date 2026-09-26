import { siteConfig } from "@/content/site.config";

export function DonateButton() {
  return (
    <>
      {/* Mobile only: fixed full-width bottom bar. Desktop uses the nav-bar Donate button instead. */}
      <a
        href={siteConfig.donateUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Donate to ${siteConfig.siteName} (opens in new tab)`}
        className="fixed inset-x-0 bottom-0 z-50 flex justify-center bg-accent py-4 font-body text-base font-bold uppercase tracking-wide text-white shadow-[0_-2px_8px_rgba(0,0,0,0.15)] md:hidden"
        style={{ paddingBottom: "max(1rem, env(safe-area-inset-bottom))" }}
      >
        Donate Now
      </a>
    </>
  );
}
