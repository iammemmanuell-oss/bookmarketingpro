import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { createContactEmailUrl } from "@/lib/contact";

export const Route = createFileRoute("/privacy")({
  component: PrivacyPage,
  head: () => ({
    meta: [
      { title: "Privacy Policy | Book Marketing Agency Pro" },
      {
        name: "description",
        content:
          "How Book Marketing Agency Pro collects, uses, and protects the personal information of visitors and clients.",
      },
      { property: "og:title", content: "Privacy Policy" },
      {
        property: "og:description",
        content: "Our privacy practices, cookies, data retention, and your rights.",
      },
    ],
  }),
});

function PrivacyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        description="This page explains what information we collect, how we use it, and the choices you have. It is maintained by Book Marketing Agency Pro."
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6 prose prose-slate max-w-none">
          <p className="text-sm text-slate-500">Last updated: January 1, 2026</p>

          <h2 className="mt-8 text-2xl font-extrabold text-navy">Information We Collect</h2>
          <p className="mt-3 text-slate-600 leading-relaxed">
            When you contact us through the strategy blueprint form we collect your name, email address, publishing stage, book genre, and any project details you choose to share. We also collect basic technical information about your visit, such as browser type and pages viewed, to improve the site.
          </p>

          <h2 className="mt-8 text-2xl font-extrabold text-navy">How We Use Information</h2>
          <p className="mt-3 text-slate-600 leading-relaxed">
            We use the information you submit to respond to your inquiry, prepare your custom blueprint, and follow up about our services. We do not sell your personal information to third parties.
          </p>

          <h2 className="mt-8 text-2xl font-extrabold text-navy">Cookies and Analytics</h2>
          <p className="mt-3 text-slate-600 leading-relaxed">
            We use a small number of cookies to keep the site functional and to understand aggregate usage patterns. You can disable cookies in your browser settings without breaking core site functionality.
          </p>

          <h2 className="mt-8 text-2xl font-extrabold text-navy">Data Retention</h2>
          <p className="mt-3 text-slate-600 leading-relaxed">
            We keep inquiry data for up to 24 months so we can follow up about services you asked about. Client engagement records are kept for the duration of our contract plus any period required by applicable law.
          </p>

          <h2 className="mt-8 text-2xl font-extrabold text-navy">Your Rights</h2>
          <p className="mt-3 text-slate-600 leading-relaxed">
            You can request a copy of the personal information we hold about you, ask us to correct it, or ask us to delete it. <a className="underline underline-offset-4" href={createContactEmailUrl("Privacy request", "Hello, I would like to make a privacy request.")}>Send us an email</a> and we will respond within 30 days.
          </p>

          <h2 className="mt-8 text-2xl font-extrabold text-navy">Contact</h2>
          <p className="mt-3 text-slate-600 leading-relaxed">
            Questions about this policy can be sent by <a className="underline underline-offset-4" href={createContactEmailUrl("Privacy policy question", "Hello, I have a question about the privacy policy.")}>email</a>.
          </p>
        </div>
      </section>
    </>
  );
}
