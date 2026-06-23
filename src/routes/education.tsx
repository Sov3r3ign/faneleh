import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { achievements, education, profile } from "@/content/portfolio";

export const Route = createFileRoute("/education")({
  head: () => ({
    meta: [
      { title: `Education & Achievements — ${profile.name}` },
      { name: "description", content: "Educational background, awards, and notable accomplishments." },
      { property: "og:title", content: `Education & Achievements — ${profile.name}` },
      { property: "og:description", content: "Educational background, awards, and notable accomplishments." },
    ],
  }),
  component: EducationPage,
});

function Timeline({ items }: { items: { period: string; title: string; org?: string; detail: string }[] }) {
  return (
    <ol className="relative space-y-8 border-l border-border pl-6">
      {items.map((it, idx) => (
        <li key={idx} className="relative">
          <span className="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-background bg-primary" />
          <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {it.period}
          </p>
          <h3 className="mt-1 text-lg font-semibold tracking-tight">{it.title}</h3>
          {it.org ? <p className="text-sm text-muted-foreground">{it.org}</p> : null}
          <p className="mt-2 text-sm text-foreground/80">{it.detail}</p>
        </li>
      ))}
    </ol>
  );
}

function EducationPage() {
  return (
    <>
      <PageHeader
        eyebrow="Education & Achievements"
        title="The journey so far."
        intro="A timeline of the schools, awards, and milestones that shaped my path."
      />
      <section className="section-y">
        <div className="container-page grid gap-16 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-xl font-semibold tracking-tight">Education</h2>
            <Timeline items={education} />
          </div>
          <div>
            <h2 className="mb-6 text-xl font-semibold tracking-tight">Achievements</h2>
            <Timeline items={achievements.map((a) => ({ ...a }))} />
          </div>
        </div>
      </section>
    </>
  );
}
