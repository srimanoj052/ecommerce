export interface MenuItem {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  ingredients?: string[]
  isVegetarian?: boolean
  isSpicy?: boolean
}

export interface CartItem extends MenuItem {
  quantity: number
}

export interface Category {
  id: string
  name: string
  description: string
  image: string
}
