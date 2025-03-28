
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const Calendar = () => {
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
    <div className="flex h-screen bg-gray-50">
      <DashboardSidebar />
      <div className="flex-1 overflow-y-auto">
        <div className="p-8 max-w-7xl mx-auto">
          <h1 className="text-2xl font-semibold text-gray-900">Content Calendar</h1>
          <p className="text-gray-500 mt-2">Schedule and manage your content across platforms.</p>
          
          <div className="mt-8 bg-white rounded-md p-6 border">
            <p className="text-center text-gray-500 py-10">No scheduled content yet. Create a workflow to start scheduling content.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
