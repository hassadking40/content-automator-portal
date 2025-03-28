
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { RefreshCw, ListFilter, Film, CloudUpload } from "lucide-react";

import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import WorkflowCard from "@/components/dashboard/WorkflowCard";
import WorkflowConfig from "@/components/dashboard/WorkflowConfig";

type Profile = {
  id: string;
  full_name: string | null;
  avatar_url: string | null;
  email: string;
}

type WorkflowType = 'future' | 'existing' | 'clips' | 'backup';

const Dashboard = () => {
  const { user, isLoading: authLoading } = useAuth();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedWorkflowType, setSelectedWorkflowType] = useState<WorkflowType>('future');
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    // Check if user is authenticated
    if (!authLoading && !user) {
      navigate("/auth");
      return;
    }

    // Fetch user profile data
    const fetchProfile = async () => {
      if (!user) return;
      
      try {
        setIsLoading(true);
        
        const { data, error } = await supabase
          .from("profiles")
          .select("*")
          .eq("id", user.id)
          .single();
          
        if (error) {
          throw error;
        }
        
        setProfile(data);
      } catch (error: any) {
        console.error("Error fetching profile:", error.message);
        toast({
          variant: "destructive",
          title: "Failed to load profile",
          description: "Please try refreshing the page.",
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchProfile();
  }, [user, authLoading, navigate, toast]);

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

  if (authLoading || isLoading) {
    return (
      <div className="flex h-screen">
        <DashboardSidebar />
        <div className="flex-1 p-8">
          <div className="animate-pulse space-y-6">
            <div className="h-8 bg-gray-200 rounded w-1/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/3"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-32 bg-gray-200 rounded"></div>
              ))}
            </div>
            <div className="h-64 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  const selectedWorkflow = workflowTypes.find(w => w.type === selectedWorkflowType);

  return (
    <div className="flex h-screen bg-gray-50">
      <DashboardSidebar />
      
      <div className="flex-1 overflow-y-auto">
        <div className="p-8 max-w-7xl mx-auto">
          <h1 className="text-2xl font-semibold text-gray-900">Create your first workflow</h1>
          <p className="text-gray-500 mt-2">A workflow automates taking content from one platform and publishing it to another.</p>

          <div className="mt-8">
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
                description="Whenever you upload new content to your Source platform, it will be automatically published to your Destination within 2 hours."
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
