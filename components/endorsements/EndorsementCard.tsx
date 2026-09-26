import Image from "next/image";

type Endorsement = {
  jurisdiction: string;
  title: string;
  name: string;
  photo: string | null;
  quote?: string;
};

function initials(name: string) {
  const parts = name.split(" ");
  return parts
    .slice(-2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export function EndorsementCard({ endorsement }: { endorsement: Endorsement }) {
  return (
    <figure className="flex h-full flex-col border-t-4 border-accent bg-bg-alt p-6 text-center">
      {endorsement.photo ? (
        <div className="relative mx-auto aspect-square w-24 overflow-hidden">
          <Image
            src={endorsement.photo}
            alt={endorsement.name}
            fill
            sizes="96px"
            className="object-cover"
          />
        </div>
      ) : (
        <div
          aria-hidden="true"
          className="mx-auto flex aspect-square w-24 items-center justify-center bg-primary font-heading text-xl text-white"
        >
          {initials(endorsement.name)}
        </div>
      )}
      <figcaption className="mt-4">
        <p className="font-body text-xs tracking-wide text-text-muted uppercase">
          {endorsement.jurisdiction}
        </p>
        <p className="mt-1 font-heading text-base text-primary">{endorsement.title}</p>
        <p className="font-heading text-base text-primary">{endorsement.name}</p>
      </figcaption>
      {endorsement.quote && (
        <blockquote className="mt-4 font-body text-sm leading-relaxed text-text-muted">
          &ldquo;{endorsement.quote}&rdquo;
        </blockquote>
      )}
    </figure>
  );
}
