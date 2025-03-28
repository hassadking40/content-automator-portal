
import { ReactNode } from "react";

interface WorkflowCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  isSelected?: boolean;
  onClick: () => void;
}

const WorkflowCard = ({ 
  title, 
  description, 
  icon, 
  isSelected = false, 
  onClick 
}: WorkflowCardProps) => {
  return (
    <div 
      onClick={onClick}
      className={`
        border rounded-md p-4 cursor-pointer transition-all duration-200
        flex items-start gap-4 h-full
        ${isSelected ? 'border-sahla-purple bg-sahla-purple/5' : 'hover:border-gray-300 hover:bg-gray-50'}
      `}
    >
      <div className={`
        p-2 rounded-md
        ${isSelected ? 'bg-sahla-purple/10 text-sahla-purple' : 'bg-gray-100 text-gray-600'}
      `}>
        {icon}
      </div>
      <div>
        <h3 className="font-medium text-gray-900 mb-1">{title}</h3>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default WorkflowCard;
