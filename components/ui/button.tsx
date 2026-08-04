import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-teal text-white hover:bg-teal-hover shadow-md shadow-teal/20 hover:shadow-lg hover:shadow-teal/30 active:scale-[0.98]",
        navy:
          "bg-navy text-white hover:bg-navy-light shadow-md active:scale-[0.98]",
        destructive:
          "bg-red-500 text-white hover:bg-red-600 shadow-sm",
        outline:
          "border border-teal/30 bg-transparent text-navy dark:text-sky hover:bg-teal/10 hover:border-teal/50",
        secondary:
          "bg-sky dark:bg-navy-light text-navy dark:text-sky-light hover:bg-sky-dark dark:hover:bg-navy",
        ghost:
          "text-navy dark:text-sky hover:bg-teal/10 hover:text-teal dark:hover:text-white",
        link:
          "text-teal underline-offset-4 hover:underline",
        glow:
          "bg-gradient-to-r from-teal to-navy text-white hover:from-teal-hover hover:to-navy-dark shadow-[0_0_20px_rgba(86,124,141,0.4)] hover:shadow-[0_0_25px_rgba(86,124,141,0.6)] active:scale-[0.98]",
        glass:
          "bg-white/80 dark:bg-navy/70 backdrop-blur-md border border-sky/40 dark:border-sky/20 text-navy dark:text-white hover:bg-white dark:hover:bg-navy-light shadow-sm",
      },
      size: {
        default: "h-11 px-5 py-2.5",
        sm: "h-9 rounded-lg px-3.5 text-xs",
        lg: "h-12 rounded-2xl px-7 text-base font-semibold",
        icon: "h-10 w-10 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
