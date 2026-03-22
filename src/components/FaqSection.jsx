import { ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { AnimatedSection } from "./AnimatedSection";
import { SectionHeading } from "./SectionHeading";

export function FaqSection({ faqs }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <AnimatedSection id="faq" className="container-shell py-24">
      <SectionHeading
        eyebrow="FAQ"
        title="Answer the questions buyers ask before they decide whether to reach out."
        description="Keep this section concise and practical so it reduces hesitation without turning into a wall of text."
        centered
      />
      <div className="mx-auto mt-10 max-w-4xl space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = index === openIndex;
          return (
            <div
              key={faq.question}
              className="rounded-3xl border border-slate-200 bg-white shadow-card"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="text-base font-semibold text-slate-950">
                  {faq.question}
                </span>
                <motion.span animate={{ rotate: isOpen ? 180 : 0 }}>
                  <ChevronDown size={18} />
                </motion.span>
              </button>
              <AnimatePresence>
                {isOpen ? (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-sm leading-7 text-slate-600">
                      {faq.answer}
                    </p>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </AnimatedSection>
  );
}
