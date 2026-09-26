import type { Metadata } from "next";
import Image from "next/image";
import endorsements from "@/content/endorsements.json";
import orgEndorsements from "@/content/org-endorsements.json";
import { EndorsementGrid } from "@/components/endorsements/EndorsementGrid";

export const metadata: Metadata = {
  title: "Endorsements",
  description: "See who is supporting the campaign.",
};

const groups: { name: string; members: string[] }[] = endorsements.groups;

export default function EndorsementsPage() {
  return (
    <div>
      <section className="border-b-4 border-accent bg-bg-alt">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24 md:px-10">
          <h1 className="font-heading text-4xl text-primary sm:text-5xl">
            Phat Bui is proud to be endorsed by leaders who share his commitment to a stronger, safer Garden Grove
          </h1>
        </div>
      </section>

      <section className="bg-bg">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24 md:px-10">
          <EndorsementGrid items={endorsements.featured} columns={3} />
        </div>
      </section>

      <section className="bg-bg-alt">
        <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24 md:px-10">
          <h2 className="font-heading text-2xl text-primary">Also Endorsed By</h2>

          {groups.length > 0 && (
            <div className="mt-8 grid gap-10 sm:grid-cols-2">
              {groups.map((group) => (
                <div key={group.name}>
                  <h3 className="font-heading text-lg text-primary">{group.name}</h3>
                  <ul className="mt-3 font-body text-text">
                    {group.members.map((name) => (
                      <li key={name} className="border-b border-border py-2">
                        {name}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          <div className="mt-8 flex flex-wrap justify-center gap-12 sm:justify-start">
            {orgEndorsements.map((org) => (
              <div key={org.name} className="flex w-40 flex-col items-center text-center">
                <div className="relative h-36 w-36 shrink-0">
                  <Image
                    src={org.logo}
                    alt={org.name}
                    fill
                    sizes="144px"
                    className="object-contain"
                  />
                </div>
                <p className="mt-3 font-body text-xs leading-tight font-bold text-primary uppercase">
                  {org.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
