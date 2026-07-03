import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "@/content/portfolio";

const nav = [
  { to: "/", label: "Index", code: "00" },
  { to: "/about", label: "About", code: "01" },
  { to: "/education", label: "Education", code: "02" },
  { to: "/experience", label: "Experience", code: "03" },
  { to: "/projects", label: "Projects", code: "04" },
  { to: "/certifications", label: "Credentials", code: "05" },
  { to: "/contact", label: "Contact", code: "06" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState(0);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  // Close mobile menu whenever the route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    if (typeof document === "undefined") return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = open ? "hidden" : prev;
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Reading-progress bar under the header for long pages
  useEffect(() => {
    if (typeof window === "undefined") return;
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setProgress(max > 0 ? Math.min(1, Math.max(0, h.scrollTop / max)) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  return (
    <>
      {/* Skip link for keyboard users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-foreground focus:px-3 focus:py-2 focus:font-mono focus:text-[11px] focus:uppercase focus:tracking-[0.2em] focus:text-background"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-40 border-b border-border bg-background/70 backdrop-blur-xl supports-[backdrop-filter]:bg-background/55">
        <div className="container-page grid h-14 grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
          <Link to="/" className="group flex min-w-0 items-center gap-3" onClick={() => setOpen(false)}>
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan" />
            </span>
            <span className="truncate font-mono text-[11px] uppercase tracking-[0.25em] text-foreground">
              {profile.firstName}
              <span className="text-cyan">.</span>
              {profile.lastName}
            </span>
            <span className="hidden font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground lg:inline">
              // SYS.PORTFOLIO_v2
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden items-center md:flex">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="group relative px-3 py-2 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:text-foreground"
                activeProps={{ className: "text-cyan" }}
              >
                <span className="opacity-40 group-hover:opacity-100 group-data-[status=active]:opacity-100">
                  {item.code}
                </span>{" "}
                {item.label}
                {/* Active underline */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-x-3 -bottom-px h-px origin-left scale-x-0 bg-cyan transition-transform duration-300 group-hover:scale-x-100 group-data-[status=active]:scale-x-100"
                />
              </Link>
            ))}
          </nav>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-9 w-9 items-center justify-center border border-border transition-colors hover:border-foreground/60 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan md:hidden"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

        {/* Reading progress */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-transparent"
        >
          <div
            className="h-full origin-left bg-cyan/70 transition-transform duration-150 ease-out"
            style={{ transform: `scaleX(${progress})` }}
          />
        </div>
      </header>

      {/* Mobile menu — full-screen overlay for clarity */}
      {open && (
        <div
          className="fixed inset-0 top-14 z-30 md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-background/80 backdrop-blur-md"
          />
          <nav
            id="mobile-nav"
            aria-label="Mobile"
            className="relative border-b border-border bg-background"
          >
            <div className="container-page flex flex-col divide-y divide-border">
              {nav.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  onClick={() => setOpen(false)}
                  className="group flex items-center justify-between py-4 font-mono text-sm uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
                  activeProps={{ className: "text-cyan" }}
                >
                  <span className="flex items-center gap-4">
                    <span className="opacity-40 group-data-[status=active]:opacity-100">
                      {item.code}
                    </span>
                    {item.label}
                  </span>
                  <span
                    aria-hidden
                    className="font-mono text-xs text-muted-foreground/40 group-data-[status=active]:text-cyan"
                  >
                    →
                  </span>
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
