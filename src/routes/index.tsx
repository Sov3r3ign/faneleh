import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import portrait from "@/assets/portrait.jpg";
import { profile } from "@/content/portfolio";

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
    </section>
  );
}
