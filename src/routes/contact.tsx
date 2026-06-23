import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, Github, Linkedin, Mail, Send } from "lucide-react";
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

function ContactRow({
  label,
  value,
  href,
  icon: Icon,
}: {
  label: string;
  value: string;
  href: string;
  icon: typeof Mail;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="group grid grid-cols-[auto_1fr_auto] items-center gap-6 border-b border-border py-6 transition-colors hover:text-foreground"
    >
      <Icon className="h-4 w-4 text-muted-foreground transition-colors group-hover:text-primary" />
      <div className="min-w-0">
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          {label}
        </p>
        <p className="mt-1.5 truncate text-sm text-foreground md:text-base">{value}</p>
      </div>
      <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-foreground" />
    </a>
  );
}

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
        index="Channels"
        title="Let's start a conversation."
        intro="Open to internships, full-time engineering roles, collaborations, and a good conversation."
      />
      <section className="section-y">
        <div className="container-page grid gap-16 md:grid-cols-12 md:gap-20">
          <div className="md:col-span-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Direct
            </p>
            <div className="mt-6 border-t border-border">
              <ContactRow
                label="Email"
                value={profile.email}
                href={`mailto:${profile.email}`}
                icon={Mail}
              />
              <ContactRow
                label="GitHub"
                value={profile.github.replace("https://", "")}
                href={profile.github}
                icon={Github}
              />
              <ContactRow
                label="LinkedIn"
                value={profile.linkedin.replace("https://www.", "")}
                href={profile.linkedin}
                icon={Linkedin}
              />
            </div>
            <p className="mt-10 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              LOC / {profile.location}
            </p>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.location.href = mailto;
            }}
            className="md:col-span-7"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              Send a message
            </p>
            <div className="mt-6 space-y-6 border-t border-border pt-8">
              <div className="grid gap-6 md:grid-cols-2">
                <label className="block">
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    Name
                  </span>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-3 block w-full border-0 border-b border-border bg-transparent px-0 py-2 text-base outline-none transition-colors focus:border-primary"
                    placeholder="Your name"
                  />
                </label>
                <label className="block">
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    Email
                  </span>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-3 block w-full border-0 border-b border-border bg-transparent px-0 py-2 text-base outline-none transition-colors focus:border-primary"
                    placeholder="you@example.com"
                  />
                </label>
              </div>
              <label className="block">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  Message
                </span>
                <textarea
                  required
                  rows={6}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="mt-3 block w-full resize-y border-0 border-b border-border bg-transparent px-0 py-2 text-base outline-none transition-colors focus:border-primary"
                  placeholder="Tell me about your project, role, or question…"
                />
              </label>
              <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                <button
                  type="submit"
                  className="group inline-flex items-center gap-3 rounded-md bg-foreground px-6 py-3 text-sm font-medium text-background transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  Send message
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>
                <p className="max-w-xs font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/70">
                  Opens your email client pre-filled.
                </p>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
