
import React from 'react';
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const tipVariants = cva(
  "relative p-6 rounded-2xl card-hover overflow-hidden",
  {
    variants: {
      variant: {
        default: "bg-white shadow-md border border-gray-100",
        filled: "bg-portugal-navy text-white",
        outline: "border border-portugal-terracotta/30 shadow-sm",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface TravelTipProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof tipVariants> {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const TravelTip: React.FC<TravelTipProps> = ({ 
  icon, 
  title, 
  description, 
  variant, 
  className, 
  ...props 
}) => {
  return (
    <div 
      className={cn(
        tipVariants({ variant }), 
        "flex flex-col items-start", 
        className
      )} 
      {...props}
    >
      <div className={cn(
        "p-3 rounded-full mb-4",
        variant === "filled" ? "bg-white/10" : "bg-portugal-terracotta/10"
      )}>
        <div className={cn(
          "w-6 h-6",
          variant === "filled" ? "text-white" : "text-portugal-terracotta"
        )}>
          {icon}
        </div>
      </div>
      <h3 className={cn(
        "text-xl font-display font-medium mb-2",
        variant === "filled" ? "text-white" : "text-portugal-navy"
      )}>
        {title}
      </h3>
      <p className={cn(
        "text-sm",
        variant === "filled" ? "text-white/80" : "text-gray-600"
      )}>
        {description}
      </p>
    </div>
  );
};

export default TravelTip;
