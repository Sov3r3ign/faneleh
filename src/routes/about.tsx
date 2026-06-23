import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { about, profile } from "@/content/portfolio";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About — ${profile.name}` },
      { name: "description", content: about.vision },
      { property: "og:title", content: `About — ${profile.name}` },
      { property: "og:description", content: about.vision },
    ],
  }),
  component: AboutPage,
});

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-4 md:grid-cols-[200px_1fr] md:gap-12">
      <h2 className="text-sm font-medium uppercase tracking-wider text-muted-foreground">
        {title}
      </h2>
      <div className="text-base leading-relaxed text-foreground/90">{children}</div>
    </div>
  );
}

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="My story, in short."
        intro="Where I come from, what I'm working toward, and the kind of work I want to do."
      />
      <section className="section-y">
        <div className="container-page space-y-14">
          <Section title="Personal background">{about.personalBackground}</Section>
          <Section title="Professional background">{about.professionalBackground}</Section>
          <Section title="Vision">{about.vision}</Section>
          <Section title="Mission">{about.mission}</Section>
          <Section title="Career goals">
            <ul className="list-disc space-y-2 pl-5">
              {about.goals.map((g) => (
                <li key={g}>{g}</li>
              ))}
            </ul>
          </Section>
          <Section title="Interests">
            <div className="flex flex-wrap gap-2">
              {about.interests.map((i) => (
                <span
                  key={i}
                  className="rounded-full border border-border bg-surface px-3 py-1 text-sm text-foreground/80"
                >
                  {i}
                </span>
              ))}
            </div>
          </Section>
        </div>
      </section>
    </>
  );
}
