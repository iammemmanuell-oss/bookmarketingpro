import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BookOpen,
  Target,
  Globe,
  Megaphone,
  Palette,
  Mic,
  Mail,
  BarChart3,
  Check,
  ArrowRight,
} from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { CtaBanner } from "@/components/CtaBanner";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: "Services | Book Marketing Agency Pro" },
      {
        name: "description",
        content:
          "Amazon PPC, Meta ads, BookTok outreach, PR, cover design, formatting, and launch strategy for indie and hybrid authors.",
      },
      { property: "og:title", content: "Author Services and Book Marketing Packages" },
      {
        property: "og:description",
        content:
          "Full service book marketing built around real sales. Explore our eight service pillars and three pricing tiers.",
      },
    ],
  }),
});

const SERVICES = [
  {
    icon: Target,
    title: "Amazon PPC Management",
    desc: "Deep keyword research, category targeting, and daily bid optimization across Sponsored Products, Brands, and Display. Built to hit your ACoS target.",
    deliverables: [
      "Full keyword and category audit",
      "Campaign build and launch",
      "Daily bid and budget optimization",
      "Weekly performance reports",
    ],
    price: "From $1,000 / mo",
  },
  {
    icon: BarChart3,
    title: "Meta Ads (Facebook and Instagram)",
    desc: "Audience research, creative direction, and full funnel Meta campaigns pointed at your Amazon or direct sales page.",
    deliverables: [
      "Audience and interest mapping",
      "Static and video ad creative",
      "Landing page optimization",
      "ROAS focused optimization",
    ],
    price: "From $1,300 / mo",
  },
  {
    icon: Megaphone,
    title: "BookTok Creator Outreach",
    desc: "Vetted BookTok and Bookstagram creator campaigns tuned to your genre and target reader. Real reach, no bots.",
    deliverables: [
      "Creator sourcing and vetting",
      "Contract and brief management",
      "Content approval workflow",
      "Reach and sales attribution",
    ],
    price: "From $1,800 / campaign",
  },
  {
    icon: Mic,
    title: "PR and Podcast Placement",
    desc: "Targeted media outreach to podcasts, review sites, and industry publications relevant to your genre and audience.",
    deliverables: [
      "Media list and pitch strategy",
      "Personalized outreach",
      "Interview prep",
      "Coverage tracking",
    ],
    price: "From $1,600 / mo",
  },
  {
    icon: Palette,
    title: "Cover Design and Art Direction",
    desc: "Genre benchmarked cover design that competes on the shelf. Full art direction plus final production files.",
    deliverables: [
      "Genre and comp research",
      "Three initial concepts",
      "Two rounds of revision",
      "Print and eBook final files",
    ],
    price: "From $650 / cover",
  },
  {
    icon: BookOpen,
    title: "Interior Formatting",
    desc: "Professional interior typography for print and reflowable EPUB. Publishing house standards on every page.",
    deliverables: [
      "Print PDF (KDP and IngramSpark)",
      "Reflowable EPUB",
      "Custom chapter design",
      "Front and back matter setup",
    ],
    price: "From $450 / title",
  },
  {
    icon: Globe,
    title: "Launch Strategy and Distribution",
    desc: "Full launch blueprint covering pricing, categories, keyword strategy, retailer setup, and pre order sequencing.",
    deliverables: [
      "90 day launch blueprint",
      "KDP and wide setup",
      "Category and keyword strategy",
      "Pre order and launch week plan",
    ],
    price: "From $1,400 / launch",
  },
  {
    icon: Mail,
    title: "Author Platform and Email",
    desc: "Author website, email list setup, reader magnet funnel, and evergreen sequences that convert readers into fans.",
    deliverables: [
      "Author website design",
      "Email service setup",
      "Reader magnet funnel",
      "Welcome and nurture sequences",
    ],
    price: "From $2,200 / project",
  },
];

