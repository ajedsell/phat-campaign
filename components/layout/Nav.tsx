"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/content/site.config";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Meet Phat" },
  { href: "/candidate-statement", label: "Statement" },
  { href: "/endorsements", label: "Endorsements" },
  { href: "/district-4", label: "District 4" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b-4 border-accent bg-bg">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        <div className="flex items-center gap-4">
          <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
            <Image
              src="/images/logo.png"
              alt={siteConfig.siteName}
              width={243}
              height={100}
              className="h-12 w-auto"
              preload
            />
          </Link>
        </div>

        <div className="hidden items-center gap-6 md:flex">
          <nav aria-label="Primary" className="flex gap-5 font-body text-sm font-bold uppercase tracking-wide text-primary">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="opacity-85 transition-opacity hover:opacity-100"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <a
            href={siteConfig.donateUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Donate to ${siteConfig.siteName} (opens in new tab)`}
            className="bg-accent px-5 py-2.5 font-body text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-primary"
          >
            Donate
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span className={`h-0.5 w-6 bg-primary transition-transform ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-primary transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-primary transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <nav
          id="mobile-nav"
          aria-label="Primary"
          className="flex flex-col gap-1 border-t border-border px-6 pb-6 font-body text-sm font-bold uppercase tracking-wide text-primary md:hidden"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-border py-3 opacity-85"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={siteConfig.donateUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Donate to ${siteConfig.siteName} (opens in new tab)`}
            className="mt-4 bg-accent px-5 py-3 text-center text-white"
          >
            Donate
          </a>
        </nav>
      )}
    </header>
  );
}
