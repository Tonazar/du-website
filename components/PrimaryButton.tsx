import { cn } from "@/lib/utils"

function PrimaryButton({
  className,
  children,
  ...props
}: React.ComponentProps<"button">) {
  return (
    <button
      className={cn(
        "w-[220px] h-[56px] rounded-[6px] text-[20px] font-medium text-white cursor-pointer",
        "bg-[linear-gradient(12deg,#c724b1,#c724b1_40%,#753bbd)]",
        "hover:opacity-90 transition-opacity",
        "sm:w-[200px] sm:h-[52px] sm:text-[18px]",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

export default PrimaryButton
