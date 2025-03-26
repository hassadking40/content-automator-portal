
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button-custom";
import { ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-sahla-dark/30 px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-8">
          <div className="inline-block bg-gradient-to-r from-sahla-blue via-sahla-indigo to-sahla-purple p-1 rounded-2xl mb-6 animate-pulse-soft">
            <div className="bg-white dark:bg-sahla-dark p-6 rounded-xl">
              <h1 className="text-8xl font-bold text-sahla-dark dark:text-white font-display">404</h1>
            </div>
          </div>
          <h2 className="text-2xl font-bold text-sahla-dark dark:text-white mb-3 font-display">Page Not Found</h2>
          <p className="text-muted-foreground mb-8">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <Link to="/">
            <Button variant="default" size="lg" className="animate-fade-in">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
