import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { certifications, profile } from "@/content/portfolio";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title: `Certifications — ${profile.name}` },
      { name: "description", content: "Professional certifications, courses, and training I've completed." },
      { property: "og:title", content: `Certifications — ${profile.name}` },
      { property: "og:description", content: "Professional certifications, courses, and training I've completed." },
    ],
  }),
  component: CertificationsPage,
});

function CertificationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Certifications"
        title="Continued learning."
        intro="Courses, programs, and certificates I've completed alongside my degree."
      />
      <section className="section-y">
        <div className="container-page">
          <ul className="divide-y divide-border rounded-xl border border-border bg-surface">
            {certifications.map((c, idx) => (
              <li
                key={idx}
                className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 p-5 md:grid-cols-[120px_minmax(0,1fr)_auto] md:p-6"
              >
                <span className="hidden text-xs font-medium uppercase tracking-wider text-muted-foreground md:block">
                  {c.period}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium text-foreground">{c.title}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground md:hidden">
                    {c.period} · {c.issuer}
                  </p>
                  <p className="mt-0.5 hidden text-xs text-muted-foreground md:block">
                    {c.issuer}
                  </p>
                </div>
                <a
                  href={c.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-md border border-border bg-background px-3 py-1.5 text-xs text-foreground/80 hover:text-foreground"
                >
                  View <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-muted-foreground">
            Tip: replace each "View" link with a URL to the certificate (PDF or verification page).
          </p>
        </div>
      </section>
    </>
  );
}
