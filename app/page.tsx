import { Hero } from "@/components/home/Hero";
import { MeetSection } from "@/components/home/MeetSection";
import { PlatformSection } from "@/components/home/PlatformSection";
import { SignupForm } from "@/components/home/SignupForm";
import { DonationTiers } from "@/components/home/DonationTiers";

export default function Home() {
  return (
    <>
      <Hero />
      <MeetSection />
      <PlatformSection />
      <section id="get-involved" className="bg-bg">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center sm:py-24 md:px-10">
          <h2 className="font-heading text-3xl text-primary sm:text-4xl">Get Involved</h2>
          <p className="mx-auto mt-3 max-w-md font-body text-sm text-text-muted">
            Sign up for campaign updates and volunteer opportunities.
          </p>
          <div className="mt-8 text-left">
            <SignupForm />
          </div>
        </div>
      </section>
      <DonationTiers />
    </>
  );
}
