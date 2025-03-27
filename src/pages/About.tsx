
import PageLayout from "@/components/layout/PageLayout";

const About = () => {
  return (
    <PageLayout 
      title="About Us" 
      description="Learn more about our company and mission"
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Founded in 2020, our company started with a simple mission: to make technology more accessible and useful for businesses of all sizes. What began as a small team with big ideas has grown into a thriving platform used by thousands of companies worldwide.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-600 dark:text-gray-300">
            We believe in creating tools that empower businesses to do their best work. Our platform is designed to streamline workflows, enhance collaboration, and provide valuable insights that drive success.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-6 mt-4">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 bg-gray-200 dark:bg-gray-700 rounded-full mx-auto mb-4"></div>
                <h3 className="text-lg font-medium">{member.name}</h3>
                <p className="text-gray-500 dark:text-gray-400">{member.role}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </PageLayout>
  );
};

const team = [
  { name: "Sarah Johnson", role: "CEO & Founder" },
  { name: "Michael Chen", role: "CTO" },
  { name: "Emily Rodriguez", role: "Head of Design" },
  { name: "David Kim", role: "Lead Developer" },
  { name: "Olivia Smith", role: "Marketing Director" },
  { name: "James Wilson", role: "Customer Success" }
];

export default About;
