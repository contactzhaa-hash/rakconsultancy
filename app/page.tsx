"use client";

import { ArrowRight, BriefcaseBusiness, CircleCheck, ShieldCheck, Lock, MapPin, Coins, Home as HomeIcon } from "lucide-react";
import Link from "next/link";
import EnrollModal from "@/components/EnrollModal";
import { jobs, processSteps } from "@/lib/site-data";
import { useLanguage } from "@/components/LanguageProvider";

export default function Home() {
  const { t } = useLanguage();
  const stats = [["12+", t("statsExperience")], ["15,000+", t("statsPlacements")], ["100%", t("statsLegal")], ["50+", t("statsEmployers")]];
  
  return (
    <>
      <section className="relative overflow-hidden bg-[#0A1F33] text-white">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-16 pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pb-24 lg:pt-24">
          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-sand">
              <span className="h-px w-9 bg-sand" /> Active Gulf Recruitment 2026
            </div>
            <h1 className="display-font text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-[4.2rem]">
              Your <span className="text-sand underline decoration-sand/40">Secured Job</span> in Saudi, Oman & UAE.
            </h1>
            <p className="mt-5 max-w-xl text-sm leading-6 text-white/70 sm:text-base">
              Stop guessing with brokers. Browse verified, tax-free healthcare, engineering, and service openings with transparent salaries, free accommodation, and legal contracts.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/openings" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-sand px-5 py-3.5 text-sm font-bold text-navy hover:bg-[#b2946b]">
                {t("viewVacancies")} <ArrowRight size={17} />
              </Link>
              <EnrollModal triggerClassName="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm border border-white/40 px-5 py-3.5 text-sm font-bold text-white hover:bg-white/10" />
            </div>
          </div>

          <div className="relative flex items-end lg:justify-end">
            <div className="w-full max-w-md border border-[#64748B] bg-[#163b5c] p-6 sm:p-8 shadow-2xl">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-sand">Live Verification Pledge</p>
                  <p className="display-font mt-2 max-w-xs text-xl font-bold leading-tight">100% Legal Contracts & Zero Hidden Fees</p>
                </div>
                <Lock className="text-sand shrink-0" size={28} strokeWidth={1.5} />
              </div>
              <div className="my-5 h-px bg-[#64748B]" />
              <div className="grid gap-3 text-xs sm:text-sm text-white/90">
                <p className="flex gap-3 items-center"><CircleCheck className="shrink-0 text-sand" size={16} /> Direct employer interviews</p>
                <p className="flex gap-3 items-center"><CircleCheck className="shrink-0 text-sand" size={16} /> Accommodation & transport included</p>
                <p className="flex gap-3 items-center"><CircleCheck className="shrink-0 text-sand" size={16} /> Government-approved paperwork</p>
              </div>
              <Link href="/safety-guide" className="mt-6 inline-flex items-center gap-2 text-xs font-bold text-sand hover:underline">
                Read our Safety & Anti-Scam Policy <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* IMMEDIATE LIVE JOB SPOTLIGHT - Solves the exact user intent */}
      <section className="bg-[#f1eadf] py-10 border-b border-slate/30">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#8b6a37]">Current Batch Openings</span>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-navy mt-1">Featured Active Placements</h2>
            </div>
            <Link href="/openings" className="text-xs font-bold uppercase tracking-wider text-navy hover:text-[#8b6a37] flex items-center gap-1">
              View all active batches →
            </Link>
          </div>
          
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {jobs.slice(0, 3).map((job) => (
              <div key={job.title} className="bg-white border border-slate/20 p-5 rounded shadow-sm hover:shadow-md transition">
                <div className="flex justify-between items-start">
                  <span className="bg-navy text-white text-[0.65rem] font-bold px-2 py-0.5 rounded uppercase tracking-wider">{job.category}</span>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">Active Recruiting</span>
                </div>
                <h3 className="text-lg font-bold text-navy mt-3">{job.title}</h3>
                <p className="text-xs text-slate flex items-center gap-1 mt-1"><MapPin size={13} /> {job.location}</p>
                
                <div className="mt-4 pt-3 border-t border-slate/20 flex items-center justify-between text-xs font-semibold">
                  <span className="text-navy flex items-center gap-1"><Coins size={14} className="text-[#8b6a37]" /> {job.salary}</span>
                  <Link href="/openings" className="text-[#8b6a37] font-bold hover:underline">Apply Now →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-slate bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
          {stats.map(([value, label]) => (
            <div key={label} className="border-r border-slate px-5 py-7 last:border-0 sm:px-8">
              <p className="display-font text-3xl font-bold text-navy">{value}</p>
              <p className="mt-2 max-w-[150px] text-xs font-semibold leading-5 text-slate">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">The Secured Process</p>
            <h2 className="display-font mt-3 max-w-md text-4xl font-bold leading-tight text-navy sm:text-5xl">How We Guarantee Safe Placements</h2>
            <p className="mt-5 max-w-sm text-sm leading-6 text-slate">Every placement follows a rigorous legal compliance framework designed to protect your rights, salary terms, and accommodation overseas.</p>
            <Link href="/how-we-work" className="mt-7 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-sand">
              {t("exploreProcess")} <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid gap-0 sm:grid-cols-2">
            {processSteps.map((step, index) => (
              <div key={step.number} className={`border-t border-slate py-6 sm:px-7 ${index % 2 === 1 ? "sm:border-l" : ""}`}>
                <span className="text-xs font-bold text-sand">{step.number}</span>
                <h3 className="mt-3 text-lg font-bold text-navy">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy px-5 py-16 text-white lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 sm:flex-row sm:items-center">
          <div>
            <p className="eyebrow text-sand">Secure Your Future Today</p>
            <h2 className="display-font mt-2 max-w-xl text-3xl font-bold sm:text-4xl">Ready for a Verified Career in the Gulf?</h2>
            <p className="mt-3 text-sm text-white/70">Join our upcoming recruitment batch for Saudi Arabia, Oman, and UAE.</p>
          </div>
          <EnrollModal triggerClassName="inline-flex min-h-12 shrink-0 items-center gap-2 rounded-sm bg-sand px-5 py-3.5 text-sm font-bold text-navy hover:bg-[#b2946b]" />
        </div>
      </section>
    </>
  );
}