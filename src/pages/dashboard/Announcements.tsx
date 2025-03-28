
import DashboardSidebar from "@/components/dashboard/DashboardSidebar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const Announcements = () => {
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

  const announcements = [
    {
      id: 1,
      title: "Welcome to Sahla-Post",
      date: "March, 2025",
      content: "Thank you for joining Sahla-Post! We're excited to have you onboard. Start creating your first workflow to automate content publishing across platforms."
    }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      <DashboardSidebar />
      <div className="flex-1 overflow-y-auto">
        <div className="p-8 max-w-7xl mx-auto">
          <h1 className="text-2xl font-semibold text-gray-900">Announcements</h1>
          <p className="text-gray-500 mt-2">Stay up to date with Sahla-Post news and updates.</p>
          
          <div className="mt-8 space-y-4">
            {announcements.map((announcement) => (
              <div key={announcement.id} className="bg-white rounded-md p-6 border">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-lg font-medium">{announcement.title}</h2>
                  <span className="text-xs text-gray-500">{announcement.date}</span>
                </div>
                <p className="text-gray-600">{announcement.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
