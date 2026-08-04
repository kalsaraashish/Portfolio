import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold tracking-wide transition-all focus:outline-none focus:ring-2 focus:ring-teal focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-teal/30 bg-teal/10 text-teal dark:text-sky hover:bg-teal/20",
        secondary:
          "border-sky/50 bg-sky/30 dark:bg-navy-light/60 text-navy dark:text-sky-light hover:bg-sky/50",
        destructive:
          "border-red-500/30 bg-red-500/10 text-red-600 dark:text-red-400",
        outline:
          "border-teal/30 text-navy dark:text-sky hover:bg-teal/10",
        glow:
          "border-teal/40 bg-gradient-to-r from-teal/15 to-navy/15 text-teal dark:text-sky-light shadow-[0_0_12px_rgba(86,124,141,0.25)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
