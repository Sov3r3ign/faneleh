import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Search } from "lucide-react";
import { PageHeader } from "@/components/page-header";
import {
  certifications,
  certificationCategories,
  profile,
} from "@/content/portfolio";

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

type FilterKey = "all" | (typeof certificationCategories)[number]["key"];

function CertificationsPage() {
  const [active, setActive] = useState<FilterKey>("all");
  const [query, setQuery] = useState("");

  const counts = useMemo(() => {
    const map: Record<string, number> = { all: certifications.length };
    for (const cat of certificationCategories) {
      map[cat.key] = certifications.filter((c) => c.category === cat.key).length;
    }
    return map;
  }, []);

  const filters: Array<{ key: FilterKey; label: string }> = [
    { key: "all", label: "All" },
    ...certificationCategories.map((c) => ({ key: c.key as FilterKey, label: c.label })),
  ];

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return certifications.filter((c) => {
      if (active !== "all" && c.category !== active) return false;
      if (!q) return true;
      return (
        c.title.toLowerCase().includes(q) ||
        c.issuer.toLowerCase().includes(q)
      );
    });
  }, [active, query]);

  const grouped = certificationCategories
    .map((cat) => ({
      ...cat,
      items: visible.filter((c) => c.category === cat.key),
    }))
    .filter((g) => g.items.length > 0);

  return (
    <>
      <PageHeader
        eyebrow="Credentials"
        index={`Index / 0${certifications.length}`}
        title="Continued learning."
        intro="Courses, programmes, and certificates completed alongside my degree. Filter by track or search to jump straight to what you need."
      />

      <section className="section-y">
        <div className="container-page">
          {/* Controls */}
          <div className="sticky top-16 z-20 -mx-4 mb-10 border-b border-border bg-background/85 px-4 py-4 backdrop-blur md:top-20 md:mb-14">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div className="flex flex-wrap gap-2">
                {filters.map((f) => {
                  const isActive = active === f.key;
                  return (
                    <button
                      key={f.key}
                      type="button"
                      onClick={() => setActive(f.key)}
                      className={
                        "group inline-flex items-center gap-2 rounded-full border px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.2em] transition-colors " +
                        (isActive
                          ? "border-foreground bg-foreground text-background"
                          : "border-border text-muted-foreground hover:border-foreground/40 hover:text-foreground")
                      }
                    >
                      <span>{f.label}</span>
                      <span
                        className={
                          "rounded-full px-1.5 text-[9px] " +
                          (isActive
                            ? "bg-background/20 text-background"
                            : "bg-muted text-muted-foreground")
                        }
                      >
                        {counts[f.key] ?? 0}
                      </span>
                    </button>
                  );
                })}
              </div>

              <label className="relative flex w-full items-center md:w-72">
                <Search className="pointer-events-none absolute left-3 h-3.5 w-3.5 text-muted-foreground" />
                <input
                  type="search"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search certificates…"
                  className="w-full rounded-full border border-border bg-transparent py-1.5 pl-9 pr-3 font-mono text-[11px] uppercase tracking-[0.15em] text-foreground placeholder:text-muted-foreground/60 focus:border-foreground/60 focus:outline-none"
                />
              </label>
            </div>
          </div>

          {/* Results */}
          {visible.length === 0 ? (
            <p className="py-20 text-center font-mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
              No credentials match your search.
            </p>
          ) : (
            <div className="space-y-16 md:space-y-20">
              {grouped.map((group, gIdx) => (
                <div key={group.key}>
                  <div className="mb-6 flex flex-wrap items-baseline justify-between gap-4 border-b border-border pb-4">
                    <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                      <span>{String(gIdx + 1).padStart(2, "0")}</span>
                      <span className="text-muted-foreground/50">/</span>
                      <span className="text-foreground">{group.label}</span>
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                      {group.items.length} {group.items.length === 1 ? "item" : "items"}
                    </span>
                  </div>

                  <ul className="divide-y divide-border border-b border-border">
                    {group.items.map((c, idx) => (
                      <li
                        key={c.title + c.issuer}
                        className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 py-5 md:grid-cols-[60px_140px_1fr_auto] md:gap-10 md:py-6"
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

                        {c.url && c.url !== "#" ? (
                          <a
                            href={c.url}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex shrink-0 items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
                          >
                            View <ArrowUpRight className="h-3 w-3" />
                          </a>
                        ) : (
                          <span className="inline-flex shrink-0 items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground/50">
                            —
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
