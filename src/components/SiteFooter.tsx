import { Link } from "@tanstack/react-router";
import { Twitter, Linkedin, Instagram, Mail, MapPin } from "lucide-react";
import { Logo } from "@/components/Logo";
import { createContactEmailUrl } from "@/lib/contact";

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep border-t border-white/5 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] items-start">
          <div>
            <Logo variant="muted" size="sm" />
            <p className="mt-4 max-w-sm text-sm text-slate-500 leading-relaxed">
              A specialist book marketing agency for authors serious about launching, trending, and selling more books.
            </p>
            <div className="mt-5 space-y-2 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <Mail className="size-4 text-emerald-brand" />
                <a href={createContactEmailUrl("Book marketing inquiry", "Hello Emmanuel, I would like to discuss marketing my book.")} className="hover:text-white transition-colors">
                  Send us an email
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="size-4 text-emerald-brand" />
                Remote, worldwide
              </div>
            </div>
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Company
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                { to: "/about", label: "About" },
                { to: "/case-studies", label: "Case Studies" },
                { to: "/testimonials", label: "Testimonials" },
                { to: "/blog", label: "Blog" },
                { to: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to as "/about"} className="text-slate-500 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Services
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                "Amazon PPC",
                "Meta Ads",
                "BookTok Outreach",
                "Cover Design",
                "Formatting",
                "Launch Strategy",
              ].map((s) => (
                <li key={s}>
                  <Link to="/services" className="text-slate-500 hover:text-white transition-colors">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-slate-400">
              Legal
            </div>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link to="/privacy" className="text-slate-500 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-slate-500 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-slate-500 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
            <div className="mt-5 flex gap-3">
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

        <div className="mt-12 border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <div>© 2026 Book Marketing Agency Pro. All rights reserved.</div>
          <div>bookmarketingagency.pro</div>
        </div>
      </div>
    </footer>
  );
}
