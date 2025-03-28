
import { NavLink } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Calendar, 
  Settings, 
  FileText, 
  RefreshCw, 
  Award, 
  HelpCircle, 
  MessageSquareHeart, 
  Sparkles,
  ArrowRightLeft,
  LogOut
} from "lucide-react";
import { useAuth } from "@/contexts/AuthContext";

const DashboardSidebar = () => {
  const { user, signOut } = useAuth();
  
  const navItems = [
    { icon: <ArrowRightLeft size={20} className="text-sahla-purple" />, label: "Create Workflow", path: "/dashboard" },
    { icon: <RefreshCw size={20} className="text-sahla-purple" />, label: "Connections", path: "/dashboard/connections" },
    { icon: <FileText size={20} className="text-sahla-purple" />, label: "Templates", path: "/dashboard/templates" },
    { icon: <Calendar size={20} className="text-sahla-purple" />, label: "Calendar", path: "/dashboard/calendar" },
  ];
  
  const secondaryNavItems = [
    { icon: <Sparkles size={20} className="text-sahla-purple" />, label: "Upgrade Here", path: "/pricing" },
    { icon: <Award size={20} className="text-sahla-purple" />, label: "Affiliate Area", path: "/dashboard/affiliate" },
  ];
  
  const supportNavItems = [
    { icon: <HelpCircle size={20} className="text-sahla-purple" />, label: "Support", path: "/support" },
    { icon: <MessageSquareHeart size={20} className="text-sahla-purple" />, label: "Feature Request", path: "/feature-request" },
    { icon: <Calendar size={20} className="text-sahla-purple" />, label: "Announcements", path: "/announcements" },
    { icon: <Settings size={20} className="text-sahla-purple" />, label: "Settings", path: "/settings" },
  ];

  return (
    <div className="h-screen w-64 border-r bg-white/80 backdrop-blur-sm flex flex-col shadow-sm">
      <div className="p-4 border-b">
        <h2 className="text-xl font-bold flex items-center text-sahla-purple">
          Sahla-Post
        </h2>
      </div>
      
      <div className="flex-grow overflow-y-auto py-4">
        <nav className="px-4 space-y-1">
          {/* Main navigation */}
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center px-3 py-2 rounded-md text-sm transition-all ${
                  isActive 
                    ? "bg-sahla-purple/10 text-sahla-purple font-medium" 
                    : "text-gray-700 hover:bg-gray-100"
                }`
              }
              end={item.path === "/dashboard"}
            >
              <span className="mr-3">{item.icon}</span>
              {item.label}
            </NavLink>
          ))}
        </nav>
        
        <div className="mt-6 border-t pt-6">
          <nav className="px-4 space-y-1">
            {/* Secondary navigation */}
            {secondaryNavItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center px-3 py-2 rounded-md text-sm transition-all ${
                    isActive 
                      ? "bg-sahla-purple/10 text-sahla-purple font-medium" 
                      : "text-gray-700 hover:bg-gray-100"
                  }`
                }
              >
                <span className="mr-3">{item.icon}</span>
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
        
        <div className="mt-6 border-t pt-6">
          <nav className="px-4 space-y-1">
            {/* Support navigation */}
            {supportNavItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center px-3 py-2 rounded-md text-sm transition-all ${
                    isActive 
                      ? "bg-sahla-purple/10 text-sahla-purple font-medium" 
                      : "text-gray-700 hover:bg-gray-100"
                  }`
                }
              >
                <span className="mr-3">{item.icon}</span>
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
      
      <div className="p-4 border-t mt-auto">
        <div className="flex items-center">
          <Avatar className="h-8 w-8 mr-2 bg-sahla-purple/20">
            <AvatarImage src="" alt="User" />
            <AvatarFallback className="text-sahla-purple">
              {user?.email?.charAt(0).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 truncate">
            <p className="text-sm font-medium truncate">{user?.email}</p>
          </div>
          <button 
            onClick={() => signOut()} 
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <LogOut size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
