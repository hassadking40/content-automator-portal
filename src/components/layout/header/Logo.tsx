
import { Link } from "react-router-dom";

const Logo = () => {
  return (
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
  );
};

export default Logo;
