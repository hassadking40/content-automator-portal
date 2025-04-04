
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Index from "./pages/Index";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Integrations from "./pages/Integrations";
import Testimonials from "./pages/Testimonials";
import Blog from "./pages/Blog";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Cookies from "./pages/Cookies";
import Connections from "./pages/dashboard/Connections";
import Templates from "./pages/dashboard/Templates";
import Calendar from "./pages/dashboard/Calendar";
import Affiliate from "./pages/dashboard/Affiliate";
import Support from "./pages/dashboard/Support";
import FeatureRequest from "./pages/dashboard/FeatureRequest";
import Announcements from "./pages/dashboard/Announcements";
import Settings from "./pages/dashboard/Settings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/dashboard/connections" element={<Connections />} />
              <Route path="/dashboard/templates" element={<Templates />} />
              <Route path="/dashboard/calendar" element={<Calendar />} />
              <Route path="/dashboard/affiliate" element={<Affiliate />} />
              <Route path="/support" element={<Support />} />
              <Route path="/feature-request" element={<FeatureRequest />} />
              <Route path="/announcements" element={<Announcements />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/features" element={<Features />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/about" element={<About />} />
              <Route path="/integrations" element={<Integrations />} />
              <Route path="/testimonials" element={<Testimonials />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/cookies" element={<Cookies />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
