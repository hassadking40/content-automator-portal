
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { 
  Clock, 
  Repeat, 
  Share2, 
  BarChart3, 
  Smartphone, 
  Globe, 
  Zap 
} from 'lucide-react';

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl?: string;
}

const features: FeatureProps[] = [
  {
    title: "Schedule Content",
    description: "Plan and schedule your content in advance for all your social media platforms.",
    icon: <Clock className="w-6 h-6 text-primary" />,
  },
  {
    title: "Auto-Posting",
    description: "Once scheduled, your content will be automatically posted at the optimal time.",
    icon: <Repeat className="w-6 h-6 text-primary" />,
  },
  {
    title: "Multi-Platform Support",
    description: "Support for YouTube, Instagram, TikTok, Facebook, Snapchat, Twitter, and LinkedIn.",
    icon: <Share2 className="w-6 h-6 text-primary" />,
  },
  {
    title: "Analytics Dashboard",
    description: "Track performance metrics across all your social media platforms in one place.",
    icon: <BarChart3 className="w-6 h-6 text-primary" />,
  },
  {
    title: "Mobile Friendly",
    description: "Manage your content on the go with our responsive mobile interface.",
    icon: <Smartphone className="w-6 h-6 text-primary" />,
  },
  {
    title: "Global Reach",
    description: "Connect with your audience around the world with optimized posting schedules.",
    icon: <Globe className="w-6 h-6 text-primary" />,
  },
];

const FeatureCard = ({ feature, index, isInView }: { feature: FeatureProps; index: number; isInView: boolean }) => {
  return (
    <div 
      className={cn(
        "feature-card group",
        "transition-all duration-500 transform",
        isInView 
          ? "opacity-100 translate-y-0" 
          : "opacity-0 translate-y-12"
      )}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
        {feature.icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-sahla-dark dark:text-white">{feature.title}</h3>
      <p className="text-muted-foreground">{feature.description}</p>
    </div>
  );
};

const FeaturesSection = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (featuresRef.current) {
      observer.observe(featuresRef.current);
    }

    return () => {
      if (featuresRef.current) {
        observer.unobserve(featuresRef.current);
      }
    };
  }, []);

  return (
    <section className="section-padding bg-gray-50 dark:bg-sahla-dark/30" id="features">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div 
            className={cn(
              "inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4",
              "transition-all duration-700",
              isInView ? "opacity-100" : "opacity-0"
            )}
          >
            <Zap className="w-4 h-4 mr-1" />
            Powerful Features
          </div>
          <h2 
            className={cn(
              "h2 mb-4 text-sahla-dark dark:text-white",
              "transition-all duration-700 delay-100",
              isInView ? "opacity-100" : "opacity-0"
            )}
          >
            Everything You Need to Automate Your 
            <span className="text-primary"> Social Media</span>
          </h2>
          <p 
            className={cn(
              "text-muted-foreground text-lg leading-relaxed",
              "transition-all duration-700 delay-200",
              isInView ? "opacity-100" : "opacity-0"
            )}
          >
            Sahla-Post provides all the tools you need to schedule, automate, and analyze your social media content across multiple platforms.
          </p>
        </div>

        <div 
          ref={featuresRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <FeatureCard 
              key={index} 
              feature={feature} 
              index={index}
              isInView={isInView} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
