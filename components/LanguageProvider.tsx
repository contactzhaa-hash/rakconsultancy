"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Language, TranslationKey } from "@/lib/translations";
import { translations } from "@/lib/translations";

type LanguageContextValue = { language: Language; setLanguage: (language: Language) => void; t: (key: TranslationKey) => string };
const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");
  useEffect(() => {
    const saved = window.localStorage.getItem("rak-language") as Language | null;
    if (saved && saved in translations) {
      // Persistence is read after the server-rendered English shell hydrates.
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLanguage(saved);
    }
  }, []);
  function changeLanguage(next: Language) { setLanguage(next); window.localStorage.setItem("rak-language", next); }
  const value = useMemo(() => ({ language, setLanguage: changeLanguage, t: (key: TranslationKey) => translations[language][key] }), [language]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used inside LanguageProvider");
  return context;
}