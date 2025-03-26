
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button-custom";
import { cn } from "@/lib/utils";
import { 
  Youtube, 
  Instagram, 
  Facebook, 
  Twitter, 
  Linkedin, 
  AtSign,
  BarChart3
} from "lucide-react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const socialIcons = [
    { icon: <Youtube size={24} />, delay: 150 },
    { icon: <Instagram size={24} />, delay: 300 },
    { icon: <Facebook size={24} />, delay: 450 },
    { icon: <Twitter size={24} />, delay: 600 },
    { icon: <Linkedin size={24} />, delay: 750 },
    { icon: <AtSign size={24} />, delay: 900 },
    { icon: <BarChart3 size={24} />, delay: 1050 },
  ];

  return (
    <section className="min-h-screen pt-28 pb-16 overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-gradient-to-bl from-primary/10 via-accent/5 to-transparent rounded-bl-[100px] blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-3/4 h-1/2 bg-gradient-to-tr from-secondary/10 via-primary/5 to-transparent rounded-tr-[100px] blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div 
            className={cn(
              "flex flex-col max-w-xl transition-all duration-1000 transform",
              isVisible 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-12"
            )}
          >
            <div className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-sm font-medium text-primary mb-4 animate-fade-in w-fit">
              <span className="animate-pulse-soft">✨</span>
              <span className="ml-2">The Future of Content Automation</span>
            </div>
            
            <h1 className="h1 mb-6 text-sahla-dark dark:text-white">
              Automate Your Social Media Content Across 
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-sahla-blue to-sahla-purple"> Multiple Platforms</span>
            </h1>
            
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Schedule and automatically post your content to YouTube, Instagram, TikTok, Facebook, Snapchat, Twitter, and LinkedIn - all from one simple platform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                variant="gradient"
                size="lg"
                shine
                className="font-medium"
              >
                Get Started Free
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="font-medium"
              >
                See How It Works
              </Button>
            </div>
            
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
              <p>No credit card required · 10 free posts per month</p>
            </div>
          </div>

          <div 
            className={cn(
              "relative transition-all duration-1000 transform",
              isVisible 
                ? "opacity-100 translate-y-0" 
                : "opacity-0 translate-y-12"
            )}
          >
            <div className="bg-white dark:bg-sahla-dark/80 rounded-2xl shadow-elevation-high border border-border p-6 relative z-10">
              <div className="rounded-xl bg-muted p-1 mb-4">
                <div className="flex items-center">
                  <div className="flex space-x-1 px-4">
                    <div className="w-2 h-2 rounded-full bg-red-500"></div>
                    <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  </div>
                  <div className="mx-auto text-sm text-muted-foreground">Dashboard Preview</div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="h-14 bg-muted rounded-lg animate-pulse-soft"></div>
                <div className="grid grid-cols-3 gap-3">
                  <div className="h-24 bg-muted rounded-lg animate-pulse-soft"></div>
                  <div className="h-24 bg-muted rounded-lg animate-pulse-soft delay-150"></div>
                  <div className="h-24 bg-muted rounded-lg animate-pulse-soft delay-300"></div>
                </div>
                <div className="h-64 bg-muted rounded-lg animate-pulse-soft"></div>
              </div>
            </div>

            {/* Floating Social Media Icons */}
            {socialIcons.map((item, index) => (
              <div
                key={index}
                className={cn(
                  "absolute bg-white dark:bg-sahla-dark/80 rounded-full p-3 shadow-elevation-medium border border-border text-primary animate-float",
                  "transition-all duration-1000 delay-[var(--delay)]",
                  isVisible ? "opacity-100" : "opacity-0"
                )}
                style={{ 
                  "--delay": `${item.delay}ms`,
                  top: `${20 + Math.random() * 60}%`,
                  left: `${Math.random() * 20}%`,
                  animationDelay: `${index * 0.5}s`
                } as React.CSSProperties}
              >
                {item.icon}
              </div>
            ))}

            {/* Second set of floating icons (right side) */}
            {socialIcons.slice(0, 5).map((item, index) => (
              <div
                key={`right-${index}`}
                className={cn(
                  "absolute bg-white dark:bg-sahla-dark/80 rounded-full p-3 shadow-elevation-medium border border-border text-secondary animate-float",
                  "transition-all duration-1000 delay-[var(--delay)]",
                  isVisible ? "opacity-100" : "opacity-0"
                )}
                style={{ 
                  "--delay": `${item.delay + 200}ms`,
                  top: `${10 + Math.random() * 80}%`,
                  right: `${Math.random() * 20}%`,
                  left: 'auto',
                  animationDelay: `${index * 0.7}s`
                } as React.CSSProperties}
              >
                {item.icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
