
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button-custom";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const CtaSection = () => {
  const ctaRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }

    return () => {
      if (ctaRef.current) {
        observer.unobserve(ctaRef.current);
      }
    };
  }, []);

  return (
    <section className="section-padding" ref={ctaRef}>
      <div className="container mx-auto">
        <div className="relative overflow-hidden rounded-3xl">
          {/* Background Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-sahla-blue via-sahla-indigo to-sahla-purple opacity-90"></div>
          
          {/* Pattern Overlay */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}></div>
          
          <div className="relative py-16 px-6 md:py-24 md:px-12 z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 
                className={cn(
                  "text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 font-display",
                  "transition-all duration-700",
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                )}
              >
                Ready to automate your social media workflow?
              </h2>
              <p 
                className={cn(
                  "text-white/90 text-lg md:text-xl mb-8 max-w-2xl mx-auto",
                  "transition-all duration-700 delay-100",
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                )}
              >
                Join thousands of content creators and businesses who use Sahla-Post to streamline their social media presence.
              </p>
              <div 
                className={cn(
                  "flex flex-col sm:flex-row justify-center gap-4",
                  "transition-all duration-700 delay-200",
                  isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                )}
              >
                <Link to={user ? "/dashboard" : "/auth"}>
                  <Button 
                    variant="default" 
                    size="lg" 
                    className="bg-white text-sahla-dark hover:bg-white/90 font-medium"
                  >
                    Start Your Free Trial
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link to={user ? "/dashboard" : "/auth"}>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-white text-white hover:bg-white/10 font-medium"
                  >
                    Schedule a Demo
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
