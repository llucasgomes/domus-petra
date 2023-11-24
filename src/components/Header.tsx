import Image from "next/image";
import MenuMobile from "./MenuMobile";

export default function Header() {
  return (
    <header className="w-full  flex items-center justify-around h-20 bg-[#D9D9D9]">
      <Image
        src={"/image/logoWebLarge-1.webp"}
        width={176}
        height={51}
        alt="Logo Domus Petra"
      />

      <MenuMobile />
    </header>
  );
}
