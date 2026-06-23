import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { experience, profile } from "@/content/portfolio";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: `Experience — ${profile.name}` },
      { name: "description", content: "Roles, internships, and positions that built my skills." },
      { property: "og:title", content: `Experience — ${profile.name}` },
      { property: "og:description", content: "Roles, internships, and positions that built my skills." },
    ],
  }),
  component: ExperiencePage,
});

function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        index={`${experience.length} entries`}
        title="Where I've contributed."
        intro="Internships, research, and roles where I've sharpened how I build and collaborate."
      />
      <section className="section-y">
        <div className="container-page">
          <ol className="divide-y divide-border border-y border-border">
            {experience.map((job, idx) => (
              <li
                key={idx}
                className="grid grid-cols-1 gap-6 py-10 md:grid-cols-12 md:gap-10 md:py-14"
              >
                <div className="md:col-span-3">
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    {job.period}
                  </p>
                  <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70">
                    {job.location}
                  </p>
                </div>
                <div className="md:col-span-9">
                  <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
                    {job.role}
                  </h2>
                  <p className="mt-1 text-sm text-primary">{job.org}</p>
                  {"summary" in job && job.summary ? (
                    <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
                      {job.summary}
                    </p>
                  ) : null}
                  <ul className="mt-6 space-y-3 text-sm text-foreground/85">
                    {job.bullets.map((b) => (
                      <li key={b} className="flex gap-4">
                        <span className="mt-2 h-px w-4 shrink-0 bg-border" aria-hidden />
                        <span className="leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
