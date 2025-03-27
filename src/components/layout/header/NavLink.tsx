
import { Link, LinkProps } from "react-router-dom";

export interface NavLinkProps extends LinkProps {
  children: React.ReactNode;
}

export const NavLink = ({ children, className = "", ...props }: NavLinkProps) => {
  return (
    <Link
      className={`text-sahla-dark/80 dark:text-white/80 hover:text-primary transition-colors duration-200 font-medium ${className}`}
      {...props}
    >
      {children}
    </Link>
  );
};
