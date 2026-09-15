"use client";

import { ArrowRight, BriefcaseBusiness, CircleCheck, ShieldCheck } from "lucide-react";
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
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-20 pt-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:pb-28 lg:pt-28">
          <div className="max-w-2xl">
            <div className="mb-7 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-sand"><span className="h-px w-9 bg-sand" /> {t("heroEyebrow")}</div>
            <h1 className="display-font text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-[4.7rem]">{t("heroTitle")}</h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-white/70 sm:text-lg">{t("heroBody")}</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/openings" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-sand px-5 py-3.5 text-sm font-bold text-navy hover:bg-[#b2946b]">{t("viewVacancies")} <ArrowRight size={17} /></Link>
              <EnrollModal triggerClassName="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm border border-white/40 px-5 py-3.5 text-sm font-bold text-white hover:bg-white/10" />
            </div>
          </div>
          <div className="relative flex items-end lg:justify-end">
            <div className="w-full max-w-md border border-[#64748B] bg-[#163b5c] p-7 sm:p-9">
              <div className="flex items-start justify-between"><div><p className="text-xs font-bold uppercase tracking-[0.16em] text-sand">{t("promise")}</p><p className="display-font mt-3 max-w-xs text-3xl font-bold leading-tight">{t("promiseTitle")}</p></div><ShieldCheck className="text-sand" size={34} strokeWidth={1.5} /></div>
              <div className="my-8 h-px bg-[#64748B]" />
              <div className="grid gap-5 text-sm text-white/80"><p className="flex gap-3"><CircleCheck className="shrink-0 text-sand" size={18} />{t("promiseOne")}</p><p className="flex gap-3"><CircleCheck className="shrink-0 text-sand" size={18} />{t("promiseTwo")}</p><p className="flex gap-3"><CircleCheck className="shrink-0 text-sand" size={18} />{t("promiseThree")}</p></div>
              <Link href="/safety-guide" className="mt-8 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-sand">{t("safetyPromise")} <ArrowRight size={16} /></Link>
            </div>
          </div>
        </div>
      </section>
      <section className="border-b border-slate bg-white"><div className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">{stats.map(([value, label]) => <div key={label} className="border-r border-slate px-5 py-7 last:border-0 sm:px-8"><p className="display-font text-3xl font-bold text-navy">{value}</p><p className="mt-2 max-w-[150px] text-xs font-semibold leading-5 text-slate">{label}</p></div>)}</div></section>
      <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28"><div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="eyebrow">{t("standard")}</p><h2 className="display-font mt-3 max-w-md text-4xl font-bold leading-tight text-navy sm:text-5xl">{t("standardTitle")}</h2><p className="mt-5 max-w-sm text-sm leading-6 text-slate">{t("standardBody")}</p><Link href="/how-we-work" className="mt-7 inline-flex min-h-11 items-center gap-2 text-sm font-bold text-sand">{t("exploreProcess")} <ArrowRight size={16} /></Link></div><div className="grid gap-0 sm:grid-cols-2">{processSteps.map((step, index) => <div key={step.number} className={`border-t border-slate py-6 sm:px-7 ${index % 2 === 1 ? "sm:border-l" : ""}`}><span className="text-xs font-bold text-sand">{step.number}</span><h3 className="mt-3 text-lg font-bold text-navy">{step.title}</h3><p className="mt-2 text-sm leading-6 text-slate">{step.text}</p></div>)}</div></div></section>
      <section className="bg-[#f8f7f4] py-20 lg:py-24"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end"><div><p className="eyebrow">{t("openRoles")}</p><h2 className="display-font mt-3 text-4xl font-bold text-navy">{t("nextRole")}</h2></div><Link href="/openings" className="inline-flex min-h-11 items-center gap-2 text-sm font-bold text-sand">{t("seeVacancies")} <ArrowRight size={16} /></Link></div><div className="mt-10 grid gap-4 lg:grid-cols-3">{jobs.filter((job) => job.featured).map((job) => <article key={job.title} className="border border-slate/40 bg-white p-6 transition-transform hover:-translate-y-1"><div className="flex items-start justify-between"><span className="bg-[#f1eadf] px-2 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-navy">{job.category}</span><BriefcaseBusiness size={19} className="text-slate" /></div><h3 className="mt-7 text-xl font-bold text-navy">{job.title}</h3><p className="mt-2 text-sm text-slate">{job.location}</p><div className="mt-6 flex justify-between border-t border-slate/30 pt-4 text-xs font-bold"><span className="text-navy">{job.salary}</span><span className="text-sand">{job.openings}</span></div></article>)}</div></div></section>
      <section className="bg-navy px-5 py-16 text-white lg:px-8"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 sm:flex-row sm:items-center"><div><p className="eyebrow text-sand">{t("nextBatch")}</p><h2 className="display-font mt-2 max-w-xl text-3xl font-bold sm:text-4xl">{t("nextBatchTitle")}</h2><p className="mt-3 text-sm text-white/70">{t("nextBatchBody")}</p></div><EnrollModal triggerClassName="inline-flex min-h-12 shrink-0 items-center gap-2 rounded-sm bg-sand px-5 py-3.5 text-sm font-bold text-navy hover:bg-[#b2946b]" /></div></section>
    </>
  );
}