
// Define available languages
export type Language = 'fr' | 'en' | 'ar';

// Define the content of our context
export type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  translations: Record<string, string>;
  direction: 'ltr' | 'rtl';
};
