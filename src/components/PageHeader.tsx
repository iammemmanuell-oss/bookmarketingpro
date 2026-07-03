import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-navy pt-36 pb-20 lg:pt-44 lg:pb-24">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-emerald-brand/10 blur-3xl" />
        <div className="absolute top-1/2 right-0 h-[400px] w-[400px] rounded-full bg-emerald-brand/5 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-brand/30 bg-emerald-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-brand">
          {eyebrow}
        </div>
        <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.05]">
          {title}
        </h1>
        {description && (
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-400 leading-relaxed">
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
