
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { NavLinks } from "./NavLinks";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button-custom";
import { useLanguage, t } from "@/contexts/LanguageContext";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onSignOut: () => void;
}

const MobileMenu = ({ isOpen, onClose, onSignOut }: MobileMenuProps) => {
  const { user } = useAuth();
  const { language } = useLanguage();

  // Close mobile menu on larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isOpen) {
        onClose();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen, onClose]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white/95 dark:bg-sahla-dark/95 backdrop-blur-sm z-40 md:hidden">
      <div className="flex flex-col h-full pt-20 px-6 pb-6">
        <nav className="flex-1">
          <ul className="space-y-6 py-6">
            {NavLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.path}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `block text-lg font-medium ${
                      isActive
                        ? "text-primary"
                        : "text-sahla-dark dark:text-white"
                    }`
                  }
                >
                  {t(link.name.toLowerCase())}
                </NavLink>
              </li>
            ))}
            {user && (
              <li>
                <NavLink
                  to="/dashboard"
                  onClick={onClose}
                  className={({ isActive }) =>
                    `block text-lg font-medium ${
                      isActive
                        ? "text-primary"
                        : "text-sahla-dark dark:text-white"
                    }`
                  }
                >
                  {t('dashboard')}
                </NavLink>
              </li>
            )}
          </ul>
        </nav>

        <div className="mt-auto space-y-4">
          {user ? (
            <Button
              onClick={() => {
                onSignOut();
                onClose();
              }}
              variant="outline"
              className="w-full"
            >
              {t('sign.out')}
            </Button>
          ) : (
            <div className="flex flex-col space-y-3">
              <Button
                onClick={onClose}
                asChild
                variant="default"
                className="w-full"
              >
                <NavLink to="/auth">{t('sign.in')}</NavLink>
              </Button>
              <Button
                onClick={onClose}
                asChild
                variant="gradient"
                className="w-full"
              >
                <NavLink to="/auth">{t('sign.up')}</NavLink>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
