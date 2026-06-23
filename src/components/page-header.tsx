import { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  intro,
  index,
}: {
  eyebrow: string;
  title: string;
  intro?: ReactNode;
  index?: string;
}) {
  return (
    <div className="border-b border-border">
      <div className="container-page py-20 md:py-28">
        <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          <span className="h-px w-8 bg-border" aria-hidden />
          <span>{eyebrow}</span>
          {index ? (
            <>
              <span className="text-muted-foreground/50">/</span>
              <span>{index}</span>
            </>
          ) : null}
        </div>
        <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl lg:text-7xl">
          {title}
        </h1>
        {intro ? (
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {intro}
          </p>
        ) : null}
      </div>
    </div>
  );
}
