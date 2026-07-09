import MenuPage from "@/Components/menuPage";
import { menuPages } from "@/data/menuData";

export const metadata = {
  title: "Handcrafted Drinks & Cocktails Menu",
  description: "Browse One8 Commune's curated cocktails, mocktails, wines, and beverages — handcrafted drinks that complement every fine dining occasion in Aerocity, New Delhi.",
};

export default function Page() {
  return <MenuPage menu={menuPages.drinks} />;
}
