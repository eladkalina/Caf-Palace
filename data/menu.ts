export type MenuItem = { name: string; note?: string; price: number; image?: string };
export type MenuCategory = {
  id: string;
  title: string;
  tone: "pink" | "orange";
  layout: "cards" | "feature";
  image?: string; // for "feature" layout
  items: MenuItem[];
};

export const menu: MenuCategory[] = [
  {
    id: "main-dishes",
    title: "Main Dishes",
    tone: "pink",
    layout: "cards",
    items: [
      { name: "Pasta Vodka", price: 12, image: "/images/dish-pasta.webp" },
      { name: "Cheese Pizza", price: 11, image: "/images/dish-pizza.webp" },
      { name: "Greek Salad", price: 10, image: "/images/dish-greek-salad.webp" },
      { name: "Omelet / Sunny Side Up", price: 9, image: "/images/dish-omelet.webp" },
      { name: "Savory Pastries", price: 11, image: "/images/dish-pastries.webp" },
    ],
  },
  {
    id: "vegi-sushi",
    title: "Vegi Sushi",
    tone: "pink",
    layout: "feature",
    image: "/images/dish-sushi.webp",
    items: [{ name: "Veggie Sushi Roll", note: "Avocado, cucumber, carrot", price: 13 }],
  },
  {
    id: "drinks",
    title: "Drinks",
    tone: "orange",
    layout: "feature",
    image: "/images/dish-drinks.webp",
    items: [
      { name: "Lemonade", price: 4 },
      { name: "Iced Tea", price: 4 },
      { name: "Smoothie", note: "Strawberry or Mango", price: 6 },
    ],
  },
  {
    id: "desserts",
    title: "Desserts",
    tone: "orange",
    layout: "cards",
    items: [
      { name: "Chocolate Cake Soufflé", price: 7, image: "/images/dish-souffle.webp" },
      { name: "Ice Cream", note: "2 scoops", price: 5, image: "/images/dish-ice-cream.webp" },
      { name: "Fruit Parfait", price: 6, image: "/images/dish-parfait.webp" },
    ],
  },
];

export const featured = [
  { name: "Pasta Vodka", price: 12, image: "/images/dish-pasta.webp" },
  { name: "Cheese Pizza", price: 11, image: "/images/dish-pizza.webp" },
  { name: "Veggie Sushi Roll", price: 13, image: "/images/dish-sushi.webp" },
  { name: "Greek Salad", price: 10, image: "/images/dish-greek-salad.webp" },
  { name: "Chocolate Cake Soufflé", price: 7, image: "/images/dish-souffle.webp" },
  { name: "Fruit Parfait", price: 6, image: "/images/dish-parfait.webp" },
];

export const fmt = (n: number) => `$${n}`;
