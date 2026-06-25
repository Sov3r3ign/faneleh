import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { profile, projects } from "@/content/portfolio";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: `Projects — ${profile.name}` },
      { name: "description", content: "Selected projects showcasing my engineering work." },
      { property: "og:title", content: `Projects — ${profile.name}` },
      { property: "og:description", content: "Selected projects showcasing my engineering work." },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        index={`Archive / 0${projects.length}`}
        title="Selected projects."
        intro="A focused set of work — each chosen because it taught me something or shipped real value."
      />
      <section className="section-y">
        <div className="container-page">
          <ul className="divide-y divide-border border-y border-border">
            {projects.map((p, i) => (
              <li
                key={p.name}
                className="group grid grid-cols-1 gap-6 py-10 md:grid-cols-12 md:gap-10 md:py-14"
              >
                <div className="md:col-span-2">
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    {String(i + 1).padStart(2, "0")} / Project
                  </p>
                </div>

                <div className="md:col-span-6">
                  <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
                    {p.name}
                  </h2>
                  <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
                    {p.overview}
                  </p>
                  <p className="mt-6 text-sm text-foreground/80">
                    <span className="text-muted-foreground">Outcome — </span>
                    {p.outcomes}
                  </p>
                  {p.url && (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noreferrer"
                      className="group mt-6 inline-flex items-center gap-2 border border-border px-3 py-2 font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/80 transition-colors hover:border-foreground/40 hover:text-foreground"
                    >
                      View repository
                      <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </a>
                  )}
                </div>

                <div className="md:col-span-4">
                  <dl className="space-y-4 text-sm">
                    <div>
                      <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                        Role
                      </dt>
                      <dd className="mt-1.5 text-foreground/90">{p.role}</dd>
                    </div>
                    <div>
                      <dt className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                        Stack
                      </dt>
                      <dd className="mt-2 flex flex-wrap gap-1.5">
                        {p.stack.map((s) => (
                          <span
                            key={s}
                            className="rounded border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
                          >
                            {s}
                          </span>
                        ))}
                      </dd>
                    </div>
                  </dl>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-10 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            End of archive <ArrowUpRight className="h-3 w-3" />
          </p>
        </div>
      </section>
    </>
  );
}
