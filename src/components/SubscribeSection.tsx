import { useState, type FormEvent } from "react";
import { Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { createContactEmailUrl } from "@/lib/contact";

export function SubscribeSection() {
  const [submitting, setSubmitting] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const email = String(fd.get("email") || "").trim();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email.");
      return;
    }
    setSubmitting(true);
    const subject = `Author Insider List Signup: ${email}`;
    const body =
      `A new author wants to join the Book Marketing Agency Pro list.\n\n` +
      `Email: ${email}\n\n` +
      `Please add them to the insider list and send the welcome pack.`;
    window.location.href = createContactEmailUrl(subject, body);
    setTimeout(() => {
      toast.success("Your email app is ready. Send the message to join the insider list.");
      (e.target as HTMLFormElement).reset();
      setSubmitting(false);
    }, 400);
  };

  return (
    <section className="bg-navy py-20">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-brand/30 bg-emerald-brand/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-emerald-brand">
          <Mail className="size-3.5" />
          Author Insider List
        </div>
        <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Get monthly launch tactics that actually move copies.
        </h2>
        <p className="mt-4 text-lg text-slate-400">
          Sign up with your email to receive proven launch playbooks, ad angles, and case study
          teardowns from our team. No fluff, unsubscribe anytime.
        </p>
        <form
          onSubmit={onSubmit}
          className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row"
        >
          <Input
            type="email"
            name="email"
            required
            maxLength={200}
            placeholder="you@gmail.com"
            className="h-12 flex-1 border-slate-600 bg-slate-800 text-white placeholder:text-slate-500"
          />
          <Button
            type="submit"
            size="lg"
            disabled={submitting}
            className="h-12 bg-emerald-brand px-6 font-semibold text-white hover:bg-emerald-brand/90 shadow-emerald"
          >
            Subscribe
            <ArrowRight className="size-4" />
          </Button>
        </form>
        <p className="mt-4 text-xs text-slate-500">
          By subscribing you agree to receive occasional emails from Book Marketing Agency Pro.
        </p>
      </div>
    </section>
  );
}
