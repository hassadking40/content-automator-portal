
import PageLayout from "@/components/layout/PageLayout";
import { useLanguage, t } from "@/contexts/LanguageContext";

const About = () => {
  const { language } = useLanguage();
  
  const team = [
    { name: "Sarah Johnson", role: "CEO & Founder" },
    { name: "Michael Chen", role: "CTO" },
    { name: "Emily Rodriguez", role: "Head of Design" },
    { name: "David Kim", role: "Lead Developer" },
    { name: "Olivia Smith", role: "Marketing Director" },
    { name: "James Wilson", role: "Customer Success" }
  ];

  return (
    <PageLayout 
      title={t('about')} 
      description={t('about')}
    >
      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">{t('our.story')}</h2>
          <p className="text-gray-600 dark:text-gray-300">
            {t('story.content')}
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">{t('our.mission')}</h2>
          <p className="text-gray-600 dark:text-gray-300">
            {t('mission.content')}
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">{t('our.team')}</h2>
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

export default About;
