
import React from "react";
import { Button as ShadcnButton } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link" | "gradient";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
  isLoading?: boolean;
  shine?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, children, shine = false, isLoading, ...props }, ref) => {
    const baseClassName = cn(
      shine && "button-shine",
      variant === "gradient" && "bg-gradient-to-r from-sahla-blue to-sahla-purple hover:from-sahla-indigo hover:to-sahla-purple text-white border-0 animate-pulse-soft",
      className
    );

    return (
      <ShadcnButton 
        className={baseClassName} 
        variant={variant !== "gradient" ? variant : "default"} 
        size={size} 
        ref={ref} 
        {...props}
      >
        {isLoading ? (
          <span className="flex items-center gap-2">
            <svg 
              className="animate-spin -ml-1 mr-2 h-4 w-4 text-current" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24"
            >
              <circle 
                className="opacity-25" 
                cx="12" 
                cy="12" 
                r="10" 
                stroke="currentColor" 
                strokeWidth="4"
              ></circle>
              <path 
                className="opacity-75" 
                fill="currentColor" 
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Loading...
          </span>
        ) : (
          children
        )}
      </ShadcnButton>
    );
  }
);

Button.displayName = "Button";

export { Button };
