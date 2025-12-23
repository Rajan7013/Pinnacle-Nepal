import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

import { cn } from "@/lib/utils"

const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean, variant?: "default" | "outline" | "ghost" }>(
    ({ className, variant = "default", asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"
        return (
            <Comp
                className={cn(
                    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
                    {
                        "bg-white text-black hover:bg-white/90": variant === "default",
                        "border border-white/20 bg-transparent hover:bg-white/10 text-white": variant === "outline",
                        "hover:bg-white/10 text-white": variant === "ghost",
                    },
                    "h-10 px-4 py-2",
                    className
                )}
                ref={ref}
                {...props}
            />
        )
    }
)
Button.displayName = "Button"

export { Button }
