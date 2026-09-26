import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/content/site.config";

export function Footer() {
  return (
    <footer className="border-t-4 border-accent bg-bg text-text pb-20 md:pb-0">
      <div className="mx-auto max-w-5xl px-6 py-10 text-sm">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <Image
            src="/images/logo.png"
            alt={siteConfig.siteName}
            width={243}
            height={100}
            className="h-12 w-auto self-start"
          />
          <nav aria-label="Social" className="flex gap-5 font-bold uppercase tracking-wide text-primary">
            <Link href="/contact" className="hover:text-primary-dark">
              Contact
            </Link>
            <a href={siteConfig.social.facebook} className="hover:text-primary-dark">
              Facebook
            </a>
            <a href={siteConfig.social.instagram} className="hover:text-primary-dark">
              Instagram
            </a>
          </nav>
        </div>
        <p className="mt-6 text-xs text-text-muted">
          Paid for by {siteConfig.committeeName}, FPPC ID# {siteConfig.fppcId}.
        </p>
        <p className="mt-2 text-xs text-text-muted">
          &copy; {new Date().getFullYear()} {siteConfig.siteName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
