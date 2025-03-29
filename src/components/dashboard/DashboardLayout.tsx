
import { ReactNode } from "react";
import DashboardSidebar from "./DashboardSidebar";
import { Menu, Bell, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface DashboardLayoutProps {
  children: ReactNode;
  title: string;
  description?: string;
}

const DashboardLayout = ({ children, title, description }: DashboardLayoutProps) => {
  const isMobile = useIsMobile();
  const { user, isLoading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !user) {
      navigate("/auth");
    }
  }, [user, isLoading, navigate]);

  if (isLoading) {
    return (
      <div className="flex min-h-screen">
        {!isMobile && <DashboardSidebar />}
        <div className="flex-1 p-8">
          <div className="animate-pulse space-y-6">
            <div className="h-8 bg-gray-200 rounded w-1/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/3"></div>
          </div>
        </div>
      </div>
    );
  }

  const userEmail = user?.email || 'user@example.com';
  const userInitial = userEmail.charAt(0).toUpperCase();
  const planType = "Free Plan";

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-white to-blue-50">
      {/* Desktop sidebar */}
      {!isMobile && <DashboardSidebar />}
      
      {/* Mobile sidebar with sheet */}
      {isMobile && (
        <Sheet>
          <SheetTrigger asChild>
            <Button 
              variant="ghost" 
              size="icon" 
              className="fixed top-4 left-4 z-40"
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-[270px]">
            <DashboardSidebar />
          </SheetContent>
        </Sheet>
      )}
      
      <div className="flex-1 overflow-y-auto bg-gradient-to-br from-sahla-blue/5 to-white">
        <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b p-4 flex items-center justify-between">
          <div className="flex items-center">
            <span className="text-lg font-semibold text-sahla-blue mr-2">Sahla-</span>
            <span className="text-lg font-semibold text-[#BDAB40]">Post</span>
            <span className="ml-3 text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded-full">Social Automation</span>
          </div>
          
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm" className="flex items-center gap-2 hidden md:flex">
              <Plus size={16} /> New Automation
            </Button>
            
            <Button variant="ghost" size="icon" className="relative">
              <Bell size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </Button>
            
            <div className="flex items-center">
              <Avatar className="h-8 w-8 border-2 border-blue-100">
                <AvatarFallback className="bg-sahla-blue text-white">{userInitial}</AvatarFallback>
              </Avatar>
              <div className="ml-2 hidden md:block">
                <p className="text-sm font-medium">{userEmail}</p>
                <p className="text-xs text-gray-500">{planType}</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8">
            <div>
              <h1 className="text-xl sm:text-2xl font-semibold text-gray-900">{title}</h1>
              {description && <p className="text-gray-500 mt-1">{description}</p>}
            </div>
            
            {title === "Welcome back, email!" && (
              <Button className="mt-4 sm:mt-0 bg-sahla-blue text-white">Upgrade Plan</Button>
            )}
          </div>
          
          <div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
