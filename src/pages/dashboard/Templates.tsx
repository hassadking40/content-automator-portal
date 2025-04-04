
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { useLanguage, t } from "@/contexts/LanguageContext";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button-custom";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast } from "sonner";

const Templates = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  
  const handleCreateTemplate = () => {
    toast.info("Template feature coming soon!");
  };

  return (
    <DashboardLayout
      title={t('templates')}
      description={t('templates.description')}
    >
      <Card className="bg-white/80 backdrop-blur-sm border shadow-sm p-10">
        <div className="flex flex-col items-center justify-center text-center py-6">
          <div className="bg-blue-50 rounded-full p-4 mb-6">
            <Plus className="h-8 w-8 text-blue-500" />
          </div>
          <h3 className="text-xl font-semibold mb-2">{t('no.templates')}</h3>
          <p className="text-gray-500 max-w-md mb-6">
            {t('create.first.template')}
          </p>
          <Button 
            variant="gradient" 
            className="flex items-center gap-2"
            onClick={handleCreateTemplate}
          >
            {t('create.new.template')} <Plus size={16} />
          </Button>
        </div>
      </Card>
    </DashboardLayout>
  );
};

export default Templates;
