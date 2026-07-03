import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { label: "Home", to: "/" as const },
  { label: "Services", to: "/services" as const },
  { label: "Process", to: "/process" as const },
  { label: "Case Studies", to: "/case-studies" as const },
  { label: "About", to: "/about" as const },
  { label: "Blog", to: "/blog" as const },
  { label: "FAQ", to: "/faq" as const },
  { label: "Contact", to: "/contact" as const },
];

export function SiteHeader() {
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
          : "bg-navy/70 backdrop-blur-sm"
      }`}
    >
      <div className="mx-auto grid max-w-7xl grid-cols-[auto_1fr_auto] items-center gap-4 px-6 py-4">
        <Link to="/" className="min-w-0 shrink-0">
          <Logo />
        </Link>

        <nav className="hidden xl:flex items-center justify-center gap-7">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-white" }}
              inactiveProps={{ className: "text-slate-300 hover:text-white" }}
              className="text-sm font-medium transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2 justify-self-end">
          <Link to="/contact" className="hidden sm:inline-flex">
            <Button
              size="lg"
              className="bg-emerald-brand text-white hover:bg-emerald-brand/90 font-semibold shadow-emerald"
            >
              Get Free Blueprint
            </Button>
          </Link>
          <button
            className="xl:hidden text-white p-2"
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="xl:hidden bg-navy/98 backdrop-blur-md border-t border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="text-slate-300 hover:text-white font-medium py-2.5"
              >
                {l.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="sm:hidden mt-2">
              <Button className="w-full bg-emerald-brand text-white hover:bg-emerald-brand/90 font-semibold">
                Get Free Blueprint
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
