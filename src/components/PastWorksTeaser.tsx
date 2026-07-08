import { Link } from "@tanstack/react-router";
import { ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const WORKS = [
  {
    genre: "Thriller Debut",
    result: "#3 Amazon Kindle Thriller",
    detail: "Cold launch to top of category in 9 days with a $40/day Meta + Amazon PPC stack.",
  },
  {
    genre: "Non-Fiction",
    result: "$28k / mo on autopilot",
    detail: "Evergreen funnel + Amazon Ads scaled a business title to a five-figure monthly run rate.",
  },
  {
    genre: "Memoir",
    result: "3.1x ROAS on $30/day",
    detail: "Meta creative test unlocked a repeatable ad angle that drove pre-orders for 4 months.",
  },
  {
    genre: "Business Author",
    result: "$140k consulting pipeline",
    detail: "Book positioned as lead magnet, added a 6-figure back-end pipeline for the author's practice.",
  },
];

export function PastWorksTeaser() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-brand/30 bg-emerald-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-brand">
              <TrendingUp className="size-3.5" />
              Selected Past Works
            </div>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-navy sm:text-4xl">
              Real launches. Real revenue.
            </h2>
            <p className="mt-3 max-w-2xl text-slate-600">
              A snapshot of what we have done for authors across genres. Full teardowns live in
              our case studies and testimonials.
            </p>
          </div>
          <div className="flex gap-3">
            <Link to="/case-studies">
              <Button variant="outline" className="border-slate-300 text-navy hover:bg-slate-50">
                Case Studies
                <ArrowRight className="size-4" />
              </Button>
            </Link>
            <Link to="/testimonials">
              <Button variant="outline" className="border-slate-300 text-navy hover:bg-slate-50">
                Testimonials
                <ArrowRight className="size-4" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {WORKS.map((w) => (
            <Card
              key={w.result}
              className="group flex flex-col border-slate-200 bg-slate-50 p-6 transition-shadow hover:shadow-elegant"
            >
              <div className="text-xs font-semibold uppercase tracking-wider text-emerald-brand">
                {w.genre}
              </div>
              <div className="mt-3 text-2xl font-extrabold text-navy">{w.result}</div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600">{w.detail}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
