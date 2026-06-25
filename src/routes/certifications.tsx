import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import { certifications, profile } from "@/content/portfolio";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title: `Credentials — ${profile.name}` },
      { name: "description", content: "Professional certifications and training I've completed." },
      { property: "og:title", content: `Credentials — ${profile.name}` },
      { property: "og:description", content: "Professional certifications and training I've completed." },
    ],
  }),
  component: CertificationsPage,
});

function CertificationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Credentials"
        index={`Index / 0${certifications.length}`}
        title="Continued learning."
        intro="Courses, programmes, and certificates completed alongside my degree."
      />
      <section className="section-y">
        <div className="container-page">
          <ul className="divide-y divide-border border-y border-border">
            {certifications.map((c, idx) => (
              <li
                key={c.title + c.issuer}
                className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 py-6 md:grid-cols-[80px_120px_1fr_auto] md:gap-10 md:py-7"
              >
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="hidden font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground md:block">
                  {c.period}
                </span>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-foreground md:text-base">
                    {c.title}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground md:hidden">
                    {c.period} · {c.issuer}
                  </p>
                  <p className="mt-1 hidden text-xs text-muted-foreground md:block">
                    {c.issuer}
                  </p>
                </div>
                
                {c.url ? (<a
                  href={c.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex shrink-0 items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
                >
                  View <ArrowUpRight className="h-3 w-3" />
                </a>) : (<span className="inline-flex shrink-0 items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                  View
                </span>)}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
