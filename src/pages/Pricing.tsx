
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button-custom";
import { Check } from "lucide-react";

const Pricing = () => {
  return (
    <PageLayout 
      title="Pricing" 
      description="Choose the right plan for your needs"
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
                Most Popular
              </div>
            )}
            <h3 className="text-xl font-semibold">{plan.name}</h3>
            <div className="mt-4 mb-6">
              <span className="text-3xl font-bold">${plan.price}</span>
              <span className="text-gray-500 dark:text-gray-400">/month</span>
            </div>
            <ul className="space-y-3 mb-6">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <Check className="h-5 w-5 text-green-500" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button 
              variant={plan.popular ? "gradient" : "outline"} 
              className="w-full"
            >
              Get Started
            </Button>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

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

export default Pricing;
