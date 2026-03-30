import { cn } from "@/lib/utils"

interface SecondaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "gradient-border" | "outline" | "white"
  size?: "default" | "sm"
}

function SecondaryButton({
  className,
  children,
  variant = "gradient-border",
  size = "default",
  ...props
}: SecondaryButtonProps) {
  const sizes = {
    default: "h-[56px] w-[220px] text-[16px]",
    sm: "h-[48px] w-[200px] text-[14px]",
  }

  if (variant === "gradient-border") {
    return (
      <button
        className={cn(
          "cursor-pointer rounded-[6px] p-[2px]",
          "bg-[linear-gradient(45deg,#824bc7_6%,#d92cc1_53%)]",
          "group/sec transition-all",
          sizes[size],
          className
        )}
        {...props}
      >
        <div className="flex h-full w-full items-center justify-center rounded-[5px] bg-white px-5 font-medium text-primary transition-all group-hover/sec:bg-transparent group-hover/sec:text-white">
          {children}
        </div>
      </button>
    )
  }

  return (
    <button
      className={cn(
        "flex cursor-pointer items-center justify-center rounded-[6px] font-medium transition-opacity hover:opacity-90",
        sizes[size],
        variant === "outline"
          ? "border border-primary bg-white text-primary"
          : "bg-white text-primary",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default SecondaryButton
