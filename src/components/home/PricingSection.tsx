
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button-custom";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

interface PricingPlan {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  isPopular?: boolean;
}

const plans: PricingPlan[] = [
  {
    name: "Free",
    price: "Free",
    description: "Perfect for individuals just getting started with social media automation.",
    features: [
      "10 posts per month",
      "YouTube & Instagram support",
      "Basic analytics",
      "Manual scheduling",
      "Email support"
    ],
    cta: "Get Started"
  },
  {
    name: "Standard",
    price: "$9.99",
    description: "Ideal for content creators and small businesses managing multiple accounts.",
    features: [
      "Unlimited posts",
      "YouTube, Instagram, TikTok & Facebook",
      "Advanced analytics",
      "Auto-scheduling",
      "Content calendar",
      "Priority email support"
    ],
    cta: "Start Free Trial",
    isPopular: true
  },
  {
    name: "Premium",
    price: "$19.99",
    description: "For professionals and agencies needing comprehensive social media management.",
    features: [
      "Unlimited posts",
      "All social media platforms",
      "Comprehensive analytics",
      "AI-powered scheduling",
      "Team collaboration",
      "Content library",
      "Priority support",
      "Custom branding"
    ],
    cta: "Start Free Trial"
  }
];

const PricingSection = () => {
  const pricingRef = useRef<HTMLDivElement>(null);
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

    if (pricingRef.current) {
      observer.observe(pricingRef.current);
    }

    return () => {
      if (pricingRef.current) {
        observer.unobserve(pricingRef.current);
      }
    };
  }, []);

  return (
    <section className="section-padding bg-gray-50 dark:bg-sahla-dark/30" id="pricing">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div 
            className={cn(
              "inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4",
              "transition-all duration-700",
              isInView ? "opacity-100" : "opacity-0"
            )}
          >
            Simple Pricing
          </div>
          <h2 
            className={cn(
              "h2 mb-4 text-sahla-dark dark:text-white",
              "transition-all duration-700 delay-100",
              isInView ? "opacity-100" : "opacity-0"
            )}
          >
            Choose the Perfect Plan for 
            <span className="text-primary"> Your Needs</span>
          </h2>
          <p 
            className={cn(
              "text-muted-foreground text-lg",
              "transition-all duration-700 delay-200",
              isInView ? "opacity-100" : "opacity-0"
            )}
          >
            All plans come with a 14-day free trial. No credit card required.
          </p>
        </div>

        <div 
          ref={pricingRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {plans.map((plan, index) => (
            <div 
              key={plan.name}
              className={cn(
                "pricing-card flex flex-col",
                plan.isPopular ? "pricing-card-highlight" : "",
                "transition-all duration-500 transform",
                isInView 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-12"
              )}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-primary text-white text-xs font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2 text-sahla-dark dark:text-white">{plan.name}</h3>
                <div className="flex items-end mb-4">
                  <span className="text-4xl font-bold text-sahla-dark dark:text-white">{plan.price}</span>
                  {plan.price !== "Free" && <span className="text-muted-foreground ml-1">/ month</span>}
                </div>
                <p className="text-muted-foreground">{plan.description}</p>
              </div>
              
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <Check className="h-5 w-5 text-primary shrink-0 mr-2" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <Link to={user ? "/dashboard" : "/auth"}>
                <Button
                  className="w-full font-medium"
                  variant={plan.isPopular ? "gradient" : "outline"}
                  shine={plan.isPopular}
                >
                  {plan.cta}
                </Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
