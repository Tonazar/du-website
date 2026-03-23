import Link from "next/link"
import SecondaryButton from "./SecondaryButton"

const navLinks = [
  { label: "Devices", href: "/devices" },
  { label: "Mobile Plans", href: "/mobile-plans" },
  { label: "Internet & TV", href: "/internet-tv" },
  { label: "Why du", href: "/why-du" },
  { label: "Help", href: "/help" },
]

const quickLinks = [
  { label: "Quick Pay", href: "/quick-pay" },
  { label: "Quick Recharge", href: "/quick-recharge" },
  { label: "Update ID", href: "/update-id" },
]

const NavBar = () => {
  return (
    <nav className="w-full border-b border-border bg-white">
      <div className="container mx-auto flex h-20 items-center justify-between lg:px-20">
        <div className="flex items-center gap-8">
          <Link href="/">
            <img src="/du-logo.svg" alt="du" className="h-12 w-12" />
          </Link>
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm font-medium text-foreground transition-colors hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex items-center gap-6">
          {quickLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <SecondaryButton className="h-[44px]">Login</SecondaryButton>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
