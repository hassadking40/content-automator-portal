
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button-custom";
import { useLanguage, t } from "@/contexts/LanguageContext";

const AuthButtons = () => {
  const { language } = useLanguage();
  
  return (
    <div className="flex items-center space-x-3">
      <Button variant="outline" size="sm" asChild>
        <Link to="/auth">{t('sign.in')}</Link>
      </Button>
      <Button variant="gradient" size="sm" asChild shine>
        <Link to="/auth">{t('sign.up')}</Link>
      </Button>
    </div>
  );
};

export default AuthButtons;
