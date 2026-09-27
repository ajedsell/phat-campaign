import type { Metadata } from "next";
import Image from "next/image";
import { siteConfig } from "@/content/site.config";

export const metadata: Metadata = {
  title: "Candidate Statement",
  description: `${siteConfig.fullName}'s candidate statement.`,
};

export default function CandidateStatementPage() {
  return (
    <section className="bg-bg">
      <div className="mx-auto max-w-3xl px-6 py-16 sm:py-24 md:px-10">
        <div className="relative mx-auto aspect-[2304/862] w-full max-w-xl">
          <Image
            src="/images/logo.png"
            alt={siteConfig.siteName}
            fill
            sizes="(max-width: 640px) 90vw, 576px"
            className="object-contain"
            priority
          />
        </div>

        <div className="mt-10 font-body text-base leading-relaxed text-text-muted">
          <p className="text-center text-sm font-bold tracking-wide text-primary uppercase">
            Experience to Lead &bull; A Record That Delivers &bull; A Heart to Serve
          </p>

          <div className="mt-8 space-y-4">
            <p>
              Garden Grove has been my family&apos;s home for more than 40
              years. As your City Councilmember from 2014 to 2022, I worked
              every day to keep our neighborhoods safe, support local
              businesses, protect taxpayers, and serve our community with
              integrity.
            </p>
            <p>
              Today, I am asking for your vote so I can continue that
              commitment and put my experience to work for Garden Grove once
              again.
            </p>
            <p>
              As a business owner, CEO, former Planning Commissioner, and
              current Orange County Housing and Community Development
              Commissioner, I have the proven experience, leadership, and
              understanding of local government to deliver results from day
              one.
            </p>
          </div>

          <h2 className="mt-10 font-heading text-xl text-primary">Public Safety First</h2>
          <div className="mt-3 space-y-4">
            <p>
              My top priority is keeping Garden Grove safe. I will work to
              fully staff our Police Department, support our police
              officers, and give them the resources they need to protect our
              families and neighborhoods.
            </p>
            <p>
              I will enforce city laws to address illegal homeless
              encampments in our parks, neighborhoods, and business
              districts, while demanding accountability and measurable
              results from programs funded to address homelessness.
            </p>
          </div>

          <h2 className="mt-10 font-heading text-xl text-primary">
            Support Local Businesses &bull; Protect Taxpayers
          </h2>
          <div className="mt-3 space-y-4">
            <p>
              I will support our local businesses by cutting unnecessary
              regulations and red tape, oppose new taxes and unnecessary fee
              increases, and modernize City Hall to provide faster, more
              efficient service.
            </p>
            <p>
              Most importantly, I will make sure your tax dollars are spent
              wisely, responsibly, and transparently.
            </p>
          </div>

          <h2 className="mt-10 font-heading text-xl text-primary">
            Giving Back to the Community I Call Home
          </h2>
          <div className="mt-3 space-y-4">
            <p>
              I came to America as a refugee with nothing, and I have never
              forgotten the opportunities this country and Garden Grove gave
              my family.
            </p>
            <p>
              Public service is my way of giving back to the community that
              has given my family so much. I am honored to have the
              endorsement of Orange County Supervisor Janet Nguyen and
              Garden Grove Mayor Stephanie Klopfenstein, and I respectfully
              ask for your vote.
            </p>
            <p>
              Together, we can keep Garden Grove safe, strong, and a great
              place to live, work, raise a family, and build a future.
            </p>
          </div>

          <div className="mt-10 border-t-4 border-accent bg-bg-alt p-6">
            <p className="font-heading text-lg text-primary">Patrick Phat Bui</p>
            <p className="mt-1 font-body text-sm text-text-muted">
              Business Owner / Nonprofit Chairman
              <br />
              Former Garden Grove City Councilman
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
