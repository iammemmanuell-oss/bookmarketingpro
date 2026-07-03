import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { CtaBanner } from "@/components/CtaBanner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/process")({
  component: ProcessPage,
  head: () => ({
    meta: [
      { title: "Our Process | Book Marketing Agency Pro" },
      {
        name: "description",
        content:
          "A five phase process from discovery to scale. See exactly what happens week by week when we run your book launch.",
      },
      { property: "og:title", content: "How We Launch Books" },
      {
        property: "og:description",
        content: "Discovery, blueprint, production, launch, and scale. Our five phase workflow.",
      },
    ],
  }),
});

const STEPS = [
  {
    n: "01",
    title: "Discovery",
    week: "Week 1",
    desc: "We audit your manuscript, current sales data, genre competition, and reader avatar. You leave the first call with a clear read on where the opportunity is.",
    deliverables: ["Manuscript audit", "Competitor teardown", "Reader avatar brief"],
  },
  {
    n: "02",
    title: "Blueprint",
    week: "Week 2",
    desc: "We produce a written 90 day launch blueprint covering positioning, pricing, categories, keywords, ad angles, and creator campaigns.",
    deliverables: ["Written blueprint", "Pricing and category plan", "Ad angle library"],
  },
  {
    n: "03",
    title: "Production",
    week: "Weeks 3 to 5",
    desc: "Cover design, interior formatting, retailer setup, ad creative, landing pages, and email sequences all built to launch spec.",
    deliverables: ["Final cover files", "EPUB and print PDF", "Retailer listings live"],
  },
  {
    n: "04",
    title: "Launch",
    week: "Weeks 6 to 8",
    desc: "Pre order push, launch week ads, PR outreach, creator campaigns, and daily performance calls with your team lead.",
    deliverables: ["Launch week ad blitz", "PR and podcast placements", "Daily standups"],
  },
  {
    n: "05",
    title: "Scale",
    week: "Weeks 9 to 12+",
    desc: "We double down on what worked, cut what did not, and scale profitable ad spend while keeping ACoS on target.",
    deliverables: ["Weekly optimization", "Monthly strategy review", "Backlist strategy"],
  },
];

const FAQ = [
  {
    q: "How long does a typical launch take?",
    a: "A standard launch runs 12 weeks from kickoff to first scale review. Faster relaunches for existing titles can move in 4 to 6 weeks.",
  },
  {
    q: "Do I need my manuscript finished to start?",
    a: "No. We often kick off during final edits so cover, positioning, and pre order setup are ready when the manuscript lands.",
  },
  {
    q: "Do you work with traditionally published authors?",
    a: "Yes. We work with indie, hybrid, and traditionally published authors, especially those relaunching backlist titles.",
  },
  {
    q: "What if my launch does not hit target?",
    a: "We review honestly, cut what did not work, and rebuild. Every engagement includes a post launch review with a written action plan.",
  },
];

function ProcessPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Process"
        title="A five phase workflow, built for real book launches."
        description="No mystery, no black boxes. Here is exactly what happens from the moment you sign a contract to the day we hand back a profitable backlist."
      />

      <section className="bg-white py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="relative">
            <div
              aria-hidden
              className="absolute left-8 top-4 bottom-4 w-px bg-gradient-to-b from-emerald-brand via-slate-200 to-transparent lg:left-10"
            />
            <div className="flex flex-col gap-12">
              {STEPS.map((s) => (
                <div
                  key={s.n}
                  className="grid grid-cols-[auto_1fr] items-start gap-6 lg:gap-10"
                >
                  <div className="relative z-10 flex size-16 lg:size-20 shrink-0 items-center justify-center rounded-2xl bg-navy text-emerald-brand font-extrabold text-xl lg:text-2xl shadow-elegant ring-4 ring-white">
                    {s.n}
                  </div>
                  <div className="pt-2 lg:pt-3">
                    <div className="text-xs font-bold uppercase tracking-widest text-emerald-brand">
                      {s.week}
                    </div>
                    <h3 className="mt-1 text-xl lg:text-2xl font-extrabold text-navy">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-slate-600 leading-relaxed max-w-2xl">
                      {s.desc}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {s.deliverables.map((d) => (
                        <span
                          key={d}
                          className="rounded-full bg-emerald-brand/10 px-3 py-1 text-xs font-semibold text-emerald-brand"
                        >
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-3xl px-6">
          <div className="text-center">
            <div className="text-sm font-bold uppercase tracking-widest text-emerald-brand">
              Process FAQ
            </div>
            <h2 className="mt-3 text-3xl lg:text-4xl font-extrabold tracking-tight text-navy">
              Quick answers about how we work.
            </h2>
          </div>
          <Accordion type="single" collapsible className="mt-10">
            {FAQ.map((f) => (
              <AccordionItem key={f.q} value={f.q} className="border-slate-200">
                <AccordionTrigger className="text-left text-base font-bold text-navy hover:text-emerald-brand">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600 leading-relaxed">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
