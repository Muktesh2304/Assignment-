import MenuPage from "@/Components/menuPage";
import { menuPages } from "@/data/menuData";

export const metadata = {
  title: "Premium Desserts & Sweet Treats Menu",
  description: "End your dining experience on a sweet note with One8 Commune's irresistible desserts — elegant creations crafted to delight every palate.",
};

export default function Page() {
  return <MenuPage menu={menuPages.desserts} />;
}
