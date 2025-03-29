
import PageLayout from "@/components/layout/PageLayout";
import { useLanguage, t } from "@/contexts/LanguageContext";

const Integrations = () => {
  const { language } = useLanguage();
  
  const integrations = [
    {
      name: "Slack",
      description: "Get real-time notifications and updates in your Slack channels."
    },
    {
      name: "Google Workspace",
      description: "Sync calendars, contacts, and documents with Google Workspace."
    },
    {
      name: "Microsoft 365",
      description: "Integrate with Microsoft Teams, Outlook, and other Microsoft tools."
    },
    {
      name: "Salesforce",
      description: "Connect customer data and automate sales processes."
    },
    {
      name: "Zapier",
      description: "Create automated workflows with thousands of apps."
    },
    {
      name: "GitHub",
      description: "Track issues, pull requests, and code changes."
    },
    {
      name: "Asana",
      description: "Manage tasks and projects alongside your team."
    },
    {
      name: "HubSpot",
      description: "Connect marketing, sales, and customer service data."
    },
    {
      name: "Stripe",
      description: "Process payments and manage subscriptions."
    }
  ];

  return (
    <PageLayout 
      title={t('integrations')} 
      description={t('connect.platform')}
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {integrations.map((integration, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <div className="w-12 h-12 bg-gray-100 dark:bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
              <span className="text-xl font-bold">{integration.name.charAt(0)}</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">{integration.name}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{integration.description}</p>
            <a 
              href="#" 
              className="text-primary hover:underline text-sm font-medium"
            >
              {t('learn.more')} →
            </a>
          </div>
        ))}
      </div>
    </PageLayout>
  );
};

export default Integrations;
