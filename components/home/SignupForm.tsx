"use client";

import { useState } from "react";
import { siteConfig } from "@/content/site.config";

type Status = "idle" | "submitting" | "success" | "error";

const INTERESTS = [
  "Knocking on Doors",
  "Making Phone Calls",
  "Displaying a Yard Sign",
  "Hosting a Meet and Greet",
];

const inputClasses =
  "w-full border-2 border-border bg-bg px-4 py-3 font-body text-sm text-text placeholder:text-text-muted focus:border-primary focus:outline-none";
const labelClasses =
  "mb-1.5 block font-body text-xs font-bold tracking-wide text-primary uppercase";

export function SignupForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [startedAt] = useState(() => Date.now());
  const [consentError, setConsentError] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    const phone = (data.get("phone") as string | null)?.trim();
    const smsConsent = data.get("smsConsent") === "on";

    // Consent is only required when the visitor actually gives us a number.
    if (phone && !smsConsent) {
      setConsentError(true);
      return;
    }

    setConsentError(false);
    setStatus("submitting");

    const timeout = AbortSignal.timeout(15_000);

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: data.get("firstName"),
          lastName: data.get("lastName"),
          email: data.get("email"),
          phone: data.get("phone"),
          smsConsent,
          interests: data.getAll("interests"),
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
        Thanks for signing up — we&apos;ll be in touch.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
      <div>
        <label className={labelClasses} htmlFor="firstName">First Name</label>
        <input id="firstName" type="text" name="firstName" required className={inputClasses} />
      </div>
      <div>
        <label className={labelClasses} htmlFor="lastName">Last Name</label>
        <input id="lastName" type="text" name="lastName" required className={inputClasses} />
      </div>
      <div>
        <label className={labelClasses} htmlFor="email">Email</label>
        <input id="email" type="email" name="email" required className={inputClasses} />
      </div>
      <div>
        <label className={labelClasses} htmlFor="phone">Phone</label>
        <input id="phone" type="tel" name="phone" className={inputClasses} />
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

      <fieldset className="sm:col-span-2">
        <legend className={labelClasses}>I can help by</legend>
        <div className="grid gap-2.5 sm:grid-cols-2">
          {INTERESTS.map((interest) => (
            <label key={interest} className="flex items-center gap-2.5 font-body text-sm text-text">
              <input
                type="checkbox"
                name="interests"
                value={interest}
                className="h-4 w-4 shrink-0 border-2 border-border accent-accent"
              />
              {interest}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="sm:col-span-2">
        <div className="flex gap-3">
          <input
            id="smsConsent"
            type="checkbox"
            name="smsConsent"
            className="mt-0.5 h-4 w-4 shrink-0 border-2 border-border accent-accent"
          />
          <label
            htmlFor="smsConsent"
            className="font-body text-xs leading-relaxed text-text-muted"
          >
            By providing your mobile phone number and checking the box to the
            left, you are opting-in to receive {siteConfig.committeeName} campaign
            alerts, updates, and news. Message frequencies vary. Message/Data
            Rates May Apply. Reply STOP to cancel. Reply HELP for help.
          </label>
        </div>
        {consentError && (
          <p className="mt-2 font-body text-sm text-red-600">
            Please check the box to opt in to text messages, or clear the phone
            field to sign up without them.
          </p>
        )}
      </div>

      <p className="font-body text-xs leading-relaxed text-text-muted sm:col-span-2">
        Text messaging for this campaign is managed by{" "}
        <a
          href="https://www.canpaigns.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-primary"
        >
          canpaigns.com
        </a>
        . For more information, please review our{" "}
        <a
          href="https://www.canpaigns.com/terms-conditions/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-primary"
        >
          Terms of Service
        </a>{" "}
        and{" "}
        <a
          href="https://www.canpaigns.com/privacy-policy/"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-primary"
        >
          Privacy Policy
        </a>
        .
      </p>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="bg-primary px-6 py-3 font-body font-bold tracking-wide text-white uppercase transition-colors hover:bg-primary-dark disabled:opacity-60 sm:col-span-2"
      >
        {status === "submitting" ? "Signing up…" : "Sign Up"}
      </button>
      {status === "error" && (
        <p className="font-body text-sm text-red-600 sm:col-span-2">
          Something went wrong — please try again.
        </p>
      )}
    </form>
  );
}
