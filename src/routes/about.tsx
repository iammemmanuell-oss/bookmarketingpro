import { createFileRoute } from "@tanstack/react-router";
import { Heart, Compass, Shield, Zap } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { CtaBanner } from "@/components/CtaBanner";
import { Card } from "@/components/ui/card";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About | Book Marketing Agency Pro" },
      {
        name: "description",
        content:
          "A four person specialist team helping serious authors publish, launch, and grow. Learn our story, values, and the people behind the results.",
      },
      { property: "og:title", content: "About Book Marketing Agency Pro" },
      {
        property: "og:description",
        content: "Our story, mission, values, and the specialists behind every book launch.",
      },
    ],
  }),
});

const VALUES = [
  {
    icon: Heart,
    title: "Authors First",
    desc: "Every decision starts with what actually moves your book. No vanity metrics, no filler deliverables.",
  },
  {
    icon: Compass,
    title: "Transparent",
    desc: "Weekly reports, open dashboards, and honest recommendations. You always know what we are spending and why.",
  },
  {
    icon: Shield,
    title: "Specialists Only",
    desc: "No juniors passed off as experts. Four senior operators handle every account, end to end.",
  },
  {
    icon: Zap,
    title: "Bias to Action",
    desc: "We ship campaigns fast, measure honestly, and cut what does not work. Momentum compounds.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About the Agency"
        title="A lean team of publishing heavyweights."
        description="We started Book Marketing Agency Pro to fix a broken market. Authors were being sold generic marketing packages by agencies that had never actually launched a book. So we built a lean, senior operation that treats every launch like our own."
      />

      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <div className="text-sm font-bold uppercase tracking-widest text-emerald-brand">
              Our Story
            </div>
            <h2 className="mt-3 text-3xl lg:text-4xl font-extrabold tracking-tight text-navy">
              Built by authors, for authors.
            </h2>
            <div className="mt-6 space-y-4 text-slate-600 leading-relaxed">
              <p>
                Book Marketing Agency Pro was founded in 2021 by a former traditional publisher and a self published author who together had launched more than 200 titles. What they kept seeing was the same story from authors. Expensive retainers, vague deliverables, no measurable results.
              </p>
              <p>
                So they built a small, senior, fully remote team focused on one outcome. Real sales for indie and hybrid authors. No junior account managers, no bloated retainers, no templated strategies dressed up as bespoke work.
              </p>
              <p>
                Today we work with fiction and non fiction authors across the world, from debut novelists to career authors relaunching their backlist.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { k: "2021", v: "Founded" },
              { k: "500+", v: "Books Launched" },
              { k: "15+", v: "Bestsellers" },
              { k: "42", v: "Countries Served" },
            ].map((s) => (
              <div
                key={s.v}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <div className="text-3xl font-extrabold text-navy">{s.k}</div>
                <div className="mt-1 text-sm font-medium text-slate-500">{s.v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <div className="text-sm font-bold uppercase tracking-widest text-emerald-brand">
              What We Believe
            </div>
            <h2 className="mt-3 text-3xl lg:text-4xl font-extrabold tracking-tight text-navy">
              Four values that shape every campaign.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((v) => (
              <Card key={v.title} className="border-slate-200 bg-white p-6">
                <div className="flex size-12 items-center justify-center rounded-xl bg-emerald-brand/10 text-emerald-brand">
                  <v.icon className="size-6" />
                </div>
                <h3 className="mt-5 text-lg font-extrabold text-navy">{v.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{v.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center text-sm font-bold uppercase tracking-widest text-slate-400">
            As Featured In
          </div>
          <div className="mt-8 grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6 items-center opacity-70">
            {["Publisher's Weekly", "Kirkus", "BookRiot", "The Bookseller", "Reedsy", "IndieReader"].map(
              (b) => (
                <div key={b} className="text-center text-lg font-extrabold text-slate-500">
                  {b}
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
