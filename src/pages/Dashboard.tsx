
import { useState } from "react";
import { RefreshCw, ListFilter, Film, CloudUpload } from "lucide-react";
import WorkflowCard from "@/components/dashboard/WorkflowCard";
import WorkflowConfig from "@/components/dashboard/WorkflowConfig";
import DashboardLayout from "@/components/dashboard/DashboardLayout";

type WorkflowType = 'future' | 'existing' | 'clips' | 'backup';

const Dashboard = () => {
  const [selectedWorkflowType, setSelectedWorkflowType] = useState<WorkflowType>('future');

  const workflowTypes = [
    {
      type: 'future' as WorkflowType,
      title: 'Sahla-Post future content',
      description: 'Whenever you upload new content to your source platform, it will be automatically published to your destination within 2 hours.',
      icon: <RefreshCw size={20} />
    },
    {
      type: 'existing' as WorkflowType,
      title: 'Sahla-Post existing content',
      description: 'Select content from your source platform to publish to your destination.',
      icon: <ListFilter size={20} />
    },
    {
      type: 'clips' as WorkflowType,
      title: 'Create clips from long-form content',
      description: 'Convert long videos into short-form clips perfect for social media.',
      icon: <Film size={20} />
    },
    {
      type: 'backup' as WorkflowType,
      title: 'Back up all my content',
      description: 'Create a backup of all your content from one platform to another.',
      icon: <CloudUpload size={20} />
    }
  ];

  const selectedWorkflow = workflowTypes.find(w => w.type === selectedWorkflowType);

  return (
    <DashboardLayout 
      title="Create your first workflow" 
      description="A workflow automates taking content from one platform and publishing it to another."
    >
      <div>
        <h2 className="text-lg font-medium text-gray-800 mb-4">Choose a workflow type</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {workflowTypes.map((workflow) => (
            <WorkflowCard
              key={workflow.type}
              title={workflow.title}
              description={workflow.description}
              icon={workflow.icon}
              isSelected={selectedWorkflowType === workflow.type}
              onClick={() => setSelectedWorkflowType(workflow.type)}
            />
          ))}
        </div>

        {selectedWorkflow && (
          <WorkflowConfig
            title={selectedWorkflow.title}
            description={selectedWorkflow.description}
          />
        )}
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
