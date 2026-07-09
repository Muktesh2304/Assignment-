import MenuPage from "@/Components/menuPage";
import { menuPages } from "@/data/menuData";

export const metadata = {
  title: "Starters & Appetizers Menu - Fine Dining",
  description: "Explore One8 Commune's handcrafted starters — small bites, bold flavors, and premium ingredients that set the perfect tone for your fine dining experience.",
};

export default function Page() {
  return <MenuPage menu={menuPages.starter} />;
}
