import {
  ArrowRight,
  Award,
  Building2,
  ChartNoAxesCombined,
  Clock3,
  MessageCircleMore,
  PhoneCall,
  ShieldCheck,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedSection } from "./components/AnimatedSection";
import { Counter } from "./components/Counter";
import { FaqSection } from "./components/FaqSection";
import { HeroSection } from "./components/HeroSection";
import { LeadFormSection } from "./components/LeadFormSection";
import { ListingsSection } from "./components/ListingsSection";
import { Navbar } from "./components/Navbar";
import { SectionHeading } from "./components/SectionHeading";
import {
  agent,
  faqs,
  filterOptions,
  listings,
  metrics,
  navLinks,
  reasons,
  services,
  testimonials,
  transactions,
  trustBadges,
} from "./data/siteData";

function createWhatsAppHref(message) {
  return `https://wa.me/${agent.whatsapp}?text=${encodeURIComponent(message)}`;
}

const heroStats = [
  {
    icon: <ShieldCheck size={18} />,
    value: "RERA-ready trust flow",
    label: "Designed to establish credibility before the user scrolls far.",
  },
  {
    icon: <PhoneCall size={18} />,
    value: "WhatsApp-first CTA",
    label:
      "Every major section includes a fast conversion route for mobile users.",
  },
  {
    icon: <ChartNoAxesCombined size={18} />,
    value: "Lead qualification",
    label: "The form captures intent so follow-ups feel timely and relevant.",
  },
];

