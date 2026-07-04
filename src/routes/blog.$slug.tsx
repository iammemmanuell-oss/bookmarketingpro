import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Clock, Calendar, User } from "lucide-react";
import { CtaBanner } from "@/components/CtaBanner";
import { Card } from "@/components/ui/card";
import { getPost, POSTS } from "@/lib/blog-posts";

export const Route = createFileRoute("/blog/$slug")({
  component: BlogPostPage,
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return { post } as { post: NonNullable<ReturnType<typeof getPost>> };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.post.title} | Book Marketing Agency Pro` },
          { name: "description", content: loaderData.post.excerpt },
          { property: "og:title", content: loaderData.post.title },
          { property: "og:description", content: loaderData.post.excerpt },
          { property: "og:type", content: "article" },
        ]
      : [
          { title: "Article Not Found | Book Marketing Agency Pro" },
          { name: "robots", content: "noindex" },
        ],
  }),
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-6 py-40 text-center">
      <div className="text-sm font-bold uppercase tracking-widest text-emerald-brand">
        404
      </div>
      <h1 className="mt-3 text-4xl font-extrabold text-navy">Article not found.</h1>
      <p className="mt-4 text-slate-600">
        The article you are looking for does not exist or has moved.
      </p>
      <Link
        to="/blog"
        className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-emerald-brand hover:gap-3 transition-all"
      >
        <ArrowLeft className="size-4" />
        Back to Blog
      </Link>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="mx-auto max-w-3xl px-6 py-40 text-center">
      <h1 className="text-3xl font-extrabold text-navy">Something went wrong.</h1>
      <p className="mt-4 text-slate-600">{error.message}</p>
    </div>
  ),
});

function BlogPostPage() {
  const { post } = Route.useLoaderData();
  const related = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <article className="bg-white pt-36 pb-24">
        <div className="mx-auto max-w-3xl px-6">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-emerald-brand transition-colors"
          >
            <ArrowLeft className="size-4" />
            All articles
          </Link>

          <div className="mt-8 flex flex-wrap items-center gap-3 text-xs">
            <span className="rounded-full bg-emerald-brand/10 px-3 py-1 font-bold uppercase tracking-widest text-emerald-brand">
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 text-slate-500">
              <Calendar className="size-3.5" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5 text-slate-500">
              <Clock className="size-3.5" />
              {post.time}
            </span>
          </div>

          <h1 className="mt-5 text-4xl lg:text-5xl font-extrabold tracking-tight text-navy leading-tight">
            {post.title}
          </h1>

          <div className="mt-6 flex items-center gap-3 border-b border-slate-200 pb-6">
            <div className="flex size-10 items-center justify-center rounded-full bg-navy text-white">
              <User className="size-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-navy">{post.author}</div>
              <div className="text-xs text-slate-500">Book Marketing Agency Pro</div>
            </div>
          </div>

          <div className="mt-10 aspect-[16/9] w-full rounded-xl bg-gradient-to-br from-navy via-slate-800 to-emerald-brand/40" />

          <div className="mt-12 space-y-10">
            <p className="text-xl text-slate-700 leading-relaxed font-medium">
              {post.content.intro}
            </p>

            {post.content.sections.map((s) => (
              <section key={s.heading}>
                <h2 className="text-2xl lg:text-3xl font-extrabold text-navy tracking-tight">
                  {s.heading}
                </h2>
                <div className="mt-4 space-y-4">
                  {s.body.map((p, i) => (
                    <p key={i} className="text-slate-700 leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              </section>
            ))}

            <div className="rounded-xl border-l-4 border-emerald-brand bg-slate-50 p-8">
              <div className="text-sm font-bold uppercase tracking-widest text-emerald-brand">
                Key Takeaways
              </div>
              <ul className="mt-4 space-y-3">
                {post.content.takeaways.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-slate-700">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-emerald-brand" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </article>

      <section className="border-t border-slate-200 bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-2xl lg:text-3xl font-extrabold text-navy">
            Keep reading
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {related.map((p) => (
              <Card
                key={p.slug}
                className="group flex h-full flex-col border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-brand/40 hover:shadow-elegant"
              >
                <span className="w-fit rounded-full bg-emerald-brand/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-emerald-brand">
                  {p.category}
                </span>
                <h3 className="mt-4 text-lg font-extrabold text-navy leading-snug">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {p.excerpt}
                </p>
                <Link
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="mt-auto pt-4 inline-flex items-center gap-1.5 text-sm font-bold text-emerald-brand transition-all hover:gap-3"
                >
                  Read more
                  <ArrowRight className="size-4" />
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
