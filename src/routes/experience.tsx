import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { experience, profile } from "@/content/portfolio";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: `Work Experience — ${profile.name}` },
      { name: "description", content: "Roles, internships, and leadership positions that built my skills." },
      { property: "og:title", content: `Work Experience — ${profile.name}` },
      { property: "og:description", content: "Roles, internships, and leadership positions that built my skills." },
    ],
  }),
  component: ExperiencePage,
});

function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Work Experience"
        title="Where I've contributed."
        intro="Internships, research, and roles where I've sharpened how I build and collaborate."
      />
      <section className="section-y">
        <div className="container-page space-y-10">
          {experience.map((job, idx) => (
            <article
              key={idx}
              className="grid gap-4 rounded-xl border border-border bg-surface p-6 md:grid-cols-[200px_1fr] md:gap-10 md:p-8"
            >
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {job.period}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{job.location}</p>
              </div>
              <div>
                <h2 className="text-lg font-semibold tracking-tight">{job.role}</h2>
                <p className="text-sm text-primary">{job.org}</p>
                {"summary" in job && job.summary ? (
                  <p className="mt-3 text-sm text-foreground/85">{job.summary}</p>
                ) : null}
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-foreground/85">
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
