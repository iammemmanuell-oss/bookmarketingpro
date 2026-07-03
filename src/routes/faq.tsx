import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { CtaBanner } from "@/components/CtaBanner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/faq")({
  component: FaqPage,
  head: () => ({
    meta: [
      { title: "FAQ | Book Marketing Agency Pro" },
      {
        name: "description",
        content:
          "Answers to the most common questions from authors about pricing, deliverables, timelines, and results.",
      },
      { property: "og:title", content: "Frequently Asked Questions" },
      {
        property: "og:description",
        content: "Everything authors ask before working with us.",
      },
    ],
  }),
});

const GROUPS = [
  {
    heading: "Getting Started",
    items: [
      {
        q: "How do I know if we are a good fit?",
        a: "The free blueprint call is the fastest way to find out. We look at your manuscript, current sales, and goals, and give you a clear read on whether we can move the needle.",
      },
      {
        q: "Do you work with first time authors?",
        a: "Yes, provided the manuscript is finished or close to it. Some of our best launches have been debuts.",
      },
      {
        q: "What genres do you specialize in?",
        a: "Thriller, romance, sci fi and fantasy, memoir, business, and self help. We take on other genres selectively.",
      },
    ],
  },
  {
    heading: "Pricing and Contracts",
    items: [
      {
        q: "Are your fees monthly or one time?",
        a: "Both. Production work is one time. Ads management and PR are monthly. Packages are fixed price for a defined scope.",
      },
      {
        q: "Do you require long contracts?",
        a: "No lock in. Ads and PR are month to month with a 30 day notice. Packages have a defined delivery window instead of a contract term.",
      },
      {
        q: "Do you take a cut of royalties?",
        a: "Never. You keep 100 percent of your book royalties. We only earn our published fees.",
      },
    ],
  },
  {
    heading: "Deliverables and Timeline",
    items: [
      {
        q: "How long until my ads are live?",
        a: "Typically 10 to 14 days from kickoff for a full campaign build. Faster if we are only optimizing an existing account.",
      },
      {
        q: "Who owns the ad accounts and creative?",
        a: "You do. We build inside your accounts and hand over all creative files at the end of the engagement.",
      },
      {
        q: "What reporting do I get?",
        a: "A weekly dashboard update covering spend, sales, ACoS, ROAS, and the actions we took that week. Monthly strategy review on video.",
      },
    ],
  },
  {
    heading: "Results",
    items: [
      {
        q: "Can you guarantee bestseller status?",
        a: "No honest agency can. We can guarantee a rigorous process, weekly optimization, and full transparency on the numbers.",
      },
      {
        q: "What is a realistic first quarter outcome?",
        a: "For a well positioned title with a reasonable ad budget, we typically see 8k to 40k copies in the first 90 days. Non fiction ranges are wider.",
      },
      {
        q: "What happens if the launch underperforms?",
        a: "We run an honest post mortem, write a corrective plan, and continue only if the numbers justify it. We will tell you when they do not.",
      },
    ],
  },
];

function FaqPage() {
  return (
    <>
      <PageHeader
        eyebrow="FAQ"
        title="Everything authors ask before signing on."
        description="Grouped by topic so you can jump to what matters. If we missed something, the contact page is a click away."
      />

      <section className="bg-white py-24">
        <div className="mx-auto max-w-3xl px-6 space-y-14">
          {GROUPS.map((g) => (
            <div key={g.heading}>
              <div className="text-sm font-bold uppercase tracking-widest text-emerald-brand">
                {g.heading}
              </div>
              <h2 className="mt-2 text-2xl font-extrabold text-navy">
                {g.heading} questions
              </h2>
              <Accordion type="single" collapsible className="mt-6">
                {g.items.map((f) => (
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
          ))}
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
