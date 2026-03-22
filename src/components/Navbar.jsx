import { MessageCircleMore, Menu, X } from "lucide-react";
import { useState } from "react";

export function Navbar({ navLinks, whatsappHref }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="container-shell flex items-center justify-between py-4 text-white">
        <a href="#top" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-lg font-semibold text-accent">
            SE
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-slate-300">
              Signature Estates
            </p>
            <p className="text-xs text-slate-400">Private property advisory</p>
          </div>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-300 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="#lead-form"
            className="secondary-button border-white/15 bg-white/5 text-white hover:border-white hover:bg-white hover:text-slate-950"
          >
            Book consultation
          </a>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noreferrer"
            className="primary-button gap-2"
          >
            <MessageCircleMore size={16} /> WhatsApp now
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex rounded-full border border-white/10 p-3 text-white lg:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-white/10 bg-slate-950 px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-3 text-white">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-2xl px-3 py-2 text-sm text-slate-300 hover:bg-white/5 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a href="#lead-form" className="secondary-button w-full">
              Book consultation
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="primary-button w-full gap-2"
            >
              <MessageCircleMore size={16} /> WhatsApp now
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
