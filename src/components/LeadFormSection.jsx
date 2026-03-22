import { BadgeCheck, Clock3, MessageCircleMore } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";
import { SectionHeading } from "./SectionHeading";

const propertyTypes = [
  "Apartment",
  "Villa",
  "Townhouse",
  "Penthouse",
  "Commercial",
];
const budgetRanges = [
  "Under AED 2M",
  "AED 2M - 4M",
  "AED 4M - 8M",
  "AED 8M - 15M",
  "AED 15M+",
];
const purposes = ["Own stay", "Investment"];
const timelines = [
  "Immediate",
  "Within 30 days",
  "1 - 3 months",
  "3 - 6 months",
  "Exploring options",
];

export function LeadFormSection({ agent, trustBadges, whatsappHref }) {
  return (
    <AnimatedSection id="lead-form" className="container-shell py-24">
      <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="rounded-[32px] bg-slate-950 p-8 text-white shadow-soft md:p-10">
          <SectionHeading
            eyebrow="Qualified lead capture"
            title="Tell us what you need so the first follow-up is useful, not generic."
            description="A better intake form improves conversion quality, reduces wasted callbacks, and helps buyers feel understood from the first touchpoint."
            inverted
          />

          <div className="mt-8 space-y-5">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center gap-3 text-accent">
                <Clock3 size={18} />
                <h3 className="text-base font-semibold text-white">
                  Quick response promise
                </h3>
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-300">
                {agent.responsePromise}. High-intent leads receive a curated
                next step, not an automated reply.
              </p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <div className="flex items-center gap-3 text-accent">
                <BadgeCheck size={18} />
                <h3 className="text-base font-semibold text-white">
                  Trust badges placed near conversion point
                </h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-3">
                {trustBadges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-brand-400/20 bg-brand-500/10 p-5">
              <p className="text-sm leading-7 text-slate-200">
                Prefer to chat first? Use WhatsApp for availability, off-market
                opportunities, or a same-day callback.
              </p>
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="primary-button mt-4 gap-2"
              >
                <MessageCircleMore size={16} /> Start on WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-card md:p-10">
          <form className="grid gap-4 md:grid-cols-2">
            <Input label="Name" type="text" placeholder="Your full name" />
            <Input label="Phone" type="tel" placeholder="Best contact number" />
            <Input label="Email" type="email" placeholder="name@example.com" />
            <Select label="Property type" options={propertyTypes} />
            <Select label="Budget range" options={budgetRanges} />
            <Input
              label="Preferred area"
              type="text"
              placeholder="e.g. Dubai Marina"
            />
            <Select label="Purpose" options={purposes} />
            <Select label="Buying timeline" options={timelines} />
            <div className="md:col-span-2">
              <label className="mb-2 block text-sm font-medium text-slate-700">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Tell us what kind of property, lifestyle, or investment outcome you are looking for."
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-500"
              />
            </div>
            <div className="md:col-span-2 flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-xl text-sm leading-6 text-slate-500">
                By submitting, you request a callback, tailored shortlist, or
                viewing plan. Keep the next step simple and human.
              </p>
              <button type="submit" className="primary-button">
                Send my property brief
              </button>
            </div>
          </form>
        </div>
      </div>
    </AnimatedSection>
  );
}

function Input({ label, type, placeholder }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-500"
      />
    </div>
  );
}

function Select({ label, options }) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700">
        {label}
      </label>
      <select className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-500">
        <option>Select {label.toLowerCase()}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
