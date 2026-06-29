import { Manrope, Mukta, Rozha_One, Henny_Penny } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

const mukta = Mukta({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-mukta",
});

const rozha = Rozha_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-rozha",
});

const hennyPenny = Henny_Penny({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-henny-penny",
});

export { manrope, mukta, rozha, hennyPenny };