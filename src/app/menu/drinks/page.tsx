import MenuPage from "@/Components/menuPage";
import { menuPages } from "@/data/menuData";

export default function Page() {
  return <MenuPage menu={menuPages.drinks} />;
}
