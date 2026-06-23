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

function Section({
  num,
  title,
  children,
}: {
  num: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-6 border-t border-border pt-10 md:grid-cols-[1fr_2fr] md:gap-16 md:pt-14">
      <div>
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          {num}
        </p>
        <h2 className="mt-3 font-display text-xl font-semibold tracking-tight text-foreground">
          {title}
        </h2>
      </div>
      <div className="text-base leading-relaxed text-foreground/85 md:text-lg">
        {children}
      </div>
    </div>
  );
}

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        index="01 / Profile"
        title="Curious by default, deliberate by practice."
        intro="Where I come from, what I'm working toward, and the kind of work I want to do."
      />
      <section className="section-y">
        <div className="container-page space-y-0">
          <Section num="01" title="Personal background">
            {about.personalBackground}
          </Section>
          <Section num="02" title="Professional background">
            {about.professionalBackground}
          </Section>
          <Section num="03" title="Vision">{about.vision}</Section>
          <Section num="04" title="Mission">{about.mission}</Section>
          <Section num="05" title="Career goals">
            <ul className="space-y-3">
              {about.goals.map((g, i) => (
                <li key={g} className="flex gap-4">
                  <span className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{g}</span>
                </li>
              ))}
            </ul>
          </Section>
          <Section num="06" title="Interests">
            <div className="flex flex-wrap gap-2">
              {about.interests.map((i) => (
                <span
                  key={i}
                  className="rounded-full border border-border px-3 py-1 font-mono text-[11px] uppercase tracking-[0.15em] text-foreground/75"
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
