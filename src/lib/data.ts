export interface MenuItem {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  category: "signature" | "manual-brew" | "pastry";
}

export const menuItems: MenuItem[] = [
  {
    id: "1",
    title: "Mosu Signature Latte",
    description:
      "Our house specialty — a velvety espresso layered with steamed oat milk and a hint of brown sugar.",
    price: "IDR 35K",
    image:
      "https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=800",
    category: "signature",
  },
  {
    id: "2",
    title: "Caramel Macchiato",
    description:
      "Rich espresso with vanilla-infused milk, topped with buttery caramel drizzle.",
    price: "IDR 38K",
    image:
      "https://images.unsplash.com/photo-1485808191679-5f86510681a2?q=80&w=800",
    category: "signature",
  },
  {
    id: "3",
    title: "V60 Pour Over",
    description:
      "Single-origin beans brewed with precision. Clean, bright, and full of character.",
    price: "IDR 30K",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=800",
    category: "manual-brew",
  },
  {
    id: "4",
    title: "Cold Brew Classic",
    description:
      "Steeped for 18 hours for a smooth, low-acidity brew. Served over ice.",
    price: "IDR 32K",
    image:
      "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=800",
    category: "manual-brew",
  },
  {
    id: "5",
    title: "Butter Croissant",
    description:
      "Flaky, golden layers of French-style pastry baked fresh every morning.",
    price: "IDR 25K",
    image:
      "https://images.unsplash.com/photo-1555507036-ab1f4038024a?q=80&w=800",
    category: "pastry",
  },
  {
    id: "6",
    title: "Banana Bread",
    description:
      "Moist, homemade banana bread with walnuts. The perfect coffee companion.",
    price: "IDR 22K",
    image:
      "https://images.unsplash.com/photo-1606101273945-e9eba91fbc3a?q=80&w=800",
    category: "pastry",
  },
];

export interface Location {
  name: string;
  address: string;
  mapsUrl: string;
}

export const locations: Location[] = [
  {
    name: "Mosu Coffee — Pogung",
    address:
      "Jalan Pogung Baru Pogung Kidul Blok B1, Sinduadi, Kec. Mlati, Sleman, DIY 55284",
    mapsUrl: "https://maps.google.com/?q=Mosu+Coffee+Pogung",
  },
  {
    name: "Mosu Coffee — Jongkang",
    address: "Jongkang, Sariharjo, Kec. Ngaglik, Sleman, DIY 55581",
    mapsUrl: "https://maps.google.com/?q=Mosu+Coffee+Jongkang",
  },
];

export const openingHours = "Open 24 Hours — Every Day";

// Full menu for Menu section (4 categories)
export type FullMenuCategory = "coffee" | "non-coffee" | "pastry" | "meals";
export type MenuItemTag = "bestseller" | "new" | null;

export interface FullMenuItem {
  id: string;
  title: string;
  description: string;
  price: string;
  priceRaw: number;
  category: FullMenuCategory;
  tag: MenuItemTag;
}

export const fullMenuCategories: { key: FullMenuCategory; label: string }[] = [
  { key: "coffee", label: "Coffee" },
  { key: "non-coffee", label: "Non-Coffee" },
  { key: "pastry", label: "Pastry" },
  { key: "meals", label: "Meals" },
];

export const fullMenuItems: FullMenuItem[] = [
  // COFFEE
  { id: "c1", title: "Espresso", description: "Bold & intense single shot", price: "Rp 18.000", priceRaw: 18000, category: "coffee", tag: null },
  { id: "c2", title: "Cappuccino", description: "Perfect balance of espresso & milk foam", price: "Rp 28.000", priceRaw: 28000, category: "coffee", tag: "bestseller" },
  { id: "c3", title: "Latte", description: "Smooth espresso with steamed milk", price: "Rp 30.000", priceRaw: 30000, category: "coffee", tag: null },
  { id: "c4", title: "Cold Brew", description: "24-hour steeped, smooth & strong", price: "Rp 32.000", priceRaw: 32000, category: "coffee", tag: null },
  { id: "c5", title: "Caramel Macchiato", description: "Espresso with vanilla & caramel", price: "Rp 35.000", priceRaw: 35000, category: "coffee", tag: null },
  // NON-COFFEE
  { id: "n1", title: "Matcha Latte", description: "Premium Japanese matcha", price: "Rp 32.000", priceRaw: 32000, category: "non-coffee", tag: null },
  { id: "n2", title: "Chocolate", description: "Rich Belgian chocolate", price: "Rp 28.000", priceRaw: 28000, category: "non-coffee", tag: null },
  { id: "n3", title: "Earl Grey Tea", description: "Classic bergamot blend", price: "Rp 25.000", priceRaw: 25000, category: "non-coffee", tag: null },
  { id: "n4", title: "Lemonade", description: "Fresh squeezed daily", price: "Rp 22.000", priceRaw: 22000, category: "non-coffee", tag: null },
  // PASTRY
  { id: "p1", title: "Croissant", description: "Buttery French classic", price: "Rp 25.000", priceRaw: 25000, category: "pastry", tag: null },
  { id: "p2", title: "Cinnamon Roll", description: "Warm & gooey", price: "Rp 28.000", priceRaw: 28000, category: "pastry", tag: null },
  { id: "p3", title: "Danish", description: "Fruit-filled delight", price: "Rp 26.000", priceRaw: 26000, category: "pastry", tag: null },
  // MEALS
  { id: "m1", title: "Avocado Toast", description: "Sourdough, avocado, poached egg", price: "Rp 45.000", priceRaw: 45000, category: "meals", tag: null },
  { id: "m2", title: "Chicken Sandwich", description: "Grilled chicken, lettuce, aioli", price: "Rp 50.000", priceRaw: 50000, category: "meals", tag: null },
  { id: "m3", title: "Breakfast Bowl", description: "Granola, yogurt, fresh fruits", price: "Rp 48.000", priceRaw: 48000, category: "meals", tag: null },
];
