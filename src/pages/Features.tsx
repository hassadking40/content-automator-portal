
import PageLayout from "@/components/layout/PageLayout";

const Features = () => {
  return (
    <PageLayout 
      title="Features" 
      description="Discover all the powerful features our platform has to offer"
    >
      <div className="space-y-8">
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

const features = [
  {
    title: "Automated Workflows",
    description: "Set up automated processes to save time and reduce manual work."
  },
  {
    title: "Advanced Analytics",
    description: "Get detailed insights into your business performance with our analytics tools."
  },
  {
    title: "User Management",
    description: "Easily manage users, roles, and permissions within your organization."
  },
  {
    title: "Real-time Collaboration",
    description: "Work together with your team in real-time on documents and projects."
  },
  {
    title: "Custom Integration",
    description: "Integrate with your existing tools and services with our API."
  },
  {
    title: "Secure Storage",
    description: "Keep your data safe with our enterprise-grade security measures."
  }
];

export default Features;
