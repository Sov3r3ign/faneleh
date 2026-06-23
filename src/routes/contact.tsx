import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { profile } from "@/content/portfolio";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: `Contact — ${profile.name}` },
      { name: "description", content: "Get in touch — email, GitHub, LinkedIn, or the contact form." },
      { property: "og:title", content: `Contact — ${profile.name}` },
      { property: "og:description", content: "Get in touch — email, GitHub, LinkedIn, or the contact form." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(
    `Portfolio inquiry from ${name || "(your name)"}`,
  )}&body=${encodeURIComponent(`${message}\n\n— ${name} (${email})`)}`;

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's connect."
        intro="Open to internships, full-time roles, collaborations, and a good conversation."
      />
      <section className="section-y">
        <div className="container-page grid gap-12 md:grid-cols-[1fr_1.2fr]">
          <div className="space-y-4 text-sm">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 rounded-lg border border-border bg-surface p-4 hover:border-foreground/20"
            >
              <Mail className="h-5 w-5 text-primary" />
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground">Email</p>
                <p className="truncate font-medium text-foreground">{profile.email}</p>
              </div>
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-lg border border-border bg-surface p-4 hover:border-foreground/20"
            >
              <Github className="h-5 w-5 text-primary" />
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground">GitHub</p>
                <p className="truncate font-medium text-foreground">{profile.github.replace("https://", "")}</p>
              </div>
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-lg border border-border bg-surface p-4 hover:border-foreground/20"
            >
              <Linkedin className="h-5 w-5 text-primary" />
              <div className="min-w-0">
                <p className="text-xs text-muted-foreground">LinkedIn</p>
                <p className="truncate font-medium text-foreground">{profile.linkedin.replace("https://www.", "")}</p>
              </div>
            </a>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = mailto;
            }}
            className="space-y-4 rounded-xl border border-border bg-surface p-6 md:p-8"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <label className="block">
                <span className="text-xs font-medium text-muted-foreground">Name</span>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1.5 block w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  placeholder="Your name"
                />
              </label>
              <label className="block">
                <span className="text-xs font-medium text-muted-foreground">Email</span>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1.5 block w-full rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  placeholder="you@example.com"
                />
              </label>
            </div>
            <label className="block">
              <span className="text-xs font-medium text-muted-foreground">Message</span>
              <textarea
                required
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-1.5 block w-full resize-y rounded-md border border-border bg-background px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                placeholder="Tell me a bit about your project, role, or question…"
              />
            </label>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Send message <Send className="h-4 w-4" />
            </button>
            <p className="text-xs text-muted-foreground">
              Submitting opens your email client pre-filled. Hook this up to a form service or
              server function whenever you're ready.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
