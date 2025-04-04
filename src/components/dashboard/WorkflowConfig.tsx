
import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button-custom";
import { useToast } from "@/hooks/use-toast";

interface PlatformOption {
  id: string;
  name: string;
  logo: string;
}

const platformOptions: PlatformOption[] = [
  { id: "tiktok", name: "TikTok", logo: "https://upload.wikimedia.org/wikipedia/en/a/a9/TikTok_logo.svg" },
  { id: "instagram", name: "Instagram", logo: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg" },
  { id: "facebook", name: "Facebook", logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png" },
  { id: "youtube", name: "YouTube", logo: "https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg" },
];

interface WorkflowConfigProps {
  title: string;
  description: string;
}

const WorkflowConfig = ({ title, description }: WorkflowConfigProps) => {
  const [sourceSelection, setSourceSelection] = useState<string | null>(null);
  const [destinationSelection, setDestinationSelection] = useState<string | null>(null);
  const { toast } = useToast();

  const handleCreateWorkflow = () => {
    if (!sourceSelection || !destinationSelection) return;
    
    toast({
      title: "Workflow Created",
      description: `Workflow created to send content from ${sourceSelection} to ${destinationSelection}`,
    });
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 mt-6 border shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-gray-500 text-sm mt-1 mb-6">Whenever you upload new content to your Source platform, it will be automatically published to your Destination within 2 hours.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h4 className="font-medium text-gray-700 mb-4">Source (choose one)</h4>
          <div className="space-y-2">
            {platformOptions.slice(0, 3).map((platform) => (
              <div 
                key={platform.id}
                className={`
                  flex items-center gap-3 p-3 border rounded-md cursor-pointer transition-all
                  ${sourceSelection === platform.id ? 'border-sahla-purple bg-sahla-purple/5' : 'hover:bg-gray-50'}
                `}
                onClick={() => {
                  setSourceSelection(platform.id);
                  // Reset destination if it's the same as the new source
                  if (destinationSelection === platform.id) {
                    setDestinationSelection(null);
                  }
                }}
              >
                <img src={platform.logo} alt={platform.name} className="w-6 h-6" />
                <span>{platform.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute top-1/2 -left-6 transform -translate-y-1/2 hidden md:block">
            <ArrowRight size={20} className="text-gray-400" />
          </div>
          
          <h4 className="font-medium text-gray-700 mb-4">Destination (choose one)</h4>
          <div className="space-y-2">
            {platformOptions.filter(p => p.id !== sourceSelection).map((platform) => (
              <div 
                key={platform.id}
                className={`
                  flex items-center gap-3 p-3 border rounded-md cursor-pointer transition-all
                  ${destinationSelection === platform.id ? 'border-sahla-purple bg-sahla-purple/5' : 'hover:bg-gray-50'}
                `}
                onClick={() => setDestinationSelection(platform.id)}
              >
                <img src={platform.logo} alt={platform.name} className="w-6 h-6" />
                <span>{platform.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10">
        <Button 
          variant={sourceSelection && destinationSelection ? "gradient" : "default"}
          className="w-full py-3 text-center"
          disabled={!sourceSelection || !destinationSelection}
          onClick={handleCreateWorkflow}
        >
          Create Workflow
        </Button>
      </div>

      <div className="mt-6 text-center">
        <button className="text-gray-500 text-sm hover:text-sahla-purple hover:underline">
          Switch back to the classic workflow builder
        </button>
      </div>
    </div>
  );
};

export default WorkflowConfig;
