import MenuPage from "@/Components/menuPage";
import { menuPages } from "@/data/menuData";

export const metadata = {
  title: "Main Dishes & Curries Menu - Fine Dining",
  description: "Savour One8 Commune's signature main course creations — bold, masterfully crafted dishes using premium ingredients for an unforgettable fine dining experience.",
};

export default function Page() {
  return <MenuPage menu={menuPages["main-dishes"]} />;
}
