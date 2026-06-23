import { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: ReactNode;
}) {
  return (
    <div className="border-b border-border bg-surface">
      <div className="container-page py-16 md:py-24">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
          {title}
        </h1>
        {intro ? (
          <p className="mt-5 max-w-2xl text-base text-muted-foreground md:text-lg">
            {intro}
          </p>
        ) : null}
      </div>
    </div>
  );
}
