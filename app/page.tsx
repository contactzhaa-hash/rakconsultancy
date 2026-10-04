"use client";

import { useEffect, useState } from "react";
import { ArrowRight, BriefcaseBusiness, CircleCheck, Lock, MapPin, Coins } from "lucide-react";
import Link from "next/link";
import EnrollModal from "@/components/EnrollModal";
import { jobs, processSteps } from "@/lib/site-data";
import { useLanguage } from "@/components/LanguageProvider";

// Animated counter component for stats
function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1800; // 1.8 seconds animation
    const stepTime = 30;
    const steps = duration / stepTime;
    const increment = value / steps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function Home() {
  const { t } = useLanguage();
  
  // Stats data mapped with numerical values for smooth animation
  const statsData = [
    { num: 12, suffix: "+", label: t("statsExperience") },
    { num: 15000, suffix: "+", label: t("statsPlacements") },
    { num: 100, suffix: "%", label: t("statsLegal") },
    { num: 50, suffix: "+", label: t("statsEmployers") },
  ];
  
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

      {/* SPECIALIZED HEALTHCARE & MOH VACANCIES DESK */}
      <section className="bg-white py-16 lg:py-20 border-b border-slate/30">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#8b6a37]">Specialized Healthcare Recruitment</span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-navy mt-2">Specialized Healthcare & Ministry of Health (MOH) Vacancies</h2>
            <p className="text-sm text-slate mt-3 leading-relaxed">
              For registered nurses and healthcare specialists ready to care for patients across the Gulf, our specialist desk supports the full licensing journey with patience and clarity.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="border border-slate/30 p-6 rounded bg-[#fcfbf9]">
              <h3 className="text-lg font-bold text-navy">Saudi Arabia · MOH</h3>
              <p className="text-xs text-slate mt-2 leading-relaxed">
                Registered Nurses and specialists for Ministry of Health facilities, with Dataflow and MOH licensing guidance.
              </p>
              <div className="mt-6 pt-4 border-t border-slate/20 text-xs font-semibold text-navy space-y-1.5">
                <p>• Tax-free salary</p>
                <p>• Free furnished accommodation</p>
              </div>
            </div>

            <div className="border border-slate/30 p-6 rounded bg-[#fcfbf9]">
              <h3 className="text-lg font-bold text-navy">UAE · DHA</h3>
              <p className="text-xs text-slate mt-2 leading-relaxed">
                Healthcare roles in Dubai with support for Dataflow verification and the DHA eligibility pathway.
              </p>
              <div className="mt-6 pt-4 border-t border-slate/20 text-xs font-semibold text-navy space-y-1.5">
                <p>• Tax-free salary</p>
                <p>• Free furnished accommodation</p>
              </div>
            </div>

            <div className="border border-slate/30 p-6 rounded bg-[#fcfbf9]">
              <h3 className="text-lg font-bold text-navy">Qatar · MoPH</h3>
              <p className="text-xs text-slate mt-2 leading-relaxed">
                Nursing and specialist vacancies with guidance through document verification and the MoPH licensing process.
              </p>
              <div className="mt-6 pt-4 border-t border-slate/20 text-xs font-semibold text-navy space-y-1.5">
                <p>• Tax-free salary</p>
                <p>• Free furnished accommodation</p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between bg-[#f1eadf] p-4 sm:p-6 rounded gap-4">
            <p className="text-xs text-slate leading-relaxed max-w-3xl">
              <strong>A note from our healthcare desk:</strong> licensing timelines depend on your qualification, experience and document history. We will tell you what is needed before you commit.
            </p>
            <EnrollModal triggerClassName="inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-sm bg-navy px-5 py-2.5 text-xs font-bold text-white hover:bg-navy/90" />
          </div>
        </div>
      </section>

      {/* DYNAMIC ANIMATED STATS SECTION */}
      <section className="border-b border-slate bg-[#f8f7f4]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
          {statsData.map((item) => (
            <div key={item.label} className="border-r border-slate px-5 py-7 last:border-0 sm:px-8">
              <p className="display-font text-3xl font-bold text-navy">
                <Counter value={item.num} suffix={item.suffix} />
              </p>
              <p className="mt-2 max-w-[150px] text-xs font-semibold leading-5 text-slate">{item.label}</p>
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