
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button-custom";
import { Plus, Calendar as CalendarIcon } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Calendar = () => {
  const handleCreateAutomation = () => {
    toast.info("Automation feature coming soon!");
  };

  return (
    <DashboardLayout
      title="Content Calendar"
      description="Schedule and manage your content across platforms."
    >
      <Card className="bg-white/80 backdrop-blur-sm border shadow-sm p-10">
        <div className="flex flex-col items-center justify-center text-center py-6">
          <div className="bg-blue-50 rounded-full p-4 mb-6">
            <CalendarIcon className="h-8 w-8 text-blue-500" />
          </div>
          <h3 className="text-xl font-semibold mb-2">No scheduled content yet</h3>
          <p className="text-gray-500 max-w-md mb-6">
            Create your first automation to start scheduling content across
            multiple platforms simultaneously.
          </p>
          <Button 
            variant="gradient" 
            className="flex items-center gap-2"
            onClick={handleCreateAutomation}
          >
            Create New Automation <Plus size={16} />
          </Button>
        </div>
      </Card>
    </DashboardLayout>
  );
};

export default Calendar;
