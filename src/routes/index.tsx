import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Mail } from "lucide-react";
import {
  profile,
  projects,
  experience,
  achievements,
  certifications,
  about,
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

const coords = [
  { k: "LAT", v: "-33.9608" },
  { k: "LNG", v: "25.6022" },
  { k: "TZ", v: "SAST+02" },
  { k: "SIG", v: "STABLE" },
];

const stack = [
  "TypeScript", "React", "TanStack", "Node.js", "PostgreSQL",
  "Tailwind", "Vite", "Python", "Git", "Linux", "Figma", "REST",
];

function Index() {
  return (
    <div className="scanlines">
      {/* ====================== HERO / DECK ====================== */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="grid-floor" aria-hidden />
        {/* HUD top bar */}
        <div className="relative z-10 border-b border-border bg-background/40 backdrop-blur-sm">
          <div className="container-page flex h-9 items-center justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
            <div className="flex items-center gap-4">
              <span className="text-cyan">● REC</span>
              <span className="hidden sm:inline">SECTOR / HOME</span>
              <span className="hidden md:inline">USER / GUEST</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="hidden sm:inline">2026.06.24</span>
              <span className="blink">_</span>
            </div>
          </div>
        </div>

        <div className="container-page relative z-10 py-20 md:py-32">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
            {/* LEFT — IDENT */}
            <div className="lg:col-span-8">
              <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-cyan">
                ◄ IDENT // 00.HERO ►
              </p>
              <h1 className="mt-6 font-display text-[2.75rem] font-bold leading-[0.95] tracking-tight md:text-7xl lg:text-[6.5rem]">
                <span className="block text-foreground/90">{profile.firstName}</span>
                <span className="block text-glow text-cyan">{profile.lastName}.</span>
              </h1>

              <div className="mt-8 flex flex-wrap items-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em]">
                <span className="border border-cyan/60 bg-cyan/10 px-2 py-1 text-cyan">
                  {profile.title}
                </span>
                <span className="text-muted-foreground">↳</span>
                <span className="text-foreground/80">{profile.location}</span>
                <span className="text-muted-foreground">↳</span>
                <span className="text-foreground/80">
                  CAPACITI · YES Programme
                </span>
              </div>

              <p className="mt-10 max-w-2xl text-base leading-relaxed text-foreground/80 md:text-lg">
                {profile.summary}
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <Link
                  to="/projects"
                  className="hud-brackets group inline-flex items-center gap-3 border border-cyan/60 bg-cyan/10 px-5 py-3 font-mono text-[11px] uppercase tracking-[0.25em] text-cyan transition-all hover:bg-cyan/20 glow-cyan"
                >
                  Enter archive
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 border border-border px-5 py-3 font-mono text-[11px] uppercase tracking-[0.25em] text-foreground/80 transition-colors hover:border-foreground/40 hover:text-foreground"
                >
                  <Mail className="h-3.5 w-3.5" /> Open channel
                </Link>
              </div>
            </div>

            {/* RIGHT — TELEMETRY PANEL */}
            <div className="lg:col-span-4">
              <div className="hud hud-brackets p-5">
                <div className="flex items-center justify-between border-b border-border pb-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-cyan">
                    ▣ TELEMETRY
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    ID/0xFH-25
                  </span>
                </div>

                <dl className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 font-mono text-[11px]">
                  {coords.map((c) => (
                    <div key={c.k}>
                      <dt className="text-[9px] uppercase tracking-[0.3em] text-muted-foreground">
                        {c.k}
                      </dt>
                      <dd className="mt-0.5 text-cyan">{c.v}</dd>
                    </div>
                  ))}
                </dl>

                <div className="mt-5 border-t border-border pt-4">
                  <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-muted-foreground">
                    Mission
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-foreground/85">
                    {about.mission}
                  </p>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-border pt-4 font-mono text-[10px] uppercase tracking-[0.25em]">
                  <span className="flex items-center gap-2 text-foreground/80">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan" />
                    Available
                  </span>
                  <span className="text-magenta">PRIORITY/HIGH</span>
                </div>
              </div>

              {/* mini console */}
              <div className="mt-4 hud p-4 font-mono text-[10px] leading-relaxed text-foreground/70">
                <span className="text-cyan">$</span> whoami<br />
                <span className="text-foreground">↳ software_engineer</span>
                <br />
                <span className="text-cyan">$</span> uptime<br />
                <span className="text-foreground">↳ 3y · learning_curve: rising</span>
              </div>
            </div>
          </div>
        </div>

        {/* TICKER */}
        <div className="relative z-10 overflow-hidden border-t border-border bg-background/60 py-3">
          <div className="ticker font-mono text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
            {[...Array(2)].map((_, k) => (
              <div key={k} className="flex shrink-0 items-center gap-8 pr-8">
                {stack.map((s) => (
                  <span key={`${k}-${s}`} className="flex items-center gap-8">
                    <span className="text-cyan/70">◆</span>
                    <span>{s}</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== VISION / MISSION ====================== */}
      <section className="container-page section-y">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-cyan">
              ◄ NODE / 01.DOCTRINE ►
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-4xl">
              Signals from the operator.
            </h2>
          </div>
          <div className="md:col-span-8 grid gap-6 md:grid-cols-2">
            <div className="hud hud-brackets p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-magenta">
                ▲ VISION
              </p>
              <p className="mt-4 text-sm leading-relaxed text-foreground/85">
                {about.vision}
              </p>
            </div>
            <div className="hud hud-brackets p-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-cyan">
                ▼ MISSION
              </p>
              <p className="mt-4 text-sm leading-relaxed text-foreground/85">
                {about.mission}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ====================== ARCHIVE / WORK GRID ====================== */}
      <section className="border-y border-border bg-background/40">
        <div className="container-page section-y">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-cyan">
                ◄ NODE / 02.ARCHIVE ►
              </p>
              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-5xl">
                Deployed projects.
              </h2>
            </div>
            <span className="hidden font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground md:inline">
              count / 0{projects.length}
            </span>
          </div>

          <div className="grid grid-cols-1 gap-px bg-border md:grid-cols-2">
            {projects.slice(0, 4).map((p, i) => (
              <Link
                to="/projects"
                key={p.name}
                className="group relative block bg-background p-6 transition-colors hover:bg-surface md:p-8"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-cyan/80">
                    [{String(i + 1).padStart(2, "0")}]
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:text-cyan group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-semibold tracking-tight text-foreground group-hover:text-cyan md:text-3xl">
                  {p.name}
                </h3>
                <p className="mt-3 max-w-md text-sm text-muted-foreground">
                  {p.overview}
                </p>
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {p.stack.slice(0, 4).map((s) => (
                    <span
                      key={s}
                      className="border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <div className="mt-6 border-t border-border pt-4 font-mono text-[10px] uppercase tracking-[0.25em] text-foreground/70">
                  <span className="text-muted-foreground">role / </span>
                  {p.role}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ====================== EXPERIENCE LOG ====================== */}
      <section className="container-page section-y">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-cyan">
              ◄ NODE / 03.LOGSTREAM ►
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight md:text-5xl">
              Trajectory.
            </h2>
            <p className="mt-6 max-w-sm text-sm text-muted-foreground">
              A sequential log of where I've been operating — internships,
              research, and student-leadership protocols.
            </p>
            <Link
              to="/experience"
              className="mt-8 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-cyan hover:text-foreground"
            >
              ▸ Full log <ArrowUpRight className="h-3 w-3" />
            </Link>
          </div>

          <ol className="md:col-span-7 relative space-y-0 border-l border-border">
            {experience.slice(0, 3).map((job, idx) => (
              <li key={idx} className="relative pl-8 pb-10">
                <span className="absolute left-0 top-2 -translate-x-1/2">
                  <span className="block h-2 w-2 rotate-45 border border-cyan bg-background" />
                </span>
                <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-cyan/80">
                  {job.period}
                </p>
                <p className="mt-2 font-display text-xl font-semibold text-foreground">
                  {job.role}
                </p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  {job.org} · {job.location}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ====================== CREDENTIALS + HIGHLIGHTS GRID ====================== */}
      <section className="border-t border-border bg-background/40">
        <div className="container-page section-y grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-magenta">
              ◄ NODE / 04.CREDENTIALS ►
            </p>
            <h2 className="mt-4 font-display text-2xl font-bold tracking-tight md:text-3xl">
              Verified credentials.
            </h2>
            <ul className="mt-8 divide-y divide-border border-y border-border">
              {certifications.slice(0, 4).map((c, idx) => (
                <li key={idx} className="flex items-baseline justify-between gap-6 py-4">
                  <div>
                    <p className="text-sm text-foreground">{c.title}</p>
                    <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      {c.issuer}
                    </p>
                  </div>
                  <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.25em] text-cyan">
                    {c.period}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-magenta">
              ◄ NODE / 05.HIGHLIGHTS ►
            </p>
            <h2 className="mt-4 font-display text-2xl font-bold tracking-tight md:text-3xl">
              Field highlights.
            </h2>
            <ul className="mt-8 space-y-4">
              {achievements.map((a, idx) => (
                <li
                  key={idx}
                  className="hud p-4 flex items-baseline justify-between gap-6"
                >
                  <div>
                    <p className="text-sm text-foreground">{a.title}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{a.detail}</p>
                  </div>
                  <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.25em] text-cyan">
                    {a.period}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ====================== CTA / OPEN CHANNEL ====================== */}
      <section className="container-page section-y">
        <div className="hud hud-brackets glow-cyan relative overflow-hidden p-10 md:p-16">
          <div className="grid-floor opacity-50" aria-hidden />
          <div className="relative">
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-cyan">
              ◄ NODE / 06.HANDSHAKE ►
            </p>
            <h2 className="mt-6 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
              Open a <span className="text-cyan text-glow">channel</span> — let's build something.
            </h2>
            <p className="mt-6 max-w-xl text-sm text-foreground/80 md:text-base">
              Available for engineering roles, collaborations, and ambitious
              open-source missions. Latency low. Bandwidth high.
            </p>
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-3 border border-cyan/60 bg-cyan/10 px-6 py-4 font-mono text-[11px] uppercase tracking-[0.25em] text-cyan transition-all hover:bg-cyan/20"
            >
              Initiate transmission
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
