import { cn } from "@/lib/utils"

function SecondaryButton({
  className,
  children,
  ...props
}: React.ComponentProps<"button">) {
  return (
    <button
      className={cn(
        "h-[44px] cursor-pointer rounded-[6px] p-[2px]",
        "bg-[linear-gradient(45deg,#824bc7_6%,#d92cc1_53%)]",
        "group/sec transition-all",
        className
      )}
      {...props}
    >
      <div className="flex h-full w-full items-center justify-center rounded-[5px] bg-white px-5 text-base font-medium text-primary transition-all group-hover/sec:bg-transparent group-hover/sec:text-white">
        {children}
      </div>
    </button>
  )
}

export default SecondaryButton
