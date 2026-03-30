"use client"

import { useState } from "react"
import TopBar from "./TopBar"
import NavBar from "./NavBar"

const Header = () => {
  const [menuActive, setMenuActive] = useState(false)

  return (
    <>
      <TopBar menuActive={menuActive} />
      <NavBar onMenuActiveChange={setMenuActive} />
    </>
  )
}

export default Header
