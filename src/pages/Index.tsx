
import { useEffect } from "react";
import PageLayout from "@/components/layout/PageLayout";
import HeroSection from "@/components/home/HeroSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import PlatformsSection from "@/components/home/PlatformsSection";
import PricingSection from "@/components/home/PricingSection";
import CtaSection from "@/components/home/CtaSection";
import { useLanguage, t } from "@/contexts/LanguageContext";

const Index = () => {
  const { language } = useLanguage();
  
  useEffect(() => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        if (!href) return;
        
        const targetElement = document.querySelector(href);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
    
    // Fade in elements on scroll
    const fadeElements = document.querySelectorAll('.fade-on-scroll');
    
    const fadeObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          fadeObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    fadeElements.forEach(element => {
      fadeObserver.observe(element);
    });
    
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', function (e) {});
      });
      
      fadeElements.forEach(element => {
        fadeObserver.unobserve(element);
      });
    };
  }, []);
  
  return (
    <PageLayout title={t('hero.title')} description={t('hero.subtitle')}>
      <HeroSection />
      <FeaturesSection />
      <PlatformsSection />
      <PricingSection />
      <CtaSection />
    </PageLayout>
  );
};

export default Index;
