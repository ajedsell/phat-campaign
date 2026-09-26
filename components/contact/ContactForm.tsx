"use client";

import { useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

const inputClasses =
  "w-full border-2 border-border bg-bg px-4 py-3 font-body text-sm text-text placeholder:text-text-muted focus:border-primary focus:outline-none";
const labelClasses =
  "mb-1.5 block font-body text-xs font-bold tracking-wide text-primary uppercase";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [startedAt] = useState(() => Date.now());

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const data = new FormData(form);

    const timeout = AbortSignal.timeout(15_000);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
          hp: data.get("company"),
          startedAt,
        }),
        signal: timeout,
      });

      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className="border-l-4 border-accent bg-bg-alt p-6 font-body text-primary">
        Thanks for reaching out — we&apos;ll get back to you soon.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div>
        <label className={labelClasses} htmlFor="name">Name</label>
        <input id="name" type="text" name="name" required className={inputClasses} />
      </div>
      <div>
        <label className={labelClasses} htmlFor="email">Email</label>
        <input id="email" type="email" name="email" required className={inputClasses} />
      </div>
      <div>
        <label className={labelClasses} htmlFor="message">Message</label>
        <textarea id="message" name="message" required rows={5} className={inputClasses} />
      </div>

      {/* Honeypot — hidden from real users, bots tend to fill every field */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
        aria-hidden="true"
      />

      <button
        type="submit"
        disabled={status === "submitting"}
        className="bg-primary px-6 py-3 font-body font-bold tracking-wide text-white uppercase transition-colors hover:bg-primary-dark disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>
      {status === "error" && (
        <p className="font-body text-sm text-red-600">
          Something went wrong — please try again.
        </p>
      )}
    </form>
  );
}
