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
