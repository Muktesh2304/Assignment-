const pexels = (id) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=900&h=900&fit=crop`;

export const menuNavItems = [
  { label: "Starter", href: "/menu/starter", key: "starter" },
  { label: "Main Dishes", href: "/menu/main-dishes", key: "main-dishes" },
  { label: "Desserts", href: "/menu/desserts", key: "desserts" },
  { label: "Drinks", href: "/menu/drinks", key: "drinks" },
];

export const menuPages = {
  starter: {
    key: "starter",
    title: "Starter",
    vertical: "Starter",
    heroImage: pexels("9738980"),
    items: [
      {
        name: "Dahi Vada",
        description: "Soft lentil dumplings with yogurt, tamarind, mint, and roasted spices.",
        price: "$12.50",
        image: pexels("2569760"),
      },
      {
        name: "Samosa Chaat",
        description: "Crisp samosas layered with chickpeas, chutneys, onions, and sev.",
        price: "$14.50",
        image: pexels("6262227"),
        isNew: true,
      },
      {
        name: "Hara Bhara Kebab",
        description: "Spinach, peas, and herbs shaped into golden vegetarian kebabs.",
        price: "$13.50",
        image: pexels("9738980"),
      },
      {
        name: "Chole Puri Bites",
        description: "Spiced chickpeas served with fluffy puri and tangy house pickle.",
        price: "$15.50",
        image: pexels("36388454"),
      },
    ],
  },
  "main-dishes": {
    key: "main-dishes",
    title: "Main Dishes",
    vertical: "Main Dishes",
    heroImage: pexels("8148149"),
    items: [
      {
        name: "Paneer Butter Masala",
        description: "Creamy tomato gravy with paneer, butter, cream, and fragrant spices.",
        price: "$19.50",
        image: pexels("12737805"),
      },
      {
        name: "Chicken Biryani",
        description: "Aromatic basmati rice layered with tender chicken and saffron spices.",
        price: "$24.50",
        image: pexels("9609860"),
        isNew: true,
      },
      {
        name: "Dal Tadka Thali",
        description: "Slow-cooked lentils with rice, roti, pickle, curd, and papad.",
        price: "$18.50",
        image: pexels("8148149"),
      },
      {
        name: "Kerala Chicken Curry",
        description: "A rich South Indian chicken curry with coconut, curry leaves, and spices.",
        price: "$22.50",
        image: pexels("7353379"),
      },
    ],
  },
  desserts: {
    key: "desserts",
    title: "Desserts",
    vertical: "Desserts",
    heroImage: pexels("8887052"),
    items: [
      {
        name: "Motichoor Ladoo",
        description: "Golden boondi pearls shaped into soft ladoos with cardamom and nuts.",
        price: "$10.50",
        image: pexels("37219215"),
      },
      {
        name: "Kaju Barfi",
        description: "Silky cashew fudge topped with silver leaf and festive garnish.",
        price: "$12.50",
        image: pexels("8887052"),
      },
      {
        name: "Gulab Jamun",
        description: "Warm syrup-soaked milk dumplings finished with pistachio crumbs.",
        price: "$11.50",
        image: pexels("7449105"),
      },
      {
        name: "Jalebi",
        description: "Crisp saffron spirals soaked in fragrant sugar syrup.",
        price: "$9.50",
        image: pexels("36021117"),
        isNew: true,
      },
    ],
  },
  drinks: {
    key: "drinks",
    title: "Drinks",
    vertical: "Drinks",
    heroImage: pexels("4475024"),
    items: [
      {
        name: "Kesar Lassi",
        description: "Creamy yogurt drink with saffron, pistachio, almonds, and cardamom.",
        price: "$9.50",
        image: pexels("4475024"),
      },
      {
        name: "Jaljeera",
        description: "A tangy cumin cooler with lime, mint, black salt, and chilled soda.",
        price: "$8.50",
        image: pexels("55588"),
        isNew: true,
      },
      {
        name: "Masala Chai",
        description: "Fresh-brewed Indian tea with milk, ginger, and warming spices.",
        price: "$7.50",
        image: pexels("29650995"),
      },
      {
        name: "Aam Panna",
        description: "Refreshing raw mango cooler with mint, roasted cumin, and black salt.",
        price: "$8.50",
        image: pexels("34472830"),
      },
    ],
  },
};
