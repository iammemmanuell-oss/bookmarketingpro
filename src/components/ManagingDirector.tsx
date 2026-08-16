import { Link } from "@tanstack/react-router";
import { BadgeCheck, PhoneCall, Mail, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ResponsiveAssetImage } from "@/components/ResponsiveAssetImage";
import mdPhoto from "@/assets/managing-director.png.asset.json";

export function ManagingDirector() {
  return (
    <section className="bg-navy py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2">
        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-3 rounded-3xl bg-emerald-brand/15 blur-2xl" />
          <div className="relative overflow-hidden rounded-3xl border border-emerald-brand/30 bg-white">
            <ResponsiveAssetImage
              src={mdPhoto}
              alt="Emmanuel Durosinmi, Managing Director of Book Marketing Agency Pro"
              className="h-full w-full object-cover"
              loading="lazy"
              sizes="(max-width: 1024px) 90vw, 380px"
            />
          </div>
          <div className="absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full bg-emerald-brand px-4 py-2 text-xs font-bold text-white shadow-emerald">
            <BadgeCheck className="size-4" />
            Verified Managing Director
          </div>
        </div>

        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-brand/30 bg-emerald-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-brand">
            <ShieldCheck className="size-3.5" />
            Speak directly with the owner
          </div>
          <h2 className="mt-6 text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Emmanuel Durosinmi
            <span className="block text-emerald-brand">Managing Director</span>
          </h2>
          <p className="mt-5 text-slate-300 leading-relaxed">
            Every campaign we run is handled by a verified team and reported with real numbers. No test runs, no guesswork, no filler. When you reach out, you talk to me directly and leave with a clear plan for your book.
          </p>
          <ul className="mt-6 space-y-2 text-sm text-slate-300">
            {[
              "Verified results from live author campaigns",
              "Direct line to the Managing Director",
              "Plan and pricing confirmed before any payment",
            ].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <BadgeCheck className="size-4 shrink-0 text-emerald-brand" />
                {t}
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="mailto:emmanuel@hq360.space?subject=Book%20a%20Call%20with%20the%20Managing%20Director">
              <Button
                size="lg"
                className="h-12 px-7 bg-emerald-brand text-white hover:bg-emerald-brand/90 font-semibold text-base shadow-emerald"
              >
                <PhoneCall className="size-4" />
                Contact Me For A Call
              </Button>
            </a>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-7 bg-transparent border-slate-600 text-white hover:bg-white/5 hover:text-white font-semibold text-base"
              >
                <Mail className="size-4" />
                Send A Message
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
