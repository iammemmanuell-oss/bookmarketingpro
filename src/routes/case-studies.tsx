import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { CtaBanner } from "@/components/CtaBanner";
import { Card } from "@/components/ui/card";
import { TrendingUp, Award, BookOpen } from "lucide-react";

export const Route = createFileRoute("/case-studies")({
  component: CaseStudies,
  head: () => ({
    meta: [
      { title: "Case Studies | Book Marketing Agency Pro" },
      {
        name: "description",
        content:
          "Real book launches, real numbers. Six case studies covering thrillers, memoirs, romance, and non fiction.",
      },
      { property: "og:title", content: "Book Marketing Case Studies" },
      {
        property: "og:description",
        content: "See the exact tactics and results behind six author launches.",
      },
    ],
  }),
});

const CASES = [
  {
    genre: "Domestic Thriller",
    title: "The Cartographer's Daughter",
    author: "Elena Voss",
    challenge:
      "Debut author with no platform, launching into a saturated thriller category with no pre order buzz.",
    tactics: "Amazon PPC, Meta lookalike audiences, 12 BookTok creator activations",
    results: [
      { k: "42,000", v: "Copies in 90 days" },
      { k: "#3", v: "Kindle Thriller" },
      { k: "6.8x", v: "Ad ROAS" },
    ],
  },
  {
    genre: "Non Fiction",
    title: "The Ledger of Small Wins",
    author: "Priya Anand",
    challenge:
      "Experienced author with a strong manuscript but a stalled backlist and a weak newsletter.",
    tactics: "Full author platform rebuild, Meta ads, podcast placement campaign",
    results: [
      { k: "31,500", v: "Copies in Q1" },
      { k: "18,000", v: "New subscribers" },
      { k: "22", v: "Podcasts booked" },
    ],
  },
  {
    genre: "Sci Fi",
    title: "Signal Lost",
    author: "Marcus Reid",
    challenge: "Series book two underperforming. Book one had good reviews but no ad system.",
    tactics: "Backlist relaunch, Amazon PPC restructure, cover refresh on book one",
    results: [
      { k: "3.4x", v: "Series read through" },
      { k: "$28k", v: "Monthly revenue" },
      { k: "4.6", v: "Avg. star rating" },
    ],
  },
  {
    genre: "Romance",
    title: "Last Summer at Cove Point",
    author: "Nora Cheng",
    challenge: "Highly competitive contemporary romance, first book without a trad publisher.",
    tactics: "BookTok influencer campaign, TikTok shop tie in, Meta video ads",
    results: [
      { k: "68,000", v: "Copies in 60 days" },
      { k: "#1", v: "Kindle Romance" },
      { k: "9.2M", v: "TikTok views" },
    ],
  },
  {
    genre: "Memoir",
    title: "Home is a Verb",
    author: "Jules Okafor",
    challenge: "Personal memoir with strong writing but a small audience and limited ad budget.",
    tactics: "Podcast tour, PR outreach, targeted low budget Meta ads",
    results: [
      { k: "14 features", v: "Podcasts and press" },
      { k: "12,400", v: "Copies in 90 days" },
      { k: "3.1x", v: "ROAS on $30/day" },
    ],
  },
  {
    genre: "Business",
    title: "The Quiet Operator",
    author: "David Halbrook",
    challenge:
      "Business book from a first time author with a small consulting practice and no email list.",
    tactics: "LinkedIn organic strategy, bulk order pipeline, corporate outreach",
    results: [
      { k: "8,200", v: "Bulk copies sold" },
      { k: "$140k", v: "Consulting pipeline" },
      { k: "#2", v: "Amazon Business" },
    ],
  },
];

function CaseStudies() {
  return (
    <>
      <PageHeader
        eyebrow="Case Studies"
        title="Real launches. Real numbers."
        description="A cross section of author launches across fiction, non fiction, memoir, romance, and business. Every number below is verified."
      />

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {CASES.map((c) => (
              <Card key={c.title} className="border-slate-200 bg-white p-8">
                <div className="flex items-center gap-2">
                  <BookOpen className="size-4 text-emerald-brand" />
                  <div className="text-xs font-bold uppercase tracking-widest text-emerald-brand">
                    {c.genre}
                  </div>
                </div>
                <h3 className="mt-3 text-2xl font-extrabold text-navy">{c.title}</h3>
                <div className="text-sm font-medium text-slate-500">by {c.author}</div>

                <div className="mt-6 space-y-4 text-sm">
                  <div>
                    <div className="font-bold text-navy">Challenge</div>
                    <p className="mt-1 text-slate-600 leading-relaxed">{c.challenge}</p>
                  </div>
                  <div>
                    <div className="font-bold text-navy">Tactics</div>
                    <p className="mt-1 text-slate-600 leading-relaxed">{c.tactics}</p>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3 rounded-xl bg-slate-50 p-4">
                  {c.results.map((r) => (
                    <div key={r.v} className="text-center">
                      <div className="text-lg font-extrabold text-navy">{r.k}</div>
                      <div className="mt-1 text-[11px] font-medium uppercase tracking-wider text-slate-500">
                        {r.v}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-4 text-xs font-semibold text-slate-500">
                  <div className="flex items-center gap-1">
                    <TrendingUp className="size-4 text-emerald-brand" /> Profitable at scale
                  </div>
                  <div className="flex items-center gap-1">
                    <Award className="size-4 text-emerald-brand" /> Category winner
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
