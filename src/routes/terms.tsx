import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
  head: () => ({
    meta: [
      { title: "Terms of Service | Book Marketing Agency Pro" },
      {
        name: "description",
        content:
          "The terms that govern your use of the Book Marketing Agency Pro website and services.",
      },
      { property: "og:title", content: "Terms of Service" },
      {
        property: "og:description",
        content: "Terms that govern use of our website and services.",
      },
    ],
  }),
});

function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Terms of Service"
        description="These terms govern your access to the Book Marketing Agency Pro website and any services purchased from us."
      />

      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-6 prose prose-slate max-w-none">
          <p className="text-sm text-slate-500">Last updated: January 1, 2026</p>

          <h2 className="mt-8 text-2xl font-extrabold text-navy">Use of the Website</h2>
          <p className="mt-3 text-slate-600 leading-relaxed">
            You may use this website for lawful purposes only. You agree not to interfere with the operation of the site, attempt to gain unauthorized access, or use it in a way that would violate any applicable law.
          </p>

          <h2 className="mt-8 text-2xl font-extrabold text-navy">Services</h2>
          <p className="mt-3 text-slate-600 leading-relaxed">
            Services purchased from Book Marketing Agency Pro are governed by a separate written engagement letter. Nothing on this website constitutes a binding offer to provide services.
          </p>

          <h2 className="mt-8 text-2xl font-extrabold text-navy">Fees and Payment</h2>
          <p className="mt-3 text-slate-600 leading-relaxed">
            Fees for engagements are outlined in your engagement letter. Package fees are payable in advance. Monthly retainers are payable on the first day of each month.
          </p>

          <h2 className="mt-8 text-2xl font-extrabold text-navy">Cancellation</h2>
          <p className="mt-3 text-slate-600 leading-relaxed">
            Monthly retainers can be cancelled with 30 days written notice. Package engagements are non refundable once production has begun, but any undelivered scope will be completed.
          </p>

          <h2 className="mt-8 text-2xl font-extrabold text-navy">Intellectual Property</h2>
          <p className="mt-3 text-slate-600 leading-relaxed">
            All content on this website belongs to Book Marketing Agency Pro. Work product created for clients under an engagement letter transfers to the client upon final payment.
          </p>

          <h2 className="mt-8 text-2xl font-extrabold text-navy">Limitation of Liability</h2>
          <p className="mt-3 text-slate-600 leading-relaxed">
            Book Marketing Agency Pro is not liable for indirect or consequential losses. Total liability under any engagement is limited to the fees paid for that engagement in the preceding 12 months.
          </p>

          <h2 className="mt-8 text-2xl font-extrabold text-navy">Contact</h2>
          <p className="mt-3 text-slate-600 leading-relaxed">
            Questions about these terms can be sent to emmanuel@bookmarketingagency.pro.
          </p>
        </div>
      </section>
    </>
  );
}
