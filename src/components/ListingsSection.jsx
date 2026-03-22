import { BedDouble, Bath, MapPin, SlidersHorizontal } from "lucide-react";
import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import { AnimatedSection } from "./AnimatedSection";
import { SectionHeading } from "./SectionHeading";

export function ListingsSection({
  listings,
  filterOptions,
  whatsappHrefBuilder,
}) {
  const [type, setType] = useState("All");
  const [budget, setBudget] = useState("all");
  const [location, setLocation] = useState("All");

  const filteredListings = useMemo(() => {
    return listings.filter((listing) => {
      const matchesType = type === "All" || listing.type === type;
      const matchesBudget = budget === "all" || listing.budgetTier === budget;
      const matchesLocation =
        location === "All" || listing.location === location;
      return matchesType && matchesBudget && matchesLocation;
    });
  }, [budget, listings, location, type]);

  return (
    <AnimatedSection id="featured-listings" className="container-shell py-24">
      <div
        id="featured-listings"
        className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
      >
        <SectionHeading
          eyebrow="Featured listings"
          title="Filter homes and investments based on what serious buyers actually ask for."
          description="Move beyond a generic property gallery with searchable mock inventory that can later connect to a CMS or CRM feed."
        />
        <a
          href="#lead-form"
          className="secondary-button self-start lg:self-auto"
        >
          Request full inventory access
        </a>
      </div>

      <div className="mt-10 grid gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-card lg:grid-cols-[1fr_1fr_1fr_auto]">
        <div>
          <label className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-600">
            <SlidersHorizontal size={16} /> Property type
          </label>
          <select
            value={type}
            onChange={(event) => setType(event.target.value)}
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-500"
          >
            {filterOptions.propertyTypes.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-600">
            Budget
          </label>
          <select
            value={budget}
            onChange={(event) => setBudget(event.target.value)}
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-500"
          >
            {filterOptions.budgetTiers.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-600">
            Location
          </label>
          <select
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-500"
          >
            {filterOptions.locations.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-end">
          <div className="rounded-2xl bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700">
            {filteredListings.length} matches
          </div>
        </div>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {filteredListings.map((listing, index) => (
          <motion.article
            key={listing.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            whileHover={{ y: -8 }}
            className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-card"
          >
            <div className="h-52 bg-gradient-to-br from-brand-100 via-white to-accent/20 p-6">
              <div className="flex items-start justify-between gap-4">
                <span className="rounded-full bg-slate-950 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-white">
                  {listing.status}
                </span>
                <span className="rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-slate-950">
                  {listing.budget}
                </span>
              </div>
              <div className="mt-16">
                <p className="text-sm font-medium text-brand-700">
                  {listing.type}
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-slate-950">
                  {listing.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {listing.highlight}
                </p>
              </div>
            </div>

            <div className="p-6">
              <div className="flex items-center gap-2 text-sm text-slate-600">
                <MapPin size={16} /> {listing.location}
              </div>
              <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-700">
                <span className="inline-flex items-center gap-2">
                  <BedDouble size={16} /> {listing.beds} bedrooms
                </span>
                <span className="inline-flex items-center gap-2">
                  <Bath size={16} /> {listing.baths} baths
                </span>
                <span>{listing.size}</span>
              </div>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a href="#lead-form" className="primary-button w-full">
                  Book a viewing
                </a>
                <a
                  href={whatsappHrefBuilder(
                    `Hi Aria, I'm interested in the ${listing.title} in ${listing.location}. Please share details and availability.`,
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="secondary-button w-full"
                >
                  Ask on WhatsApp
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {filteredListings.length === 0 ? (
        <div className="mt-8 rounded-3xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center text-slate-600">
          No listings match the current filter. Adjust your preferences or
          request a custom shortlist below.
        </div>
      ) : null}
    </AnimatedSection>
  );
}
