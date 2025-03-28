
import { ReactNode } from "react";
import DashboardSidebar from "./DashboardSidebar";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useIsMobile } from "@/hooks/use-mobile";
import { useAuth } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

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

  return (
    <div className="flex min-h-screen">
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
      
      <div className="flex-1 overflow-y-auto bg-gradient-to-br from-sahla-purple/5 via-sahla-blue/5 to-sahla-indigo/10">
        <div className="relative">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-sahla-purple/10 rounded-full blur-3xl -z-10 transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-sahla-blue/10 rounded-full blur-3xl -z-10 transform -translate-x-1/3 translate-y-1/3"></div>
          
          <div className="p-4 sm:p-8 max-w-7xl mx-auto">
            <h1 className="text-xl sm:text-2xl font-semibold text-gray-900 mt-8 sm:mt-0">{title}</h1>
            {description && <p className="text-gray-500 mt-2">{description}</p>}
            
            <div className="mt-6 sm:mt-8">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
