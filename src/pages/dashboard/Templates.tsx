
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button-custom";
import { Plus } from "lucide-react";

const Templates = () => {
  return (
    <DashboardLayout
      title="Content Templates"
      description="Create and manage reusable content templates."
    >
      <Card className="bg-white/80 backdrop-blur-sm border shadow-sm p-10">
        <div className="flex flex-col items-center justify-center text-center py-6">
          <div className="bg-blue-50 rounded-full p-4 mb-6">
            <Plus className="h-8 w-8 text-blue-500" />
          </div>
          <h3 className="text-xl font-semibold mb-2">No templates yet</h3>
          <p className="text-gray-500 max-w-md mb-6">
            Create your first content template to standardize your posts 
            across multiple platforms.
          </p>
          <Button 
            variant="gradient" 
            className="flex items-center gap-2"
          >
            Create New Template <Plus size={16} />
          </Button>
        </div>
      </Card>
    </DashboardLayout>
  );
};

export default Templates;
