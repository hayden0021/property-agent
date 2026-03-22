import { MessageCircleMore, ShieldCheck, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection({ agent, trustBadges, whatsappHref, stats }) {
  return (
    <section
      id="top"
      className="relative overflow-hidden pb-20 pt-10 text-white md:pb-24 md:pt-16"
    >
      <div className="absolute inset-0 bg-hero-grid" />
      <div className="container-shell relative grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
          >
            Trusted by buyers, investors, and relocating families
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-4xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl"
          >
            Turn your landing page into a lead engine for premium property
            buyers.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 max-w-2xl text-lg leading-8 text-slate-300"
          >
            {agent.name} helps serious buyers and investors shortlist the right
            opportunities, move faster on viewings, and make confident decisions
            with data-backed guidance.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-8 flex flex-col gap-4 sm:flex-row"
          >
            <a href="#lead-form" className="primary-button">
              Get a custom shortlist
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="secondary-button gap-2 border-white/15 bg-white/5 text-white hover:border-white hover:bg-white hover:text-slate-950"
            >
              <MessageCircleMore size={16} /> WhatsApp for instant advice
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {trustBadges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
              >
                {badge}
              </span>
            ))}
          </motion.div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur"
              >
                <div className="flex items-center gap-3 text-accent">
                  {stat.icon}
                  <span className="text-2xl font-semibold text-white">
                    {stat.value}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-6 text-slate-300">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="glass-panel overflow-hidden border-white/10 bg-white/10 p-3 shadow-soft"
        >
          <div className="rounded-[28px] border border-white/10 bg-slate-900/90 p-6">
            <div className="rounded-[28px] bg-gradient-to-br from-brand-500 to-slate-900 p-8">
              <p className="text-sm uppercase tracking-[0.24em] text-accent">
                Strategic buyer journey
              </p>
              <h2 className="mt-4 text-3xl font-semibold">
                Built to convert on mobile and desktop
              </h2>
              <div className="mt-8 space-y-4">
                {[
                  {
                    icon: <ShieldCheck size={18} />,
                    title: "Trust at first glance",
                    copy: "Instant credibility with testimonials, transaction proof, badges, and local expertise.",
                  },
                  {
                    icon: <TrendingUp size={18} />,
                    title: "Higher intent leads",
                    copy: "Qualification form fields separate browsers from buyers so follow-up is faster and smarter.",
                  },
                  {
                    icon: <MessageCircleMore size={18} />,
                    title: "WhatsApp-first engagement",
                    copy: "Prefilled messages reduce friction and increase conversations from mobile visitors.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-3xl border border-white/10 bg-white/10 p-4"
                  >
                    <div className="flex items-center gap-3 text-accent">
                      {item.icon}
                      <h3 className="text-base font-semibold text-white">
                        {item.title}
                      </h3>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-200">
                      {item.copy}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
