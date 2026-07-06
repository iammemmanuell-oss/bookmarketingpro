import { createFileRoute } from "@tanstack/react-router";
import {
  Sparkles,
  Megaphone,
  Target,
  Palette,
  Heart,
  Compass,
  Shield,
  Zap,
} from "lucide-react";
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

const TEAM = [
  {
    role: "Managing Director",
    tag: "Strategy and Onboarding",
    icon: Sparkles,
    photo: "/__l5e/assets-v1/eeb1407f-819c-4834-a3bd-4ace0fae0668/team-md.jpg",
    bio: "Sets your launch plan, aligns genre positioning, and personally onboards every new author project.",
  },
  {
    role: "Lead Book Publicist",
    tag: "Media, Podcasts and BookTok",
    icon: Megaphone,
    photo: "/__l5e/assets-v1/c1f58ae7-a96c-4811-9a41-131b1c790f95/team-lp.jpg",
    bio: "Runs press outreach across podcasts, review sites, and vetted BookTok creator campaigns.",
  },
  {
    role: "Head of Digital Ads",
    tag: "Paid Traffic and PPC",
    icon: Target,
    photo: "/__l5e/assets-v1/b120e6ad-0df0-4168-bdc4-069004f5df08/team-da.jpg",
    bio: "Owns Amazon PPC and Meta ad strategy, optimizing daily for ACoS and profitable scale.",
  },
  {
    role: "Senior Book Formatter",
    tag: "Covers and Typography",
    icon: Palette,
    photo: "/__l5e/assets-v1/f2cb6820-6965-4cd6-b36d-075dcc8d49b7/team-bf.png",
    bio: "Handles print and eBook interior layout plus cover art direction to publishing house standards.",
  },
];

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About the Agency"
        title="A lean team of publishing heavyweights."
        description="We started Book Marketing Agency Pro to fix a broken market. Authors were being sold generic marketing packages by agencies that had never actually launched a book. So we built a lean, senior team that treats every launch like our own."
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

      <section className="bg-navy py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <div className="text-sm font-bold uppercase tracking-widest text-emerald-brand">
              The Team
            </div>
            <h2 className="mt-3 text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
              The four specialists behind every account.
            </h2>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TEAM.map((m) => (
              <div
                key={m.role}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-emerald-brand/40 hover:bg-white/[0.06]"
              >
                <div className="aspect-square w-full overflow-hidden rounded-xl bg-white/5 ring-1 ring-white/10">
                  <img
                    src={m.photo}
                    alt={m.role}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-5 flex items-center gap-2">
                  <m.icon className="size-4 text-emerald-brand" />
                  <div className="text-xs font-bold uppercase tracking-widest text-emerald-brand">
                    Core Team
                  </div>
                </div>
                <h3 className="mt-2 text-lg font-extrabold text-white">{m.role}</h3>
                <div className="mt-1 text-sm font-medium text-slate-400">{m.tag}</div>
                <p className="mt-3 text-sm text-slate-300 leading-relaxed">{m.bio}</p>
              </div>
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
