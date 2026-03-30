import React from "react"

interface SectionCardProps {
  children: React.ReactNode
}
const SectionCard = ({ children }: SectionCardProps) => {
  return (
    <div className="w-full rounded-lg bg-white p-4 shadow-[0_6px_12px_rgba(0,0,0,0.02)] sm:p-8">
      {children}
    </div>
  )
}

export default SectionCard
