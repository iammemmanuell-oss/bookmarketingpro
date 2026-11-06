import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { ArrowRight, Mail, Clock, MessageCircle } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";
import { createContactEmailUrl } from "@/lib/contact";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact | Book Marketing Agency Pro" },
      {
        name: "description",
        content:
          "Request a free launch blueprint. We respond within 24 hours with a custom plan for your book.",
      },
      { property: "og:title", content: "Contact Book Marketing Agency Pro" },
      {
        property: "og:description",
        content: "Get a free custom launch blueprint. Response within 24 hours.",
      },
    ],
  }),
});

function ContactPage() {
  const [submitting, setSubmitting] = useState(false);
  const [stage, setStage] = useState("finished");

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const genre = String(fd.get("genre") || "").trim();
    const currentStage = String(fd.get("stage") || stage).trim();
    const details = String(fd.get("details") || "").trim();

    if (!name || name.length > 100) {
      toast.error("Please enter a valid name.");
      setSubmitting(false);
      return;
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Please enter a valid email.");
      setSubmitting(false);
      return;
    }
    if (!genre) {
      toast.error("Please select your book's genre.");
      setSubmitting(false);
      return;
    }
    if (!details || details.length > 2000) {
      toast.error("Please add project details (max 2000 characters).");
      setSubmitting(false);
      return;
    }

    const subject = `Free Blueprint Request — ${name}`;
    const body =
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Genre: ${genre}\n` +
      `Publishing Stage: ${currentStage}\n\n` +
      `Project Details:\n${details}\n`;
    window.location.href = createContactEmailUrl(subject, body);

    setTimeout(() => {
      toast.success("Your email app is ready. Send the message to request your blueprint.");
      setSubmitting(false);
    }, 400);
  };

  return (
    <>
      <PageHeader
        eyebrow="Free Strategy Blueprint"
        title="Tell us about your book."
        description="Share a few details and we will return a custom launch blueprint. Positioning, pricing, ad angles, and a 90 day sales plan. No cost, no pressure."
      />

      <section className="bg-slate-50 py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-5">
          <div className="lg:col-span-2 space-y-6">
            <Card className="border-slate-200 bg-white p-6">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-lg bg-emerald-brand/10 text-emerald-brand">
                  <Mail className="size-5" />
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-500">Email</div>
                  <a
                    className="font-bold text-navy underline-offset-4 hover:underline"
                    href={createContactEmailUrl("Book marketing inquiry", "Hello Emmanuel, I would like to discuss marketing my book.")}
                  >
                    Send us an email
                  </a>
                </div>
              </div>
            </Card>
            <Card className="border-slate-200 bg-white p-6">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-lg bg-emerald-brand/10 text-emerald-brand">
                  <Clock className="size-5" />
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-500">Response Time</div>
                  <div className="font-bold text-navy">Within 24 hours, weekdays</div>
                </div>
              </div>
            </Card>
            <Card className="border-slate-200 bg-white p-6">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-lg bg-emerald-brand/10 text-emerald-brand">
                  <MessageCircle className="size-5" />
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-500">Prefer a call?</div>
                  <div className="font-bold text-navy">Book a 30 minute intro after we reply</div>
                </div>
              </div>
            </Card>
          </div>

          <Card className="lg:col-span-3 border-slate-200 bg-white p-8 lg:p-10 shadow-elegant">
            <form onSubmit={onSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name" className="text-navy font-semibold">
                  Full Name
                </Label>
                <Input
                  id="name"
                  name="name"
                  required
                  maxLength={100}
                  placeholder="Jane Marlow"
                  className="mt-2 h-11"
                />
              </div>

              <div>
                <Label htmlFor="email" className="text-navy font-semibold">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  maxLength={200}
                  placeholder="you@example.com"
                  className="mt-2 h-11"
                />
              </div>

              <div>
                <Label htmlFor="genre" className="text-navy font-semibold">
                  Your Book's Genre
                </Label>
                <Select name="genre" required>
                  <SelectTrigger id="genre" className="mt-2 h-11 w-full">
                    <SelectValue placeholder="Select a genre" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="fiction">Fiction</SelectItem>
                    <SelectItem value="non_fiction">Non Fiction</SelectItem>
                    <SelectItem value="memoir">Memoir</SelectItem>
                    <SelectItem value="scifi_fantasy">Sci Fi and Fantasy</SelectItem>
                    <SelectItem value="romance">Romance</SelectItem>
                    <SelectItem value="business">Business</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-navy font-semibold">Current Publishing Stage</Label>
                <RadioGroup
                  name="stage"
                  value={stage}
                  onValueChange={setStage}
                  className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3"
                >
                  {[
                    { v: "writing", l: "Writing" },
                    { v: "finished", l: "Finished" },
                    { v: "published", l: "Already Published" },
                  ].map((o) => (
                    <label
                      key={o.v}
                      className={`flex cursor-pointer items-center gap-2 rounded-lg border px-4 py-3 text-sm font-medium transition-colors ${
                        stage === o.v
                          ? "border-emerald-brand bg-emerald-brand/5 text-navy"
                          : "border-slate-200 text-slate-600 hover:border-slate-300"
                      }`}
                    >
                      <RadioGroupItem value={o.v} className="text-emerald-brand" />
                      {o.l}
                    </label>
                  ))}
                </RadioGroup>
              </div>

              <div>
                <Label htmlFor="details" className="text-navy font-semibold">
                  Project Details
                </Label>
                <Textarea
                  id="details"
                  name="details"
                  required
                  maxLength={2000}
                  rows={5}
                  placeholder="Tell us about your book, your goals, and where you are in the process..."
                  className="mt-2 resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={submitting}
                className="h-12 w-full bg-emerald-brand text-base font-bold text-white hover:bg-emerald-brand/90 shadow-emerald"
              >
                {submitting ? "Sending..." : "Generate My Strategy"}
                <ArrowRight className="size-4" />
              </Button>
            </form>
          </Card>
        </div>
      </section>
    </>
  );
}
