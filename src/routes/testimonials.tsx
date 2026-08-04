import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { CtaBanner } from "@/components/CtaBanner";
import { Card } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

export const Route = createFileRoute("/testimonials")({
  component: TestimonialsPage,
  head: () => ({
    meta: [
      { title: "Testimonials | Book Marketing Agency Pro" },
      {
        name: "description",
        content:
          "Long form testimonials from indie, hybrid, and traditionally published authors we have worked with.",
      },
      { property: "og:title", content: "Author Testimonials" },
      {
        property: "og:description",
        content: "Read what authors say about working with Book Marketing Agency Pro.",
      },
    ],
  }),
});

const ITEMS = [
  {
    name: "Elena Voss",
    book: "The Cartographer's Daughter",
    quote:
      "They took my finished manuscript and turned it into a category bestseller in under six weeks. The ad management alone paid for itself, and the weekly reports made it obvious what was working. I would sign again tomorrow.",
  },
  {
    name: "Marcus Reid",
    book: "Signal Lost",
    quote:
      "Finally an agency that actually understands publishing. The BookTok outreach put my novel in front of the right readers, and the Amazon PPC restructure tripled my series read through inside a quarter.",
  },
  {
    name: "Priya Anand",
    book: "The Ledger of Small Wins",
    quote:
      "Weekly reporting, transparent decisions, and real results. I cleared 30k copies in the first quarter after launch, added 18k email subscribers, and now have a system I can rerun on the next book.",
  },
  {
    name: "Nora Cheng",
    book: "Last Summer at Cove Point",
    quote:
      "I was nervous about giving up control of the launch. They earned my trust immediately with a clear plan and daily communication during launch week. Number one in Kindle Romance.",
  },
  {
    name: "Jules Okafor",
    book: "Home is a Verb",
    quote:
      "A memoir is a hard sell. They found the readers I could never reach on my own, booked me on the podcasts that mattered, and kept the ad spend disciplined the whole way through.",
  },
  {
    name: "David Halbrook",
    book: "The Quiet Operator",
    quote:
      "The bulk sales pipeline they built has driven more consulting business than the book royalties themselves. Genuinely commercial thinking, not just publishing thinking.",
  },
  {
    name: "Rosa Marín",
    book: "The Long Slow Burn",
    quote:
      "Three previous agencies overpromised and underdelivered. This team simply did what they said, weekly, for six months, and my career changed as a result.",
  },
  {
    name: "Aidan Sørensen",
    book: "Cold Static",
    quote:
      "I had never run an ad in my life. The team taught me enough to hold intelligent conversations while doing all the heavy lifting. I feel like a professional author for the first time.",
  },
];

function TestimonialsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Testimonials"
        title="What authors say about working with us."
        description="Long form feedback from a cross section of the authors we have launched over the last three years."
      />

      <section className="bg-white py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {ITEMS.map((t) => (
              <Card key={t.name} className="border-slate-200 bg-white p-8">
                <Quote className="size-8 text-emerald-brand" />
                <div className="mt-3 flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-emerald-brand text-emerald-brand" />
                  ))}
                </div>
                <p className="mt-4 text-slate-700 leading-relaxed">{t.quote}</p>
                <div className="mt-6 border-t border-slate-100 pt-4">
                  <div className="font-bold text-navy">{t.name}</div>
                  <div className="text-sm text-slate-500">{t.book}</div>
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
