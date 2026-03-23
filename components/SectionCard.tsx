import React from "react"

interface SectionCardProps {
  children: React.ReactNode
}
const SectionCard = ({ children }: SectionCardProps) => {
  return (
    <div className="w-full rounded-lg bg-white p-8 shadow-[0_6px_12px_rgba(0,0,0,0.02)]">
      {children}
    </div>
  )
}

export default SectionCard
