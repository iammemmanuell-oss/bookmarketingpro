import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaBanner() {
  return (
    <section className="bg-navy py-20">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-emerald-brand/20 bg-gradient-to-br from-emerald-brand/10 via-navy to-navy p-10 lg:p-14 text-center">
          <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[600px] -translate-x-1/2 rounded-full bg-emerald-brand/20 blur-3xl" />
          <div className="relative">
            <h2 className="text-3xl lg:text-4xl font-extrabold tracking-tight text-white">
              Ready to make your book impossible to ignore?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-slate-300">
              Get a free custom launch blueprint. No cost, no pressure, no obligation.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/contact">
                <Button
                  size="lg"
                  className="h-12 px-7 bg-emerald-brand text-white hover:bg-emerald-brand/90 font-semibold text-base shadow-emerald"
                >
                  Get Free Blueprint
                  <ArrowRight className="size-4" />
                </Button>
              </Link>
              <Link to="/services">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 px-7 bg-transparent border-slate-600 text-white hover:bg-white/5 hover:text-white font-semibold text-base"
                >
                  See All Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
