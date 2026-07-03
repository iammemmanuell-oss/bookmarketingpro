import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import {
  ArrowRight,
  BookOpen,
  Target,
  Globe,
  Sparkles,
  BarChart3,
  Users,
  Award,
  CheckCircle2,
  TrendingUp,
  Megaphone,
  Palette,
  Menu,
  X,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        property: "og:title",
        content: "Book Marketing Agency Pro — Launch, Trend, Sell More Books",
      },
      {
        property: "og:description",
        content:
          "Self-publishing setup, Amazon PPC, Meta ads, and BookTok outreach for serious authors.",
      },
    ],
  }),
});

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Team", href: "#team" },
  { label: "How It Works", href: "#process" },
  { label: "Contact", href: "#contact" },
];

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-navy/95 backdrop-blur-md shadow-[0_1px_0_0_rgba(255,255,255,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-4 lg:grid-cols-[auto_1fr_auto]">
        <a href="#home" className="min-w-0 shrink-0">
          <Logo />
        </a>

        <nav className="hidden lg:flex items-center justify-center gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 justify-self-end">
          <a href="#contact" className="hidden sm:inline-flex">
            <Button
              size="lg"
              className="bg-emerald-brand text-white hover:bg-emerald-brand/90 font-semibold shadow-emerald"
            >
              Get Free Blueprint
            </Button>
          </a>
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-navy/98 backdrop-blur-md border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-4 flex flex-col gap-3">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-slate-300 hover:text-white font-medium py-2"
              >
                {l.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="sm:hidden">
              <Button className="w-full bg-emerald-brand text-white hover:bg-emerald-brand/90 font-semibold">
                Get Free Blueprint
              </Button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-navy pt-32 pb-24 lg:pt-40 lg:pb-32"
    >
      {/* Ambient background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-emerald-brand/10 blur-3xl" />
        <div className="absolute top-1/2 right-0 h-[400px] w-[400px] rounded-full bg-emerald-brand/5 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-brand/30 bg-emerald-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-brand">
            <Sparkles className="size-3.5" />
            Trusted by 500+ authors worldwide
          </div>
          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl leading-[1.05]">
            We Help Authors{" "}
            <span className="text-emerald-brand">Launch, Trend,</span> and Sell
            More Books.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-400 leading-relaxed">
            From professional self-publishing setup to high-ROI digital ad
            campaigns, Book Marketing Agency Pro handles the hard parts — so you
            can focus on writing.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#contact">
              <Button
                size="lg"
                className="h-12 px-7 bg-emerald-brand text-white hover:bg-emerald-brand/90 font-semibold text-base shadow-emerald"
              >
                Get Your Free Blueprint
                <ArrowRight className="size-4" />
              </Button>
            </a>
            <a href="#services">
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-7 bg-transparent border-slate-600 text-white hover:bg-white/5 hover:text-white font-semibold text-base"
              >
                Explore Services
              </Button>
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-400">
            {["No lock-in contracts", "ROI-focused", "Full transparency"].map(
              (t) => (
                <div key={t} className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-emerald-brand" />
                  {t}
                </div>
              ),
            )}
          </div>
        </div>

        {/* Book mockup */}
        <div className="relative mx-auto w-full max-w-md">
          <div className="relative aspect-[4/5]">
            {/* Amazon badge */}
            <div className="absolute -top-4 -left-4 z-20 rotate-[-8deg] rounded-full bg-emerald-brand px-4 py-3 shadow-emerald">
              <div className="text-[9px] font-bold uppercase tracking-wider text-white/80">
                Amazon
              </div>
              <div className="text-xs font-extrabold text-white leading-tight">
                #1 Best
                <br />
                Seller
              </div>
            </div>

            {/* Sales chart card */}
            <div className="absolute -bottom-6 -right-6 z-20 w-52 rounded-xl bg-white p-4 shadow-elegant">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                    Monthly Sales
                  </div>
                  <div className="text-xl font-extrabold text-navy">
                    +347%
                  </div>
                </div>
                <div className="flex items-center gap-1 rounded-full bg-emerald-brand/10 px-2 py-1">
                  <TrendingUp className="size-3 text-emerald-brand" />
                  <span className="text-[10px] font-bold text-emerald-brand">
                    UP
                  </span>
                </div>
              </div>
              <svg viewBox="0 0 160 50" className="mt-2 w-full h-12">
                <defs>
                  <linearGradient id="chartGrad" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#10b981" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0 40 L20 36 L40 38 L60 28 L80 30 L100 20 L120 22 L140 10 L160 5 L160 50 L0 50 Z"
                  fill="url(#chartGrad)"
                />
                <path
                  d="M0 40 L20 36 L40 38 L60 28 L80 30 L100 20 L120 22 L140 10 L160 5"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* 3D book cover */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="relative w-64 h-80 rounded-r-md shadow-elegant"
                style={{
                  transform: "perspective(1200px) rotateY(-14deg) rotateX(4deg)",
                  transformStyle: "preserve-3d",
                }}
              >
                <div
                  className="absolute inset-0 rounded-r-md p-6 flex flex-col justify-between"
                  style={{
                    background:
                      "linear-gradient(135deg, #0f172a 0%, #1e293b 60%, #0b1120 100%)",
                    boxShadow:
                      "inset 6px 0 12px -6px rgba(0,0,0,.6), 20px 20px 60px -10px rgba(0,0,0,.5)",
                  }}
                >
                  <div>
                    <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-emerald-brand">
                      A Novel
                    </div>
                    <div className="mt-6 h-1 w-14 bg-emerald-brand" />
                    <div className="mt-6 text-2xl font-extrabold leading-tight text-white">
                      The Silent
                      <br />
                      Bestseller
                    </div>
                    <div className="mt-4 text-[10px] uppercase tracking-widest text-slate-400">
                      How One Author Changed Everything
                    </div>
                  </div>
                  <div className="flex items-end justify-between">
                    <div className="text-[10px] font-semibold uppercase tracking-widest text-slate-500">
                      BMA Press
                    </div>
                    <div className="text-xs font-bold text-white/80">
                      J. Marlow
                    </div>
                  </div>
                </div>
                {/* Book spine edge */}
                <div
                  className="absolute top-0 -left-2 h-full w-2 rounded-l bg-gradient-to-b from-slate-700 to-slate-900"
                  style={{ transform: "rotateY(90deg) translateZ(1px)" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const METRICS = [
  { icon: BookOpen, value: "500+", label: "Books Launched" },
  { icon: Award, value: "15+", label: "Bestsellers" },
  { icon: Users, value: "98%", label: "Author Satisfaction" },
  { icon: BarChart3, value: "10M+", label: "Total Impressions" },
];

function Metrics() {
  return (
    <section className="border-y border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {METRICS.map((m) => (
            <div
              key={m.label}
              className="flex items-center gap-4 justify-center lg:justify-start"
            >
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-emerald-brand/10 text-emerald-brand">
                <m.icon className="size-6" />
              </div>
              <div className="min-w-0">
                <div className="text-2xl lg:text-3xl font-extrabold text-navy leading-none">
                  {m.value}
                </div>
                <div className="mt-1 text-sm font-medium text-slate-500">
                  {m.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const SERVICES = [
  {
    icon: BookOpen,
    title: "Guaranteed Self-Publishing Setup",
    desc: "Complete interior formatting (EPUB & Print-ready PDF), custom genre-optimized cover art curation, and expert metadata / KDP distribution mapping.",
    link: "See Publishing Specs",
  },
  {
    icon: Target,
    title: "Targeted Book Marketing",
    desc: "Advanced Amazon PPC setup, Meta (Facebook / Instagram) ad management, TikTok reviewer (BookTok) outreach, and strict bestseller category optimization.",
    link: "See Marketing Tactics",
  },
  {
    icon: Globe,
    title: "Author Brand Platform",
    desc: "Custom professional author website design, integrated email marketing list setup (Substack / Mailchimp), and automated reader-magnet funnels.",
    link: "See Platform Tech",
  },
];

function Services() {
  return (
    <section id="services" className="bg-slate-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <div className="text-sm font-bold uppercase tracking-widest text-emerald-brand">
            All-In-One Services
          </div>
          <h2 className="mt-3 text-3xl lg:text-5xl font-extrabold tracking-tight text-navy">
            Everything your book launch needs — under one roof.
          </h2>
          <p className="mt-5 text-lg text-slate-600 leading-relaxed">
            Three tightly-integrated service pillars, engineered to move authors
            from finished manuscript to bestseller-list contender.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <Card
              key={s.title}
              className="group relative overflow-hidden border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-brand/40 hover:shadow-elegant"
            >
              <div className="absolute -right-8 -top-8 size-32 rounded-full bg-emerald-brand/5 transition-all duration-500 group-hover:scale-150" />
              <div className="relative">
                <div className="flex size-14 items-center justify-center rounded-xl bg-navy text-white transition-colors group-hover:bg-emerald-brand">
                  <s.icon className="size-7" />
                </div>
                <h3 className="mt-6 text-xl font-extrabold text-navy leading-snug">
                  {s.title}
                </h3>
                <p className="mt-3 text-slate-600 leading-relaxed">{s.desc}</p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-emerald-brand transition-all hover:gap-3"
                >
                  {s.link}
                  <ArrowRight className="size-4" />
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

import teamMdAsset from "@/assets/team-md.jpg.asset.json";
import teamLpAsset from "@/assets/team-lp.jpg.asset.json";
import teamDaAsset from "@/assets/team-da.jpg.asset.json";
import teamBfAsset from "@/assets/team-bf.png.asset.json";

const TEAM = [
  {
    role: "Managing Director",
    tag: "Strategy & Onboarding Anchor",
    icon: Sparkles,
    photo: teamMdAsset.url,
    bio: "Sets your launch plan, aligns genre positioning, and personally onboards every new author project.",
  },
  {
    role: "Lead Book Publicist",
    tag: "Media, Podcasts & BookTok Outreach",
    icon: Megaphone,
    photo: teamLpAsset.url,
    bio: "Runs your press outreach — podcasts, review sites, and vetted BookTok creator campaigns.",
  },
  {
    role: "Head of Digital Ads",
    tag: "Paid Traffic & PPC Optimization",
    icon: Target,
    photo: teamDaAsset.url,
    bio: "Owns Amazon PPC and Meta ad strategy, optimizing daily for ACoS and profitable scale.",
  },
  {
    role: "Senior Book Formatter",
    tag: "Elite Cover & Print Typography",
    icon: Palette,
    photo: teamBfAsset.url,
    bio: "Handles print & eBook interior layout plus cover art direction to publishing-house standards.",
  },
];

function Team() {
  return (
    <section id="team" className="bg-navy py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <div className="text-sm font-bold uppercase tracking-widest text-emerald-brand">
            The 4-Man Expert Agency
          </div>
          <h2 className="mt-3 text-3xl lg:text-5xl font-extrabold tracking-tight text-white">
            A lean team of remote publishing heavyweights.
          </h2>
          <p className="mt-5 text-lg text-slate-400 leading-relaxed">
            No juniors passed off as experts. Every account is worked directly
            by the four specialists below — working to scale your book sales.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((m) => (
            <div
              key={m.role}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-emerald-brand/40 hover:bg-white/[0.06]"
            >
              <div className="relative">
                <div className="flex size-16 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-brand to-emerald-brand/70 text-lg font-extrabold text-white shadow-emerald">
                  {m.initials}
                </div>
                <div className="mt-6 flex items-center gap-2">
                  <m.icon className="size-4 text-emerald-brand" />
                  <div className="text-xs font-bold uppercase tracking-widest text-emerald-brand">
                    Core Team
                  </div>
                </div>
                <h3 className="mt-2 text-lg font-extrabold text-white">
                  {m.role}
                </h3>
                <div className="mt-1 text-sm font-medium text-slate-400">
                  {m.tag}
                </div>
                <div className="mt-4 max-h-0 overflow-hidden text-sm text-slate-300 opacity-0 transition-all duration-500 group-hover:max-h-40 group-hover:opacity-100">
                  {m.bio}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const STEPS = [
  {
    n: "01",
    title: "Blueprint Strategy",
    desc: "We analyze your manuscript, genre landscape, and competitive positioning to produce a launch blueprint tailored to your book.",
  },
  {
    n: "02",
    title: "Production & Launch",
    desc: "We format your files to industry standard, design retail-ready covers, and optimize every element of your Amazon and retailer pages.",
  },
  {
    n: "03",
    title: "Scaled Promotion",
    desc: "We run high-converting Amazon PPC, Meta ads, and BookTok campaigns — scaling only what's profitable and reporting weekly.",
  },
];

function Process() {
  return (
    <section id="process" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-2xl">
          <div className="text-sm font-bold uppercase tracking-widest text-emerald-brand">
            How It Works
          </div>
          <h2 className="mt-3 text-3xl lg:text-5xl font-extrabold tracking-tight text-navy">
            A step-by-step process, built for authors.
          </h2>
        </div>

        <div className="relative mt-14">
          <div
            aria-hidden
            className="absolute left-8 top-4 bottom-4 w-px bg-gradient-to-b from-emerald-brand via-slate-200 to-transparent lg:left-10"
          />
          <div className="flex flex-col gap-10">
            {STEPS.map((s) => (
              <div key={s.n} className="grid grid-cols-[auto_1fr] items-start gap-6 lg:gap-10">
                <div className="relative z-10 flex size-16 lg:size-20 shrink-0 items-center justify-center rounded-2xl bg-navy text-emerald-brand font-extrabold text-xl lg:text-2xl shadow-elegant ring-4 ring-white">
                  {s.n}
                </div>
                <div className="pt-2 lg:pt-4">
                  <h3 className="text-xl lg:text-2xl font-extrabold text-navy">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-slate-600 leading-relaxed max-w-2xl">
                    {s.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [stage, setStage] = useState("finished");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "").trim();
    const genre = String(fd.get("genre") || "").trim();
    const details = String(fd.get("details") || "").trim();

    if (!name || name.length > 100) {
      toast.error("Please enter a valid name.");
      setSubmitting(false);
      return;
    }
    if (!genre) {
      toast.error("Please select your book's genre.");
      setSubmitting(false);
      return;
    }
    if (!details || details.length > 2000) {
      toast.error("Please add project details (max 2000 characters).");
      setSubmitting(false);
      return;
    }

    setTimeout(() => {
      toast.success("Strategy request received — we'll be in touch within 24h.");
      (e.target as HTMLFormElement).reset();
      setStage("finished");
      setSubmitting(false);
    }, 600);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-slate-50 py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="text-sm font-bold uppercase tracking-widest text-emerald-brand">
            Free Strategy Blueprint
          </div>
          <h2 className="mt-3 text-3xl lg:text-5xl font-extrabold tracking-tight text-navy">
            Tell us about your book.
          </h2>
          <p className="mt-5 text-lg text-slate-600 leading-relaxed">
            Share a few details and we'll return a custom launch blueprint —
            positioning, pricing, ad angles, and a 90-day sales plan. No cost,
            no pressure.
          </p>
          <ul className="mt-8 space-y-3">
            {[
              "Response within 24 hours",
              "Custom, non-templated strategy",
              "Zero obligation to work with us",
            ].map((t) => (
              <li key={t} className="flex items-center gap-3 text-slate-700">
                <CheckCircle2 className="size-5 shrink-0 text-emerald-brand" />
                <span className="font-medium">{t}</span>
              </li>
            ))}
          </ul>
        </div>

        <Card className="lg:col-span-3 border-slate-200 bg-white p-8 lg:p-10 shadow-elegant">
          <form onSubmit={onSubmit} className="space-y-6">
            <div>
              <Label htmlFor="name" className="text-navy font-semibold">
                Full Name
              </Label>
              <Input
                id="name"
                name="name"
                required
                maxLength={100}
                placeholder="Jane Marlow"
                className="mt-2 h-11"
              />
            </div>

            <div>
              <Label htmlFor="genre" className="text-navy font-semibold">
                Your Book's Genre
              </Label>
              <Select name="genre" required>
                <SelectTrigger id="genre" className="mt-2 h-11 w-full">
                  <SelectValue placeholder="Select a genre" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="fiction">Fiction</SelectItem>
                  <SelectItem value="non-fiction">Non-Fiction</SelectItem>
                  <SelectItem value="memoir">Memoir</SelectItem>
                  <SelectItem value="scifi-fantasy">Sci-Fi / Fantasy</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label className="text-navy font-semibold">
                Current Publishing Stage
              </Label>
              <RadioGroup
                name="stage"
                value={stage}
                onValueChange={setStage}
                className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3"
              >
                {[
                  { v: "writing", l: "Writing" },
                  { v: "finished", l: "Finished" },
                  { v: "published", l: "Already Published" },
                ].map((o) => (
                  <label
                    key={o.v}
                    className={`flex cursor-pointer items-center gap-2 rounded-lg border px-4 py-3 text-sm font-medium transition-colors ${
                      stage === o.v
                        ? "border-emerald-brand bg-emerald-brand/5 text-navy"
                        : "border-slate-200 text-slate-600 hover:border-slate-300"
                    }`}
                  >
                    <RadioGroupItem value={o.v} className="text-emerald-brand" />
                    {o.l}
                  </label>
                ))}
              </RadioGroup>
            </div>

            <div>
              <Label htmlFor="details" className="text-navy font-semibold">
                Project Details
              </Label>
              <Textarea
                id="details"
                name="details"
                required
                maxLength={2000}
                rows={5}
                placeholder="Tell us about your book, your goals, and where you are in the process..."
                className="mt-2 resize-none"
              />
            </div>

            <Button
              type="submit"
              disabled={submitting}
              className="h-12 w-full bg-emerald-brand text-base font-bold text-white hover:bg-emerald-brand/90 shadow-emerald"
            >
              {submitting ? "Sending..." : "Generate My Strategy"}
              <ArrowRight className="size-4" />
            </Button>
          </form>
        </Card>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-navy-deep border-t border-white/5 py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr] items-start">
          <div>
            <Logo variant="muted" size="sm" />
            <p className="mt-4 max-w-sm text-sm text-slate-500 leading-relaxed">
              A specialist book marketing agency for authors serious about
              launching, trending, and selling more books.
            </p>
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Legal
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href="#" className="text-slate-500 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-500 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Follow
            </div>
            <div className="mt-4 flex gap-3">
              {[
                { icon: Twitter, label: "X" },
                { icon: Linkedin, label: "LinkedIn" },
                { icon: Instagram, label: "Instagram" },
              ].map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="flex size-10 items-center justify-center rounded-lg border border-white/10 text-slate-400 transition-colors hover:border-emerald-brand hover:text-emerald-brand"
                >
                  <s.icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-white/5 pt-6 text-center text-xs text-slate-500">
          © 2026 Book Marketing Agency Pro. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="bg-white text-navy">
      <Nav />
      <main>
        <Hero />
        <Metrics />
        <Services />
        <Team />
        <Process />
        <ContactForm />
      </main>
      <Footer />
      <Toaster position="top-right" richColors />
    </div>
  );
}
