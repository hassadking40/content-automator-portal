
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button-custom";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useLanguage, t } from "@/contexts/LanguageContext";

const Pricing = () => {
  const { user } = useAuth();
  const { language } = useLanguage();
  
  const plans = [
    {
      name: "Basic",
      price: 9,
      popular: false,
      features: ["5 Projects", "Basic Analytics", "24/7 Support", "1 Team Member"]
    },
    {
      name: "Pro",
      price: 29,
      popular: true,
      features: ["Unlimited Projects", "Advanced Analytics", "Priority Support", "5 Team Members", "Custom Integrations"]
    },
    {
      name: "Enterprise",
      price: 99,
      popular: false,
      features: ["Unlimited Everything", "White Labeling", "Dedicated Account Manager", "Unlimited Team Members", "Advanced Security"]
    }
  ];
  
  return (
    <PageLayout 
      title={t('pricing')} 
      description={t('choose.plan')}
    >
      <div className="grid md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div 
            key={index} 
            className={`bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border ${
              plan.popular ? 'border-primary dark:border-primary' : 'border-gray-200 dark:border-gray-700'
            }`}
          >
            {plan.popular && (
              <div className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full w-fit mb-4">
                {t('most.popular')}
              </div>
            )}
            <h3 className="text-xl font-semibold">{plan.name}</h3>
            <div className="mt-4 mb-6">
              <span className="text-3xl font-bold">${plan.price}</span>
              <span className="text-gray-500 dark:text-gray-400">{t('month')}</span>
            </div>
            <ul className="space-y-3 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Link to={user ? "/dashboard" : "/auth"}>
              <Button 
                variant={plan.popular ? "gradient" : "outline"} 
                className="w-full"
              >
                {t('get.started')}
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default Pricing;
