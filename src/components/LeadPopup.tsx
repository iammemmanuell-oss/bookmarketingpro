import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { X, BadgeCheck, ArrowRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";

const SEEN_KEY = "bmap_lead_popup_seen";

export function LeadPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(SEEN_KEY)) return;

    const show = () => {
      setOpen(true);
      sessionStorage.setItem(SEEN_KEY, "1");
      window.removeEventListener("mouseout", onExit);
    };
    const onExit = (e: MouseEvent) => {
      if (e.clientY <= 0) show();
    };

    const timer = window.setTimeout(show, 9000);
    window.addEventListener("mouseout", onExit);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("mouseout", onExit);
    };
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-navy/70 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />
      <div className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-emerald-brand/30 bg-white shadow-elegant">
        <button
          type="button"
          aria-label="Close"
          onClick={() => setOpen(false)}
          className="absolute right-3 top-3 rounded-full p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-navy"
        >
          <X className="size-4" />
        </button>

        <div className="bg-navy px-8 py-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-brand/30 bg-emerald-brand/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-emerald-brand">
            <BadgeCheck className="size-3.5" />
            Verified Agency, Real Results
          </div>
          <h2 className="mt-4 text-2xl font-extrabold leading-tight text-white">
            Get your free book launch blueprint today.
          </h2>
          <p className="mt-2 text-sm text-slate-300">
            A custom plan for your book with positioning, pricing, ad angles, and a 90 day sales roadmap. Free, and sent within 24 hours.
          </p>
        </div>

        <div className="px-8 py-6">
          <ul className="space-y-2 text-sm text-slate-700">
            {[
              "Verified campaigns, no test runs",
              "Fixed pricing from $400",
              "Reply within 24 hours, weekdays",
            ].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <BadgeCheck className="size-4 shrink-0 text-emerald-brand" />
                {t}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Link to="/contact" className="flex-1" onClick={() => setOpen(false)}>
              <Button className="h-11 w-full bg-emerald-brand font-bold text-white hover:bg-emerald-brand/90 shadow-emerald">
                Claim My Free Blueprint
                <ArrowRight className="size-4" />
              </Button>
            </Link>
            <a
              href="mailto:emmanuel@hq360.space?subject=Book%20a%20Call"
              className="flex-1"
              onClick={() => setOpen(false)}
            >
              <Button
                variant="outline"
                className="h-11 w-full border-navy font-bold text-navy hover:bg-navy hover:text-white"
              >
                <PhoneCall className="size-4" />
                Book A Call
              </Button>
            </a>
          </div>
          <p className="mt-4 text-center text-xs text-slate-500">
            No cost. No pressure. No obligation.
          </p>
        </div>
      </div>
    </div>
  );
}
