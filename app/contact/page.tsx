import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the campaign.",
};

export default function ContactPage() {
  return (
    <div>
      <section className="border-b-4 border-accent bg-bg-alt">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24 md:px-10">
          <h1 className="font-heading text-4xl text-primary sm:text-5xl">
            Contact
          </h1>
          <p className="mt-3 max-w-xl font-body text-text-muted">
            Have a question or want to get involved? Send us a message.
          </p>
        </div>
      </section>

      <section className="bg-bg">
        <div className="mx-auto max-w-xl px-6 py-16 sm:py-24 md:px-10">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
