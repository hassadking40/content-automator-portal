
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useLanguage, t } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button-custom";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Lock, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { user, signIn, signUp } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();
  const { language } = useLanguage();

  // If user is already logged in, redirect to dashboard
  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (isSignUp) {
        if (!fullName.trim()) {
          throw new Error("Full name is required");
        }
        
        // Try to sign up the user
        const { error, existingEmail } = await signUp(email, password, fullName);
        
        if (error) {
          if (existingEmail) {
            // Show a specific message for existing email
            toast({
              variant: "destructive",
              title: "Email already in use",
              description: "This email is already registered. Please sign in instead.",
            });
            // Automatically switch to sign in mode
            setIsSignUp(false);
          } else {
            throw error;
          }
        } else {
          toast({
            title: "Check your email",
            description: "We've sent you a confirmation link to activate your account.",
          });
        }
      } else {
        await signIn(email, password);
        navigate("/dashboard");
      }
    } catch (error: any) {
      console.error("Authentication error:", error);
      toast({
        variant: "destructive",
        title: "Authentication failed",
        description: error.message || "Please check your credentials and try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleAuthMode = () => {
    setIsSignUp(!isSignUp);
    // Clear fields when switching between sign in and sign up
    setEmail("");
    setPassword("");
    setFullName("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-sahla-dark/90 dark:to-sahla-dark px-4">
      <div className="w-full max-w-md">
        <div className="bg-white dark:bg-sahla-dark/50 rounded-xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-800">
          <div className="px-8 pt-8 pb-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-gradient-to-r from-sahla-blue to-sahla-purple rounded-lg p-2 w-14 h-14 flex items-center justify-center">
                <span className="text-white font-bold text-xl">SP</span>
              </div>
            </div>
            <h2 className="text-2xl font-bold text-sahla-dark dark:text-white font-display">
              {isSignUp ? t('create.account') : t('welcome.back')}
            </h2>
            <p className="text-gray-500 dark:text-gray-400 mt-2">
              {isSignUp
                ? t('start.automating')
                : t('social.media.automation')}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="px-8 pb-8 space-y-5">
            {isSignUp && (
              <div className="space-y-2">
                <Label htmlFor="fullName">{t('full.name')}</Label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input
                    id="fullName"
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="pl-10"
                    placeholder={t('full.name')}
                    required
                  />
                </div>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email">{t('email')}</Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10"
                  placeholder="your@email.com"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">{t('password')}</Label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10"
                  placeholder="********"
                  required
                  minLength={6}
                />
              </div>
            </div>

            {!isSignUp && (
              <div className="text-right">
                <a
                  href="#"
                  className="text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  {t('forgot.password')}
                </a>
              </div>
            )}

            <Button
              type="submit"
              variant="gradient"
              className="w-full"
              isLoading={isSubmitting}
              shine
            >
              {isSignUp ? t('sign.up') : t('sign.in')}
            </Button>

            <div className="text-center mt-6">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {isSignUp ? t('already.have.account') : t('dont.have.account')}
                <button
                  type="button"
                  onClick={toggleAuthMode}
                  className="ml-2 text-primary hover:text-primary/80 transition-colors font-medium"
                >
                  {isSignUp ? t('sign.in') : t('sign.up')}
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;
