import Navbar from "@/Components/navbar";

export default function MenuLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
