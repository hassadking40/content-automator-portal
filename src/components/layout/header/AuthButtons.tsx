
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button-custom";

const AuthButtons = () => {
  const navigate = useNavigate();
  
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
          onClick={() => navigate("/auth")}
        >
          Get Started
        </Button>
      </Link>
    </>
  );
};

export default AuthButtons;
