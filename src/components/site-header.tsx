import { Link } from "@tanstack/react-router";
import { useState } from "react";
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

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/60 backdrop-blur-xl">
      <div className="container-page flex h-14 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3 group">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan" />
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-foreground">
            {profile.firstName}
            <span className="text-cyan">.</span>
            {profile.lastName}
          </span>
          <span className="hidden font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground sm:inline">
            // SYS.PORTFOLIO_v2
          </span>
        </Link>

        <nav className="hidden items-center gap-0 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              className="group relative px-3 py-2 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-cyan" }}
            >
              <span className="opacity-40 group-hover:opacity-100">{item.code}</span>{" "}
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-9 w-9 items-center justify-center border border-border md:hidden"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-background md:hidden">
          <div className="container-page flex flex-col py-2">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                onClick={() => setOpen(false)}
                className="px-3 py-3 font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground"
                activeProps={{ className: "text-cyan" }}
              >
                <span className="opacity-40">{item.code}</span> {item.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
