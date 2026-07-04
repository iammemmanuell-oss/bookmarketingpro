import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { CtaBanner } from "@/components/CtaBanner";
import { Card } from "@/components/ui/card";
import { ArrowRight, Clock } from "lucide-react";
import { POSTS } from "@/lib/blog-posts";
import { BlogArt } from "@/components/BlogArt";

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
                key={p.slug}
                className="group flex h-full flex-col border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-brand/40 hover:shadow-elegant"
              >
                <div className="aspect-[16/9] w-full overflow-hidden rounded-lg">
                  <BlogArt category={p.category} className="h-full w-full transition-transform duration-500 group-hover:scale-105" />
                </div>
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
                  <Link
                    to="/blog/$slug"
                    params={{ slug: p.slug }}
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-brand transition-all hover:gap-3"
                  >
                    Read more
                    <ArrowRight className="size-4" />
                  </Link>
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
