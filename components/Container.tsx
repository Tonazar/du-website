import { cn } from "@/lib/utils"

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div>
      <div className={cn("container mx-auto px-4 lg:px-20", className)}>
        {children}
      </div>
    </div>
  )
}

export default Container
