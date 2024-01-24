import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-brown-clear text-white font-medium rounded-[20px] hover:bg-brown/90",
        card: "bg-brown-clear text-white text-lg font-bold rounded-[20px] hover:bg-brown/90",
        start: "bg-brown-clear text-white rounded-md hover:bg-brown/90",
        // start: "bg-brown-clear text-white font-bold rounded-[20px] hover:bg-brown/90",
        add: "hover:bg-accent hover:text-accent-foreground rounded-full",
        ghost: "hover:bg-accent hover:text-accent-foreground", 
        outline:"border border-grey bg-background hover:bg-accent hover:text-accent-foreground",


        // destructive:
        //   "bg-destructive text-destructive-foreground hover:bg-destructive/90",
       
        // secondary:
        //   "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        // ghost: "hover:bg-accent hover:text-accent-foreground",
        // link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-8 w-[88px] px-6 py-2",
        acc: "h-8 w-[88px] px-16 py-2",
        lg: "h-10 rounded-[20px] py-4 w-[350px] px-8 ",
        start:"h-[30px] w-[120px] rounded-[20px] px-6 py-4",
        sm: "h-9 rounded-md px-3",
        icon: "h-10 w-10",
        add: "w-40 h-40",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
