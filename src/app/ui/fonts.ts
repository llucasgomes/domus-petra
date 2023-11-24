import { Inter, Montserrat, Roboto } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });
export const montSerrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600"],
});
export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "900"],
});