export default function App() {
  const defaultWhatsApp = createWhatsAppHref(
    "Hi Aria, I'm looking for help finding the right property. Can we discuss my requirements?",
  );

  return (
    <div className="min-h-screen text-slate-950">
      <Navbar navLinks={navLinks} whatsappHref={defaultWhatsApp} />
      <HeroSection
        agent={agent}
        trustBadges={trustBadges}
        whatsappHref={defaultWhatsApp}
        stats={heroStats}
      />

      <main>
        <AnimatedSection id="why-choose-me" className="container-shell py-24">
          <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
            <div>
              <SectionHeading
                eyebrow="Why choose me"
                title="A stronger property brand comes from clarity, proof, and a frictionless next step."
                description="Since the original HTML is not present in this repository, this rebuild preserves a premium property positioning while refocusing the page around practical conversion pathways."
              />
              <div className="mt-8 space-y-4">
                {reasons.map((reason) => (
                  <motion.div
                    key={reason.title}
                    whileHover={{ x: 6 }}
                    className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card"
                  >
                    <h3 className="text-lg font-semibold text-slate-950">
                      {reason.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {reason.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {metrics.map((metric, index) => (
                <Counter
                  key={metric.label}
                  value={metric.value}
                  suffix={metric.suffix}
                  decimals={metric.value % 1 !== 0 ? 1 : 0}
                  label={metric.label}
                  delay={index * 0.08}
                />
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="services" className="container-shell py-24">
          <SectionHeading
            eyebrow="Services"
            title="Show buyers and sellers exactly how you help, without overwhelming them."
            description="Keep service descriptions simple, outcome-oriented, and easy to scan so visitors quickly identify whether they are a fit."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-card"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                  {
                    [
                      <Building2 key="b" size={20} />,
                      <ChartNoAxesCombined key="c" size={20} />,
                      <Award key="a" size={20} />,
                      <Clock3 key="d" size={20} />,
                    ][index]
                  }
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-950">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {service.description}
                </p>
                <a
                  href="#lead-form"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-600"
                >
                  Discuss this service <ArrowRight size={16} />
                </a>
              </motion.article>
            ))}
          </div>
        </AnimatedSection>

        <ListingsSection
          listings={listings}
          filterOptions={filterOptions}
          whatsappHrefBuilder={createWhatsAppHref}
        />

        <AnimatedSection className="container-shell py-24">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="rounded-[32px] bg-slate-950 p-8 text-white shadow-soft md:p-10">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
                Agent profile
              </p>
              <h2 className="mt-4 text-3xl font-semibold">{agent.name}</h2>
              <p className="mt-2 text-slate-300">{agent.title}</p>
              <p className="mt-6 text-base leading-8 text-slate-300">
                {agent.bio}
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">
                    Specialist markets
                  </p>
                  <p className="mt-3 text-lg font-medium text-white">
                    {agent.location}
                  </p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-400">
                    Response promise
                  </p>
                  <p className="mt-3 text-lg font-medium text-white">
                    {agent.responsePromise}
                  </p>
                </div>
              </div>
            </div>

            <div>
              <SectionHeading
                eyebrow="Trust building"
                title="Support the personal brand with recent transactions and measurable proof."
                description="These sections should stay dynamic over time because fresh proof improves credibility and makes the website feel active."
              />
              <div className="mt-8 space-y-4">
                {transactions.map((transaction) => (
                  <div
                    key={transaction.address}
                    className="rounded-3xl border border-slate-200 bg-white p-6 shadow-card"
                  >
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-600">
                      Recent transaction
                    </p>
                    <h3 className="mt-3 text-xl font-semibold text-slate-950">
                      {transaction.address}
                    </h3>
                    <p className="mt-2 text-base font-medium text-slate-800">
                      {transaction.result}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {transaction.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="testimonials" className="container-shell py-24">
          <SectionHeading
            eyebrow="Testimonials"
            title="Use social proof to reduce risk and keep the next step feeling safe."
            description="Testimonials work best when they reference speed, expertise, and outcomes instead of generic praise."
            centered
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <motion.figure
                key={testimonial.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-card"
              >
                <div className="flex gap-1 text-accent">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} size={16} fill="currentColor" />
                  ))}
                </div>
                <blockquote className="mt-5 text-base leading-8 text-slate-700">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="mt-6">
                  <p className="font-semibold text-slate-950">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </figcaption>
              </motion.figure>
            ))}
          </div>
        </AnimatedSection>

        <FaqSection faqs={faqs} />
        <LeadFormSection
          agent={agent}
          trustBadges={trustBadges}
          whatsappHref={defaultWhatsApp}
        />

        <AnimatedSection className="container-shell pb-32 pt-8">
          <div className="overflow-hidden rounded-[36px] bg-slate-950 p-8 text-white shadow-soft md:p-12">
            <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-accent">
                  Closing CTA
                </p>
                <h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-tight md:text-4xl">
                  Ready for a serious property conversation instead of another
                  generic portal inquiry?
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-8 text-slate-300">
                  This section should stay simple: one clear promise, one direct
                  CTA, and one fast alternative channel for people who prefer
                  messaging.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
                <a href="#lead-form" className="primary-button">
                  Request my shortlist
                </a>
                <a
                  href={createWhatsAppHref(
                    "Hi Aria, I'd like to discuss my buying requirements and shortlist options.",
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="secondary-button gap-2 border-white/15 bg-white/5 text-white hover:border-white hover:bg-white hover:text-slate-950"
                >
                  <MessageCircleMore size={16} /> WhatsApp now
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>

      <footer className="border-t border-slate-200 bg-white/80 py-10 backdrop-blur">
        <div className="container-shell flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-semibold text-slate-950">
              Signature Estates
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Modern property advisory website for higher-intent leads, faster
              trust, and better close rates.
            </p>
          </div>
          <div className="text-sm text-slate-500">
            <p>{agent.phone}</p>
            <p>{agent.email}</p>
          </div>
        </div>
      </footer>

      <a
        href={createWhatsAppHref(
          "Hi Aria, I'm interested in speaking about a property requirement.",
        )}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-24 right-4 z-40 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:scale-[1.02] md:bottom-6"
      >
        <MessageCircleMore size={18} /> WhatsApp
      </a>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200 bg-white/95 p-3 shadow-2xl backdrop-blur md:hidden">
        <div className="flex gap-3">
          <a href="#lead-form" className="primary-button w-full">
            Get shortlist
          </a>
          <a
            href={defaultWhatsApp}
            target="_blank"
            rel="noreferrer"
            className="secondary-button w-full gap-2"
          >
            <MessageCircleMore size={16} /> Chat now
          </a>
        </div>
      </div>
    </div>
  );
}
