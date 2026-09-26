import platform from "@/content/platform.json";

export function PlatformSection() {
  return (
    <section id="platform" className="bg-bg">
      <div className="mx-auto max-w-5xl px-6 py-16 sm:py-24 md:px-10">
        <h2 className="font-heading text-3xl text-primary sm:text-4xl">Where Phat Stands</h2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {platform.map((issue) => (
            <div key={issue.title} className="border-t-4 border-accent bg-bg-alt p-6">
              <h3 className="font-body text-lg font-bold tracking-wide text-primary uppercase">
                {issue.title}
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-text-muted">
                {issue.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
