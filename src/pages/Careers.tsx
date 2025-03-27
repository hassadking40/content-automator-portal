
import PageLayout from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button-custom";

const Careers = () => {
  return (
    <PageLayout 
      title="Careers" 
      description="Join our team and help shape the future"
    >
      <div className="space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Why Work With Us</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
                <h3 className="text-lg font-medium mb-2">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-6">Open Positions</h2>
          <div className="space-y-4">
            {positions.map((position, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-medium">{position.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      {position.location} • {position.type}
                    </p>
                  </div>
                  <Button variant="outline">View Position</Button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

const benefits = [
  {
    title: "Flexible Work",
    description: "Work from home, the office, or a mix of both - whatever works best for you."
  },
  {
    title: "Competitive Compensation",
    description: "We offer competitive salaries, equity, and comprehensive benefits."
  },
  {
    title: "Professional Growth",
    description: "Regular opportunities for learning, mentorship, and career advancement."
  },
  {
    title: "Work-Life Balance",
    description: "We value balance with generous PTO, parental leave, and wellness programs."
  },
  {
    title: "Diverse & Inclusive",
    description: "We're committed to building a diverse team and inclusive workplace."
  },
  {
    title: "Make an Impact",
    description: "Work on meaningful projects that help thousands of businesses succeed."
  }
];

const positions = [
  {
    title: "Senior Frontend Developer",
    location: "Remote",
    type: "Full-time"
  },
  {
    title: "Product Manager",
    location: "San Francisco, CA",
    type: "Full-time"
  },
  {
    title: "UX/UI Designer",
    location: "Remote",
    type: "Full-time"
  },
  {
    title: "DevOps Engineer",
    location: "Austin, TX",
    type: "Full-time"
  },
  {
    title: "Customer Success Manager",
    location: "New York, NY",
    type: "Full-time"
  }
];

export default Careers;
