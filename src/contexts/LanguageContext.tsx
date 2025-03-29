
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Define available languages
export type Language = 'fr' | 'en';

// Define the content of our context
type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  translations: Record<string, string>;
};

// Create the context with default values
const LanguageContext = createContext<LanguageContextType>({
  language: 'fr',
  setLanguage: () => {},
  translations: {},
});

// Translation dictionaries
const translationDictionaries: Record<Language, Record<string, string>> = {
  en: {
    // Auth page
    'welcome.back': 'Welcome Back',
    'sign.up': 'Sign Up',
    'sign.in': 'Sign In',
    'create.account': 'Create an Account',
    'email': 'Email',
    'password': 'Password',
    'full.name': 'Full Name',
    'forgot.password': 'Forgot password?',
    'already.have.account': 'Already have an account?',
    'dont.have.account': "Don't have an account?",
    'social.media.automation': 'Sign in to your Sahla-Post account',
    'start.automating': 'Sign up to start automating your social media',
    
    // Dashboard
    'dashboard': 'Dashboard',
    'connections': 'Connections',
    'templates': 'Content Templates',
    'calendar': 'Content Calendar',
    'affiliate': 'Affiliate Program',
    'support': 'Support',
    'feature.request': 'Feature Request',
    'announcements': 'Announcements',
    'settings': 'Settings',
    'sign.out': 'Sign out',
    
    // Dashboard descriptions
    'dashboard.description': 'Manage your content across multiple platforms.',
    'connections.description': 'Connect your social media accounts.',
    'templates.description': 'Create and manage reusable content templates.',
    'calendar.description': 'Schedule and manage your content across platforms.',
    
    // Empty states
    'no.connections': 'No connections yet',
    'connect.accounts': 'Connect your social media accounts to start automating your content.',
    'connect.account': 'Connect Account',
    'no.templates': 'No templates yet',
    'create.first.template': 'Create your first content template to standardize your posts across multiple platforms.',
    'create.new.template': 'Create New Template',
    'no.scheduled.content': 'No scheduled content yet',
    'create.first.automation': 'Create your first automation to start scheduling content across multiple platforms simultaneously.',
    'create.new.automation': 'Create New Automation',
    
    // Header/Footer
    'features': 'Features',
    'pricing': 'Pricing',
    'about': 'About',
    'integrations': 'Integrations',
    'testimonials': 'Testimonials',
    'blog': 'Blog',
    'careers': 'Careers',
    'contact': 'Contact',
    'terms': 'Terms',
    'privacy': 'Privacy',
    'cookies': 'Cookies',
  },
  fr: {
    // Auth page
    'welcome.back': 'Bon Retour',
    'sign.up': "S'inscrire",
    'sign.in': 'Se Connecter',
    'create.account': 'Créer un Compte',
    'email': 'E-mail',
    'password': 'Mot de passe',
    'full.name': 'Nom complet',
    'forgot.password': 'Mot de passe oublié?',
    'already.have.account': 'Vous avez déjà un compte?',
    'dont.have.account': "Vous n'avez pas de compte?",
    'social.media.automation': 'Connectez-vous à votre compte Sahla-Post',
    'start.automating': 'Inscrivez-vous pour commencer à automatiser vos médias sociaux',
    
    // Dashboard
    'dashboard': 'Tableau de bord',
    'connections': 'Connexions',
    'templates': 'Modèles de contenu',
    'calendar': 'Calendrier de contenu',
    'affiliate': 'Programme d\'affiliation',
    'support': 'Support',
    'feature.request': 'Demande de fonctionnalité',
    'announcements': 'Annonces',
    'settings': 'Paramètres',
    'sign.out': 'Déconnexion',
    
    // Dashboard descriptions
    'dashboard.description': 'Gérez votre contenu sur plusieurs plateformes.',
    'connections.description': 'Connectez vos comptes de médias sociaux.',
    'templates.description': 'Créez et gérez des modèles de contenu réutilisables.',
    'calendar.description': 'Planifiez et gérez votre contenu sur plusieurs plateformes.',
    
    // Empty states
    'no.connections': 'Pas encore de connexions',
    'connect.accounts': 'Connectez vos comptes de médias sociaux pour commencer à automatiser votre contenu.',
    'connect.account': 'Connecter un compte',
    'no.templates': 'Pas encore de modèles',
    'create.first.template': 'Créez votre premier modèle de contenu pour standardiser vos publications sur plusieurs plateformes.',
    'create.new.template': 'Créer un nouveau modèle',
    'no.scheduled.content': 'Pas encore de contenu planifié',
    'create.first.automation': 'Créez votre première automatisation pour commencer à planifier du contenu sur plusieurs plateformes simultanément.',
    'create.new.automation': 'Créer une nouvelle automatisation',
    
    // Header/Footer
    'features': 'Fonctionnalités',
    'pricing': 'Tarifs',
    'about': 'À propos',
    'integrations': 'Intégrations',
    'testimonials': 'Témoignages',
    'blog': 'Blog',
    'careers': 'Carrières',
    'contact': 'Contact',
    'terms': 'Conditions',
    'privacy': 'Confidentialité',
    'cookies': 'Cookies',
  }
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
    if (storedLanguage && ['fr', 'en'].includes(storedLanguage)) {
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
