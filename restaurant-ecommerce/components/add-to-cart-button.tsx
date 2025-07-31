"use client"

import { Button } from "@/components/ui/button"
import { useCart } from "@/hooks/use-cart"
import type { MenuItem } from "@/lib/types"
import { ShoppingCart, Plus } from "lucide-react"

interface AddToCartButtonProps {
  item: MenuItem
  variant?: "default" | "outline"
}

export function AddToCartButton({ item, variant = "default" }: AddToCartButtonProps) {
  const { addItem, items } = useCart()

  const existingItem = items.find((cartItem) => cartItem.id === item.id)
  const quantity = existingItem?.quantity || 0

  const handleAddToCart = () => {
    addItem(item)
  }

  return (
    <Button onClick={handleAddToCart} variant={variant} className="gap-2">
      {quantity > 0 ? (
        <>
          <Plus className="h-4 w-4" />
          Add More ({quantity})
        </>
      ) : (
        <>
          <ShoppingCart className="h-4 w-4" />
          Add to Cart
        </>
      )}
    </Button>
  )
}
