
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button-custom";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/features" },
    { name: "Pricing", path: "/pricing" },
    { name: "About", path: "/about" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6",
        isScrolled 
          ? "bg-white/80 dark:bg-sahla-dark/80 backdrop-blur-md shadow-sm" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center space-x-2"
          >
            <div className="bg-gradient-to-r from-sahla-blue to-sahla-purple rounded-lg p-1 w-10 h-10 flex items-center justify-center">
              <span className="text-white font-bold text-lg">SP</span>
            </div>
            <span className="font-display font-bold text-xl text-sahla-dark dark:text-white">
              Sahla-Post
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-sahla-dark/80 dark:text-white/80 hover:text-primary transition-colors duration-200 font-medium"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="sm"
              className="font-medium"
            >
              Log in
            </Button>
            <Button
              variant="gradient"
              size="sm"
              shine
              className="font-medium"
            >
              Get Started
            </Button>
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
      <div
        className={cn(
          "fixed inset-0 top-[72px] bg-white dark:bg-sahla-dark z-40 transform transition-transform duration-300 md:hidden overflow-auto",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="container mx-auto py-8 px-6 flex flex-col h-full">
          <nav className="flex flex-col space-y-6 mb-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-sahla-dark dark:text-white text-lg font-medium py-2 border-b border-border"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
          <div className="flex flex-col space-y-4 mt-auto mb-12">
            <Button variant="outline" className="w-full">
              Log in
            </Button>
            <Button variant="gradient" className="w-full" shine>
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
