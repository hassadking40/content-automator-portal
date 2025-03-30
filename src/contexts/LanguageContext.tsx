
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, LanguageContextType } from '../types/language';
import { enTranslations } from '../translations/en';
import { frTranslations } from '../translations/fr';
import { arTranslations } from '../translations/ar';

// Create the context with default values
const LanguageContext = createContext<LanguageContextType>({
  language: 'fr',
  setLanguage: () => {},
  translations: {},
});

// Translation dictionaries
const translationDictionaries: Record<Language, Record<string, string>> = {
  en: enTranslations,
  fr: frTranslations,
  ar: arTranslations
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  // Initialize with French as default
  const [language, setLanguageState] = useState<Language>('fr');
  const [translations, setTranslations] = useState(translationDictionaries.fr);

  // Set language and update translations
  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    localStorage.setItem('sahlapost-language', newLanguage);
    setTranslations(translationDictionaries[newLanguage]);
  };

  // On mount, check if language preference is stored
  useEffect(() => {
    const storedLanguage = localStorage.getItem('sahlapost-language') as Language;
    if (storedLanguage && ['fr', 'en', 'ar'].includes(storedLanguage)) {
      setLanguage(storedLanguage);
    }
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use the language context
export const useLanguage = () => useContext(LanguageContext);

// Translation helper function
export const t = (key: string) => {
  const { translations } = useLanguage();
  return translations[key] || key;
};
