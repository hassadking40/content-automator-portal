
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
    
    // Features page
    'automated.workflows': 'Automated Workflows',
    'advanced.analytics': 'Advanced Analytics',
    'user.management': 'User Management',
    'real.time.collaboration': 'Real-time Collaboration',
    'custom.integration': 'Custom Integration',
    'secure.storage': 'Secure Storage',
    'workflows.description': 'Set up automated processes to save time and reduce manual work.',
    'analytics.description': 'Get detailed insights into your business performance with our analytics tools.',
    'management.description': 'Easily manage users, roles, and permissions within your organization.',
    'collaboration.description': 'Work together with your team in real-time on documents and projects.',
    'integration.description': 'Integrate with your existing tools and services with our API.',
    'storage.description': 'Keep your data safe with our enterprise-grade security measures.',
    
    // Blog page
    'read.more': 'Read more',
    'latest.news': 'Latest news, updates and insights',
    
    // About page
    'our.story': 'Our Story',
    'our.mission': 'Our Mission',
    'our.team': 'Our Team',
    'story.content': 'Founded in 2020, our company started with a simple mission: to make technology more accessible and useful for businesses of all sizes. What began as a small team with big ideas has grown into a thriving platform used by thousands of companies worldwide.',
    'mission.content': 'We believe in creating tools that empower businesses to do their best work. Our platform is designed to streamline workflows, enhance collaboration, and provide valuable insights that drive success.',
    
    // Pricing page
    'choose.plan': 'Choose the right plan for your needs',
    'most.popular': 'Most Popular',
    'get.started': 'Get Started',
    'month': '/month',
    
    // Integrations page
    'connect.platform': 'Connect our platform with your favorite tools',
    'learn.more': 'Learn more',
    
    // Careers page
    'why.work': 'Why Work With Us',
    'open.positions': 'Open Positions',
    'view.position': 'View Position',
    
    // Testimonials page
    'customer.saying': 'See what our customers are saying about us',
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
    
    // Features page
    'automated.workflows': 'Flux de travail automatisés',
    'advanced.analytics': 'Analyses avancées',
    'user.management': 'Gestion des utilisateurs',
    'real.time.collaboration': 'Collaboration en temps réel',
    'custom.integration': 'Intégration personnalisée',
    'secure.storage': 'Stockage sécurisé',
    'workflows.description': 'Configurez des processus automatisés pour gagner du temps et réduire le travail manuel.',
    'analytics.description': 'Obtenez des informations détaillées sur les performances de votre entreprise avec nos outils d\'analyse.',
    'management.description': 'Gérez facilement les utilisateurs, les rôles et les autorisations au sein de votre organisation.',
    'collaboration.description': 'Travaillez avec votre équipe en temps réel sur des documents et des projets.',
    'integration.description': 'Intégrez vos outils et services existants avec notre API.',
    'storage.description': 'Gardez vos données en sécurité avec nos mesures de sécurité de niveau entreprise.',
    
    // Blog page
    'read.more': 'Lire plus',
    'latest.news': 'Dernières actualités, mises à jour et informations',
    
    // About page
    'our.story': 'Notre histoire',
    'our.mission': 'Notre mission',
    'our.team': 'Notre équipe',
    'story.content': 'Fondée en 2020, notre entreprise a commencé avec une mission simple : rendre la technologie plus accessible et utile pour les entreprises de toutes tailles. Ce qui a commencé comme une petite équipe avec de grandes idées est devenu une plateforme florissante utilisée par des milliers d\'entreprises dans le monde entier.',
    'mission.content': 'Nous croyons en la création d\'outils qui permettent aux entreprises de faire leur meilleur travail. Notre plateforme est conçue pour rationaliser les flux de travail, améliorer la collaboration et fournir des informations précieuses qui favorisent le succès.',
    
    // Pricing page
    'choose.plan': 'Choisissez le plan qui convient à vos besoins',
    'most.popular': 'Le plus populaire',
    'get.started': 'Commencer',
    'month': '/mois',
    
    // Integrations page
    'connect.platform': 'Connectez notre plateforme à vos outils préférés',
    'learn.more': 'En savoir plus',
    
    // Careers page
    'why.work': 'Pourquoi travailler avec nous',
    'open.positions': 'Postes ouverts',
    'view.position': 'Voir le poste',
    
    // Testimonials page
    'customer.saying': 'Découvrez ce que nos clients disent de nous',
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
