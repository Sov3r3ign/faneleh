import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, Mail } from "lucide-react";
import portrait from "@/assets/portrait.jpg";
import {
  profile,
  projects,
  experience,
  achievements,
  certifications,
} from "@/content/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${profile.name} — ${profile.title}` },
      { name: "description", content: profile.summary },
      { property: "og:title", content: `${profile.name} — ${profile.title}` },
      { property: "og:description", content: profile.summary },
    ],
  }),
  component: Index,
});

const stats = [
  { label: "Focus", value: "Full-stack" },
  { label: "Stack", value: "TS / React" },
  { label: "Status", value: "Open to roles" },
  { label: "Based", value: profile.location.split(",")[0] },
];

function Index() {
  return (
    <div>
      {/* HERO */}
      <section className="section-y">
        <div className="container-page">
          <div className="flex flex-col items-start justify-between gap-12 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <div className="mb-8 inline-flex items-center gap-3">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
                </span>
                <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
                  {profile.title}
                </span>
              </div>

              <h1 className="text-5xl font-bold leading-[0.9] tracking-tight md:text-7xl lg:text-[5.5rem]">
                Building{" "}
                <span className="italic text-muted-foreground/80">thoughtful</span>{" "}
                software, end to end.
              </h1>

              <p className="mt-10 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
                {profile.summary}
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Link
                  to="/projects"
                  className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  View selected work
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-subtle"
                >
                  <Mail className="h-4 w-4" /> Get in touch
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[4/5] w-48 overflow-hidden rounded-2xl border border-border bg-surface md:w-64 lg:w-72">
                <img
                  src={portrait}
                  alt={`Portrait of ${profile.name}`}
                  width={1024}
                  height={1024}
                  className="h-full w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
                />
              </div>
              <div className="absolute -bottom-3 -left-3 border border-border bg-background px-2 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                LOC / {profile.location}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* META STRIP */}
      <section className="container-page">
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-background p-6 md:p-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                {s.label}
              </p>
              <p className="mt-3 font-display text-xl font-semibold text-foreground md:text-2xl">
                {s.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SELECTED WORK */}
      <section className="container-page mt-32">
        <div className="mb-12 flex items-end justify-between gap-8">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Selected Works
          </h2>
          <div className="hidden h-px flex-1 bg-border md:block" />
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
            Archive / 0{projects.length}
          </span>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-x-12 md:gap-y-20">
          {projects.slice(0, 4).map((p, i) => (
            <Link
              to="/projects"
              key={p.name}
              className={`group block ${i % 2 === 1 ? "md:pt-16" : ""}`}
            >
              <div className="mb-6 aspect-video overflow-hidden rounded-lg border border-border bg-surface transition-colors group-hover:border-primary/40">
                <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_center,var(--color-subtle),transparent_70%)] font-display text-5xl font-bold tracking-tight text-foreground/30">
                  {p.name.slice(0, 1)}
                </div>
              </div>
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold tracking-tight text-foreground">
                    {p.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {p.overview}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.stack.slice(0, 3).map((s) => (
                      <span
                        key={s}
                        className="rounded border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 shrink-0 text-primary opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* EXPERIENCE + HIGHLIGHTS */}
      <section className="container-page mt-32 grid gap-16 md:grid-cols-12">
        <div className="md:col-span-7">
          <div className="mb-12 flex items-end justify-between gap-6">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              Recent Experience
            </h2>
            <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
              {experience.length} entries
            </span>
          </div>
          <ol className="space-y-0">
            {experience.slice(0, 3).map((job, idx) => (
              <li
                key={idx}
                className="grid grid-cols-1 gap-3 border-t border-border py-8 md:grid-cols-12 md:gap-6"
              >
                <div className="md:col-span-3">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {job.period}
                  </p>
                </div>
                <div className="md:col-span-9">
                  <p className="font-display text-lg font-semibold text-foreground">
                    {job.role}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {job.org} · {job.location}
                  </p>
                </div>
              </li>
            ))}
          </ol>
          <Link
            to="/experience"
            className="mt-4 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground"
          >
            Full experience <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="md:col-span-5">
          <h2 className="mb-12 text-3xl font-bold tracking-tight md:text-4xl">
            Highlights
          </h2>
          <ul className="space-y-6">
            {achievements.slice(0, 3).map((a, idx) => (
              <li
                key={idx}
                className="flex items-baseline justify-between gap-6 border-b border-border pb-4"
              >
                <p className="text-sm text-foreground">{a.title}</p>
                <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  {a.period}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CREDENTIALS + CTA */}
      <section className="container-page mt-32 border-t border-border pt-24">
        <div className="grid gap-16 md:grid-cols-2 md:gap-24">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Credentials
            </p>
            <ul className="mt-8 space-y-5">
              {certifications.slice(0, 4).map((c, idx) => (
                <li
                  key={idx}
                  className="flex items-baseline justify-between gap-6"
                >
                  <div>
                    <p className="text-sm text-foreground">{c.title}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">
                      {c.issuer}
                    </p>
                  </div>
                  <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {c.period}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col justify-end">
            <p className="max-w-sm italic text-muted-foreground">
              Open for internships, full-time engineering roles, and
              collaboration on ambitious open-source projects.
            </p>
            <Link
              to="/contact"
              className="group mt-8 inline-flex items-center gap-4 font-display text-3xl font-bold tracking-tight text-foreground transition-colors hover:text-primary md:text-5xl"
            >
              Start a conversation
              <ArrowRight className="h-7 w-7 shrink-0 transition-transform group-hover:translate-x-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
