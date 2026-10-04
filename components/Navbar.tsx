"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, MessageCircle, X, Mail, Phone } from "lucide-react";
import Link from "next/link";
import EnrollModal from "./EnrollModal";
import LanguageToggle from "./LanguageToggle";
import { useLanguage } from "./LanguageProvider";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { t } = useLanguage();
  const links = [
    [t("home"), "/"],
    [t("about"), "/about"],
    [t("openings"), "/openings"],
    [t("process"), "/how-we-work"],
    [t("safety"), "/safety-guide"],
    [t("testimonials"), "/testimonials"],
    [t("contact"), "/contact"],
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-slate bg-white/95 backdrop-blur-md">
      {/* Top Contact Bar */}
      <div className="bg-navy text-white px-5 py-2 text-xs lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-1">
        <div className="flex items-center gap-6 flex-wrap justify-center sm:justify-start">
          <a href="mailto:rakcareerconsultancy@gmail.com" className="flex items-center gap-1.5 hover:text-sand transition-colors">
            <Mail size={13} className="text-sand" /> rakcareerconsultancy@gmail.com
          </a>
          <a href="tel:+966568048793" className="flex items-center gap-1.5 hover:text-sand transition-colors">
            <Phone size={13} className="text-sand" /> +966 56 804 8793
          </a>
        </div>
        <div className="text-white/80 hidden sm:block">
          Riyadh, Saudi Arabia
        </div>
      </div>

      {/* Main Navbar */}
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 py-3.5 lg:px-8">
        <Link href="/" className="flex shrink-0 items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-10 w-10 items-center justify-center rounded-sm bg-navy text-lg font-bold text-white">R</span>
          <span className="leading-none">
            <span className="block text-[1.05rem] font-bold tracking-tight text-navy">RAK Consultancy</span>
            <span className="mt-1 block text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-sand">12+ years of excellence</span>
          </span>
        </Link>
        
        <nav className="hidden items-center gap-4 xl:flex" aria-label="Main navigation">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="whitespace-nowrap text-[0.76rem] font-semibold text-slate transition-colors hover:text-navy">
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageToggle />
          <a 
            href="https://wa.me/966568048793" 
            target="_blank" 
            rel="noreferrer" 
            className="hidden min-h-11 items-center gap-2 rounded-sm bg-sand px-4 py-2.5 text-xs font-bold text-navy transition-colors hover:bg-[#b2946b] sm:flex"
          >
            <MessageCircle size={16} /> {t("whatsapp")}
          </a>
          <button 
            type="button" 
            aria-label={open ? "Close menu" : "Open menu"} 
            onClick={() => setOpen(!open)} 
            className="flex min-h-11 min-w-11 items-center justify-center rounded-sm border border-slate text-navy xl:hidden"
          >
            {open ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-slate bg-white px-5 py-4 xl:hidden">
          <nav className="flex flex-col" aria-label="Mobile navigation">
            {links.map(([label, href]) => (
              <Link key={href} href={href} onClick={() => setOpen(false)} className="flex min-h-12 items-center justify-between border-b border-slate py-3 text-sm font-semibold text-navy">
                {label}<ArrowUpRight size={15} />
              </Link>
            ))}
          </nav>
          <div className="mt-4 pt-4 border-t border-slate space-y-1.5 text-xs text-slate">
            <p>Email: rakcareerconsultancy@gmail.com</p>
            <p>Phone: +966 56 804 8793</p>
            <p>Location: Riyadh, Saudi Arabia</p>
          </div>
          <EnrollModal triggerClassName="mt-4 flex min-h-12 w-full items-center justify-center rounded-sm bg-sand px-4 py-3 text-sm font-bold text-navy" />
        </div>
      )}
    </header>
  );
}