
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button-custom";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";
import { NavLink } from "./NavLink";
import { NavLinks } from "./NavLinks";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onSignOut: () => Promise<void>;
}

const MobileMenu = ({ isOpen, onClose, onSignOut }: MobileMenuProps) => {
  const { user } = useAuth();
  const navigate = useNavigate();

  return (
    <div
      className={cn(
        "fixed inset-0 top-[72px] bg-white dark:bg-sahla-dark z-40 transform transition-transform duration-300 md:hidden overflow-auto",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}
    >
      <div className="container mx-auto py-8 px-6 flex flex-col h-full">
        <nav className="flex flex-col space-y-6 mb-8">
          {NavLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className="text-sahla-dark dark:text-white text-lg font-medium py-2 border-b border-border"
              onClick={onClose}
            >
              {link.name}
            </NavLink>
          ))}
          {user && (
            <Link
              to="/dashboard"
              className="text-sahla-dark dark:text-white text-lg font-medium py-2 border-b border-border"
              onClick={onClose}
            >
              Dashboard
            </Link>
          )}
        </nav>
        <div className="flex flex-col space-y-4 mt-auto mb-12">
          {user ? (
            <>
              <div className="px-2 py-4 border-t border-border">
                <p className="text-sm text-gray-500 dark:text-gray-400">Signed in as</p>
                <p className="font-medium">{user.email}</p>
              </div>
              <Link to="/dashboard" onClick={onClose}>
                <Button variant="outline" className="w-full justify-start">
                  <User className="mr-2 h-4 w-4" />
                  Dashboard
                </Button>
              </Link>
              <Button 
                variant="destructive" 
                className="w-full justify-start" 
                onClick={async () => {
                  await onSignOut();
                  onClose();
                }}
              >
                <LogOut className="mr-2 h-4 w-4" />
                Sign out
              </Button>
            </>
          ) : (
            <>
              <Link to="/auth" onClick={onClose}>
                <Button variant="outline" className="w-full">
                  Log in
                </Button>
              </Link>
              <Link to="/auth" onClick={onClose}>
                <Button variant="gradient" className="w-full" shine>
                  Get Started
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
