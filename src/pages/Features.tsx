
import PageLayout from "@/components/layout/PageLayout";
import { useLanguage, t } from "@/contexts/LanguageContext";

const Features = () => {
  const { language } = useLanguage();
  
  const features = [
    {
      title: t('automated.workflows'),
      description: t('workflows.description')
    },
    {
      title: t('advanced.analytics'),
      description: t('analytics.description')
    },
    {
      title: t('user.management'),
      description: t('management.description')
    },
    {
      title: t('real.time.collaboration'),
      description: t('collaboration.description')
    },
    {
      title: t('custom.integration'),
      description: t('integration.description')
    },
    {
      title: t('secure.storage'),
      description: t('storage.description')
    }
  ];

  return (
    <PageLayout 
      title={t('features')} 
      description={t('features')}
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

export default Features;
