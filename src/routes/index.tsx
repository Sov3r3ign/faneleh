import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Github, Linkedin, Mail, MapPin, ArrowUpRight } from "lucide-react";
import portrait from "@/assets/portrait.jpg";
import { profile, projects, experience, achievements, certifications } from "@/content/portfolio";

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

function Index() {
  return (
    <section className="section-y">
      <div className="container-page grid items-center gap-12 md:grid-cols-[1.2fr_1fr] md:gap-16">
        <div className="order-2 md:order-1">
          <p className="eyebrow">Portfolio</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">
            Hi, I'm {profile.name}.
          </h1>
          <p className="mt-4 text-xl text-muted-foreground md:text-2xl">
            {profile.title}
          </p>
          <p className="mt-6 max-w-xl text-base text-foreground/80 md:text-lg">
            <span className="italic">"{profile.tagline}"</span>
          </p>
          <p className="mt-6 max-w-xl text-base text-muted-foreground">
            {profile.summary}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              View my work <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-subtle"
            >
              Get in touch
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4" /> {profile.location}
            </span>
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-1.5 hover:text-foreground">
              <Mail className="h-4 w-4" /> Email
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-foreground">
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-foreground">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2">
          <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-2xl border border-border bg-surface">
            <img
              src={portrait}
              alt={`Portrait of ${profile.name}`}
              width={1024}
              height={1024}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Featured projects */}
      <div className="container-page mt-24 md:mt-32">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
              Featured projects
            </h2>
          </div>
          <Link
            to="/projects"
            className="hidden items-center gap-1 text-sm text-muted-foreground hover:text-foreground sm:inline-flex"
          >
            View all <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {projects.slice(0, 2).map((p) => (
            <Link
              key={p.name}
              to="/projects"
              className="group rounded-xl border border-border bg-surface p-6 transition-colors hover:border-foreground/20 md:p-8"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="text-lg font-semibold tracking-tight">{p.name}</h3>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" />
              </div>
              <p className="mt-2 text-sm text-foreground/80">{p.overview}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.stack.slice(0, 4).map((s) => (
                  <span
                    key={s}
                    className="rounded-md border border-border bg-background px-2 py-0.5 text-xs text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent experience + highlights */}
      <div className="container-page mt-24 grid gap-12 md:mt-32 md:grid-cols-[1.3fr_1fr]">
        <div>
          <p className="eyebrow">Recently</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
            Where I've been working
          </h2>
          <ol className="mt-8 space-y-6">
            {experience.slice(0, 2).map((job, idx) => (
              <li
                key={idx}
                className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4 border-b border-border pb-6"
              >
                <div className="min-w-0">
                  <p className="truncate text-base font-medium text-foreground">
                    {job.role}
                  </p>
                  <p className="truncate text-sm text-primary">{job.org}</p>
                </div>
                <span className="shrink-0 text-xs text-muted-foreground">
                  {job.period}
                </span>
              </li>
            ))}
          </ol>
          <Link
            to="/experience"
            className="mt-2 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
          >
            Full experience <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div>
          <p className="eyebrow">Highlights</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
            A few proud moments
          </h2>
          <ul className="mt-8 space-y-4">
            {achievements.slice(0, 3).map((a, idx) => (
              <li key={idx} className="rounded-lg border border-border bg-surface p-4">
                <p className="text-xs uppercase tracking-wider text-muted-foreground">
                  {a.period}
                </p>
                <p className="mt-1 text-sm font-medium text-foreground">{a.title}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Certifications strip */}
      <div className="container-page mt-24 md:mt-32">
        <p className="eyebrow">Continued learning</p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
          Recent certifications
        </h2>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.slice(0, 3).map((c, idx) => (
            <li
              key={idx}
              className="rounded-lg border border-border bg-surface p-4 text-sm"
            >
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                {c.period} · {c.issuer}
              </p>
              <p className="mt-1 font-medium text-foreground">{c.title}</p>
            </li>
          ))}
        </ul>
        <Link
          to="/certifications"
          className="mt-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
        >
          All certifications <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>

      {/* CTA */}
      <div className="container-page mt-24 md:mt-32">
        <div className="rounded-2xl border border-border bg-surface p-8 text-center md:p-14">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Have a role or project in mind?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-sm text-muted-foreground md:text-base">
            I'm currently open to internships and full-time opportunities. Let's chat.
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Get in touch <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
