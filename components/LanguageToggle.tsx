"use client";

import { Languages } from "lucide-react";
import { languages, type Language } from "@/lib/translations";
import { useLanguage } from "./LanguageProvider";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  return <label className="flex min-h-11 items-center gap-2 border border-slate px-2.5 text-xs font-semibold text-navy"><Languages size={15} className="text-sand" /><span className="sr-only">Choose language</span><select aria-label="Choose language" value={language} onChange={(event) => setLanguage(event.target.value as Language)} className="cursor-pointer bg-transparent py-2 outline-none"><option value="en">{languages.en}</option><option value="ta">{languages.ta}</option><option value="ml">{languages.ml}</option><option value="hi">{languages.hi}</option></select></label>;
}