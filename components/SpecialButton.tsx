import React from "react"

interface SpecialButtonProps {
  children: React.ReactNode
}

const SpecialButton = ({
  children,
  classes,
  sm = false,
}: SpecialButtonProps) => {
  return (
    <div
      className={`flex cursor-pointer items-center justify-center rounded-[6px] bg-white font-medium text-primary ${classes} ${sm ? "h-[48px] w-[200px] text-[16px]" : "h-[56px] w-[220px] text-[20px]"}`}
    >
      {children}
    </div>
  )
}

export default SpecialButton
