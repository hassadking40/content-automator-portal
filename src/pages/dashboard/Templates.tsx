
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const Templates = () => {
  const { user, isLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !user) {
      navigate("/auth");
    }
  }, [user, isLoading, navigate]);

  if (isLoading) {
    return (
      <div className="flex h-screen">
        <DashboardSidebar />
        <div className="flex-1 p-8">
          <div className="animate-pulse space-y-6">
            <div className="h-8 bg-gray-200 rounded w-1/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/3"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen">
      <DashboardSidebar />
      <div className="flex-1 overflow-y-auto bg-gradient-to-br from-sahla-purple/5 via-sahla-blue/5 to-sahla-indigo/10">
        <div className="relative">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-sahla-purple/10 rounded-full blur-3xl -z-10 transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-sahla-blue/10 rounded-full blur-3xl -z-10 transform -translate-x-1/3 translate-y-1/3"></div>
          
          <div className="p-8 max-w-7xl mx-auto">
            <h1 className="text-2xl font-semibold text-gray-900">Templates</h1>
            <p className="text-gray-500 mt-2">Manage your content templates.</p>
            
            <div className="mt-8 bg-white/80 backdrop-blur-sm rounded-xl p-6 border shadow-sm">
              <p className="text-center text-gray-500 py-10">No templates yet. Create your first template to get started.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Templates;
