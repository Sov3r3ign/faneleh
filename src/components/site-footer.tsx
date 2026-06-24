import { Link } from "@tanstack/react-router";
import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/content/portfolio";

const nav = [
  { to: "/", label: "Index", code: "00" },
  { to: "/about", label: "About", code: "01" },
  { to: "/education", label: "Education", code: "02" },
  { to: "/experience", label: "Experience", code: "03" },
  { to: "/projects", label: "Work", code: "04" },
  { to: "/certifications", label: "Credentials", code: "05" },
  { to: "/contact", label: "Contact", code: "06" },
] as const;

export function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-border bg-background/60">
      <div className="container-page grid gap-12 py-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-foreground">
              {profile.firstName}<span className="text-cyan">.</span>{profile.lastName}
            </span>
          </div>
          <p className="mt-5 max-w-sm text-sm text-muted-foreground">{profile.tagline}</p>
          <div className="mt-6 inline-flex items-center gap-2 border border-border px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan" />
            LOC / {profile.location}
          </div>
        </div>

        <div className="md:col-span-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-cyan">
            ◄ NAVIGATE
          </p>
          <ul className="mt-5 grid grid-cols-2 gap-y-2 font-mono text-[11px] uppercase tracking-[0.2em] md:grid-cols-1">
            {nav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-muted-foreground transition-colors hover:text-cyan"
                >
                  <span className="opacity-40">{item.code}</span> {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-cyan">
            ◄ CHANNELS
          </p>
          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-cyan"
              >
                <Mail className="h-4 w-4" /> {profile.email}
              </a>
            </li>
            <li>
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-cyan"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
            </li>
            <li>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-cyan"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-page flex flex-col items-start justify-between gap-2 py-5 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} {profile.name} // ALL SIGNALS RESERVED</p>
          <p><span className="text-cyan">●</span> SYS.v2 — STABLE</p>
        </div>
      </div>
    </footer>
  );
}
