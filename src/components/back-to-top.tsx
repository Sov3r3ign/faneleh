import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() =>
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
      className={
        "fixed bottom-6 right-6 z-40 inline-flex h-11 w-11 items-center justify-center border border-border bg-background/80 text-muted-foreground shadow-lg backdrop-blur-md transition-all duration-300 hover:border-cyan/60 hover:text-cyan focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan " +
        (visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0")
      }
    >
      <ArrowUp className="h-4 w-4" />
    </button>
  );
}
