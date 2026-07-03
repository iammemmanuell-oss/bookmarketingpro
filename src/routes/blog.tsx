import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { CtaBanner } from "@/components/CtaBanner";
import { Card } from "@/components/ui/card";
import { ArrowRight, Clock } from "lucide-react";

export const Route = createFileRoute("/blog")({
  component: BlogPage,
  head: () => ({
    meta: [
      { title: "Blog and Insights | Book Marketing Agency Pro" },
      {
        name: "description",
        content:
          "Practical playbooks on Amazon PPC, BookTok, launch strategy, and author platform building.",
      },
      { property: "og:title", content: "Book Marketing Insights" },
      {
        property: "og:description",
        content: "Deep dives and playbooks from our team of specialists.",
      },
    ],
  }),
});

const POSTS = [
  {
    category: "Amazon PPC",
    title: "The 90 Day Amazon Ads Framework That Actually Works",
    excerpt:
      "How to structure Sponsored Products, Brands, and Display campaigns over a 90 day window so you scale profitably instead of burning budget.",
    time: "8 min read",
  },
  {
    category: "BookTok",
    title: "How to Vet a BookTok Creator Before You Pay Them",
    excerpt:
      "The five signal checks we run on every creator before a client dollar goes anywhere near them.",
    time: "6 min read",
  },
  {
    category: "Launch Strategy",
    title: "Pre Order Windows: How Long Should Yours Be?",
    excerpt:
      "Short, medium, or long pre order. We break down the trade offs and the numbers behind each approach.",
    time: "5 min read",
  },
  {
    category: "Author Platform",
    title: "The Reader Magnet Funnel Every Fiction Author Should Own",
    excerpt:
      "A step by step teardown of the magnet, landing page, and welcome sequence we build for every fiction client.",
    time: "10 min read",
  },
  {
    category: "Meta Ads",
    title: "Static vs Video Ads for Novels: What Actually Converts",
    excerpt:
      "We tested both across a dozen fiction accounts. Here is what the data says about creative that sells books.",
    time: "7 min read",
  },
  {
    category: "Publishing",
    title: "KDP vs Wide Distribution in 2026",
    excerpt:
      "The exclusivity decision has changed. Here is how we think about it for new titles this year.",
    time: "9 min read",
  },
];

function BlogPage() {
  return (
    <>
      <PageHeader
        eyebrow="Blog and Insights"
        title="Playbooks from the team."
        description="Practical, honest, and specific. No motivational fluff. Just the tactics we use on real client accounts."
      />

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {POSTS.map((p) => (
              <Card
                key={p.title}
                className="group flex h-full flex-col border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-brand/40 hover:shadow-elegant"
              >
                <div className="aspect-[16/9] w-full rounded-lg bg-gradient-to-br from-navy via-slate-800 to-emerald-brand/40" />
                <div className="mt-5 flex items-center justify-between text-xs">
                  <span className="rounded-full bg-emerald-brand/10 px-3 py-1 font-bold uppercase tracking-widest text-emerald-brand">
                    {p.category}
                  </span>
                  <span className="flex items-center gap-1 text-slate-500">
                    <Clock className="size-3" />
                    {p.time}
                  </span>
                </div>
                <h3 className="mt-4 text-lg font-extrabold text-navy leading-snug">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{p.excerpt}</p>
                <div className="mt-auto pt-5">
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-brand transition-all hover:gap-3"
                  >
                    Read more
                    <ArrowRight className="size-4" />
                  </a>
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
