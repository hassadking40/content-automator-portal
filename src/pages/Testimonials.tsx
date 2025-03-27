
import PageLayout from "@/components/layout/PageLayout";

const Testimonials = () => {
  return (
    <PageLayout 
      title="Testimonials" 
      description="See what our customers are saying about us"
    >
      <div className="space-y-8">
        {testimonials.map((testimonial, index) => (
          <div 
            key={index} 
            className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md"
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full"></div>
              <div className="ml-4">
                <h3 className="text-lg font-medium">{testimonial.name}</h3>
                <p className="text-gray-500 dark:text-gray-400">{testimonial.role}, {testimonial.company}</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 italic">"{testimonial.quote}"</p>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

const testimonials = [
  {
    name: "Alex Thompson",
    role: "Marketing Director",
    company: "Acme Inc",
    quote: "This platform has completely transformed how our marketing team collaborates and executes campaigns. The ROI we've seen is incredible."
  },
  {
    name: "Jessica Lee",
    role: "CTO",
    company: "TechStart",
    quote: "As a fast-growing startup, we needed a solution that could scale with us. This platform has been the perfect fit, allowing us to stay agile while managing our increasing workload."
  },
  {
    name: "Marcus Johnson",
    role: "Operations Manager",
    company: "Global Solutions",
    quote: "The automation capabilities have saved our team countless hours on repetitive tasks. We're now able to focus on strategic initiatives that drive our business forward."
  },
  {
    name: "Sophia Garcia",
    role: "CEO",
    company: "Innovate Design",
    quote: "The insights we've gained through the analytics tools have helped us make data-driven decisions that have significantly improved our customer engagement."
  }
];

export default Testimonials;
