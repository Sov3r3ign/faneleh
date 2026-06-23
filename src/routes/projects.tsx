import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/page-header";
import { profile, projects } from "@/content/portfolio";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: `Projects — ${profile.name}` },
      { name: "description", content: "Selected projects showcasing my engineering and design work." },
      { property: "og:title", content: `Projects — ${profile.name}` },
      { property: "og:description", content: "Selected projects showcasing my engineering and design work." },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Selected work."
        intro="A focused set of projects — each chosen because it taught me something or shipped real value."
      />
      <section className="section-y">
        <div className="container-page grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.name}
              className="group flex flex-col rounded-xl border border-border bg-surface p-6 transition-colors hover:border-foreground/20 md:p-8"
            >
              <h2 className="text-xl font-semibold tracking-tight">{p.name}</h2>
              <p className="mt-3 text-sm text-foreground/85">{p.overview}</p>

              <dl className="mt-5 space-y-2 text-sm">
                <div className="flex gap-3">
                  <dt className="w-20 shrink-0 text-muted-foreground">Role</dt>
                  <dd className="text-foreground/85">{p.role}</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="w-20 shrink-0 text-muted-foreground">Stack</dt>
                  <dd className="flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <span
                        key={s}
                        className="rounded-md border border-border bg-background px-2 py-0.5 text-xs text-foreground/80"
                      >
                        {s}
                      </span>
                    ))}
                  </dd>
                </div>
                <div className="flex gap-3">
                  <dt className="w-20 shrink-0 text-muted-foreground">Outcome</dt>
                  <dd className="text-foreground/85">{p.outcomes}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
