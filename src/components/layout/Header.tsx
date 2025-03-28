
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";
import { NavLink } from "./header/NavLink";
import { NavLinks } from "./header/NavLinks";
import Logo from "./header/Logo";
import UserMenu from "./header/UserMenu";
import AuthButtons from "./header/AuthButtons";
import MobileMenu from "./header/MobileMenu";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSignOut = async () => {
    await signOut();
    navigate("/");
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-4 md:px-6",
        isScrolled 
          ? "bg-white/80 dark:bg-sahla-dark/80 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {NavLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
              >
                {link.name}
              </NavLink>
            ))}
            {user && (
              <NavLink to="/dashboard">
                Dashboard
              </NavLink>
            )}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <UserMenu email={user.email || "User"} onSignOut={handleSignOut} />
            ) : (
              <AuthButtons />
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-sahla-dark dark:text-white p-2"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)}
        onSignOut={handleSignOut}
      />
    </header>
  );
};

export default Header;
