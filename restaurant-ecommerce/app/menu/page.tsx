import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AddToCartButton } from "@/components/add-to-cart-button"
import { Leaf, Flame } from "lucide-react"

const menuItems = [
  {
    id: "1",
    name: "Margherita Pizza",
    description: "Fresh mozzarella, tomato sauce, and basil on our signature crust",
    price: 18.99,
    image: "/placeholder.svg?height=300&width=400&text=Margherita+Pizza",
    category: "pizza",
    isVegetarian: true,
  },
  {
    id: "2",
    name: "Pepperoni Pizza",
    description: "Classic pepperoni with mozzarella cheese and tomato sauce",
    price: 21.99,
    image: "/placeholder.svg?height=300&width=400&text=Pepperoni+Pizza",
    category: "pizza",
  },
  {
    id: "3",
    name: "Grilled Salmon",
    description: "Atlantic salmon with lemon herb butter and seasonal vegetables",
    price: 26.99,
    image: "/placeholder.svg?height=300&width=400&text=Grilled+Salmon",
    category: "mains",
  },
  {
    id: "4",
    name: "Chicken Parmesan",
    description: "Breaded chicken breast with marinara sauce and melted mozzarella",
    price: 23.99,
    image: "/placeholder.svg?height=300&width=400&text=Chicken+Parmesan",
    category: "mains",
  },
  {
    id: "5",
    name: "Caesar Salad",
    description: "Crisp romaine lettuce with parmesan, croutons, and caesar dressing",
    price: 14.99,
    image: "/placeholder.svg?height=300&width=400&text=Caesar+Salad",
    category: "salads",
    isVegetarian: true,
  },
  {
    id: "6",
    name: "Arugula Salad",
    description: "Fresh arugula with cherry tomatoes, pine nuts, and balsamic vinaigrette",
    price: 16.99,
    image: "/placeholder.svg?height=300&width=400&text=Arugula+Salad",
    category: "salads",
    isVegetarian: true,
  },
  {
    id: "7",
    name: "Tiramisu",
    description: "Classic Italian dessert with coffee-soaked ladyfingers and mascarpone",
    price: 8.99,
    image: "/placeholder.svg?height=300&width=400&text=Tiramisu",
    category: "desserts",
    isVegetarian: true,
  },
  {
    id: "8",
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with molten center, served with vanilla ice cream",
    price: 9.99,
    image: "/placeholder.svg?height=300&width=400&text=Chocolate+Lava+Cake",
    category: "desserts",
    isVegetarian: true,
  },
]

const categories = [
  { id: "all", name: "All Items" },
  { id: "pizza", name: "Pizza" },
  { id: "mains", name: "Main Courses" },
  { id: "salads", name: "Salads" },
  { id: "desserts", name: "Desserts" },
]

export default function MenuPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Menu</h1>
        <p className="text-xl text-gray-600">Discover our delicious selection of authentic Italian dishes</p>
      </div>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid w-full grid-cols-5 mb-8">
          {categories.map((category) => (
            <TabsTrigger key={category.id} value={category.id}>
              {category.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {categories.map((category) => (
          <TabsContent key={category.id} value={category.id}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {menuItems
                .filter((item) => category.id === "all" || item.category === category.id)
                .map((item) => (
                  <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={400}
                        height={300}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-2 right-2 flex gap-2">
                        {item.isVegetarian && (
                          <Badge className="bg-green-500">
                            <Leaf className="h-3 w-3 mr-1" />
                            Vegetarian
                          </Badge>
                        )}
                        {item.isSpicy && (
                          <Badge className="bg-red-500">
                            <Flame className="h-3 w-3 mr-1" />
                            Spicy
                          </Badge>
                        )}
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-orange-500">${item.price}</span>
                        <AddToCartButton item={item} />
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