const PACKAGES = [
  {
    name: "Starter",
    price: "$400",
    tag: "For low budget and first time authors",
    features: [
      "30 day launch checklist",
      "Amazon keyword and category setup",
      "Amazon PPC starter campaigns (30 days)",
      "Cover feedback and metadata polish",
      "Email support",
    ],
    highlight: false,
  },
  {
    name: "Launch",
    price: "$1,200",
    tag: "Best for debut launches",
    features: [
      "90 day launch blueprint",
      "Cover design or refresh",
      "Interior formatting",
      "Amazon PPC setup and 60 days management",
      "Weekly reporting",
    ],
    highlight: false,
  },
  {
    name: "Scale",
    price: "$8,300",
    tag: "Most popular",
    features: [
      "Everything in Launch",
      "Meta ads management",
      "One BookTok creator campaign",
      "PR pitch list and 30 pitches",
      "90 days of full account management",
    ],
    highlight: true,
  },
  {
    name: "Catalog",
    price: "Custom",
    tag: "For multi book authors",
    features: [
      "Multi title strategy",
      "Ongoing ads across catalog",
      "Quarterly creative refresh",
      "Dedicated senior operator",
      "Monthly strategy calls",
    ],
    highlight: false,
  },
];

function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services and Pricing"
        title="Everything a modern book launch needs."
        description="Eight core services and three fixed price packages. Pick a single service, bundle a package, or design a custom engagement with your team lead."
      />

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 md:grid-cols-2">
            {SERVICES.map((s) => (
              <Card key={s.title} className="border-slate-200 bg-white p-8">
                <div className="flex items-start gap-4">
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-navy text-white">
                    <s.icon className="size-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-navy">{s.title}</h3>
                    <div className="mt-1 text-sm font-bold text-emerald-brand">
                      {s.price}
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-slate-600 leading-relaxed">{s.desc}</p>
                <ul className="mt-5 space-y-2">
                  {s.deliverables.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-sm text-slate-700">
                      <Check className="mt-0.5 size-4 shrink-0 text-emerald-brand" />
                      {d}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-sm font-bold uppercase tracking-widest text-emerald-brand">
              Bundled Packages
            </div>
            <h2 className="mt-3 text-3xl lg:text-4xl font-extrabold tracking-tight text-navy">
              Fixed price. No surprises.
            </h2>
            <p className="mt-4 text-slate-600">
              Three ways to work with us, priced up front and scoped for real outcomes.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {PACKAGES.map((p) => (
              <Card
                key={p.name}
                className={`relative p-8 ${
                  p.highlight
                    ? "border-emerald-brand bg-navy text-white ring-2 ring-emerald-brand shadow-emerald"
                    : "border-slate-200 bg-white"
                }`}
              >
                {p.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-brand px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                    {p.tag}
                  </div>
                )}
                <div
                  className={`text-sm font-bold uppercase tracking-widest ${p.highlight ? "text-emerald-brand" : "text-slate-500"}`}
                >
                  {p.name}
                </div>
                <div
                  className={`mt-3 text-4xl font-extrabold ${p.highlight ? "text-white" : "text-navy"}`}
                >
                  {p.price}
                </div>
                {!p.highlight && (
                  <div className="mt-1 text-sm text-slate-500">{p.tag}</div>
                )}
                <ul className="mt-6 space-y-3">
                  {p.features.map((f) => (
                    <li
                      key={f}
                      className={`flex items-start gap-2 text-sm ${p.highlight ? "text-slate-200" : "text-slate-700"}`}
                    >
                      <Check className="mt-0.5 size-4 shrink-0 text-emerald-brand" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="mt-8 block">
                  <Button
                    className={`h-11 w-full font-bold ${
                      p.highlight
                        ? "bg-emerald-brand text-white hover:bg-emerald-brand/90"
                        : "bg-navy text-white hover:bg-navy/90"
                    }`}
                  >
                    Get Started
                    <ArrowRight className="size-4" />
                  </Button>
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
