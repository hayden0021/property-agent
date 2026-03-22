import { animate, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function Counter({ value, suffix = "", decimals = 0, label }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (!isInView) return undefined;

    const controls = animate(0, value, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate(latest) {
        setDisplayValue(Number(latest.toFixed(decimals)));
      },
    });

    return () => controls.stop();
  }, [decimals, isInView, value]);

  return (
    <motion.div
      ref={ref}
      whileHover={{ y: -6 }}
      className="rounded-3xl border border-white/60 bg-white/80 p-6 shadow-card backdrop-blur"
    >
      <div className="text-4xl font-semibold tracking-tight text-slate-950">
        {displayValue}
        {suffix}
      </div>
      <p className="mt-2 text-sm leading-6 text-slate-600">{label}</p>
    </motion.div>
  );
}
