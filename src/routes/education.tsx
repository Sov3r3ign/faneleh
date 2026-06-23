import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { achievements, education, profile } from "@/content/portfolio";

export const Route = createFileRoute("/education")({
  head: () => ({
    meta: [
      { title: `Education — ${profile.name}` },
      { name: "description", content: "Educational background and notable accomplishments." },
      { property: "og:title", content: `Education — ${profile.name}` },
      { property: "og:description", content: "Educational background and notable accomplishments." },
    ],
  }),
  component: EducationPage,
});

type Item = { period: string; title: string; org?: string; detail: string };

function Timeline({ items }: { items: Item[] }) {
  return (
    <ol className="divide-y divide-border border-y border-border">
      {items.map((it, idx) => (
        <li
          key={idx}
          className="grid grid-cols-1 gap-4 py-8 md:grid-cols-[140px_1fr] md:gap-10"
        >
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            {it.period}
          </p>
          <div>
            <h3 className="font-display text-lg font-semibold tracking-tight text-foreground">
              {it.title}
            </h3>
            {it.org ? (
              <p className="mt-1 text-sm text-primary">{it.org}</p>
            ) : null}
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {it.detail}
            </p>
          </div>
        </li>
      ))}
    </ol>
  );
}

function EducationPage() {
  return (
    <>
      <PageHeader
        eyebrow="Education"
        index="Timeline"
        title="The journey so far."
        intro="The schools, programmes, and milestones that shaped my path into technology."
      />
      <section className="section-y">
        <div className="container-page grid gap-20 md:grid-cols-2 md:gap-16">
          <div>
            <div className="mb-8 flex items-center gap-3">
              <h2 className="font-display text-xl font-semibold tracking-tight">
                Education
              </h2>
              <span className="h-px flex-1 bg-border" aria-hidden />
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                {education.length}
              </span>
            </div>
            <Timeline items={education} />
          </div>
          <div>
            <div className="mb-8 flex items-center gap-3">
              <h2 className="font-display text-xl font-semibold tracking-tight">
                Achievements
              </h2>
              <span className="h-px flex-1 bg-border" aria-hidden />
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                {achievements.length}
              </span>
            </div>
            <Timeline items={achievements.map((a) => ({ ...a }))} />
          </div>
        </div>
      </section>
    </>
  );
}
