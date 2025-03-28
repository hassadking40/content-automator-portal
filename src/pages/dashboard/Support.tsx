
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const Support = () => {
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
          <h1 className="text-2xl font-semibold text-gray-900">Support</h1>
          <p className="text-gray-500 mt-2">Get help with using Sahla-Post.</p>
          
          <div className="mt-8 bg-white rounded-md p-6 border">
            <h2 className="text-lg font-medium mb-4">Contact Support</h2>
            <p className="text-gray-600 mb-4">
              Need help with Sahla-Post? Our support team is here to assist you. Please fill out the form below and we'll get back to you as soon as possible.
            </p>
            <div className="mt-4">
              <textarea 
                className="w-full h-32 border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-sahla-purple"
                placeholder="Describe your issue..."
              />
              <button className="mt-4 bg-sahla-purple text-white px-4 py-2 rounded-md hover:bg-sahla-purple/90">
                Submit Support Request
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
