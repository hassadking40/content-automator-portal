
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button-custom";

const AuthButtons = () => {
  return (
    <>
      <Link to="/auth">
        <Button 
          variant="outline" 
          size="sm"
          className="font-medium"
        >
          Log in
        </Button>
      </Link>
      <Link to="/auth">
        <Button
          variant="gradient"
          size="sm"
          shine
          className="font-medium"
        >
          Get Started
        </Button>
      </Link>
    </>
  );
};

export default AuthButtons;
