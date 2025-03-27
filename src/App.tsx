
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/features" element={<NotFoundPageWithMessage message="Features page coming soon" />} />
            <Route path="/pricing" element={<NotFoundPageWithMessage message="Pricing page coming soon" />} />
            <Route path="/about" element={<NotFoundPageWithMessage message="About page coming soon" />} />
            <Route path="/integrations" element={<NotFoundPageWithMessage message="Integrations page coming soon" />} />
            <Route path="/testimonials" element={<NotFoundPageWithMessage message="Testimonials page coming soon" />} />
            <Route path="/blog" element={<NotFoundPageWithMessage message="Blog page coming soon" />} />
            <Route path="/careers" element={<NotFoundPageWithMessage message="Careers page coming soon" />} />
            <Route path="/contact" element={<NotFoundPageWithMessage message="Contact page coming soon" />} />
            <Route path="/terms" element={<NotFoundPageWithMessage message="Terms page coming soon" />} />
            <Route path="/privacy" element={<NotFoundPageWithMessage message="Privacy page coming soon" />} />
            <Route path="/cookies" element={<NotFoundPageWithMessage message="Cookies page coming soon" />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

// Helper component for placeholder routes
const NotFoundPageWithMessage = ({ message }: { message: string }) => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-sahla-dark/30">
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4 font-display bg-clip-text text-transparent bg-gradient-to-r from-sahla-blue to-sahla-purple">
        Coming Soon
      </h1>
      <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">{message}</p>
      <a href="/" className="text-primary hover:text-primary/80 underline transition-colors">
        Return to Home
      </a>
    </div>
  </div>
);

export default App;
