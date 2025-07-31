import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import { CartProvider } from "@/hooks/use-cart"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Bella Vista Restaurant - Authentic Italian Cuisine",
  description: "Order delicious Italian food online. Fresh ingredients, authentic recipes, fast delivery.",
  keywords: "restaurant, italian food, pizza, pasta, delivery, takeout",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <footer className="bg-gray-900 text-white py-12 mt-16">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-4 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Bella Vista</h3>
                  <p className="text-gray-400">Authentic Italian cuisine made with love and fresh ingredients.</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Quick Links</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li>
                      <a href="/menu" className="hover:text-white">
                        Menu
                      </a>
                    </li>
                    <li>
                      <a href="/about" className="hover:text-white">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="/contact" className="hover:text-white">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Contact</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li>123 Main Street</li>
                    <li>Downtown, NY 10001</li>
                    <li>(555) 123-4567</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-4">Hours</h4>
                  <ul className="space-y-2 text-gray-400">
                    <li>Mon-Thu: 11am-10pm</li>
                    <li>Fri-Sat: 11am-11pm</li>
                    <li>Sun: 12pm-9pm</li>
                  </ul>
                </div>
              </div>
              <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                <p>&copy; 2024 Bella Vista Restaurant. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </CartProvider>
      </body>
    </html>
  )
}
