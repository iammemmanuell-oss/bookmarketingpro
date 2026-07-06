import { createFileRoute, Link } from "@tanstack/react-router";
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
  Star,
  Quote,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CtaBanner } from "@/components/CtaBanner";
import { ResponsiveAssetImage } from "@/components/ResponsiveAssetImage";
import { getAssetUrl } from "@/lib/asset-url";
import sanmanPortrait from "@/assets/launch/sanman-portrait.jpg.asset.json";
import sanmanThumbnail from "@/assets/launch/sanman-thumbnail.jpg.asset.json";
import sanmanGroup from "@/assets/launch/sanman-group.jpg.asset.json";
import sanmanTable from "@/assets/launch/sanman-table.jpg.asset.json";
import sanmanCafe from "@/assets/launch/sanman-cafe.jpg.asset.json";
import sanmanBookSnow from "@/assets/launch/sanman-book-snow.jpg.asset.json";
import sanmanCover from "@/assets/launch/sanman-cover.jpg.asset.json";
import sanmanReview from "@/assets/launch/sanman-review.png.asset.json";
import sanmanPortrait360 from "@/assets/launch/responsive/sanman-portrait-360.webp.asset.json";
import sanmanPortrait560 from "@/assets/launch/responsive/sanman-portrait-560.webp.asset.json";
import sanmanThumbnail640 from "@/assets/launch/responsive/sanman-thumbnail-640.webp.asset.json";
import sanmanThumbnail960 from "@/assets/launch/responsive/sanman-thumbnail-960.webp.asset.json";
import sanmanThumbnail1280 from "@/assets/launch/responsive/sanman-thumbnail-1280.webp.asset.json";
import sanmanGroup640 from "@/assets/launch/responsive/sanman-group-640.webp.asset.json";
import sanmanGroup960 from "@/assets/launch/responsive/sanman-group-960.webp.asset.json";
import sanmanGroup1440 from "@/assets/launch/responsive/sanman-group-1440.webp.asset.json";
import sanmanTable640 from "@/assets/launch/responsive/sanman-table-640.webp.asset.json";
import sanmanTable960 from "@/assets/launch/responsive/sanman-table-960.webp.asset.json";
import sanmanTable1440 from "@/assets/launch/responsive/sanman-table-1440.webp.asset.json";
import sanmanCafe640 from "@/assets/launch/responsive/sanman-cafe-640.webp.asset.json";
import sanmanCafe960 from "@/assets/launch/responsive/sanman-cafe-960.webp.asset.json";
import sanmanCafe1440 from "@/assets/launch/responsive/sanman-cafe-1440.webp.asset.json";
import sanmanCover360 from "@/assets/launch/responsive/sanman-cover-360.webp.asset.json";
import sanmanCover640 from "@/assets/launch/responsive/sanman-cover-640.webp.asset.json";
import sanmanCover960 from "@/assets/launch/responsive/sanman-cover-960.webp.asset.json";
import sanmanBookSnow320 from "@/assets/launch/responsive/sanman-book-snow-320.webp.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Book Marketing Agency Pro | Launch, Trend, and Sell More Books" },
      {
        name: "description",
        content:
          "A specialist book marketing agency for serious authors. Self publishing setup, Amazon PPC, Meta ads, and BookTok outreach that moves copies.",
      },
      { property: "og:title", content: "Book Marketing Agency Pro" },
      {
        property: "og:description",
        content:
          "Launch, trend, and sell more books with a specialist team of four publishing experts.",
      },
    ],
  }),
});

