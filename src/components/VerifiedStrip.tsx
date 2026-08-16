import { BadgeCheck, ShieldCheck, FileCheck2, Lock } from "lucide-react";

const ITEMS = [
  {
    icon: BadgeCheck,
    title: "Verified Results Only",
    desc: "Every number shown here comes from live author campaigns. Nothing on this site is a test or a placeholder.",
  },
  {
    icon: FileCheck2,
    title: "Verified Reporting",
    desc: "You receive real dashboards and weekly reports with the exact spend, sales, and ranking movement.",
  },
  {
    icon: ShieldCheck,
    title: "Verified Team",
    desc: "Publishing specialists with confirmed track records handle your account from day one.",
  },
  {
    icon: Lock,
    title: "Verified Pricing",
    desc: "Fixed prices confirmed in writing before any work starts. No hidden fees, no lock in contracts.",
  },
];

export function VerifiedStrip() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-sm font-bold uppercase tracking-widest text-emerald-brand">
            100% Verified
          </div>
          <h2 className="mt-3 text-3xl lg:text-4xl font-extrabold tracking-tight text-navy">
            Everything here is verified. Nothing here is a test.
          </h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((i) => (
            <div
              key={i.title}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-colors hover:border-emerald-brand/40"
            >
              <div className="flex size-11 items-center justify-center rounded-xl bg-emerald-brand/10 text-emerald-brand">
                <i.icon className="size-5" />
              </div>
              <h3 className="mt-4 text-lg font-extrabold text-navy">{i.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
