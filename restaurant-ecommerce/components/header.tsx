"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, ShoppingCart, User, Phone } from "lucide-react"
import { useCart } from "@/hooks/use-cart"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { items } = useCart()

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0)

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-orange-500">dharun mess</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-orange-500"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <Phone className="h-4 w-4 mr-2" />
              (555) 123-4567
            </Button>

            <Link href="/cart">
              <Button variant="ghost" size="sm" className="relative">
                <ShoppingCart className="h-4 w-4" />
                {totalItems > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs">
                    {totalItems}
                  </Badge>
                )}
              </Button>
            </Link>

            <Button variant="ghost" size="sm">
              <User className="h-4 w-4" />
            </Button>

            {/* Mobile menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="sm">
                  <Menu className="h-4 w-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col space-y-4 mt-8">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-lg font-medium transition-colors hover:text-orange-500"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Button className="mt-8">
                    <Phone className="h-4 w-4 mr-2" />
                    Call Now
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