function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy pt-36 pb-24 lg:pt-44 lg:pb-32">
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
            <span className="text-emerald-brand">Launch, Trend,</span> and Sell More Books.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-400 leading-relaxed">
            From professional self publishing setup to high ROI digital ad campaigns, Book Marketing Agency Pro handles the hard parts so you can focus on writing.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/contact">
              <Button
                size="lg"
                className="h-12 px-7 bg-emerald-brand text-white hover:bg-emerald-brand/90 font-semibold text-base shadow-emerald"
              >
                Get Your Free Blueprint
                <ArrowRight className="size-4" />
              </Button>
            </Link>
            <Link to="/services">
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-7 bg-transparent border-slate-600 text-white hover:bg-white/5 hover:text-white font-semibold text-base"
              >
                Explore Services
              </Button>
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-400">
            {["No lock in contracts", "ROI focused", "Full transparency"].map((t) => (
              <div key={t} className="flex items-center gap-2">
                <CheckCircle2 className="size-4 text-emerald-brand" />
                {t}
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md">
          <div className="relative aspect-[4/5]">
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

            <div className="absolute -bottom-6 -right-6 z-20 w-52 rounded-xl bg-white p-4 shadow-elegant">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                    Monthly Sales
                  </div>
                  <div className="text-xl font-extrabold text-navy">+347%</div>
                </div>
                <div className="flex items-center gap-1 rounded-full bg-emerald-brand/10 px-2 py-1">
                  <TrendingUp className="size-3 text-emerald-brand" />
                  <span className="text-[10px] font-bold text-emerald-brand">UP</span>
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
                    <div className="text-xs font-bold text-white/80">J. Marlow</div>
                  </div>
                </div>
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
            <div key={m.label} className="flex items-center gap-4 justify-center lg:justify-start">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-emerald-brand/10 text-emerald-brand">
                <m.icon className="size-6" />
              </div>
              <div className="min-w-0">
                <div className="text-2xl lg:text-3xl font-extrabold text-navy leading-none">
                  {m.value}
                </div>
                <div className="mt-1 text-sm font-medium text-slate-500">{m.label}</div>
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
    title: "Self Publishing Setup",
    desc: "Complete interior formatting for EPUB and print PDF, custom cover art curation, and expert metadata plus KDP distribution.",
  },
  {
    icon: Target,
    title: "Targeted Book Marketing",
    desc: "Advanced Amazon PPC, Meta ad management, vetted BookTok creator outreach, and bestseller category optimization.",
  },
  {
    icon: Globe,
    title: "Author Brand Platform",
    desc: "Custom author website design, integrated email marketing setup, and automated reader magnet funnels.",
  },
];

function ServicesTeaser() {
  return (
    <section className="bg-slate-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <div className="text-sm font-bold uppercase tracking-widest text-emerald-brand">
            All In One Services
          </div>
          <h2 className="mt-3 text-3xl lg:text-5xl font-extrabold tracking-tight text-navy">
            Everything your book launch needs, under one roof.
          </h2>
          <p className="mt-5 text-lg text-slate-600 leading-relaxed">
            Three tightly integrated pillars, engineered to move authors from finished manuscript to bestseller list contender.
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
                <Link
                  to="/services"
                  className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-emerald-brand transition-all hover:gap-3"
                >
                  Learn more
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/services">
            <Button
              size="lg"
              className="h-12 px-7 bg-navy text-white hover:bg-navy/90 font-semibold text-base"
            >
              View All Services
              <ArrowRight className="size-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

const TESTIMONIALS = [
  {
    quote:
      "It was great working with the service provider. I would definitely use them again. Deep understanding, language fluency, politeness, proactive communication, and real attention to details.",
    name: "Sanman Thapa",
    book: "From The Window: The City of What Ifs",
    rating: 5,
  },
  {
    quote:
      "They took my finished manuscript and turned it into a category bestseller in under six weeks. The ad management alone paid for itself.",
    name: "Elena Voss",
    book: "The Cartographer's Daughter",
    rating: 5,
  },
  {
    quote:
      "Finally an agency that actually understands publishing. The BookTok outreach put my novel in front of the right readers.",
    name: "Marcus Reid",
    book: "Signal Lost",
    rating: 5,
  },
];

const LAUNCH_SOURCES = {
  portrait: [
    { src: sanmanPortrait360, width: 360 },
    { src: sanmanPortrait560, width: 560 },
  ],
  thumbnail: [
    { src: sanmanThumbnail640, width: 640 },
    { src: sanmanThumbnail960, width: 960 },
    { src: sanmanThumbnail1280, width: 1280 },
  ],
  group: [
    { src: sanmanGroup640, width: 640 },
    { src: sanmanGroup960, width: 960 },
    { src: sanmanGroup1440, width: 1440 },
  ],
  table: [
    { src: sanmanTable640, width: 640 },
    { src: sanmanTable960, width: 960 },
    { src: sanmanTable1440, width: 1440 },
  ],
  cafe: [
    { src: sanmanCafe640, width: 640 },
    { src: sanmanCafe960, width: 960 },
    { src: sanmanCafe1440, width: 1440 },
  ],
  cover: [
    { src: sanmanCover360, width: 360 },
    { src: sanmanCover640, width: 640 },
    { src: sanmanCover960, width: 960 },
  ],
  bookSnow: [{ src: sanmanBookSnow320, width: 320 }],
};

const launchImages = [
  {
    src: sanmanPortrait,
    sources: LAUNCH_SOURCES.portrait,
    sizes: "(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw",
    width: 695,
    height: 1321,
    alt: "Author Sanman Thapa holding his novel",
  },
  {
    src: sanmanThumbnail,
    sources: LAUNCH_SOURCES.thumbnail,
    sizes: "(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw",
    width: 1280,
    height: 720,
    alt: "From The Window promotional artwork",
  },
  {
    src: sanmanCover,
    sources: LAUNCH_SOURCES.cover,
    sizes: "(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw",
    width: 1203,
    height: 1920,
    alt: "From The Window book cover",
  },
  {
    src: sanmanBookSnow,
    sources: LAUNCH_SOURCES.bookSnow,
    sizes: "(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw",
    width: 360,
    height: 640,
    alt: "Novel photographed outdoors in the snow",
  },
  {
    src: sanmanGroup,
    sources: LAUNCH_SOURCES.group,
    sizes: "(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw",
    width: 1920,
    height: 1080,
    alt: "Book launch event with readers and family",
  },
  {
    src: sanmanTable,
    sources: LAUNCH_SOURCES.table,
    sizes: "(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw",
    width: 1920,
    height: 1080,
    alt: "Signing table with signed copies",
  },
  {
    src: sanmanCafe,
    sources: LAUNCH_SOURCES.cafe,
    sizes: "(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw",
    width: 1920,
    height: 1080,
    alt: "Meet the Author display at a local cafe",
  },
];

function TestimonialsStrip() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <div className="text-sm font-bold uppercase tracking-widest text-emerald-brand">
            What Authors Say
          </div>
          <h2 className="mt-3 text-3xl lg:text-5xl font-extrabold tracking-tight text-navy">
            Real authors, real results.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <Card key={t.name} className="border-slate-200 bg-white p-8 shadow-sm">
              <Quote className="size-8 text-emerald-brand" />
              <div className="mt-4 flex gap-0.5">
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

        <div className="mt-10 text-center">
          <Link
            to="/testimonials"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-emerald-brand transition-all hover:gap-3"
          >
            Read all testimonials
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function FeaturedLaunch() {
  return (
    <section className="bg-navy py-24 lg:py-32 relative overflow-hidden">
      <div className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-emerald-brand/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-brand/30 bg-emerald-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-brand">
            <Sparkles className="size-3.5" />
            Featured Client Launch
          </div>
          <h2 className="mt-6 text-3xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Inside the launch of{" "}
            <span className="text-emerald-brand">From The Window: The City of What Ifs</span> by Sanman Thapa.
          </h2>
          <p className="mt-5 text-lg text-slate-400 leading-relaxed">
            A literary fiction launch built from the ground up. Cover, print, event marketing, distribution, and post launch reader campaigns. Here is what the launch actually looked like on the ground.
          </p>
        </div>

        <div className="mt-14 columns-1 gap-4 sm:columns-2 lg:columns-3">
          {launchImages.map((image) => (
            <div
              key={image.alt}
              className="mb-4 break-inside-avoid overflow-hidden rounded-2xl bg-white/[0.04] p-2 ring-1 ring-white/10 transition-all duration-300 hover:bg-white/[0.07] hover:ring-emerald-brand/30"
            >
              <ResponsiveAssetImage
                src={image.src}
                sources={image.sources}
                sizes={image.sizes}
                width={image.width}
                height={image.height}
                alt={image.alt}
                pictureClassName="block w-full"
                className="h-auto w-full rounded-xl"
              />
            </div>
          ))}
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[1.1fr_1fr] items-start">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 lg:p-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-brand/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-emerald-brand">
              <Star className="size-3.5 fill-emerald-brand" />
              Verified 5 Star Review
            </div>
            <p className="mt-5 text-2xl font-extrabold text-white leading-snug">
              &ldquo;It was great working with the service provider. I would definitely use them again.&rdquo;
            </p>
            <p className="mt-4 text-slate-400 leading-relaxed">
              Sanman Thapa scored our team a perfect five across seller communication, quality of delivery, and value of delivery. Highlighted strengths: deep understanding, language fluency, politeness, proactive communication, exceeded expectations, professionalism of work, innovation, and attention to details.
            </p>
            <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
              <ResponsiveAssetImage src={sanmanPortrait} sources={LAUNCH_SOURCES.portrait} sizes="48px" width={695} height={1321} alt="Sanman Thapa" pictureClassName="block size-12 shrink-0 overflow-hidden rounded-full bg-white/10 ring-2 ring-emerald-brand/40" className="h-full w-full object-contain" />
              <div>
                <div className="font-bold text-white">Sanman Thapa</div>
                <div className="text-sm text-slate-400">Author, From The Window: The City of What Ifs</div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-3 ring-1 ring-white/10 shadow-elegant">
            <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 px-2 pt-1 pb-2">
              Original review snapshot
            </div>
            <img
              src={getAssetUrl(sanmanReview.url)}
              alt="Original 5 star review from Sanman Thapa"
              loading="lazy"
              decoding="async"
              width={634}
              height={280}
              className="w-full rounded-lg border border-slate-200"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Index() {
  return (
    <>
      <Hero />
      <Metrics />
      <ServicesTeaser />
      <FeaturedLaunch />
      <TestimonialsStrip />
      <CtaBanner />
    </>
  );
}
