import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import es from './es.json';
import en from './en.json';

// ─── Types ────────────────────────────────────────────────────────────────────
export type Locale = 'es' | 'en';

type NestedKeyOf<T extends object> = {
    [K in keyof T & string]: T[K] extends object ? `${K}.${NestedKeyOf<T[K]>}` : K;
}[keyof T & string];

export type TranslationKey = NestedKeyOf<typeof es>;

interface I18nContextValue {
    locale: Locale;
    setLocale: (l: Locale) => void;
    t: (key: string) => string;
}

// ─── Translations registry ────────────────────────────────────────────────────
const translations: Record<Locale, typeof es> = { es, en };

// ─── Context ──────────────────────────────────────────────────────────────────
const I18nContext = createContext<I18nContextValue | null>(null);

// ─── Provider ────────────────────────────────────────────────────────────────
export const I18nProvider = ({ children }: { children: ReactNode }) => {
    const [locale, setLocaleState] = useState<Locale>(() => {
        const saved = localStorage.getItem('apm_locale');
        return (saved === 'en' ? 'en' : 'es') as Locale;
    });

    const setLocale = useCallback((l: Locale) => {
        localStorage.setItem('apm_locale', l);
        setLocaleState(l);
        // Update html lang attribute
        document.documentElement.lang = l;
    }, []);

    /** Dot-notation key accessor, e.g. t('nav.home') */
    const t = useCallback((key: string): string => {
        const keys = key.split('.');
        let result: any = translations[locale];
        for (const k of keys) {
            result = result?.[k];
        }
        return typeof result === 'string' ? result : key;
    }, [locale]);

    return (
        <I18nContext.Provider value={{ locale, setLocale, t }}>
            {children}
        </I18nContext.Provider>
    );
};

// ─── Hook ─────────────────────────────────────────────────────────────────────
export const useI18n = (): I18nContextValue => {
    const ctx = useContext(I18nContext);
    if (!ctx) throw new Error('useI18n must be used inside <I18nProvider>');
    return ctx;
};
