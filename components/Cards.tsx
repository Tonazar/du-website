import React from "react"

interface CardsProps {
  children: React.ReactNode
}
const Cards = ({ children, wid = "fit", classes }: CardsProps) => {
  return (
    <div
      className={`w-${wid} shrink-0 overflow-hidden rounded-xl bg-white shadow-[0px_6px_12px_rgba(0,0,0,0.1)] ${classes || ""}`}
    >
      {children}
    </div>
  )
}

export default Cards
